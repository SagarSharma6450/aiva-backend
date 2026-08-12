import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, FileText, AlertCircle, Clock, Hash, Play } from 'lucide-react';
import './InterviewModal.css';

export default function InterviewModal({ interview, onClose, onStart, hasResume }) {
  const [duration, setDuration] = useState(10);
  const [questionCount, setQuestionCount] = useState(5);

  // YOUR EXACT LOGIC - UNTOUCHED
  const handleSubmit = (e) => {
    e.preventDefault();
    onStart({ durationMinutes: duration, questionCount });
  };

  return (
    <motion.div 
      className="modal-overlay" 
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div 
        className="modal-box glass-panel" 
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">Configure Session</h2>
          <div className="modal-info">
            <h3>{interview?.title}</h3>
            <p className="modal-desc">{interview?.description}</p>
          </div>
        </div>

        {/* Resume personalization notice */}
        {hasResume ? (
          <div className="modal-resume-badge success">
            <FileText size={18} className="badge-icon" />
            <span>Questions will be personalized based on your resume.</span>
          </div>
        ) : (
          <div className="modal-resume-badge warning">
            <AlertCircle size={18} className="badge-icon" />
            <span>Upload your resume in Profile for personalized questions.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-row-group">
            <div className="modal-field">
              <label><Clock size={16} /> Duration (Minutes)</label>
              <select 
                value={duration} 
                onChange={(e) => setDuration(Number(e.target.value))}
                className="modal-select"
              >
                {[5, 10, 15, 20, 25, 30].map((n) => (
                  <option key={n} value={n}>{n} min</option>
                ))}
              </select>
            </div>
            
            <div className="modal-field">
              <label><Hash size={16} /> Question Count</label>
              <select 
                value={questionCount} 
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                className="modal-select"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>{n} questions</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary start-session-btn">
              Start Interview <Play size={16} />
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
