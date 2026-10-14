import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, AlertTriangle, Monitor, ShieldCheck, EyeOff, Volume2, Users, Clock } from 'lucide-react';
import { getQuestion, submitAnswer, logProctorEvent, completeTest } from '../../api/candidateTests';
import AssistantScene from '../../components/AssistantScene';
import useProctoring from '../../hooks/useProctoring';
import useAntiCheat from '../../hooks/useAntiCheat';
import '../Interview.css';

const VIOLATION_MESSAGES = {
  TAB_SWITCH: 'You switched tabs or left the assessment window.',
  FULLSCREEN_EXIT: 'You exited fullscreen mode.',
  MULTIPLE_FACES: 'Multiple faces detected in the camera frame.',
  NO_FACE: 'Your face was not visible in the camera for too long.',
  NOISE_DETECTED: 'Background noise or talking was detected. Please sit in a quiet place.',
  DEVTOOLS_OPENED: 'Developer tools were detected as open.',
};

const VIOLATION_ICONS = {
  MULTIPLE_FACES: Users,
  NO_FACE: EyeOff,
  NOISE_DETECTED: Volume2,
  DEVTOOLS_OPENED: Monitor,
};

export default function AssessmentSession() {
  const { submissionId } = useParams();
  const navigate = useNavigate();

  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [lastViolationType, setLastViolationType] = useState('TAB_SWITCH');
  const [sessionActive, setSessionActive] = useState(false);
  const [violationInfo, setViolationInfo] = useState({ count: null, allowed: null });
  const [remaining, setRemaining] = useState(null);

  const activeRef = useRef(false);
  const doneRef = useRef(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const endTimeRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      setSessionActive(true);
    } catch {
      // camera/mic unavailable, proctoring continues with reduced checks
      setSessionActive(true);
    }
  };

  const enterFullscreen = useCallback(() => {
    const el = document.documentElement;
    const rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
    if (rfs) rfs.call(el).then(() => { setIsFullscreen(true); activeRef.current = true; }).catch(() => { activeRef.current = true; });
    else activeRef.current = true;
    startCamera();
  }, []);

  const resumeFullscreen = useCallback(() => {
    const el = document.documentElement;
    const rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
    if (rfs) rfs.call(el).then(() => setIsFullscreen(true)).catch(() => {});
    activeRef.current = true;
  }, []);

  useEffect(() => () => { streamRef.current?.getTracks().forEach((t) => t.stop()); }, []);

  const loadQuestion = useCallback((index) => {
    getQuestion(submissionId, index).then((q) => {
      setQuestion(q);
      setSelected(q.savedSelectedOption || '');
      if (endTimeRef.current == null && q.remainingSeconds != null) {
        endTimeRef.current = Date.now() + q.remainingSeconds * 1000;
        setRemaining(q.remainingSeconds);
      }
    });
  }, [submissionId]);

  useEffect(() => { loadQuestion(0); }, [loadQuestion]);

  const finishUp = useCallback(async () => {
    if (doneRef.current) return;
    doneRef.current = true;
    activeRef.current = false;
    streamRef.current?.getTracks().forEach((t) => t.stop());
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    await completeTest(submissionId).catch(() => {});
    navigate('/submitted');
  }, [submissionId, navigate]);

  // countdown timer, auto-submits at 0
  useEffect(() => {
    const id = setInterval(() => {
      if (endTimeRef.current == null || doneRef.current) return;
      const left = Math.max(0, Math.round((endTimeRef.current - Date.now()) / 1000));
      setRemaining(left);
      if (left === 0) finishUp();
    }, 1000);
    return () => clearInterval(id);
  }, [finishUp]);

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  // every violation goes to the server, which applies the admin's per-type limit
  const handleViolation = useCallback(async (type) => {
    if (!activeRef.current || doneRef.current) return;
    setLastViolationType(type);
    try {
      const res = await logProctorEvent(submissionId, type);
      if (res?.autoSubmitted) { finishUp(); return; }
      setViolationInfo({ count: res?.count ?? null, allowed: res?.allowed ?? null });
    } catch {
      setViolationInfo({ count: null, allowed: null });
    }
    setShowWarning(true);
  }, [submissionId, finishUp]);

  // tab-switch / fullscreen-exit listeners
  useEffect(() => {
    const onVis = () => { if (document.hidden) handleViolation('TAB_SWITCH'); };
    const onFs = () => { if (!document.fullscreenElement && isFullscreen) handleViolation('FULLSCREEN_EXIT'); };
    document.addEventListener('visibilitychange', onVis);
    document.addEventListener('fullscreenchange', onFs);
    return () => {
      document.removeEventListener('visibilitychange', onVis);
      document.removeEventListener('fullscreenchange', onFs);
    };
  }, [isFullscreen, handleViolation]);

  // face + audio proctoring
  useProctoring({
    videoRef,
    stream: streamRef.current,
    enabled: sessionActive,
    onViolation: handleViolation,
  });

  // copy/paste block + devtools detection
  useAntiCheat({
    enabled: sessionActive,
    onViolation: handleViolation,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selected || !question) return;
    setSubmitting(true);
    try {
      const res = await submitAnswer(submissionId, question.questionId, selected);
      if (res.hasNext) loadQuestion(res.nextIndex - 1);
      else finishUp();
    } finally {
      setSubmitting(false);
    }
  };

  if (!question) return <div className="interview-layout loading-layout"><p>Loading question...</p></div>;

  const options = [
    { key: 'A', text: question.optionA },
    { key: 'B', text: question.optionB },
    { key: 'C', text: question.optionC },
    { key: 'D', text: question.optionD },
  ].filter((o) => o.text);

  const WarningIcon = VIOLATION_ICONS[lastViolationType] || AlertTriangle;

  return (
    <div className="interview-layout active-session">
      <AnimatePresence>
        {showFullscreenPrompt && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-overlay">
            <motion.div className="proctor-modal app-shell-panel">
              <div className="modal-icon-ring"><Monitor size={30} /></div>
              <h2>Enter Fullscreen Mode</h2>
              <p>This assessment is proctored using your camera and microphone. Tab switching, exiting fullscreen, multiple faces, and background noise are all monitored.</p>
              <div className="rules-box">
                <div className="rule"><span className="dot warning" /> Each violation type has a limit set by the hiring team.</div>
                <div className="rule"><span className="dot danger" /> Going beyond a limit automatically submits your test.</div>
              </div>
              <button className="btn-primary w-full" onClick={() => { setShowFullscreenPrompt(false); enterFullscreen(); }}>
                <ShieldCheck size={18} /> I Understand, Go Fullscreen
              </button>
            </motion.div>
          </motion.div>
        )}
        {showWarning && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-overlay danger-overlay">
            <motion.div className="proctor-modal app-shell-panel">
              <div className="modal-icon-ring danger"><WarningIcon size={30} /></div>
              <h2>Violation Detected</h2>
              <p>{VIOLATION_MESSAGES[lastViolationType] || 'A proctoring rule was violated.'}</p>
              {violationInfo.allowed != null && (
                <p>
                  Used <strong>{violationInfo.count} of {violationInfo.allowed}</strong> allowed for this violation type.
                  {violationInfo.count >= violationInfo.allowed ? ' The next one will automatically submit your assessment.' : ''}
                </p>
              )}
              <button className="btn-primary danger-btn w-full" onClick={() => { setShowWarning(false); resumeFullscreen(); }}>
                Return to Assessment
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <video ref={videoRef} autoPlay muted playsInline className="proctor-pip" />

      <header className="active-header app-shell-panel" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span className="question-counter">Question {question.currentIndex} of {question.totalQuestions}</span>
        {remaining != null && (
          <span className="question-counter"><Clock size={14} style={{ verticalAlign: 'middle' }} /> {formatTime(remaining)}</span>
        )}
      </header>

      <main className="question-container">
        <section className="session-sidebar app-shell-panel">
          <AssistantScene label="Assessment in progress" />
        </section>

        <motion.section key={question.questionId} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} className="question-card app-shell-panel">
          <h1 className="q-text">{question.questionText}</h1>

          <form onSubmit={handleSubmit} className="answer-form">
            <div className="mcq-options">
              {options.map((opt) => (
                <label key={opt.key} className={`mcq-option ${selected === opt.key ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="mcq"
                    value={opt.key}
                    checked={selected === opt.key}
                    onChange={() => setSelected(opt.key)}
                    disabled={submitting}
                  />
                  <span className="mcq-key">{opt.key}</span>
                  <span className="mcq-text">{opt.text}</span>
                </label>
              ))}
            </div>

            <div className="form-controls">
              <div />
              <div className="control-right">
                <button type="submit" disabled={submitting || !selected} className="btn-primary submit-btn">
                  {question.currentIndex === question.totalQuestions ? <CheckCircle size={16} /> : <ArrowRight size={16} />}
                  {submitting ? 'Submitting...' : question.currentIndex === question.totalQuestions ? 'Submit Final Answer' : 'Next Question'}
                </button>
              </div>
            </div>
          </form>
        </motion.section>
      </main>
    </div>
  );
}
