import { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, PlayCircle, History as HistoryIcon,
  TrendingUp, LogOut, User, Menu, X, ChevronRight,
  BrainCircuit, Target, Shield, Layers,
  Code2, MonitorCog, Database, Network, UsersRound, ClipboardCheck
} from 'lucide-react';

import { getMockInterviewTypes, startSession, getInterviewHistory } from '../api/interview';
import { getProfile } from '../api/profile';
import { checkResumeStatus } from '../api/resume';
import InterviewModal from '../components/InterviewModal';
import TypewriterText from '../components/TypewriterText';
import AssistantScene from '../components/AssistantScene';
import './Dashboard.css';

const DOMAIN_META = {
  java: { icon: <Code2 size={22} />, tone: 'teal', label: 'Backend fundamentals' },
  python: { icon: <BrainCircuit size={22} />, tone: 'blue', label: 'Problem solving' },
  frontend: { icon: <MonitorCog size={22} />, tone: 'amber', label: 'UI engineering' },
  'data-science': { icon: <Database size={22} />, tone: 'violet', label: 'Data reasoning' },
  'system-design': { icon: <Network size={22} />, tone: 'green', label: 'Architecture' },
  behavioral: { icon: <UsersRound size={22} />, tone: 'rose', label: 'Communication' },
};

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { id: 'interviews', label: 'Mock Interviews', icon: <PlayCircle size={20} /> },
  { id: 'history', label: 'Session History', icon: <HistoryIcon size={20} /> },
  { id: 'progress', label: 'Progress', icon: <TrendingUp size={20} /> },
];

