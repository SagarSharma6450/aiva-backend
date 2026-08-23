import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, LockKeyhole } from 'lucide-react';
import PasswordInput from '../components/PasswordInput';
import TypewriterText from '../components/TypewriterText';
import AssistantScene from '../components/AssistantScene';
import { login } from '../api/auth';
import './Auth.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // YOUR EXACT LOGIC - UNTOUCHED
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const token = await login(email, password);
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <section className="auth-brand-panel">
        <div className="auth-brand-inner">
          <div className="auth-kicker">AI Interview & Virtual Assistant</div>
          <h1>
            <TypewriterText text="Welcome back to AIVA." speed={42} />
          </h1>
          <p>
            Continue your mock interview practice, review previous feedback, and prepare with a focused assistant that behaves like a real interviewer.
          </p>
          <AssistantScene className="auth-assistant" label="Assistant ready for practice" />
        </div>
      </section>

      <section className="auth-form-panel">
        <motion.div
          className="auth-container app-shell-panel"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="auth-header">
            <span className="eyebrow">Secure sign in</span>
            <h2 className="auth-title">Log in</h2>
            <p className="auth-subtitle">Open your interview workspace and saved session history.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {error && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="auth-error">
                {error}
              </motion.div>
            )}

            <div className="auth-field">
              <label htmlFor="email"><Mail size={16} /> Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="auth-field">
              <label htmlFor="password"><LockKeyhole size={16} /> Password</label>
              <PasswordInput
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className="btn-primary auth-btn" disabled={loading}>
              {loading ? 'Authenticating...' : 'Log in to workspace'}
            </button>
          </form>

          <div className="auth-switch">
            Don't have an account? <Link to="/signup" className="auth-link">Create one</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
