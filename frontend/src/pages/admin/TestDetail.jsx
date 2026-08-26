import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  addQuestions, draftQuestionsWithAi, createSlot, listSlots,
  inviteCandidates, listInvitations, listSubmissions,
} from '../../api/admin';
import '../Profile.css';

export default function TestDetail() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState('questions');

  // Questions
  const [manualQuestion, setManualQuestion] = useState('');
  const [manualMarks, setManualMarks] = useState(10);
  const [aiTopics, setAiTopics] = useState('');
  const [aiRole, setAiRole] = useState('');
  const [aiCount, setAiCount] = useState(5);
  const [draftedQuestions, setDraftedQuestions] = useState([]);

  // Slots
  const [slots, setSlots] = useState([]);
  const [slotStart, setSlotStart] = useState('');
  const [slotEnd, setSlotEnd] = useState('');

  // Invitations
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [emailsText, setEmailsText] = useState('');
  const [invitations, setInvitations] = useState([]);

  // Submissions
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => { listSlots(testId).then(setSlots); }, [testId]);
  useEffect(() => { if (tab === 'invitations') listInvitations(testId).then(setInvitations); }, [tab, testId]);
  useEffect(() => { if (tab === 'submissions') listSubmissions(testId).then(setSubmissions); }, [tab, testId]);

  const addManualQuestion = async () => {
    if (!manualQuestion.trim()) return;
    await addQuestions(testId, [{ questionText: manualQuestion, maxMarks: manualMarks }]);
    setManualQuestion('');
  };

  const draftWithAi = async () => {
    const drafted = await draftQuestionsWithAi(testId, { roleCategory: aiRole, topics: aiTopics, count: aiCount });
    setDraftedQuestions(drafted);
  };

  const saveDraftedQuestions = async () => {
    await addQuestions(testId, draftedQuestions);
    setDraftedQuestions([]);
  };

  const addSlot = async () => {
    if (!slotStart || !slotEnd) return;
    const slot = await createSlot(testId, { startTime: slotStart, endTime: slotEnd });
    setSlots((s) => [...s, slot]);
  };

  const sendInvites = async () => {
    if (!selectedSlot || !emailsText.trim()) return;
    const emails = emailsText.split(/[\n,]/).map((e) => e.trim()).filter(Boolean);
    await inviteCandidates(testId, selectedSlot, emails);
    setEmailsText('');
    listInvitations(testId).then(setInvitations);
  };

  return (
    <div className="profile-container">
      <div className="content-card app-shell-panel" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          {['questions', 'slots', 'invitations', 'submissions'].map((t) => (
            <button key={t} className={tab === t ? 'btn-primary' : 'btn-secondary'} onClick={() => setTab(t)}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {tab === 'questions' && (
        <div className="content-card app-shell-panel">
          <h3>Add Question Manually</h3>
          <textarea className="answer-input" style={{ minHeight: 80 }} value={manualQuestion} onChange={(e) => setManualQuestion(e.target.value)} />
          <input type="number" value={manualMarks} onChange={(e) => setManualMarks(Number(e.target.value))} style={{ margin: '8px 0', width: 120 }} />
          <button className="btn-primary" onClick={addManualQuestion}>Add Question</button>

          <hr style={{ margin: '20px 0', borderColor: 'var(--border)' }} />

          <h3>Draft with AI</h3>
          <input placeholder="Role category" value={aiRole} onChange={(e) => setAiRole(e.target.value)} />
          <input placeholder="Topics (comma separated)" value={aiTopics} onChange={(e) => setAiTopics(e.target.value)} />
          <input type="number" value={aiCount} onChange={(e) => setAiCount(Number(e.target.value))} style={{ width: 100 }} />
          <button className="btn-secondary" onClick={draftWithAi}>Generate Draft</button>

          {draftedQuestions.length > 0 && (
            <div style={{ marginTop: 12 }}>
              {draftedQuestions.map((q, i) => (
                <div key={i} className="detail-box" style={{ marginBottom: 8 }}>
                  <p>{q.questionText}</p>
                </div>
              ))}
              <button className="btn-primary" onClick={saveDraftedQuestions}>Save These Questions</button>
            </div>
          )}
        </div>
      )}

      {tab === 'slots' && (
        <div className="content-card app-shell-panel">
          <h3>Create Time Slot</h3>
          <input type="datetime-local" value={slotStart} onChange={(e) => setSlotStart(e.target.value)} />
          <input type="datetime-local" value={slotEnd} onChange={(e) => setSlotEnd(e.target.value)} />
          <button className="btn-primary" onClick={addSlot}>Add Slot</button>

          <div style={{ marginTop: 16 }}>
            {slots.map((s) => (
              <div key={s.id} className="detail-box" style={{ marginBottom: 8 }}>
                <p>{new Date(s.startTime).toLocaleString()} — {new Date(s.endTime).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'invitations' && (
        <div className="content-card app-shell-panel">
          <h3>Invite Candidates</h3>
          <select onChange={(e) => setSelectedSlot(Number(e.target.value))} defaultValue="">
            <option value="" disabled>Select a slot</option>
            {slots.map((s) => (
              <option key={s.id} value={s.id}>
                {new Date(s.startTime).toLocaleString()} — {new Date(s.endTime).toLocaleString()}
              </option>
            ))}
          </select>
          <textarea className="answer-input" style={{ minHeight: 100 }} placeholder="One email per line" value={emailsText} onChange={(e) => setEmailsText(e.target.value)} />
          <button className="btn-primary" onClick={sendInvites}>Send Invitations</button>

          <div style={{ marginTop: 16 }}>
            {invitations.map((inv) => (
              <div key={inv.id} className="detail-box" style={{ marginBottom: 8 }}>
                <p>{inv.candidateEmail} — <strong>{inv.status}</strong></p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'submissions' && (
        <div className="history-list">
          {submissions.map((s) => (
            <div key={s.submissionId} className="history-row" style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/admin/tests/${testId}/submissions/${s.submissionId}`)}>
              <div className="history-details">
                <h4>{s.candidateName}</h4>
                <span>{s.candidateEmail} · {s.institution || '-'} · {s.status}</span>
              </div>
              <div className={`history-badge score-mid`}>{s.totalScore ?? '-'}/{s.maxPossibleScore ?? '-'}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
