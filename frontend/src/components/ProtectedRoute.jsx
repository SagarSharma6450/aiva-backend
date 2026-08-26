import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ allow, children }) {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token) return <Navigate to="/login" replace />;
  if (allow && !allow.includes(role)) {
    // logged in but wrong role — send them to their own home
    const home = role === 'ORG_ADMIN' || role === 'SUPER_ADMIN' ? '/admin' : '/tests';
    return <Navigate to={home} replace />;
  }
  return children;
}
