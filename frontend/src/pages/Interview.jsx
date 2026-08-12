import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, Search, Clock, BrainCircuit, MessageSquare, 
  Monitor, AlertTriangle, ArrowLeft, ArrowRight, CheckCircle, 
  BarChart2, Save, Play, RefreshCw
} from 'lucide-react';
import { getNextQuestion, submitAnswer, getSessionResult, getSessionQuestions } from '../api/interview';
import './Interview.css';

const TYPE_LABELS = {
  java: 'Java Developer',
  python: 'Python Developer',
  frontend: 'Frontend Developer',
  'data-science': 'Data Science',
  'system-design': 'System Design',
  behavioral: 'HR / Behavioral',
};

// Replaced emojis with modern Lucide icons
const INTERVIEW_TIPS = [
  { icon: Target, title: 'Use the STAR Method', text: 'Structure your answers with Situation, Task, Action, and Result to give clear, impactful responses.' },
  { icon: Search, title: 'Research the Company', text: 'Study the company\'s products, culture, and recent news. Tailor your answers to show genuine interest.' },
  { icon: Clock, title: 'Practice Time Management', text: 'Keep answers concise — aim for 1-2 minutes per response. Rambling loses the interviewer\'s attention.' },
  { icon: BrainCircuit, title: 'Think Before You Speak', text: 'It\'s okay to pause and collect your thoughts. A well-structured answer beats a rushed one every time.' },
  { icon: MessageSquare, title: 'Ask Thoughtful Questions', text: 'Prepare 2-3 questions about the role, team, or challenges. It shows you\'re genuinely engaged and curious.' },
];

