import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

const INTERVIEW_TIPS = [
  { icon: '🎯', title: 'Use the STAR Method', text: 'Structure your answers with Situation, Task, Action, and Result to give clear, impactful responses.' },
  { icon: '🔍', title: 'Research the Company', text: 'Study the company\'s products, culture, and recent news. Tailor your answers to show genuine interest.' },
  { icon: '⏱️', title: 'Practice Time Management', text: 'Keep answers concise — aim for 1-2 minutes per response. Rambling loses the interviewer\'s attention.' },
  { icon: '🤔', title: 'Think Before You Speak', text: 'It\'s okay to pause and collect your thoughts. A well-structured answer beats a rushed one every time.' },
  { icon: '💬', title: 'Ask Thoughtful Questions', text: 'Prepare 2-3 questions about the role, team, or challenges. It shows you\'re genuinely engaged and curious.' },
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

  // Enter fullscreen
  const enterFullscreen = useCallback(() => {
    const el = document.documentElement;
    const rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
    if (rfs) {
      rfs.call(el).then(() => {
        setIsFullscreen(true);
        interviewActiveRef.current = true;
      }).catch(() => {
        // Fullscreen denied, proceed anyway
        interviewActiveRef.current = true;
      });
    } else {
      interviewActiveRef.current = true;
    }
  }, []);

  // Auto-submit handler for tab violations
  // Auto-submit handler for tab violations
const handleAutoSubmit = useCallback(async () => {
  if (autoSubmittedRef.current) return;
  autoSubmittedRef.current = true;
  setAutoSubmitted(true);
  interviewActiveRef.current = false;

  // Exit fullscreen
  if (document.fullscreenElement) {
    document.exitFullscreen?.().catch(() => {});
  }

  try {
    const sid = Number(sessionId);

    // Step 1: Get all current questions for the session
    let allQuestions = [];
    try {
      allQuestions = await getSessionQuestions(sid);
    } catch {
      allQuestions = [];
    }

    // Step 2: Submit empty answers for any unanswered questions
    for (const q of allQuestions) {
      if (!q.userAnswer) {
        try {
          await submitAnswer(sid, q.questionId, '-');
        } catch {
          // continue even if one fails
        }
      }
    }

    // Step 3: Keep fetching & submitting remaining questions until result is ready
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

  // Tab visibility & fullscreen change detection
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

    // Show fullscreen prompt when interview loads
    setShowFullscreenPrompt(true);
// Set timer from session - fetch duration
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

    // Cleanup: exit fullscreen when leaving
    return () => {
      interviewActiveRef.current = false;
      if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {});
      }
    };
  }, [navigate, sessionId]);

