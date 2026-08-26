import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAssignedTests } from '../../api/candidateTests';
import AssistantScene from '../../components/AssistantScene';
import '../Dashboard.css';

export default function CandidateTests() {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('token')) { navigate('/login'); return; }
    getAssignedTests().then(setTests).catch(() => setTests([])).finally(() => setLoading(false));
  }, [navigate]);

  return (
    <div className="dashboard-content" style={{ padding: 24 }}>
      <div className="view-header">
        <span className="eyebrow">Assigned assessments</span>
        <h2>Your Tests</h2>
        <p>These are the assessments companies have invited you to take.</p>
      </div>

<button className="btn-secondary" style={{ float: 'right' }} onClick={() => {
  localStorage.clear();
  navigate('/login');
}}>Log out</button>

      {loading ? (
        <p>Loading...</p>
      ) : tests.length === 0 ? (
        <div className="empty-state">
          <h3>No assessments yet</h3>
          <p>When a company invites you, it will show up here.</p>
        </div>
      ) : (
        <div className="history-list">
          {tests.map((t) => (
            <div key={t.testId} className="domain-row">
              <div className="domain-mark"><AssistantScene /></div>
              <div className="domain-copy">
                <h3>{t.title}</h3>
                <p>{t.roleCategory} · {t.durationMinutes} min · {t.questionCount} questions</p>
                <p>Window: {new Date(t.slotStart).toLocaleString()} — {new Date(t.slotEnd).toLocaleString()}</p>
                <p>Status: <strong>{t.status}</strong></p>
              </div>
              <button
                className="btn-primary start-btn"
                disabled={t.status === 'COMPLETED'}
                onClick={() => navigate(`/tests/${t.testId}/instructions`)}
              >
                {t.status === 'COMPLETED' ? 'Completed' : 'View Instructions'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