export default function Interview() {
  const navigate = useNavigate();
  const { typeId, sessionId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [interviewDone, setInterviewDone] = useState(false);
  const [loadingResult, setLoadingResult] = useState(false);
  const [result, setResult] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [timeLeft, setTimeLeft] = useState(null);
  const [totalTime, setTotalTime] = useState(null);
  const timerRef = useRef(null);

  // Fullscreen & tab-switch states
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [warningCount, setWarningCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [autoSubmitted, setAutoSubmitted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const warningCountRef = useRef(0);
  const autoSubmittedRef = useRef(false);
  const interviewActiveRef = useRef(false);

  // YOUR EXACT LOGIC - UNTOUCHED FROM HERE DOWN TO RENDER
  const enterFullscreen = useCallback(() => {
    const el = document.documentElement;
    const rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
    if (rfs) {
      rfs.call(el).then(() => {
        setIsFullscreen(true);
        interviewActiveRef.current = true;
      }).catch(() => {
        interviewActiveRef.current = true;
      });
    } else {
      interviewActiveRef.current = true;
    }
  }, []);

  const handleAutoSubmit = useCallback(async () => {
    if (autoSubmittedRef.current) return;
    autoSubmittedRef.current = true;
    setAutoSubmitted(true);
    interviewActiveRef.current = false;

    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    }

    try {
      const sid = Number(sessionId);
      let allQuestions = [];
      try {
        allQuestions = await getSessionQuestions(sid);
      } catch {
        allQuestions = [];
      }

      for (const q of allQuestions) {
        if (!q.userAnswer) {
          try {
            await submitAnswer(sid, q.questionId, '-');
          } catch {
            // continue
          }
        }
      }

      let attempt = 0;
      const maxAttempts = 20;
      let resultRes = null;
      while (attempt < maxAttempts) {
        attempt++;
        try {
          resultRes = await getSessionResult(sid);
          break;
        } catch {
          try {
            const next = await getNextQuestion(sid);
            if (next && next.questionId) {
              await submitAnswer(sid, next.questionId, '-');
            } else {
              break;
            }
          } catch {
            break;
          }
        }
      }

      if (resultRes) {
        setResult(resultRes);
      }
      setInterviewDone(true);
    } catch {
      setInterviewDone(true);
    }
  }, [sessionId]);

  useEffect(() => {
    if (!sessionId || !interviewActiveRef.current) return;

    const handleViolation = () => {
      if (!interviewActiveRef.current || autoSubmittedRef.current) return;
      warningCountRef.current += 1;
      setWarningCount(warningCountRef.current);

      if (warningCountRef.current >= 2) {
        handleAutoSubmit();
      } else {
        setShowWarning(true);
      }
    };

    const onVisibilityChange = () => {
      if (document.hidden && interviewActiveRef.current) {
        handleViolation();
      }
    };

    const onFullscreenChange = () => {
      if (!document.fullscreenElement && interviewActiveRef.current && isFullscreen) {
        handleViolation();
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, [sessionId, isFullscreen, handleAutoSubmit]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    if (!sessionId) return;
    setLoading(true);

    setShowFullscreenPrompt(true);
    const storedDuration = sessionStorage.getItem(`interview_duration_${sessionId}`);
    if (storedDuration) {
      const secs = parseInt(storedDuration) * 60;
      setTimeLeft(secs);
      setTotalTime(secs);
    }

    getSessionQuestions(Number(sessionId))
      .then((existing) => {
        if (existing && existing.length > 0) {
          setQuestions(existing);
          setTotalQuestions(existing[0].totalQuestions);
          const savedAnswers = {};
          existing.forEach((q) => {
            if (q.userAnswer) savedAnswers[q.questionId] = q.userAnswer;
          });
          setAnswers(savedAnswers);
          const firstUnanswered = existing.findIndex((q) => !q.userAnswer);
          if (firstUnanswered >= 0) {
            setCurrentIdx(firstUnanswered);
          } else if (existing.length < existing[0].totalQuestions) {
            return getNextQuestion(Number(sessionId)).then((next) => {
              if (next) {
                setTotalQuestions(next.totalQuestions);
                setQuestions((prev) => [...prev, next]);
                setCurrentIdx(existing.length);
              } else {
                setInterviewDone(true);
              }
            });
          } else {
            setInterviewDone(true);
          }
        } else {
          return getNextQuestion(Number(sessionId)).then((data) => {
            if (data) {
              setQuestions([data]);
              setTotalQuestions(data.totalQuestions);
              setCurrentIdx(0);
            } else {
              setInterviewDone(true);
            }
          });
        }
      })
      .catch(() => navigate('/dashboard'))
      .finally(() => setLoading(false));

    return () => {
      interviewActiveRef.current = false;
      if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {});
      }
    };
  }, [navigate, sessionId]);

  useEffect(() => {
    if (timeLeft === null || interviewDone || result) return;
    if (!isFullscreen && !interviewActiveRef.current) return;

    if (timeLeft <= 0) {
      setTimeExpired(true);
      handleAutoSubmit();
      return;
    }

    timerRef.current = setTimeout(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setTimeExpired(true);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearTimeout(timerRef.current);
  }, [timeLeft, interviewDone, result, isFullscreen, handleAutoSubmit]);

  const currentQuestion = questions[currentIdx] || null;
  const currentAnswer = currentQuestion ? (answers[currentQuestion.questionId] || '') : '';

  const handleAnswerChange = (value) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.questionId]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentAnswer.trim() || !currentQuestion?.questionId) return;
    setSubmitting(true);
    try {
      const res = await submitAnswer(Number(sessionId), currentQuestion.questionId, currentAnswer.trim());
      if (res.hasNextQuestion && res.nextQuestion) {
        const alreadyExists = questions.some((q) => q.questionId === res.nextQuestion.questionId);
        if (!alreadyExists) {
          setQuestions((prev) => [...prev, res.nextQuestion]);
        }
        setCurrentIdx(currentIdx + 1);
      } else {
        setInterviewDone(true);
      }
    } catch (err) {
      alert(err.message || 'Failed to submit answer');
    } finally {
      setSubmitting(false);
    }
  };

  const handlePrevious = () => { if (currentIdx > 0) setCurrentIdx(currentIdx - 1); };
  const handleNext = () => { if (currentIdx < questions.length - 1) setCurrentIdx(currentIdx + 1); };

  const handleGetResult = async () => {
    setLoadingResult(true);
    try {
      const res = await getSessionResult(Number(sessionId));
      setResult(res);
    } catch (err) {
      alert(err.message || 'Failed to get results');
    } finally {
      setLoadingResult(false);
    }
  };

  const title = TYPE_LABELS[typeId] || typeId || 'Mock Interview';

  const formatTime = (secs) => {
    if (secs === null) return '';
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const getTimerClass = () => {
    if (timeLeft === null || totalTime === null) return '';
    const pct = timeLeft / totalTime;
    if (pct <= 0.1) return 'timer-danger';
    if (pct <= 0.25) return 'timer-warning';
    return 'timer-safe';
  };

  // ── RENDER BLOCKS ──

  if (!sessionId) {
    return (
      <div className="interview-layout">
        <div className="glass-panel centered-card">
          <BarChart2 size={48} className="icon-muted" />
          <h2>{title}</h2>
          <p>Start an interview from the dashboard to begin.</p>
          <button onClick={() => navigate('/dashboard')} className="btn-primary"><ArrowLeft size={16} /> Go to Dashboard</button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="interview-layout loading-layout">
        <div className="spinner"></div>
        <p>Connecting to AI Interviewer...</p>
      </div>
    );
  }

  if (result) {
    const scoreNum = parseFloat(result.score) || 0;
    const scorePercent = (scoreNum / 10) * 100;
    const lostPercent = 100 - scorePercent;
    const scoreColor = 'var(--success)';
    const remainColor = 'var(--border)';

    return (
      <div className="interview-layout">
        <header className="interview-header">
          <button className="back-btn" onClick={() => navigate('/dashboard')}><ArrowLeft size={18} /> Back to Dashboard</button>
        </header>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel result-dashboard">
          <div className="result-header">
            <h1>Interview Evaluation</h1>
            <p>Detailed breakdown of your session performance.</p>
          </div>

          {(autoSubmitted && !timeExpired) && (
            <div className="alert-banner warning-banner"><AlertTriangle size={20} /> Your interview was auto-submitted due to tab switching violations.</div>
          )}
          {timeExpired && (
            <div className="alert-banner danger-banner"><Clock size={20} /> Your time is up! The interview was submitted automatically.</div>
          )}

          <div className="result-hero-grid">
            <div className="score-container glass-panel">
              <div className="pie-chart-wrapper">
                <div className="result-pie" style={{ background: `conic-gradient(${scoreColor} 0% ${scorePercent}%, ${remainColor} ${scorePercent}% 100%)` }}>
                  <div className="result-pie-inner">
                    <span className="pie-score">{result.score}</span>
                    <span className="pie-outof">/10</span>
                  </div>
                </div>
              </div>
              <div className="pie-legend">
                <div className="legend-item"><span className="legend-dot" style={{ background: scoreColor }}></span> Score ({scorePercent.toFixed(0)}%)</div>
                <div className="legend-item"><span className="legend-dot" style={{ background: remainColor }}></span> Room to Improve ({lostPercent.toFixed(0)}%)</div>
              </div>
            </div>

            <div className="feedback-container">
              {result.strengths && (
                <div className="feedback-card success-card">
                  <h3><CheckCircle size={18} /> Strengths</h3>
                  <p>{result.strengths}</p>
                </div>
              )}
              {result.weaknesses && (
                <div className="feedback-card danger-card">
                  <h3><AlertTriangle size={18} /> Areas to Improve</h3>
                  <p>{result.weaknesses}</p>
                </div>
              )}
              {result.improvements && (
                <div className="feedback-card info-card">
                  <h3><Target size={18} /> What to Study</h3>
                  <p>{result.improvements}</p>
                </div>
              )}
            </div>
          </div>

          {result.interviewTips && (
            <div className="tips-banner glass-panel">
              <h3><BrainCircuit size={20} /> AI Interview Tips</h3>
              <p>{result.interviewTips}</p>
            </div>
          )}

          <div className="general-tips-section">
            <h2>Best Practices for Real Interviews</h2>
            <div className="tips-grid">
              {INTERVIEW_TIPS.map((tip, i) => (
                <div key={i} className="tip-card glass-panel tilt-3d">
                  <div className="tip-icon"><tip.icon size={24} /></div>
                  <h4>{tip.title}</h4>
                  <p>{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (interviewDone) {
    return (
      <div className="interview-layout">
        <div className="glass-panel centered-card">
          <CheckCircle size={64} className="icon-success" />
          <h2>Interview Complete!</h2>
          <p>You've answered all questions. Click below to process your final evaluation.</p>
          <button onClick={handleGetResult} disabled={loadingResult} className="btn-primary mt-4">
            {loadingResult ? <><RefreshCw size={18} className="spin" /> Evaluating...</> : <><BarChart2 size={18} /> Get My Results</>}
          </button>
        </div>
      </div>
    );
  }

  const isLastQuestion = currentQuestion?.currentQuestion === totalQuestions;
  const isFirstQuestion = currentIdx === 0;
  const hasAnsweredCurrent = !!answers[currentQuestion?.questionId]?.trim();
  const isOnPreviousQuestion = currentIdx < questions.length - 1;

  return (
    <div className="interview-layout active-session">
      
      {/* Modals via AnimatePresence */}
      <AnimatePresence>
        {showFullscreenPrompt && !interviewDone && !result && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-overlay">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="glass-panel proctor-modal">
              <div className="modal-icon-ring"><Monitor size={32} /></div>
              <h2>Enter Fullscreen Mode</h2>
              <p>This mock interview simulates a proctored environment. Tab switching and exiting fullscreen are strictly monitored.</p>
              <div className="rules-box">
                <div className="rule"><span className="dot warning"></span> 1st violation: You receive a warning.</div>
                <div className="rule"><span className="dot danger"></span> 2nd violation: Interview auto-submits.</div>
              </div>
              <button className="btn-primary w-full" onClick={() => { setShowFullscreenPrompt(false); enterFullscreen(); }}>
                I Understand, Go Fullscreen
              </button>
            </motion.div>
          </motion.div>
        )}

        {showWarning && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-overlay danger-overlay">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="glass-panel proctor-modal">
              <div className="modal-icon-ring danger"><AlertTriangle size={32} /></div>
              <h2>Tab Switch Detected!</h2>
              <p>You exited fullscreen or switched tabs. This is violation <strong>{warningCount} of 2</strong>.</p>
              <div className="rules-box danger-box">
                One more violation and your interview will instantly auto-submit.
              </div>
              <button className="btn-primary danger-btn w-full" onClick={() => { setShowWarning(false); enterFullscreen(); }}>
                Return to Interview
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="active-header glass-panel">
        <button className="back-btn" onClick={() => {
          if (window.confirm('Are you sure you want to exit? Your progress will be lost.')) {
            interviewActiveRef.current = false;
            if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
            navigate('/dashboard');
          }
        }}>
          <ArrowLeft size={18} /> End Session
        </button>
        
        {currentQuestion && (
          <div className="header-status">
            <span className="question-counter">Question {currentQuestion.currentQuestion} of {totalQuestions}</span>
            {timeLeft !== null && (
              <div className={`timer-badge ${getTimerClass()}`}>
                <Clock size={16} /> {formatTime(timeLeft)}
              </div>
            )}
          </div>
        )}
      </header>

      <main className="question-container">
        <motion.div 
          key={currentQuestion?.questionId}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}
          className="glass-panel question-card"
        >
          <div className="q-badge">Question {currentQuestion?.currentQuestion}</div>
          <h2 className="q-text">{currentQuestion?.questionText}</h2>
          
          <form onSubmit={handleSubmit} className="answer-form">
            <textarea
              className="answer-input"
              value={currentAnswer}
              onChange={(e) => handleAnswerChange(e.target.value)}
              placeholder="Structure your answer clearly. Take a moment to think before you type..."
              disabled={submitting}
            />
            
            <div className="form-controls">
              <div className="control-left">
                {!isFirstQuestion && (
                  <button type="button" onClick={handlePrevious} className="btn-secondary" disabled={submitting}>
                    <ArrowLeft size={16} /> Previous
                  </button>
                )}
              </div>
              
              <div className="control-right">
                {isOnPreviousQuestion ? (
                  <>
                    <button type="submit" disabled={submitting || !currentAnswer.trim()} className="btn-secondary">
                      <Save size={16} /> {submitting ? 'Saving...' : 'Update'}
                    </button>
                    <button type="button" onClick={handleNext} className="btn-primary" disabled={submitting}>
                      Next <ArrowRight size={16} />
                    </button>
                  </>
                ) : (
                  <button type="submit" disabled={submitting || !currentAnswer.trim()} className="btn-primary submit-btn">
                    {submitting ? <RefreshCw size={16} className="spin" /> : isLastQuestion ? <CheckCircle size={16} /> : <ArrowRight size={16} />}
                    {submitting ? 'Submitting...' : isLastQuestion ? 'Submit Final Answer' : 'Submit & Next'}
                  </button>
                )}
              </div>
            </div>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
