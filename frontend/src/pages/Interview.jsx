import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target, Search, Clock, BrainCircuit, MessageSquare,
  Monitor, AlertTriangle, ArrowLeft, ArrowRight, CheckCircle,
  BarChart2, Save, RefreshCw, ShieldCheck
} from 'lucide-react';
import { getNextQuestion, submitAnswer, getSessionResult, getSessionQuestions } from '../api/interview';
import AssistantScene from '../components/AssistantScene';
import './Interview.css';

const TYPE_LABELS = {
  java: 'Java Developer',
  python: 'Python Developer',
  frontend: 'Frontend Developer',
  'data-science': 'Data Science',
  'system-design': 'System Design',
  behavioral: 'HR / Behavioral',
};

const INTERVIEW_TIPS = [
  { icon: Target, title: 'Use the STAR Method', text: 'Structure your answers with Situation, Task, Action, and Result to give clear, impactful responses.' },
  { icon: Search, title: 'Research the Company', text: 'Study the company products, culture, and recent news. Tailor your answers to show genuine interest.' },
  { icon: Clock, title: 'Practice Time Management', text: 'Keep answers concise. Aim for 1 to 2 minutes per response so the interviewer can follow your thinking.' },
  { icon: BrainCircuit, title: 'Think Before You Speak', text: 'It is okay to pause and collect your thoughts. A well-structured answer beats a rushed one.' },
  { icon: MessageSquare, title: 'Ask Thoughtful Questions', text: 'Prepare questions about the role, team, or challenges. It shows you are engaged and curious.' },
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

  if (!sessionId) {
    return (
      <div className="interview-layout">
        <div className="centered-card app-shell-panel">
          <AssistantScene label="Interview room inactive" />
          <div className="centered-copy">
            <BarChart2 size={34} className="icon-muted" />
            <h2>{title}</h2>
            <p>Start an interview from the dashboard to begin.</p>
            <button onClick={() => navigate('/dashboard')} className="btn-primary"><ArrowLeft size={16} /> Go to Dashboard</button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="interview-layout loading-layout">
        <AssistantScene className="loading-assistant" label="Connecting to interviewer" />
        <div className="spinner"></div>
        <p>Connecting to AI interviewer...</p>
      </div>
    );
  }

  if (result) {
    const scoreNum = parseFloat(result.score) || 0;
    const scorePercent = (scoreNum / 10) * 100;
    const lostPercent = 100 - scorePercent;
    const scoreColor = 'var(--success)';
    const remainColor = 'rgba(255, 255, 255, 0.1)';

    return (
      <div className="interview-layout result-layout">
        <header className="interview-header">
          <button className="back-btn" onClick={() => navigate('/dashboard')}><ArrowLeft size={18} /> Back to Dashboard</button>
        </header>

        <motion.main initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="result-dashboard">
          <section className="result-hero">
            <div className="result-header">
              <span className="eyebrow">Evaluation report</span>
              <h1>Interview Evaluation</h1>
              <p>Detailed breakdown of your session performance and next practice areas.</p>
            </div>
            <AssistantScene className="result-assistant" label="Evaluation complete" />
          </section>

          {(autoSubmitted && !timeExpired) && (
            <div className="alert-banner warning-banner"><AlertTriangle size={20} /> Your interview was auto-submitted due to tab switching violations.</div>
          )}
          {timeExpired && (
            <div className="alert-banner danger-banner"><Clock size={20} /> Your time is up. The interview was submitted automatically.</div>
          )}

          <section className="result-hero-grid">
            <div className="score-container app-shell-panel">
              <div className="result-pie" style={{ background: `conic-gradient(${scoreColor} 0% ${scorePercent}%, ${remainColor} ${scorePercent}% 100%)` }}>
                <div className="result-pie-inner">
                  <span className="pie-score">{result.score}</span>
                  <span className="pie-outof">/10</span>
                </div>
              </div>
              <div className="pie-legend">
                <div className="legend-item"><span className="legend-dot" style={{ background: scoreColor }}></span> Score ({scorePercent.toFixed(0)}%)</div>
                <div className="legend-item"><span className="legend-dot" style={{ background: remainColor }}></span> Room to improve ({lostPercent.toFixed(0)}%)</div>
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
          </section>

          {result.interviewTips && (
            <section className="tips-banner app-shell-panel">
              <h3><BrainCircuit size={20} /> AI Interview Tips</h3>
              <p>{result.interviewTips}</p>
            </section>
          )}

          <section className="general-tips-section">
            <div className="section-heading">
              <span className="eyebrow">Real interview habits</span>
              <h2>Best practices for your next session</h2>
            </div>
            <div className="tips-grid">
              {INTERVIEW_TIPS.map((tip) => (
                <div key={tip.title} className="tip-card app-shell-panel">
                  <div className="tip-icon"><tip.icon size={22} /></div>
                  <h4>{tip.title}</h4>
                  <p>{tip.text}</p>
                </div>
              ))}
            </div>
          </section>
        </motion.main>
      </div>
    );
  }

  if (interviewDone) {
    return (
      <div className="interview-layout">
        <div className="centered-card app-shell-panel complete-card">
          <AssistantScene label="Answers ready for evaluation" />
          <div className="centered-copy">
            <CheckCircle size={54} className="icon-success" />
            <h2>Interview Complete</h2>
            <p>You have answered all questions. Process your final evaluation to see feedback and study suggestions.</p>
            <button onClick={handleGetResult} disabled={loadingResult} className="btn-primary mt-4">
              {loadingResult ? <><RefreshCw size={18} className="spin" /> Evaluating...</> : <><BarChart2 size={18} /> Get My Results</>}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const isLastQuestion = currentQuestion?.currentQuestion === totalQuestions;
  const isFirstQuestion = currentIdx === 0;
  const hasAnsweredCurrent = !!answers[currentQuestion?.questionId]?.trim();
  const isOnPreviousQuestion = currentIdx < questions.length - 1;
  const progressValue = totalQuestions ? (currentQuestion?.currentQuestion / totalQuestions) * 100 : 0;

  return (
    <div className="interview-layout active-session">
      <AnimatePresence>
        {showFullscreenPrompt && !interviewDone && !result && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-overlay">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="proctor-modal app-shell-panel">
              <div className="modal-icon-ring"><Monitor size={30} /></div>
              <h2>Enter Fullscreen Mode</h2>
              <p>This mock interview simulates a proctored environment. Tab switching and exiting fullscreen are monitored.</p>
              <div className="rules-box">
                <div className="rule"><span className="dot warning"></span> 1st violation: You receive a warning.</div>
                <div className="rule"><span className="dot danger"></span> 2nd violation: Interview auto-submits.</div>
              </div>
              <button className="btn-primary w-full" onClick={() => { setShowFullscreenPrompt(false); enterFullscreen(); }}>
                <ShieldCheck size={18} /> I Understand, Go Fullscreen
              </button>
            </motion.div>
          </motion.div>
        )}

        {showWarning && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-overlay danger-overlay">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="proctor-modal app-shell-panel">
              <div className="modal-icon-ring danger"><AlertTriangle size={30} /></div>
              <h2>Tab Switch Detected</h2>
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

      <header className="active-header app-shell-panel">
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
        <section className="session-sidebar app-shell-panel">
          <AssistantScene label="AIVA is listening" />
          <div className="session-progress">
            <div className="session-progress-head">
              <span>Progress</span>
              <strong>{Math.round(progressValue)}%</strong>
            </div>
            <div className="session-progress-track">
              <div style={{ width: `${progressValue}%` }} />
            </div>
          </div>
          <div className="session-note">
            <h3>{title}</h3>
            <p>Answer clearly, use examples, and keep your response focused on the question.</p>
          </div>
        </section>

        <motion.section
          key={currentQuestion?.questionId}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28 }}
          className="question-card app-shell-panel"
        >
          <div className="question-topline">
            <span className="q-badge">Question {currentQuestion?.currentQuestion}</span>
            <span className={`answer-state ${hasAnsweredCurrent ? 'answered' : ''}`}>
              {hasAnsweredCurrent ? 'Draft saved locally' : 'Awaiting answer'}
            </span>
          </div>
          <h1 className="q-text">{currentQuestion?.questionText}</h1>

          <form onSubmit={handleSubmit} className="answer-form">
            <textarea
              className="answer-input"
              value={currentAnswer}
              onChange={(e) => handleAnswerChange(e.target.value)}
              placeholder="Write your answer here. Use a short structure: context, decision, action, result."
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
                    {submitting ? 'Submitting...' : isLastQuestion ? 'Submit Final Answer' : 'Submit and Next'}
                  </button>
                )}
              </div>
            </div>
          </form>
        </motion.section>
      </main>
    </div>
  );
}
