import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listTests } from '../../api/admin';
import '../Dashboard.css';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [tests, setTests] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
      return;
    }

    listTests()
      .then(setTests)
      .catch(() => setTests([]));
  }, [navigate]);

  return (
    <div className="dashboard-content" style={{ padding: 24 }}>
      
      <div className="view-header split-header">
        <div>
          <span className="eyebrow">Company workspace</span>
          <h2>Assessments</h2>
          <p>
            Create tests, invite candidates, and review AI-graded reports.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            className="btn-primary"
            onClick={() => navigate('/admin/tests/new')}
          >
            + New Test
          </button>

          <button
            className="btn-secondary"
            onClick={() => {
              localStorage.clear();
              navigate('/login');
            }}
          >
            Log out
          </button>
        </div>
      </div>

      <div className="history-list">
        {tests.map((t) => (
          <div
            key={t.id}
            className="history-row"
            onClick={() => navigate(`/admin/tests/${t.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <div className="history-details">
              <h4>{t.title}</h4>
              <span>
                {t.roleCategory} · {t.durationMinutes} min ·{' '}
                {t.questionCount} questions
              </span>
            </div>

            <div className="history-badge score-mid">
              {t.active ? 'Active' : 'Inactive'}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
