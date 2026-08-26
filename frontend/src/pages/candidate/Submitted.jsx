import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import AssistantScene from '../../components/AssistantScene';
import '../Interview.css';

export default function Submitted() {
  const navigate = useNavigate();
  return (
    <div className="interview-layout">
      <div className="centered-card app-shell-panel">
        <AssistantScene label="Assessment submitted" />
        <div className="centered-copy">
          <CheckCircle size={54} className="icon-success" />
          <h2>Assessment Submitted</h2>
          <p>Thanks for completing the assessment. The hiring team will review your responses and get back to you.</p>
          <button className="btn-primary" onClick={() => navigate('/tests')}>Back to My Tests</button>
        </div>
      </div>
    </div>
  );
}
