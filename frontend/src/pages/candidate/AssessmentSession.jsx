import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, AlertTriangle, Monitor, ShieldCheck } from 'lucide-react';
import { getQuestion, submitAnswer, logProctorEvent, completeTest } from '../../api/candidateTests';
import AssistantScene from '../../components/AssistantScene';
import '../Interview.css';

export default function AssessmentSession() {
  const { testId, submissionId } = useParams();
  const navigate = useNavigate();

  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [warningCount, setWarningCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [done, setDone] = useState(false);

  const activeRef = useRef(false);
  const warningRef = useRef(0);
  const doneRef = useRef(false);

  const enterFullscreen = useCallback(() => {
    const el = document.documentElement;
    const rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
    if (rfs) rfs.call(el).then(() => { setIsFullscreen(true); activeRef.current = true; }).catch(() => { activeRef.current = true; });
    else activeRef.current = true;
  }, []);

  const loadQuestion = useCallback((index) => {
    getQuestion(submissionId, index).then((q) => {
      setQuestion(q);
      setAnswer(q.savedAnswer || '');
    });
  }, [submissionId]);

  useEffect(() => { loadQuestion(0); }, [loadQuestion]);

  const finishUp = useCallback(async () => {
    if (doneRef.current) return;
    doneRef.current = true;
    activeRef.current = false;
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    await completeTest(submissionId).catch(() => {});
    setDone(true);
    navigate('/submitted');
  }, [submissionId, navigate]);

  useEffect(() => {
    if (!activeRef.current) return;
    const handleViolation = async (type) => {
      if (!activeRef.current || doneRef.current) return;
      warningRef.current += 1;
      setWarningCount(warningRef.current);
      await logProctorEvent(submissionId, type).catch(() => {});
      if (warningRef.current >= 2) finishUp();
      else setShowWarning(true);
    };
    const onVis = () => { if (document.hidden) handleViolation('TAB_SWITCH'); };
    const onFs = () => { if (!document.fullscreenElement && isFullscreen) handleViolation('FULLSCREEN_EXIT'); };
    document.addEventListener('visibilitychange', onVis);
    document.addEventListener('fullscreenchange', onFs);
    return () => {
      document.removeEventListener('visibilitychange', onVis);
      document.removeEventListener('fullscreenchange', onFs);
    };
  }, [submissionId, isFullscreen, finishUp]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!answer.trim() || !question) return;
    setSubmitting(true);
    try {
      const res = await submitAnswer(submissionId, question.questionId, answer.trim());
      if (res.hasNext) {
        loadQuestion(res.nextIndex - 1); // backend gives 1-based next index
      } else {
        finishUp();
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (!question) return <div className="interview-layout loading-layout"><p>Loading question...</p></div>;

  return (
    <div className="interview-layout active-session">
      <AnimatePresence>
        {showFullscreenPrompt && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-overlay">
            <motion.div className="proctor-modal app-shell-panel">
              <div className="modal-icon-ring"><Monitor size={30} /></div>
              <h2>Enter Fullscreen Mode</h2>
              <p>This assessment is proctored. Tab switching and exiting fullscreen are logged.</p>
              <div className="rules-box">
                <div className="rule"><span className="dot warning" /> 1st violation: warning.</div>
                <div className="rule"><span className="dot danger" /> 2nd violation: auto-submit.</div>
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
              <div className="modal-icon-ring danger"><AlertTriangle size={30} /></div>
              <h2>Violation Detected</h2>
              <p>This is violation <strong>{warningCount} of 2</strong>.</p>
              <button className="btn-primary danger-btn w-full" onClick={() => { setShowWarning(false); enterFullscreen(); }}>
                Return to Assessment
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="active-header app-shell-panel">
        <span className="question-counter">Question {question.currentIndex} of {question.totalQuestions}</span>
      </header>

      <main className="question-container">
        <section className="session-sidebar app-shell-panel">
          <AssistantScene label="Assessment in progress" />
        </section>

        <motion.section key={question.questionId} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} className="question-card app-shell-panel">
          <h1 className="q-text">{question.questionText}</h1>
          <form onSubmit={handleSubmit} className="answer-form">
            <textarea className="answer-input" value={answer} onChange={(e) => setAnswer(e.target.value)} disabled={submitting} />
            <div className="form-controls">
              <div />
              <div className="control-right">
                <button type="submit" disabled={submitting || !answer.trim()} className="btn-primary submit-btn">
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
