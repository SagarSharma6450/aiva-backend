import { Link } from 'react-router-dom';

export default function AuthLayout({ children, title, subtitle, linkTo, linkText, linkLabel }) {
  return (
    <div className="auth-page">
      <div className="auth-bg" />
      <div className="auth-container">
        <header className="auth-header">
          <h1 className="auth-logo">AIVA</h1>
          <p className="auth-tagline">AI Interview & Virtual Assistant</p>
        </header>
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
    </div>
  );
}
