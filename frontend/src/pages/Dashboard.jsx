import { useEffect, useState, useRef } from 'react';
import './Dashboard.css';
import { useNavigate, Link } from 'react-router-dom';
import { getMockInterviewTypes, startSession, getInterviewHistory } from '../api/interview';
import { getProfile } from '../api/profile';
import InterviewModal from '../components/InterviewModal';

const INTERVIEW_ICONS = {
  java: '☕',
  python: '🐍',
  frontend: '🎨',
  'data-science': '📊',
  'system-design': '🏗️',
  behavioral: '🤝',
};

const NAV_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: 'interviews',
    label: 'Mock Interviews',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    id: 'history',
    label: 'Session History',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 'progress',
    label: 'Progress',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
];

const FEATURES = [
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>),
    color: 'feat-green',
    title: 'Real-Time AI Feedback',
    desc: 'Get instant, detailed evaluation on every answer — just like a real interviewer sitting across from you.',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>),
    color: 'feat-gold',
    title: 'Adaptive Questions',
    desc: 'Questions adapt to your domain and level — covering CS fundamentals and role-specific specialization topics.',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>),
    color: 'feat-blue',
    title: 'Progress Tracking',
    desc: 'Every session is saved. Track scores over time and identify exactly what to study and improve next.',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>),
    color: 'feat-purple',
    title: 'Fullscreen Test Mode',
    desc: 'Simulates a proctored environment with tab-switch detection — your practice feels exactly like the real thing.',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
    color: 'feat-pink',
    title: '6 Interview Domains',
    desc: 'Java, Python, Frontend, Data Science, System Design, and HR — full coverage across every tech career path.',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>),
    color: 'feat-teal',
    title: 'Detailed Score Report',
    desc: 'After every session — a full breakdown of strengths, weaknesses, study recommendations, and interview tips.',
  },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Choose Your Domain', desc: 'Pick from 6 interview tracks tailored to your target role.' },
  { step: '02', title: 'Set Preferences', desc: 'Configure question count and session settings before you begin.' },
  { step: '03', title: 'Answer in Fullscreen', desc: 'The AI asks questions one by one in a focused environment.' },
  { step: '04', title: 'Get Your Report', desc: 'Receive a detailed score, feedback, and actionable improvement tips.' },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [interviewTypes, setInterviewTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalInterview, setModalInterview] = useState(null);
  const menuRef = useRef(null);

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [history, setHistory] = useState(null);
  const [historyLoading, setHistoryLoading] = useState(true);

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
    <div className={`app-shell ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>

      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />
      </div>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-logo"><span className="brand-icon">A</span></div>
          {sidebarOpen && (
            <div className="brand-text">
              <span className="brand-name">AIVA</span>
              <span className="brand-tagline">AI Interview And Virtual Assistant</span>
            </div>
          )}
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {sidebarOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>
        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeView === item.id ? 'nav-item-active' : ''}`}
              onClick={() => setActiveView(item.id)}
              title={!sidebarOpen ? item.label : undefined}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
              {activeView === item.id && <span className="nav-active-bar" />}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <Link to="/profile" className="sidebar-user" title={!sidebarOpen ? userName : undefined}>
            <div className="user-avatar">{firstInitial}</div>
            {sidebarOpen && (
              <div className="user-info">
                <span className="user-name">{userName || 'User'}</span>
                <span className="user-email">{userEmail}</span>
              </div>
            )}
          </Link>
          <button className="logout-btn" onClick={handleLogout} title="Log out">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="main-content">
        <header className="topbar">
          <div className="topbar-left">
            <div className="topbar-breadcrumb">
              <span className="breadcrumb-root">AIVA</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              <span className="breadcrumb-current">{breadcrumbLabel[activeView]}</span>
            </div>
          </div>
          <div className="topbar-right" ref={menuRef}>
            <div className="topbar-greeting">Hi, <strong>{firstName || 'there'}</strong> 👋</div>
            <button className="topbar-avatar" onClick={() => setMenuOpen(!menuOpen)}>{firstInitial}</button>
            {menuOpen && (
              <div className="topbar-dropdown">
                <Link to="/profile" className="dropdown-item" onClick={() => setMenuOpen(false)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                  Profile
                </Link>
                <button className="dropdown-item dropdown-logout" onClick={handleLogout}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                  Log out
                </button>
              </div>
            )}
          </div>
        </header>

        {/* ══ HOME VIEW ══ */}
        {activeView === 'dashboard' && (
          <div className="view-content view-dashboard">

            {/* Hero */}
            <div className="hero-banner">
              <div className="hero-left">
                <div className="hero-badge">AI-Powered Mock Interviews</div>
                <h1 className="hero-title">
                  {firstName ? `Welcome back, ${firstName}!` : 'Ace Your Next Interview'}
                </h1>
                <p className="hero-sub">
                  AIVA — <strong>AI Interview And Virtual Assistant</strong> — gives you a real interview experience with instant AI feedback, adaptive questions, and detailed score reports.
                </p>
                <div className="hero-actions">
                  <button className="hero-btn-primary" onClick={() => setActiveView('interviews')}>
                    Start Practicing
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                  <button className="hero-btn-secondary" onClick={() => setActiveView('history')}>
                    View History
                  </button>
                </div>
              </div>
              <div className="hero-right">
                <div className="hero-visual">
                  <div className="visual-ring ring-1" /><div className="visual-ring ring-2" /><div className="visual-ring ring-3" />
                  <div className="visual-core"><span>AI</span></div>
                </div>
              </div>
            </div>

            {/* About AIVA */}
            <div className="about-section">
              <div className="about-section-left">
                <div className="about-tag">Who We Are</div>
                <h2 className="about-title">Your AI-powered interview coach</h2>
                <p className="about-body">
                  AIVA stands for <strong>AI Interview And Virtual Assistant</strong>. We built AIVA to bridge the gap between preparation and performance. Most candidates fail not because they lack knowledge — but because they've never practiced under real interview conditions.
                </p>
                <p className="about-body">
                  AIVA uses cutting-edge large language models to generate domain-specific questions, evaluate your answers in depth, and give you the kind of feedback that normally only comes from a senior engineer or HR professional.
                </p>
                <button className="about-cta" onClick={() => setActiveView('interviews')}>
                  Try a Mock Interview
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
              </div>
              <div className="about-section-right">
                <div className="about-stat-grid">
                  <div className="about-stat-box"><span className="about-stat-num">6</span><span className="about-stat-label">Interview Domains</span></div>
                  <div className="about-stat-box"><span className="about-stat-num">AI</span><span className="about-stat-label">Powered Evaluation</span></div>
                  <div className="about-stat-box"><span className="about-stat-num">∞</span><span className="about-stat-label">Practice Sessions</span></div>
                  <div className="about-stat-box"><span className="about-stat-num">instant</span><span className="about-stat-label">Feedback Speed</span></div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="section-header" style={{ marginTop: '48px' }}>
              <div>
                <h2 className="section-title">Everything you need to prepare</h2>
                <p className="section-sub">Built for serious candidates who want real results</p>
              </div>
            </div>
            <div className="features-grid">
              {FEATURES.map((f, i) => (
                <div key={i} className="feature-card" style={{ animationDelay: `${i * 60}ms` }}>
                  <div className={`feature-icon ${f.color}`}>{f.icon}</div>
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* How it works */}
            <div className="section-header" style={{ marginTop: '52px' }}>
              <div>
                <h2 className="section-title">How it works</h2>
                <p className="section-sub">From zero to interview-ready in four steps</p>
              </div>
            </div>
            <div className="steps-row">
              {HOW_IT_WORKS.map((s, i) => (
                <div key={i} className="step-card">
                  <div className="step-number">{s.step}</div>
                  <h4 className="step-title">{s.title}</h4>
                  <p className="step-desc">{s.desc}</p>
                  {i < HOW_IT_WORKS.length - 1 && <div className="step-connector" />}
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="cta-banner">
              <div className="cta-banner-left">
                <h2 className="cta-title">Ready to practice?</h2>
                <p className="cta-sub">Pick a domain and start your first mock interview right now.</p>
              </div>
              <button className="cta-btn" onClick={() => setActiveView('interviews')}>
                Start Now
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>

          </div>
        )}

        {/* ══ MOCK INTERVIEWS VIEW ══ */}
        {activeView === 'interviews' && (
          <div className="view-content view-interviews">
            <div className="section-header">
              <div>
                <h2 className="section-title">Mock Interviews</h2>
                <p className="section-sub">Choose a domain and start practicing with AI-generated questions</p>
              </div>
            </div>
            {loading ? (
              <div className="cards-skeleton">
                {[1,2,3,4,5,6].map(i => <div key={i} className="skeleton-card" />)}
              </div>
            ) : (
              <div className="interview-cards-grid">
                {interviewTypes.map((item, idx) => (
                  <div key={item.id} className="interview-card" style={{ animationDelay: `${idx * 60}ms` }}>
                    <div className="interview-card-top">
                      <div className="interview-card-icon">{INTERVIEW_ICONS[item.id] || '💼'}</div>
                      <div className="interview-card-badge">AI Powered</div>
                    </div>
                    <h3 className="interview-card-title">{item.title}</h3>
                    <p className="interview-card-desc">{item.description}</p>
                    <button className="interview-card-btn" onClick={() => setModalInterview(item)}>
                      <span>Start Interview</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="interview-tips-strip">
              <div className="tip-strip-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <span>Each session generates fresh questions unique to your domain</span>
              </div>
              <div className="tip-strip-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Answers are evaluated by AI after all questions are complete</span>
              </div>
              <div className="tip-strip-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span>Scores and feedback are saved to your history automatically</span>
              </div>
            </div>
          </div>
        )}

        {activeView === 'progress' && (
          <div className="view-content view-history">
            <div className="section-header">
              <h2 className="section-title">Progress</h2>
            </div>
            {historyLoading ? (
              <p className="history-loading">Loading...</p>
            ) : (
              <div className="stats-row" style={{ marginBottom: '32px' }}>
                <div className="stat-card">
                  <div className="stat-card-icon stat-icon-blue">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div className="stat-card-body">
                    <span className="stat-card-value">{history?.totalInterviews ?? 0}</span>
                    <span className="stat-card-label">Total Interviews</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-card-icon stat-icon-green">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </div>
                  <div className="stat-card-body">
                    <span className="stat-card-value">{history?.averageScore ?? '—'}<span className="stat-card-unit">/10</span></span>
                    <span className="stat-card-label">Average Score</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-card-icon stat-icon-gold">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <div className="stat-card-body">
                    <span className="stat-card-value stat-gold">{history?.bestScore ?? '—'}<span className="stat-card-unit">/10</span></span>
                    <span className="stat-card-label">Best Score</span>
                  </div>
                </div>
                <div className="stat-card stat-card-cta" onClick={() => setActiveView('history')}>
                  <div className="stat-card-icon stat-icon-purple">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div className="stat-card-body">
                    <span className="stat-card-value">{history?.sessions?.length ?? 0}</span>
                    <span className="stat-card-label">View History →</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* ══ HISTORY VIEW ══ */}
        {activeView === 'history' && (
          <div className="view-content view-history">
            <div className="section-header">
              <div>
                <h2 className="section-title">Session History</h2>
                <p className="section-sub">All your completed mock interview sessions</p>
              </div>
              {history && history.totalInterviews > 0 && (
                <div className="history-summary-pills">
                  <span className="h-pill">🎯 {history.totalInterviews} Sessions</span>
                  <span className="h-pill">📈 Avg {history.averageScore}/10</span>
                  <span className="h-pill h-pill-gold">⭐ Best {history.bestScore}/10</span>
                </div>
              )}
            </div>
            {historyLoading ? (
              <div className="cards-skeleton">
                {[1,2,3].map(i => <div key={i} className="skeleton-card skeleton-row" />)}
              </div>
            ) : !history || history.sessions.length === 0 ? (
              <div className="history-empty">
                <div className="history-empty-visual">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3>No sessions yet</h3>
                <p>Complete your first mock interview to see your history here.</p>
                <button className="history-empty-btn" onClick={() => setActiveView('interviews')}>Start an Interview</button>
              </div>
            ) : (
              <div className="history-list">
                {history.sessions.map((s, i) => {
                  const { cls, text } = getScoreLabel(s.score);
                  const scorePercent = (s.score / 10) * 100;
                  return (
                    <div key={s.sessionId} className="history-row" style={{ animationDelay: `${i * 50}ms` }}>
                      <div className="history-row-index">#{i + 1}</div>
                      <div className="history-row-icon">
                        {INTERVIEW_ICONS[Object.keys(INTERVIEW_ICONS).find(k => s.role.toLowerCase().includes(k.replace('-', ' ')))] || '💼'}
                      </div>
                      <div className="history-row-main">
                        <span className="history-row-role">{s.role}</span>
                        <span className="history-row-meta">{s.questionCount} questions · {formatDate(s.completedAt)}</span>
                      </div>
                      <div className="history-row-bar">
                        <div className="history-bar-track">
                          <div className={`history-bar-fill ${cls}`} style={{ width: `${scorePercent}%` }} />
                        </div>
                      </div>
                      <div className={`history-row-score ${cls}`}>
                        <span className="score-num">{s.score}</span>
                        <span className="score-denom">/10</span>
                      </div>
                      <div className={`history-row-badge ${cls}`}>{text}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

      </main>

      {modalInterview && (
        <InterviewModal
          interview={modalInterview}
          onClose={() => setModalInterview(null)}
          onStart={handleStartInterview}
        />
      )}
    </div>
  );
}
