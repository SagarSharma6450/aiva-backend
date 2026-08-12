import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TypewriterText from './TypewriterText';

const FEATURES = [
  'Real-time AI feedback on every answer',
  '6 interview domains — Java to System Design',
  'Detailed score reports after each session',
];

export default function AuthLayout({ children, title, subtitle, linkTo, linkText, linkLabel }) {
  const [featureIdx, setFeatureIdx] = useState(0);

  // Simplified interval logic using Framer Motion for the visual transitions
  useEffect(() => {
    const timer = setInterval(() => {
      setFeatureIdx((prev) => (prev + 1) % FEATURES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="auth-page">
      {/* Left panel — Branding & 3D Animation */}
      <aside className="auth-brand-panel">
        <div className="auth-brand-inner">
          <div className="auth-orb-scene">
            <div className="auth-orb-ring ar1" />
            <div className="auth-orb-ring ar2" />
            <div className="auth-orb-core">AI</div>
          </div>

          <div className="auth-brand-text" style={{ marginBottom: '32px' }}>
            <h1 className="auth-logo">AIVA</h1>
            <div className="auth-tagline" style={{ height: '48px' }}>
              <TypewriterText
                text="AI Interview & Virtual Assistant"
                speed={35}
                delay={300}
              />
            </div>
          </div>

          {/* Smooth rotating features list */}
          <div className="auth-feature-line" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', height: '24px' }}>
            <span 
              className="auth-feature-dot" 
              style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-light)' }} 
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={featureIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ fontSize: '0.95rem', color: '#cbd5e1', fontWeight: '400' }}
              >
                {FEATURES[featureIdx]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </aside>

      {/* Right panel — Glassmorphic Form Wrapper */}
      <main className="auth-form-panel">
        <motion.div 
          className="auth-container glass-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="auth-header">
            <h2 className="auth-title">{title}</h2>
            <p className="auth-subtitle">{subtitle}</p>
          </div>
          
          {children}
          
          <div className="auth-switch">
            {linkText}{' '}
            <Link to={linkTo} className="auth-link">{linkLabel}</Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
