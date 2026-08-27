import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { getSubmissionDetail } from '../../api/admin';
import '../Interview.css';

export default function SubmissionReport() {
  const { submissionId, testId } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);

  useEffect(() => { getSubmissionDetail(submissionId).then(setDetail); }, [submissionId]);

  if (!detail) return <p style={{ padding: 24 }}>Loading...</p>;
  const { candidate, answers } = detail;
  const options = ['A', 'B', 'C', 'D'];

  return (
    <div className="result-dashboard">
      <button className="back-btn" style={{ margin: '18px 0 0 18px', width: 'fit-content' }} onClick={() => navigate(`/admin/tests/${testId}`)}>
        <ArrowLeft size={18} /> Back to Test
      </button>

      <div className="result-hero">
        <div className="result-header">
          <h1>{candidate.candidateName}</h1>
          <p>{candidate.candidateEmail}</p>
          <p>{candidate.highestQualification} — {candidate.institution} ({candidate.graduationYear})</p>
          <p>Tab switches: {candidate.tabSwitchCount} · Fullscreen exits: {candidate.fullscreenExitCount}</p>
          <h2>{candidate.totalScore} / {candidate.maxPossibleScore}</h2>
        </div>
      </div>

      <div className="feedback-container">
        {answers.map((a, i) => {
          const optionMap = { A: a.optionA, B: a.optionB, C: a.optionC, D: a.optionD };
          return (
            <div key={i} className={`feedback-card ${a.isCorrect ? 'success-card' : 'danger-card'}`}>
              <h3>{a.isCorrect ? <CheckCircle size={18} /> : <XCircle size={18} />} Q{i + 1}: {a.questionText}</h3>
              <div style={{ marginTop: 10, display: 'grid', gap: 6 }}>
                {options.map((opt) => optionMap[opt] && (
                  <p
                    key={opt}
                    style={{
                      fontWeight: opt === a.correctOption ? 800 : 400,
                      color: opt === a.selectedOption
                        ? (a.isCorrect ? 'var(--success)' : 'var(--error)')
                        : (opt === a.correctOption ? 'var(--success)' : 'var(--text-soft)'),
                    }}
                  >
                    {opt}. {optionMap[opt]}
                    {opt === a.selectedOption ? " — candidate's answer" : ''}
                    {opt === a.correctOption ? ' (correct)' : ''}
                  </p>
                ))}
              </div>
              <p style={{ marginTop: 10 }}><strong>Score:</strong> {a.aiScore} / {a.maxMarks}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
