import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, PlayCircle, Clock, CheckCircle2, Ban, CalendarClock } from 'lucide-react';
import { getAssignedTests } from '../../api/candidateTests';
import AssistantScene from '../../components/AssistantScene';
import '../Dashboard.css';

const STATUS_META = {
  INVITED: { label: 'Available Now', cls: 'score-mid', icon: PlayCircle },
  STARTED: { label: 'In Progress', cls: 'score-avg', icon: Clock },
  COMPLETED: { label: 'Completed', cls: 'score-high', icon: CheckCircle2 },
  EXPIRED: { label: 'Expired', cls: 'score-low', icon: Ban },
};

export default function CandidateTests() {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName] = useState(localStorage.getItem('userName') || '');

  useEffect(() => {
    if (!localStorage.getItem('token')) { navigate('/login'); return; }
    getAssignedTests().then(setTests).catch(() => setTests([])).finally(() => setLoading(false));
  }, [navigate]);

  const logout = () => { localStorage.clear(); navigate('/login'); };

  const isUpcoming = (t) => t.status === 'INVITED' && new Date(t.slotStart) > new Date();
  const available = tests.filter((t) => (t.status === 'INVITED' && !isUpcoming(t)) || t.status === 'STARTED').length;
  const completed = tests.filter((t) => t.status === 'COMPLETED').length;
  const expired = tests.filter((t) => t.status === 'EXPIRED').length;

  return (
    <div className="dashboard-content" style={{ padding: 24, maxWidth: 1180, margin: '0 auto' }}>
      <header className="dashboard-topbar app-shell-panel" style={{ marginBottom: 22 }}>
        <span className="breadcrumb">AIVA · Candidate Portal</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span className="greeting">Hi, <strong>{(userName || '').split(' ')[0] || 'there'}</strong></span>
          <button className="btn-secondary" onClick={() => navigate('/dashboard')}>Practice Mode</button>
          <button className="btn-secondary" onClick={logout}><LogOut size={16} /> Log out</button>
        </div>
      </header>

      <section className="hero-section" style={{ marginBottom: 22 }}>
        <div className="hero-content">
          <span className="eyebrow">Hiring assessments</span>
          <h1>Your Assigned Tests</h1>
          <p className="subtitle">Companies invite you here to take proctored, AI-graded MCQ assessments. Complete each within its assigned time window.</p>
        </div>
        <div className="hero-visual"><AssistantScene label="Assessment portal ready" /></div>
      </section>

      <section className="overview-strip" style={{ marginBottom: 22 }}>
        <div className="overview-item"><span>{tests.length}</span><p>Total invitations</p></div>
        <div className="overview-item"><span>{available}</span><p>Available now</p></div>
        <div className="overview-item"><span>{completed}</span><p>Completed</p></div>
        <div className="overview-item"><span>{expired}</span><p>Expired</p></div>
      </section>

      <div className="view-header">
        <span className="eyebrow">Your queue</span>
        <h2>Assessments</h2>
      </div>

      {loading ? (
        <div className="skeleton-grid">{[1, 2].map((i) => <div key={i} className="skeleton-card" />)}</div>
      ) : tests.length === 0 ? (
        <div className="empty-state">
          <CalendarClock size={44} className="empty-icon" />
          <h3>No assessments yet</h3>
          <p>When a company invites you to take an assessment, it will show up here.</p>
        </div>
      ) : (
        <div className="interview-catalog">
          {tests.map((t) => {
            const meta = STATUS_META[t.status] || STATUS_META.INVITED;
            const StatusIcon = meta.icon;
            const upcoming = isUpcoming(t);
            return (
              <motion.div key={`${t.testId}-${t.slotId}`} className="domain-row" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="domain-mark"><StatusIcon size={22} /></div>
                <div className="domain-copy">
                  <div className="domain-title-line">
                    <h3>{t.title}</h3>
                    <span className={`history-badge ${upcoming ? 'score-avg' : meta.cls}`}>{upcoming ? 'Upcoming' : meta.label}</span>
                  </div>
                  <p>{t.roleCategory} · {t.durationMinutes} min · {t.questionCount} MCQ questions</p>
                  <p style={{ fontSize: 12, marginTop: 4 }}>
                    Window: {new Date(t.slotStart).toLocaleString()} — {new Date(t.slotEnd).toLocaleString()}
                  </p>
                </div>
                <button
                  className="btn-primary start-btn"
                  disabled={t.status === 'COMPLETED' || t.status === 'EXPIRED' || upcoming}
                  onClick={() => navigate(`/tests/${t.testId}/instructions`)}
                >
                  {t.status === 'COMPLETED' ? 'Completed' : t.status === 'EXPIRED' ? 'Expired' : upcoming ? 'Not Yet Open' : 'Start'}
                </button>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