const FEATURES = [
  { icon: <BrainCircuit size={22} />, title: 'Live answer review', desc: 'AIVA evaluates clarity, relevance, structure, and confidence after each completed session.' },
  { icon: <Target size={22} />, title: 'Role-aware practice', desc: 'Sessions are tuned by domain, question count, duration, and resume context when available.' },
  { icon: <TrendingUp size={22} />, title: 'Progress memory', desc: 'Scores, attempts, and recent performance stay organized so improvement is easy to track.' },
  { icon: <Shield size={22} />, title: 'Focused interview mode', desc: 'Fullscreen and tab-switch checks create a realistic practice environment.' },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Select a track', desc: 'Choose the interview domain that matches the role.' },
  { step: '02', title: 'Tune the session', desc: 'Set time and number of questions before starting.' },
  { step: '03', title: 'Answer naturally', desc: 'Write clear responses in the focused interview room.' },
  { step: '04', title: 'Review feedback', desc: 'Use the score report to decide what to practice next.' },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [interviewTypes, setInterviewTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalInterview, setModalInterview] = useState(null);
  const [hasResume, setHasResume] = useState(false);
  const menuRef = useRef(null);

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [history, setHistory] = useState(null);
  const [historyLoading, setHistoryLoading] = useState(true);

  // YOUR EXACT LOGIC - UNTOUCHED
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
  }, [navigate]);

  useEffect(() => {
    getMockInterviewTypes()
      .then(setInterviewTypes)
      .catch(() => setInterviewTypes([]))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    Promise.all([
      getProfile().catch(() => null),
      getInterviewHistory().catch(() => null),
    ]).then(([profile, hist]) => {
      if (profile?.name) setUserName(profile.name);
      if (profile?.email) setUserEmail(profile.email);
      if (hist) setHistory(hist);
      checkResumeStatus().then(setHasResume).catch(() => {});
    }).finally(() => setHistoryLoading(false));
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleStartInterview = async (settings) => {
    if (!modalInterview) return;
    try {
      const { sessionId } = await startSession(modalInterview.id, settings);
      setModalInterview(null);
      sessionStorage.setItem(`interview_duration_${sessionId}`, settings.durationMinutes);
      navigate(`/interview/${modalInterview.id}/${sessionId}`);
    } catch (err) {
      alert(err.message || 'Failed to start interview');
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const getScoreLabel = (score) => {
    if (score >= 8) return { cls: 'score-high', text: 'Excellent' };
    if (score >= 6) return { cls: 'score-mid', text: 'Good' };
    if (score >= 4) return { cls: 'score-avg', text: 'Average' };
    return { cls: 'score-low', text: 'Needs Work' };
  };

  const firstInitial = userName ? userName.charAt(0).toUpperCase() : '?';
  const firstName = userName ? userName.split(' ')[0] : '';
  const breadcrumbLabel = { dashboard: 'Home', interviews: 'Mock Interviews', history: 'Session History' , progress: 'Progress'};
  const recentSessions = history?.sessions?.slice(0, 3) || [];

  return (
    <div className="dashboard-layout">
      <aside className={`sidebar app-shell-panel ${sidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="sidebar-header">
          <div className="logo-badge">A</div>
          {sidebarOpen && (
            <div>
              <h2>AIVA</h2>
              <span>Interview workspace</span>
            </div>
          )}
        </div>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeView === item.id ? 'active' : ''}`}
              onClick={() => setActiveView(item.id)}
              title={!sidebarOpen ? item.label : undefined}
            >
              {item.icon}
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <button className="nav-collapse" onClick={() => setSidebarOpen((value) => !value)}>
          <ChevronRight size={16} />
          {sidebarOpen && <span>Collapse</span>}
        </button>

        <div className="sidebar-footer">
          <button className="nav-item logout" onClick={handleLogout}>
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu app-shell-panel" onClick={e => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="logo-badge">A</div>
              <h2>AIVA</h2>
              <button onClick={() => setMobileMenuOpen(false)} className="close-btn"><X size={22} /></button>
            </div>
            <nav className="mobile-nav">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${activeView === item.id ? 'active' : ''}`}
                  onClick={() => { setActiveView(item.id); setMobileMenuOpen(false); }}
                >
                  {item.icon} <span>{item.label}</span>
                </button>
              ))}
              <button className="nav-item logout" onClick={handleLogout}><LogOut size={20} /> <span>Logout</span></button>
            </nav>
          </div>
        </div>
      )}

      <main className="dashboard-content">
        <header className="dashboard-topbar app-shell-panel">
          <div className="topbar-left">
            <button className="hamburger-btn" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={22} />
            </button>
            <span className="breadcrumb">AIVA <ChevronRight size={14} /> {breadcrumbLabel[activeView]}</span>
          </div>

          <div className="topbar-right" ref={menuRef}>
            <span className="greeting">Hi, <strong>{firstName || 'there'}</strong></span>
            <button className="avatar-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {firstInitial}
            </button>

            {menuOpen && (
              <div className="dropdown-menu app-shell-panel">
                <div className="dropdown-header">
                  <strong>{userName || 'User'}</strong>
                  <span>{userEmail}</span>
                </div>
                <Link to="/profile" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                  <User size={16} /> Profile
                </Link>
                <button className="dropdown-item logout" onClick={handleLogout}>
                  <LogOut size={16} /> Log out
                </button>
              </div>
            )}
          </div>
        </header>

        <div className="view-container">
          {activeView === 'dashboard' && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="dashboard-home">
              <section className="hero-section">
                <div className="hero-content">
                  <span className="eyebrow">AI interview practice</span>
                  <h1>{firstName ? `Welcome back, ${firstName}.` : 'Practice interviews with a focused AI assistant.'}</h1>
                  <p className="subtitle">
                    <TypewriterText text="AIVA helps you rehearse technical and behavioral answers, then turns each session into clear feedback." speed={26} />
                  </p>
                  <div className="hero-actions">
                    <button className="btn-primary" onClick={() => setActiveView('interviews')}>Start practicing</button>
                    <button className="btn-secondary" onClick={() => setActiveView('history')}>Review sessions</button>
                  </div>
                </div>
                <div className="hero-visual">
                  <AssistantScene label="Virtual interviewer listening" />
                </div>
              </section>

              <section className="overview-strip">
                <div className="overview-item">
                  <span>{history?.totalInterviews ?? 0}</span>
                  <p>Total sessions</p>
                </div>
                <div className="overview-item">
                  <span>{history?.averageScore ?? '-'}</span>
                  <p>Average score</p>
                </div>
                <div className="overview-item">
                  <span>{hasResume ? 'On' : 'Off'}</span>
                  <p>Resume context</p>
                </div>
                <div className="overview-item">
                  <span>6</span>
                  <p>Practice domains</p>
                </div>
              </section>

              <section className="workflow-section">
                <div className="section-heading">
                  <span className="eyebrow">Workflow</span>
                  <h2>Simple, structured preparation.</h2>
                </div>
                <div className="how-it-works-grid">
                  {HOW_IT_WORKS.map((step) => (
                    <div key={step.step} className="step-card">
                      <div className="step-number">{step.step}</div>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="features-section">
                <div className="section-heading">
                  <span className="eyebrow">Capabilities</span>
                  <h2>Built for repeated practice, not showpiece screens.</h2>
                </div>
                <div className="features-grid">
                  {FEATURES.map((feat) => (
                    <div key={feat.title} className="feature-card">
                      <div className="feature-icon">{feat.icon}</div>
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {recentSessions.length > 0 && (
                <section className="recent-panel">
                  <div className="section-heading inline">
                    <div>
                      <span className="eyebrow">Recent work</span>
                      <h2>Latest interview sessions</h2>
                    </div>
                    <button className="btn-secondary" onClick={() => setActiveView('history')}>View all</button>
                  </div>
                  <div className="mini-history">
                    {recentSessions.map((s) => {
                      const { cls, text } = getScoreLabel(s.score);
                      return (
                        <div key={s.sessionId} className="mini-history-row">
                          <div>
                            <strong>{s.role}</strong>
                            <span>{formatDate(s.completedAt)}</span>
                          </div>
                          <span className={`history-badge ${cls}`}>{text}</span>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}
            </motion.div>
          )}

          {activeView === 'interviews' && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <div className="view-header split-header">
                <div>
                  <span className="eyebrow">Practice catalog</span>
                  <h2>Mock Interviews</h2>
                  <p>Choose a focused track, configure the session, and begin in fullscreen mode.</p>
                </div>
                <button className="btn-secondary" onClick={() => navigate('/profile')}>
                  <User size={16} /> Profile and resume
                </button>
              </div>

              {loading ? (
                <div className="skeleton-grid">
                  {[1,2,3,4,5,6].map(i => <div key={i} className="skeleton-card" />)}
                </div>
              ) : (
                <div className="interview-catalog">
                  {interviewTypes.map((item) => {
                    const meta = DOMAIN_META[item.id] || { icon: <ClipboardCheck size={22} />, tone: 'teal', label: 'Interview practice' };
                    return (
                      <div key={item.id} className={`domain-row tone-${meta.tone}`}>
                        <div className="domain-mark">{meta.icon}</div>
                        <div className="domain-copy">
                          <div className="domain-title-line">
                            <h3>{item.title}</h3>
                            <span>{meta.label}</span>
                          </div>
                          <p>{item.description}</p>
                        </div>
                        <button className="btn-primary start-btn" onClick={() => setModalInterview(item)}>
                          Start Session <ChevronRight size={16} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}

          {activeView === 'progress' && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <div className="view-header">
                <span className="eyebrow">Performance</span>
                <h2>Your Progress</h2>
                <p>Track your session volume, average score, and best result.</p>
              </div>

              {historyLoading ? (
                <div className="loading-text">Loading stats...</div>
              ) : (
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-icon purple"><Layers size={24} /></div>
                    <div className="stat-info">
                      <span className="stat-value">{history?.totalInterviews ?? 0}</span>
                      <span className="stat-label">Total Sessions</span>
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-icon blue"><TrendingUp size={24} /></div>
                    <div className="stat-info">
                      <span className="stat-value">{history?.averageScore ?? '-'}<small>/10</small></span>
                      <span className="stat-label">Average Score</span>
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-icon gold"><Target size={24} /></div>
                    <div className="stat-info">
                      <span className="stat-value">{history?.bestScore ?? '-'}<small>/10</small></span>
                      <span className="stat-label">Best Score</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeView === 'history' && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <div className="view-header">
                <span className="eyebrow">Archive</span>
                <h2>Session History</h2>
                <p>Review past performance and AI feedback.</p>
              </div>

              {historyLoading ? (
                <div className="skeleton-grid">
                  {[1,2,3].map(i => <div key={i} className="skeleton-row" />)}
                </div>
              ) : !history || history.sessions.length === 0 ? (
                <div className="empty-state">
                  <HistoryIcon size={44} className="empty-icon" />
                  <h3>No sessions yet</h3>
                  <p>Complete your first mock interview to see your history here.</p>
                  <button className="btn-primary" onClick={() => setActiveView('interviews')}>Start an Interview</button>
                </div>
              ) : (
                <div className="history-list">
                  {history.sessions.map((s) => {
                    const { cls, text } = getScoreLabel(s.score);
                    const scorePercent = (s.score / 10) * 100;
                    const domainKey = Object.keys(DOMAIN_META).find(k => s.role.toLowerCase().includes(k.replace('-', ' ')));
                    const meta = DOMAIN_META[domainKey] || { icon: <ClipboardCheck size={20} />, tone: 'teal' };
                    return (
                      <div key={s.sessionId} className="history-row">
                        <div className={`history-icon tone-${meta.tone}`}>{meta.icon}</div>
                        <div className="history-details">
                          <h4>{s.role}</h4>
                          <span>{s.questionCount} questions - {formatDate(s.completedAt)}</span>
                        </div>
                        <div className="history-score-bar">
                          <div className="bar-track">
                            <div className={`bar-fill ${cls}`} style={{ width: `${scorePercent}%` }} />
                          </div>
                        </div>
                        <div className={`history-score ${cls}`}>
                          <strong>{s.score}</strong>/10
                        </div>
                        <div className={`history-badge ${cls}`}>{text}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </main>

      {modalInterview && (
        <InterviewModal
          interview={modalInterview}
          onClose={() => setModalInterview(null)}
          onStart={handleStartInterview}
          hasResume={hasResume}
        />
      )}
    </div>
  );
}