// Countdown timer
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
      const res = await submitAnswer(
        Number(sessionId),
        currentQuestion.questionId,
        currentAnswer.trim()
      );
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

  const handlePrevious = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

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
      <div className="interview-page">
        <header className="interview-header">
          <button className="interview-back" onClick={() => navigate('/dashboard')}>
            ← Back to Dashboard
          </button>
        </header>
        <div className="interview-card">
          <h1>{title}</h1>
          <p>Start an interview from the dashboard to begin.</p>
          <button onClick={() => navigate('/dashboard')} className="interview-btn">
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="interview-page">
        <div className="interview-loading">Loading question...</div>
      </div>
    );
  }

  if (result) {
    const scoreNum = parseFloat(result.score) || 0;
    const scorePercent = (scoreNum / 10) * 100;
    const lostPercent = 100 - scorePercent;
    const scoreColor = '#4caf50';
    const remainColor = '#555';

    return (
      <div className="interview-page">
        <header className="interview-header">
          <button className="interview-back" onClick={() => navigate('/dashboard')}>
            ← Back to Dashboard
          </button>
        </header>
        <div className="interview-card result-card">
          <h1>Interview Evaluation</h1>
          {autoSubmitted && !timeExpired && (
  <div className="result-violation-notice">
    Your interview was auto-submitted due to tab switching violations.
  </div>
)}
{timeExpired && (
  <div className="result-time-notice">
    ⏰ Your time is up! The interview has been submitted automatically.
  </div>
)}

          {/* Pie Chart Score Visual */}
          <div className="result-pie-container">
            <div
              className="result-pie"
              style={{
                background: `conic-gradient(${scoreColor} 0% ${scorePercent}%, ${remainColor} ${scorePercent}% 100%)`,
              }}
            >
              <div className="result-pie-inner">
                <span className="result-pie-score">{result.score}</span>
                <span className="result-pie-outof">/10</span>
              </div>
            </div>
            <div className="result-pie-legend">
              <div className="legend-item">
                <span className="legend-dot" style={{ background: scoreColor }}></span>
                <span>Score ({scorePercent.toFixed(0)}%)</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot" style={{ background: remainColor }}></span>
                <span>Room to Improve ({lostPercent.toFixed(0)}%)</span>
              </div>
            </div>
          </div>

          {result.strengths && (
            <div className="result-section result-strengths">
              <h3>Strengths</h3>
              <p>{result.strengths}</p>
            </div>
          )}
          {result.weaknesses && (
            <div className="result-section result-weaknesses">
              <h3>Areas to Improve</h3>
              <p>{result.weaknesses}</p>
            </div>
          )}
          {result.improvements && (
            <div className="result-section result-improvements">
              <h3>What to Study & Practice</h3>
              <p>{result.improvements}</p>
            </div>
          )}
          {result.interviewTips && (
            <div className="result-section result-tips">
              <h3>How to Clear Real Interviews</h3>
              <p>{result.interviewTips}</p>
            </div>
          )}

          {/* Interview Tips Section */}
          <div className="result-tips-section">
            <h2>Tips for Real Interviews</h2>
            <div className="tips-grid">
              {INTERVIEW_TIPS.map((tip, i) => (
                <div key={i} className="tip-card">
                  <span className="tip-icon">{tip.icon}</span>
                  <h4>{tip.title}</h4>
                  <p>{tip.text}</p>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => navigate('/dashboard')} className="interview-btn">
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (interviewDone) {
    return (
      <div className="interview-page">
        <header className="interview-header">
          <button className="interview-back" onClick={() => navigate('/dashboard')}>
            ← Back to Dashboard
          </button>
        </header>
        <div className="interview-card">
          <h1>Interview Complete!</h1>
          <p>You've answered all questions. Click below to get your evaluation, score, and tips to improve.</p>
          <button
            onClick={handleGetResult}
            disabled={loadingResult}
            className="interview-btn"
          >
            {loadingResult ? 'Evaluating your performance...' : 'Get My Results'}
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
    <div className="interview-page interview-page-active">
      {/* Fullscreen Prompt Modal */}
      {showFullscreenPrompt && !interviewDone && !result && (
        <div className="fullscreen-overlay">
          <div className="fullscreen-modal">
            <div className="fullscreen-modal-icon">🖥️</div>
            <h2>Enter Fullscreen Mode</h2>
            <p>
              This mock interview simulates a real test environment.<br />
              Tab switching and exiting fullscreen are monitored.
            </p>
            <ul className="fullscreen-rules">
              <li>1st violation — You will receive a warning</li>
              <li>2nd violation — Interview auto-submits immediately</li>
            </ul>
            <button
              className="interview-btn fullscreen-accept-btn"
              onClick={() => {
                setShowFullscreenPrompt(false);
                enterFullscreen();
              }}
            >
              I Understand, Go Fullscreen
            </button>
          </div>
        </div>
      )}

      {/* Tab Switch Warning Modal */}
      {showWarning && (
        <div className="fullscreen-overlay warning-overlay">
          <div className="fullscreen-modal warning-modal">
            <div className="fullscreen-modal-icon warning-icon">⚠️</div>
            <h2>Warning: Tab Switch Detected!</h2>
            <p>
              You switched tabs or exited fullscreen. This is violation <strong>{warningCount} of 2</strong>.
            </p>
            <p className="warning-consequence">
              One more violation and your interview will be <strong>auto-submitted</strong> with all remaining questions.
            </p>
            <button
              className="interview-btn fullscreen-accept-btn"
              onClick={() => {
                setShowWarning(false);
                enterFullscreen();
              }}
            >
              Return to Interview
            </button>
          </div>
        </div>
      )}

      <header className="interview-header">
        <button className="interview-back" onClick={() => {
  if (window.confirm('Are you sure you want to exit the interview session? Your progress will be lost.')) {
    interviewActiveRef.current = false;
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    navigate('/dashboard');
  }
}}>
  ← Back to Dashboard
</button>
        {currentQuestion && (
  <div className="interview-header-right">
    <span className="interview-progress">
      Question {currentQuestion.currentQuestion} of {totalQuestions}
    </span>
    {timeLeft !== null && (
      <div className={`interview-timer ${getTimerClass()}`}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        <span>{formatTime(timeLeft)}</span>
      </div>
    )}
  </div>
)}
      </header>
      <div className="interview-card interview-active">
        <h2 className="interview-question">{currentQuestion?.questionText}</h2>
        <form onSubmit={handleSubmit} className="interview-form">
          <textarea
            value={currentAnswer}
            onChange={(e) => handleAnswerChange(e.target.value)}
            placeholder="Type your answer here..."
            rows={4}
            disabled={submitting}
          />
          <div className="interview-nav">
            {!isFirstQuestion && (
              <button type="button" onClick={handlePrevious} className="interview-btn interview-btn-secondary" disabled={submitting}>
                ← Previous
              </button>
            )}
            {isOnPreviousQuestion ? (
              <>
                <button type="submit" disabled={submitting || !currentAnswer.trim()} className="interview-btn">
                  {submitting ? 'Saving...' : 'Update Answer'}
                </button>
                <button type="button" onClick={handleNext} className="interview-btn" disabled={submitting}>
                  Next →
                </button>
              </>
            ) : (
              <button type="submit" disabled={submitting || !currentAnswer.trim()} className="interview-btn">
                {submitting ? 'Submitting...' : isLastQuestion ? 'Submit Final Answer' : 'Submit & Next'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
