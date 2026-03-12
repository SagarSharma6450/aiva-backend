import { useState } from 'react';
import './InterviewModal.css';

export default function InterviewModal({ interview, onClose, onStart }) {
  const [duration, setDuration] = useState(10);
  const [questionCount, setQuestionCount] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart({ durationMinutes: duration, questionCount });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2 className="modal-title">Mock Interview Details</h2>
        <div className="modal-info">
          <p><strong>{interview?.title}</strong></p>
          <p className="modal-desc">{interview?.description}</p>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="modal-field">
            <label>Interview Duration (minutes)</label>
            <select value={duration} onChange={(e) => setDuration(Number(e.target.value))}>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
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
