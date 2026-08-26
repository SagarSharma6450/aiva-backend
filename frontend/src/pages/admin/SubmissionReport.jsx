import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSubmissionDetail } from '../../api/admin';
import '../Interview.css';

export default function SubmissionReport() {
  const { submissionId } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => { getSubmissionDetail(submissionId).then(setDetail); }, [submissionId]);

  if (!detail) return <p style={{ padding: 24 }}>Loading...</p>;
  const { candidate, answers } = detail;

  return (
    <div className="result-dashboard">
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
        {answers.map((a, i) => (
          <div key={i} className="feedback-card info-card">
            <h3>Q{i + 1}: {a.questionText}</h3>
            <p><strong>Answer:</strong> {a.candidateAnswer || '(no answer)'}</p>
            <p><strong>Score:</strong> {a.aiScore} / {a.maxMarks}</p>
            <p><strong>AI Feedback:</strong> {a.aiFeedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
