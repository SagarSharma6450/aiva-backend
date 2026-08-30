import { useEffect, useRef, useState, useCallback } from 'react';

const MODEL_URL = 'https://cdn.jsdelivr.net/gh/vladmandic/face-api/model';

/**
 * Runs live face-count detection on a <video> element and volume-based
 * noise detection on a MediaStream's audio track. Calls onViolation(type)
 * whenever a rule is broken, at most once per cooldown window per type.
 *
 * type values raised: 'MULTIPLE_FACES', 'NO_FACE', 'NOISE_DETECTED'
 */
export default function useProctoring({ videoRef, stream, enabled, onViolation }) {
  const [modelsReady, setModelsReady] = useState(false);
  const faceIntervalRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const audioIntervalRef = useRef(null);
  const lastViolationAtRef = useRef({});
  const sustainedNoiseFramesRef = useRef(0);
  const sustainedNoFaceFramesRef = useRef(0);

  const raise = useCallback((type) => {
    const now = Date.now();
    const last = lastViolationAtRef.current[type] || 0;
    const COOLDOWN_MS = 15000; // don't spam the same violation more than once per 15s
    if (now - last < COOLDOWN_MS) return;
    lastViolationAtRef.current[type] = now;
    onViolation?.(type);
  }, [onViolation]);

  // Load face-api.js tiny models once
  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    const waitForLib = () => new Promise((resolve) => {
      const check = () => {
        if (window.faceapi) resolve();
        else setTimeout(check, 200);
      };
      check();
    });

    waitForLib().then(async () => {
      if (cancelled) return;
      try {
        await window.faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        if (!cancelled) setModelsReady(true);
      } catch {
        // model failed to load (offline/CDN blocked) — proctoring degrades gracefully,
        // fullscreen/tab-switch checks still work even if face detection cannot load
      }
    });

    return () => { cancelled = true; };
  }, [enabled]);

  // Face detection loop
  useEffect(() => {
    if (!enabled || !modelsReady || !videoRef.current) return;

    const options = new window.faceapi.TinyFaceDetectorOptions({ inputSize: 224, scoreThreshold: 0.5 });

    faceIntervalRef.current = setInterval(async () => {
      const video = videoRef.current;
      if (!video || video.readyState < 2) return;
      try {
        const detections = await window.faceapi.detectAllFaces(video, options);
        if (detections.length > 1) {
          sustainedNoFaceFramesRef.current = 0;
          raise('MULTIPLE_FACES');
        } else if (detections.length === 0) {
          sustainedNoFaceFramesRef.current += 1;
          // require several consecutive empty frames before warning, to avoid
          // false positives from a brief head turn or blink-length occlusion
          if (sustainedNoFaceFramesRef.current >= 4) {
            raise('NO_FACE');
            sustainedNoFaceFramesRef.current = 0;
          }
        } else {
          sustainedNoFaceFramesRef.current = 0;
        }
      } catch {
        // ignore a single failed detection frame
      }
    }, 2500);

    return () => clearInterval(faceIntervalRef.current);
  }, [enabled, modelsReady, videoRef, raise]);

  // Audio volume monitoring loop
  useEffect(() => {
    if (!enabled || !stream) return;
    const audioTracks = stream.getAudioTracks();
    if (audioTracks.length === 0) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioCtx = new AudioContext();
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 512;
      source.connect(analyser);
      audioCtxRef.current = audioCtx;
      analyserRef.current = analyser;

      const data = new Uint8Array(analyser.frequencyBinCount);
      const NOISE_VOLUME_THRESHOLD = 45; // 0-255 scale, tuned to flag sustained loud talking/noise
      const SUSTAINED_FRAMES_REQUIRED = 3; // ~3 consecutive checks (900ms) above threshold

      audioIntervalRef.current = setInterval(() => {
        analyser.getByteFrequencyData(data);
        const avg = data.reduce((sum, v) => sum + v, 0) / data.length;
        if (avg > NOISE_VOLUME_THRESHOLD) {
          sustainedNoiseFramesRef.current += 1;
          if (sustainedNoiseFramesRef.current >= SUSTAINED_FRAMES_REQUIRED) {
            raise('NOISE_DETECTED');
            sustainedNoiseFramesRef.current = 0;
          }
        } else {
          sustainedNoiseFramesRef.current = 0;
        }
      }, 300);
    } catch {
      // audio context unavailable — skip noise detection silently
    }

    return () => {
      clearInterval(audioIntervalRef.current);
      audioCtxRef.current?.close().catch(() => {});
    };
  }, [enabled, stream, raise]);

  return { modelsReady };
}
