import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, PlayCircle, Clock, CheckCircle2, Ban, CalendarClock } from 'lucide-react';
import { getAssignedTests } from '../../api/candidateTests';
import AssistantScene from '../../components/AssistantScene';
import '../Dashboard.css';

const STATE_META = {
  open: { label: 'Enter Assessment', badge: 'score-mid', icon: PlayCircle },
  upcoming: { label: 'Not Yet Open', badge: 'score-avg', icon: Clock },
  completed: { label: 'Completed', badge: 'score-high', icon: CheckCircle2 },
  expired: { label: 'Expired', badge: 'score-low', icon: Ban },
};

function getWindowState(t, now) {
  if (t.status === 'COMPLETED') return 'completed';
  const start = new Date(t.slotStart);
  const end = new Date(t.slotEnd);
  if (t.status === 'EXPIRED' || now > end) return 'expired';
  if (now < start) return 'upcoming';
  return 'open'; // now is within [start, end] — candidate may enter any time in this range
}

export default function CandidateTests() {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(new Date());
  const [userName] = useState(localStorage.getItem('userName') || '');

  const refresh = useCallback(() => {
    getAssignedTests().then(setTests).catch(() => {});
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('token')) { navigate('/login'); return; }
    refresh();
    setLoading(false);
  }, [navigate, refresh]);

  // tick every second so a card flips from "Not Yet Open" to "Enter Assessment"
  // (or to "Expired") live, without the candidate needing to refresh the page
  useEffect(() => {
    const clockTimer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(clockTimer);
  }, []);

  // also re-fetch from the backend periodically / on tab focus, so server-driven
  // changes (admin deleted a slot, another device completed the test, etc.) show up
  useEffect(() => {
    const pollTimer = setInterval(refresh, 20000);
    const onFocus = () => refresh();
    window.addEventListener('focus', onFocus);
    return () => { clearInterval(pollTimer); window.removeEventListener('focus', onFocus); };
  }, [refresh]);

  const logout = () => { localStorage.clear(); navigate('/login'); };

  const states = tests.map((t) => getWindowState(t, now));
  const available = states.filter((s) => s === 'open').length;
  const completed = states.filter((s) => s === 'completed').length;
  const expired = states.filter((s) => s === 'expired').length;

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
          {tests.map((t, i) => {
            const state = states[i];
            const meta = STATE_META[state];
            const StatusIcon = meta.icon;
            return (
              <motion.div key={`${t.testId}-${t.slotId}`} className="domain-row" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="domain-mark"><StatusIcon size={22} /></div>
                <div className="domain-copy">
                  <div className="domain-title-line">
                    <h3>{t.title}</h3>
                    <span className={`history-badge ${meta.badge}`}>{meta.label}</span>
                  </div>
                  <p>{t.roleCategory} · {t.durationMinutes} min · {t.questionCount} MCQ questions</p>
                  <p style={{ fontSize: 12, marginTop: 4 }}>
                    Window: {new Date(t.slotStart).toLocaleString()} — {new Date(t.slotEnd).toLocaleString()}
                  </p>
                </div>
                <button
                  className="btn-primary start-btn"
                  disabled={state !== 'open'}
                  onClick={() => navigate(`/tests/${t.testId}/instructions`)}
                >
                  {meta.label}
                </button>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
