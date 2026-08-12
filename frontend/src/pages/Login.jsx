import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PasswordInput from '../components/PasswordInput';
import { login } from '../api/auth';
import { motion } from 'framer-motion';
import './Auth.css';

// Built-in Typewriter effect for the greeting
const TypewriterText = ({ text, delay = 40 }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <span>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{ color: 'var(--accent-main)', marginLeft: '4px' }}
      >
        |
      </motion.span>
    </span>
  );
};

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
      {/* Left Panel - Brand & Animation */}
      <div className="auth-brand-panel">
        <div className="auth-brand-inner">
          <div className="auth-orb-scene">
            <div className="auth-orb-ring ar1"></div>
            <div className="auth-orb-ring ar2"></div>
            <div className="auth-orb-core">AI</div>
          </div>
          
          <h1 className="auth-logo">
            <TypewriterText text="Welcome back to AIVA." delay={50} />
          </h1>
          <p className="auth-tagline">
            Your intelligent virtual assistant for technical and behavioral interview preparation.
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="auth-form-panel">
        <motion.div 
          className="auth-container glass-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="auth-header">
            <h2 className="auth-title">Log In</h2>
            <p className="auth-subtitle">Access your dashboard and history.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {error && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="auth-error">
                {error}
              </motion.div>
            )}
            
            <div className="auth-field">
              <label htmlFor="email">Email Address</label>
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
              <label htmlFor="password">Password</label>
              <PasswordInput
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
              />
            </div>
            
            <button type="submit" className="btn-primary auth-btn" disabled={loading}>
              {loading ? 'Authenticating...' : 'Log In to Workspace'}
            </button>
          </form>

          <div className="auth-switch">
            Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
