import { useState } from 'react';
import './InterviewModal.css';

export default function InterviewModal({ interview, onClose, onStart, hasResume }) {
  const [duration, setDuration] = useState(10);
  const [questionCount, setQuestionCount] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart({ durationMinutes: duration, questionCount });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <h2 className="modal-title">Mock Interview Details</h2>
        <div className="modal-info">
          <p><strong>{interview?.title}</strong></p>
          <p className="modal-desc">{interview?.description}</p>
        </div>

        {/* Resume personalization notice */}
        {hasResume ? (
          <div className="modal-resume-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Questions will be personalized based on your resume
          </div>
        ) : (
          <div className="modal-resume-missing">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Upload your resume in Profile to get personalized questions
          </div>
        )}

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="modal-field">
            <label>Interview Duration (minutes)</label>
           <select value={duration} onChange={(e) => setDuration(Number(e.target.value))}>
  {[5, 10, 15, 20, 25, 30].map((n) => (
    <option key={n} value={n}>{n} min</option>
  ))}
</select>
          </div>
          <div className="modal-field">
            <label>Number of Questions</label>
            <select value={questionCount} onChange={(e) => setQuestionCount(Number(e.target.value))}>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>{n} questions</option>
              ))}
            </select>
          </div>
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="modal-btn modal-btn-secondary">
              Cancel
            </button>
            <button type="submit" className="modal-btn modal-btn-primary">
              Start Interview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
