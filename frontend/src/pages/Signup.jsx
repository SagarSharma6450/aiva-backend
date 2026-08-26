import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, LockKeyhole, UserRound } from 'lucide-react';
import PasswordInput from '../components/PasswordInput';
import TypewriterText from '../components/TypewriterText';
import AssistantScene from '../components/AssistantScene';
import { signup } from '../api/auth';
import './Auth.css';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [highestQualification, setHighestQualification] = useState('');
  const [institution, setInstitution] = useState('');
  const [graduationYear, setGraduationYear] = useState('');


  // YOUR EXACT LOGIC - UNTOUCHED
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signup(name, email, password, highestQualification, institution, Number(graduationYear) || null);
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
          <div className="auth-kicker">Practice room setup</div>
          <h1>
            <TypewriterText text="Create your AIVA workspace." speed={38} />
          </h1>
          <p>
            Build a preparation profile, upload resume context later, and start focused AI interview sessions across technical and behavioral tracks.
          </p>
          <AssistantScene className="auth-assistant" label="New interview workspace" />
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
            <span className="eyebrow">Start practicing</span>
            <h2 className="auth-title">Create account</h2>
            <p className="auth-subtitle">Set up your interview workspace in a few seconds.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {error && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="auth-error">
                {error}
              </motion.div>
            )}

            <div className="auth-field">
              <label htmlFor="name"><UserRound size={16} /> Full Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </div>

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
                placeholder="At least 6 characters"
                required
                minLength={6}
                autoComplete="new-password"
              />
            </div>

            <button type="submit" className="btn-primary auth-btn" disabled={loading}>
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <div className="auth-switch">
            Already have an account? <Link to="/login" className="auth-link">Log in</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
