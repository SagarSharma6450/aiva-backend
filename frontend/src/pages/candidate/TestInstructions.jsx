import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Clock, Hash, Monitor, ShieldAlert, Video, Mic } from 'lucide-react';
import { getInstructions, startTest } from '../../api/candidateTests';
import AssistantScene from '../../components/AssistantScene';
import '../Interview.css';
import '../Profile.css';

export default function TestInstructions() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [rules, setRules] = useState(null);
  const [camGranted, setCamGranted] = useState(false);
  const [error, setError] = useState('');
  const [starting, setStarting] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    getInstructions(testId).then(setRules).catch((e) => setError(e.message));
  }, [testId]);

  useEffect(() => () => { streamRef.current?.getTracks().forEach((t) => t.stop()); }, []);

  const requestPermissions = async () => {
    if (!rules) return;
    setError('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: !!rules.requireCamera,
        audio: !!rules.requireMicrophone,
      });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      setCamGranted(true);
    } catch {
      setError('Camera/Microphone access is required to start this assessment. Please allow access in your browser.');
    }
  };

  const beginTest = async () => {
    setError('');
    setStarting(true);
    try {
      const { submissionId } = await startTest(testId);
      streamRef.current?.getTracks().forEach((t) => t.stop());
      navigate(`/tests/${testId}/session/${submissionId}`);
    } catch (e) {
      setError(e.message || 'Failed to start test');
    } finally {
      setStarting(false);
    }
  };

  if (!rules && !error) {
    return <div className="interview-layout loading-layout"><p>Loading instructions...</p></div>;
  }

  if (!rules) {
    return (
      <div className="interview-layout">
        <div className="centered-card app-shell-panel">
          <div className="centered-copy">
            <h2>Unable to load assessment</h2>
            <p className="auth-error">{error}</p>
            <button className="btn-secondary" onClick={() => navigate('/tests')}>Back to My Tests</button>
          </div>
        </div>
      </div>
    );
  }

  const needsPermissions = rules.requireCamera || rules.requireMicrophone;

  return (
    <div className="interview-layout">
      <div className="profile-container">
        <div className="profile-hero" style={{ marginBottom: 18 }}>
          <div className="profile-hero-copy">
            <span className="eyebrow">Read the rules before starting</span>
            <h1>{rules.title}</h1>
            <p>{rules.description}</p>
          </div>
          <AssistantScene className="profile-assistant" label="Instructions loaded" />
        </div>

        <div className="content-card app-shell-panel" style={{ marginBottom: 18 }}>
          <div className="card-header"><h3>Test Rules</h3></div>
          <div className="details-grid">
            <div className="detail-box"><Clock size={20} className="detail-icon" /><div><label>Duration</label><p>{rules.durationMinutes} minutes</p></div></div>
            <div className="detail-box"><Hash size={20} className="detail-icon blue" /><div><label>Questions</label><p>{rules.questionCount} MCQs</p></div></div>
            <div className="detail-box"><Monitor size={20} className="detail-icon purple" /><div><label>Fullscreen</label><p>{rules.requireFullscreen ? 'Required' : 'Not required'}</p></div></div>
            <div className="detail-box"><ShieldAlert size={20} className="detail-icon gold" /><div><label>Tab-switch limit</label><p>{rules.maxTabSwitchWarnings} warnings</p></div></div>
            <div className="detail-box"><Video size={20} className="detail-icon" /><div><label>Camera</label><p>{rules.requireCamera ? 'Required — stays visible throughout' : 'Not required'}</p></div></div>
            <div className="detail-box"><Mic size={20} className="detail-icon blue" /><div><label>Microphone</label><p>{rules.requireMicrophone ? 'Required' : 'Not required'}</p></div></div>
            <div className="detail-box"><ShieldAlert size={20} className="detail-icon gold" /><div><label>Proctoring</label><p>Multiple faces and background noise are monitored automatically.</p></div></div>
          </div>
        </div>

        {error && <div className="auth-error" style={{ marginBottom: 16 }}>{error}</div>}

        {needsPermissions && !camGranted && (
          <button className="btn-secondary" style={{ width: '100%', marginBottom: 16 }} onClick={requestPermissions}>
            Grant Camera & Microphone Access
          </button>
        )}

        {camGranted && (
          <video ref={videoRef} autoPlay muted playsInline style={{ width: 220, borderRadius: 8, marginBottom: 16, border: '1px solid var(--border)' }} />
        )}

        <button
          className="btn-primary"
          style={{ width: '100%' }}
          disabled={(needsPermissions && !camGranted) || starting}
          onClick={beginTest}
        >
          {starting ? 'Starting...' : 'Start Assessment'}
        </button>
      </div>
    </div>
  );
}
