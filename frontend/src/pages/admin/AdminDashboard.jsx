import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Plus, ClipboardCheck, Users, Layers } from 'lucide-react';
import { listTests } from '../../api/admin';
import AssistantScene from '../../components/AssistantScene';
import '../Dashboard.css';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('token')) { navigate('/login'); return; }
    listTests().then(setTests).catch(() => setTests([])).finally(() => setLoading(false));
  }, [navigate]);

  const logout = () => { localStorage.clear(); navigate('/login'); };
  const activeCount = tests.filter((t) => t.active).length;

  return (
    <div className="dashboard-content" style={{ padding: 24, maxWidth: 1180, margin: '0 auto' }}>
      <header className="dashboard-topbar app-shell-panel" style={{ marginBottom: 22 }}>
        <span className="breadcrumb">AIVA · Company Workspace</span>
        <button className="btn-secondary" onClick={logout}><LogOut size={16} /> Log out</button>
      </header>

      <section className="hero-section" style={{ marginBottom: 22 }}>
        <div className="hero-content">
          <span className="eyebrow">Hiring assessments</span>
          <h1>Manage Your Assessments</h1>
          <p className="subtitle">Create MCQ assessments, invite candidates by email, set time slots, and review AI-graded reports — scores stay hidden from candidates until you decide.</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/admin/tests/new')}><Plus size={16} /> New Assessment</button>
          </div>
        </div>
        <div className="hero-visual"><AssistantScene label="Admin workspace ready" /></div>
      </section>

      <section className="overview-strip" style={{ marginBottom: 22 }}>
        <div className="overview-item"><span>{tests.length}</span><p>Total assessments</p></div>
        <div className="overview-item"><span>{activeCount}</span><p>Active</p></div>
        <div className="overview-item"><span>{tests.length - activeCount}</span><p>Inactive</p></div>
      </section>

      <div className="view-header">
        <span className="eyebrow">All assessments</span>
        <h2>Assessments</h2>
      </div>

      {loading ? (
        <div className="skeleton-grid">{[1, 2].map((i) => <div key={i} className="skeleton-card" />)}</div>
      ) : tests.length === 0 ? (
        <div className="empty-state">
          <ClipboardCheck size={44} className="empty-icon" />
          <h3>No assessments yet</h3>
          <p>Create your first MCQ assessment to start inviting candidates.</p>
          <button className="btn-primary" onClick={() => navigate('/admin/tests/new')}>Create Assessment</button>
        </div>
      ) : (
        <div className="interview-catalog">
          {tests.map((t) => (
            <motion.div
              key={t.id}
              className="domain-row"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/admin/tests/${t.id}`)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="domain-mark"><Layers size={22} /></div>
              <div className="domain-copy">
                <div className="domain-title-line">
                  <h3>{t.title}</h3>
                  <span className={`history-badge ${t.active ? 'score-high' : 'score-low'}`}>{t.active ? 'Active' : 'Inactive'}</span>
                </div>
                <p>{t.roleCategory} · {t.durationMinutes} min · {t.questionCount} MCQ questions</p>
              </div>
              <button className="btn-primary start-btn" onClick={(e) => { e.stopPropagation(); navigate(`/admin/tests/${t.id}`); }}>
                <Users size={16} /> Manage
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
