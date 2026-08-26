import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, LockKeyhole, Building2, UserRound } from 'lucide-react';
import PasswordInput from '../components/PasswordInput';
import AssistantScene from '../components/AssistantScene';
import { orgSignup } from '../api/auth';
import './Auth.css';

export default function OrgSignup() {
  const navigate = useNavigate();
  const [organizationName, setOrganizationName] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await orgSignup(organizationName, adminName, adminEmail, password);
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <section className="auth-brand-panel">
        <div className="auth-brand-inner">
          <div className="auth-kicker">Hiring assessments, AI-graded</div>
          <h1>Set up your company workspace.</h1>
          <p>Create tests, invite candidates, and review AI-graded results — without exposing scores to applicants.</p>
          <AssistantScene className="auth-assistant" label="Company workspace ready" />
        </div>
      </section>

      <section className="auth-form-panel">
        <motion.div className="auth-container app-shell-panel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <div className="auth-header">
            <span className="eyebrow">Company registration</span>
            <h2 className="auth-title">Register your company</h2>
            <p className="auth-subtitle">This creates your organization and the first admin account.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {error && <div className="auth-error">{error}</div>}

            <div className="auth-field">
              <label><Building2 size={16} /> Company Name</label>
              <input value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} required />
            </div>
            <div className="auth-field">
              <label><UserRound size={16} /> Admin Name</label>
              <input value={adminName} onChange={(e) => setAdminName(e.target.value)} required />
            </div>
            <div className="auth-field">
              <label><Mail size={16} /> Admin Email</label>
              <input type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} required />
            </div>
            <div className="auth-field">
              <label><LockKeyhole size={16} /> Password</label>
              <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
            </div>

            <button type="submit" className="btn-primary auth-btn" disabled={loading}>
              {loading ? 'Creating workspace...' : 'Create company workspace'}
            </button>
          </form>

          <div className="auth-switch">
            Already registered? <Link to="/login" className="auth-link">Log in</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
