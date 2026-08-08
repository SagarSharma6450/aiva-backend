import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';

const FEATURES = [
  'Real-time AI feedback on every answer',
  '6 interview domains — Java to System Design',
  'Detailed score reports after each session',
];

export default function AuthLayout({ children, title, subtitle, linkTo, linkText, linkLabel }) {
  const [featureIdx, setFeatureIdx] = useState(0);
  const [showFeature, setShowFeature] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowFeature(false);
      setTimeout(() => {
        setFeatureIdx((i) => (i + 1) % FEATURES.length);
        setShowFeature(true);
      }, 400);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="auth-page">
      <div className="auth-split">
        {/* Left panel — branding */}
        <aside className="auth-brand-panel">
          <div className="auth-brand-inner">
            <div className="auth-orb-scene">
              <div className="auth-orb-ring ar1" />
              <div className="auth-orb-ring ar2" />
              <div className="auth-orb-core">AI</div>
            </div>

            <div className="auth-brand-text">
              <h1 className="auth-logo">AIVA</h1>
              <p className="auth-tagline">
                <TypewriterText
                  text="AI Interview & Virtual Assistant"
                  speed={35}
                  delay={300}
                />
              </p>
            </div>

            <div className={`auth-feature-line ${showFeature ? 'auth-feature-visible' : ''}`}>
              <span className="auth-feature-dot" />
              {showFeature && (
                <TypewriterText
                  key={featureIdx}
                  text={FEATURES[featureIdx]}
                  speed={28}
                  delay={100}
                />
              )}
            </div>
          </div>
        </aside>

        {/* Right panel — form */}
        <main className="auth-form-panel">
          <div className="auth-container">
            <div className="auth-card">
              <h2 className="auth-title">{title}</h2>
              <p className="auth-subtitle">{subtitle}</p>
              {children}
              <p className="auth-switch">
                {linkText}{' '}
                <Link to={linkTo} className="auth-link">{linkLabel}</Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
