import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getInstructions, startTest } from '../../api/candidateTests';
import AssistantScene from '../../components/AssistantScene';
import '../Interview.css';

export default function TestInstructions() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [rules, setRules] = useState(null);
  const [camGranted, setCamGranted] = useState(false);
  const [error, setError] = useState('');
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    getInstructions(testId).then(setRules).catch((e) => setError(e.message));
  }, [testId]);

  const requestPermissions = async () => {
    if (!rules) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: !!rules.requireCamera,
        audio: !!rules.requireMicrophone,
      });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      setCamGranted(true);
    } catch {
      setError('Camera/Microphone access is required to start this assessment.');
    }
  };

  const beginTest = async () => {
    try {
      const { submissionId } = await startTest(testId);
      // stop the preview stream here; AssessmentSession will re-request its own PiP stream
      streamRef.current?.getTracks().forEach((t) => t.stop());
      navigate(`/tests/${testId}/session/${submissionId}`);
    } catch (e) {
      setError(e.message || 'Failed to start test');
    }
  };

  if (!rules) return <div className="interview-layout loading-layout"><p>Loading instructions...</p></div>;

  return (
    <div className="interview-layout">
      <div className="centered-card app-shell-panel">
        <AssistantScene label="Read the rules before starting" />
        <div className="centered-copy">
          <h2>{rules.title}</h2>
          <p>{rules.description}</p>
          <div className="rules-box">
            <div className="rule">Duration: {rules.durationMinutes} minutes</div>
            <div className="rule">Questions: {rules.questionCount}</div>
            <div className="rule">Fullscreen required: {rules.requireFullscreen ? 'Yes' : 'No'}</div>
            <div className="rule">Max tab-switch warnings: {rules.maxTabSwitchWarnings}</div>
            <div className="rule">Camera required: {rules.requireCamera ? 'Yes' : 'No'}</div>
            <div className="rule">Microphone required: {rules.requireMicrophone ? 'Yes' : 'No'}</div>
          </div>

          {error && <div className="auth-error">{error}</div>}

          {(rules.requireCamera || rules.requireMicrophone) && !camGranted && (
            <button className="btn-secondary w-full" onClick={requestPermissions}>
              Grant Camera & Microphone Access
            </button>
          )}

          {camGranted && (
            <video ref={videoRef} autoPlay muted playsInline style={{ width: '100%', borderRadius: 8, marginTop: 12 }} />
          )}

          <button
            className="btn-primary w-full mt-4"
            disabled={(rules.requireCamera || rules.requireMicrophone) && !camGranted}
            onClick={beginTest}
          >
            Start Assessment
          </button>
        </div>
      </div>
    </div>
  );
}
