import { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, PlayCircle, History as HistoryIcon, 
  TrendingUp, LogOut, User, Menu, X, ChevronRight, 
  CheckCircle, BrainCircuit, Target, Shield, Layers, BarChart 
} from 'lucide-react';

import { getMockInterviewTypes, startSession, getInterviewHistory } from '../api/interview';
import { getProfile } from '../api/profile';
import { checkResumeStatus } from '../api/resume';
import InterviewModal from '../components/InterviewModal';
import TypewriterText from '../components/TypewriterText';
import './Dashboard.css';

const INTERVIEW_ICONS = {
  java: '☕',
  python: '🐍',
  frontend: '🎨',
  'data-science': '📊',
  'system-design': '🏗️',
  behavioral: '🤝',
};

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { id: 'interviews', label: 'Mock Interviews', icon: <PlayCircle size={20} /> },
  { id: 'history', label: 'Session History', icon: <HistoryIcon size={20} /> },
  { id: 'progress', label: 'Progress', icon: <TrendingUp size={20} /> },
];

const FEATURES = [
  { icon: <BrainCircuit size={24} />, title: 'Real-Time AI Feedback', desc: 'Get instant, detailed evaluation on every answer — just like a real interviewer sitting across from you.' },
  { icon: <Target size={24} />, title: 'Adaptive Questions', desc: 'Questions adapt to your domain and level — covering CS fundamentals and role-specific topics.' },
  { icon: <TrendingUp size={24} />, title: 'Progress Tracking', desc: 'Every session is saved. Track scores over time and identify exactly what to study and improve next.' },
  { icon: <Shield size={24} />, title: 'Fullscreen Test Mode', desc: 'Simulates a proctored environment with tab-switch detection — your practice feels like the real thing.' },
  { icon: <Layers size={24} />, title: '6 Interview Domains', desc: 'Java, Python, Frontend, Data Science, System Design, and HR — full coverage across tech career paths.' },
  { icon: <BarChart size={24} />, title: 'Detailed Score Report', desc: 'After every session — a full breakdown of strengths, weaknesses, study recommendations, and tips.' },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Choose Domain', desc: 'Pick from 6 interview tracks tailored to your role.' },
  { step: '02', title: 'Set Preferences', desc: 'Configure question count and session settings.' },
  { step: '03', title: 'Answer Live', desc: 'The AI asks questions in a focused environment.' },
  { step: '04', title: 'Get Report', desc: 'Receive a detailed score and improvement tips.' },
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
    if (!dateStr) return '—';
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

  return (
    <div className="dashboard-layout">
      {/* ── Sidebar (Glassmorphic) ── */}
      <aside className={`sidebar glass-panel ${sidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="sidebar-header">
          <div className="logo-badge">A</div>
          {sidebarOpen && <h2>AIVA</h2>}
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

        <div className="sidebar-footer">
          <button className="nav-item logout" onClick={handleLogout}>
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* ── Mobile Menu Overlay ── */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu glass-panel" onClick={e => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="logo-badge">A</div>
              <h2>AIVA</h2>
              <button onClick={() => setMobileMenuOpen(false)} className="close-btn"><X size={24} /></button>
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

      {/* ── Main Content Area ── */}
      <main className="dashboard-content">
        <header className="dashboard-topbar glass-panel">
          <div className="topbar-left">
            <button className="hamburger-btn" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <span className="breadcrumb">AIVA <ChevronRight size={14} /> {breadcrumbLabel[activeView]}</span>
          </div>
          
          <div className="topbar-right" ref={menuRef}>
            <span className="greeting">Hi, <strong>{firstName || 'there'}</strong></span>
            <button className="avatar-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {firstInitial}
            </button>
            
            {menuOpen && (
              <div className="dropdown-menu glass-panel">
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
          {/* ══ HOME VIEW ══ */}
          {activeView === 'dashboard' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="dashboard-home">
              
              <div className="hero-section glass-panel">
                <div className="hero-content">
                  <span className="badge">AI-Powered Interviews</span>
                  <h1>{firstName ? `Welcome back, ${firstName}.` : 'Ace Your Next Interview.'}</h1>
                  <p className="subtitle">
                    <TypewriterText text="Your personal AI interviewer. Get instant feedback, adaptive questions, and detailed score reports." delay={30} />
                  </p>
                  <div className="hero-actions">
                    <button className="btn-primary" onClick={() => setActiveView('interviews')}>Start Practicing</button>
                    <button className="btn-secondary" onClick={() => setActiveView('history')}>View History</button>
                  </div>
                </div>
              </div>

              <div className="how-it-works-grid">
                {HOW_IT_WORKS.map((step, i) => (
                  <div key={i} className="step-card glass-panel tilt-3d">
                    <div className="step-number">{step.step}</div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="features-section">
                <h2>Everything you need to prepare.</h2>
                <div className="features-grid">
                  {FEATURES.map((feat, i) => (
                    <div key={i} className="feature-card glass-panel tilt-3d">
                      <div className="feature-icon">{feat.icon}</div>
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ══ MOCK INTERVIEWS VIEW ══ */}
          {activeView === 'interviews' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="view-header">
                <h2>Mock Interviews</h2>
                <p>Choose a domain and start practicing with AI-generated questions.</p>
              </div>
              
              {loading ? (
                <div className="skeleton-grid">
                  {[1,2,3,4,5,6].map(i => <div key={i} className="skeleton-card glass-panel" />)}
                </div>
              ) : (
                <div className="interview-grid">
                  {interviewTypes.map((item) => (
                    <div key={item.id} className="domain-card glass-panel tilt-3d">
                      <div className="domain-header">
                        <span className="domain-icon">{INTERVIEW_ICONS[item.id] || '💼'}</span>
                        <span className="domain-badge">AI</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <button className="btn-primary start-btn" onClick={() => setModalInterview(item)}>
                        Start Session <ChevronRight size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* ══ PROGRESS VIEW ══ */}
          {activeView === 'progress' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="view-header">
                <h2>Your Progress</h2>
                <p>Track your performance and improvements over time.</p>
              </div>

              {historyLoading ? (
                <div className="loading-text">Loading stats...</div>
              ) : (
                <div className="stats-grid">
                  <div className="stat-card glass-panel tilt-3d">
                    <div className="stat-icon purple"><Layers size={24} /></div>
                    <div className="stat-info">
                      <span className="stat-value">{history?.totalInterviews ?? 0}</span>
                      <span className="stat-label">Total Sessions</span>
                    </div>
                  </div>
                  
                  <div className="stat-card glass-panel tilt-3d">
                    <div className="stat-icon blue"><TrendingUp size={24} /></div>
                    <div className="stat-info">
                      <span className="stat-value">{history?.averageScore ?? '—'}<small>/10</small></span>
                      <span className="stat-label">Average Score</span>
                    </div>
                  </div>

                  <div className="stat-card glass-panel tilt-3d">
                    <div className="stat-icon gold"><Target size={24} /></div>
                    <div className="stat-info">
                      <span className="stat-value">{history?.bestScore ?? '—'}<small>/10</small></span>
                      <span className="stat-label">Best Score</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* ══ HISTORY VIEW ══ */}
          {activeView === 'history' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="view-header">
                <h2>Session History</h2>
                <p>Review past performance and AI feedback.</p>
              </div>

              {historyLoading ? (
                <div className="skeleton-grid">
                  {[1,2,3].map(i => <div key={i} className="skeleton-row glass-panel" />)}
                </div>
              ) : !history || history.sessions.length === 0 ? (
                <div className="empty-state glass-panel">
                  <HistoryIcon size={48} className="empty-icon" />
                  <h3>No sessions yet</h3>
                  <p>Complete your first mock interview to see your history here.</p>
                  <button className="btn-primary" onClick={() => setActiveView('interviews')}>Start an Interview</button>
                </div>
              ) : (
                <div className="history-list">
                  {history.sessions.map((s, i) => {
                    const { cls, text } = getScoreLabel(s.score);
                    const scorePercent = (s.score / 10) * 100;
                    return (
                      <div key={s.sessionId} className="history-row glass-panel tilt-3d">
                        <div className="history-icon">
                          {INTERVIEW_ICONS[Object.keys(INTERVIEW_ICONS).find(k => s.role.toLowerCase().includes(k.replace('-', ' ')))] || '💼'}
                        </div>
                        <div className="history-details">
                          <h4>{s.role}</h4>
                          <span>{s.questionCount} questions • {formatDate(s.completedAt)}</span>
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
