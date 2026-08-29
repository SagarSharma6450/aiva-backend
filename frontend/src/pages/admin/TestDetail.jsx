import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Plus, Sparkles, Trash2, Pencil, Save, X, Users,
  ListChecks, CalendarClock, FileBarChart,
} from 'lucide-react';
import {
  getTest, updateTest, deleteTest,
  addQuestions, getQuestions, updateQuestion, deleteQuestion, draftQuestionsWithAi,
  createSlot, listSlots, updateSlot, deleteSlot,
  inviteCandidates, listInvitations, listSubmissions,
} from '../../api/admin';
import '../Profile.css';
import '../Dashboard.css';

const TABS = [
  { id: 'questions', label: 'Questions', icon: ListChecks },
  { id: 'slots', label: 'Slots', icon: CalendarClock },
  { id: 'invitations', label: 'Invitations', icon: Users },
  { id: 'submissions', label: 'Submissions', icon: FileBarChart },
];

const toIso = (v) => (v && v.length === 16 ? v + ':00' : v);

const statusBadgeClass = (status) => {
  if (status === 'COMPLETED') return 'score-high';
  if (status === 'AUTO_SUBMITTED') return 'score-low';
  return 'score-avg';
};

export default function TestDetail() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState('questions');
  const [test, setTest] = useState(null);
  const [editingTest, setEditingTest] = useState(false);
  const [editForm, setEditForm] = useState(null);

  const [manual, setManual] = useState({ questionText: '', optionA: '', optionB: '', optionC: '', optionD: '', correctOption: 'A', maxMarks: 10 });
  const [aiRole, setAiRole] = useState('');
  const [aiTopics, setAiTopics] = useState('');
  const [aiCount, setAiCount] = useState(5);
  const [drafted, setDrafted] = useState([]);
  const [drafting, setDrafting] = useState(false);

  const [savedQuestions, setSavedQuestions] = useState([]);
  const [editingQuestionId, setEditingQuestionId] = useState(null);
  const [questionEditForm, setQuestionEditForm] = useState(null);

  const [slots, setSlots] = useState([]);
  const [slotForm, setSlotForm] = useState({ startTime: '', endTime: '' });
  const [editingSlotId, setEditingSlotId] = useState(null);

  const [selectedSlot, setSelectedSlot] = useState('');
  const [emailsText, setEmailsText] = useState('');
  const [invitations, setInvitations] = useState([]);

  const [submissions, setSubmissions] = useState([]);

  const loadTest = () => getTest(testId).then((t) => { setTest(t); setEditForm(t); });
  const loadSlots = () => listSlots(testId).then(setSlots);
  const loadQuestions = () => getQuestions(testId).then(setSavedQuestions).catch(() => setSavedQuestions([]));

  useEffect(() => { loadTest(); loadSlots(); }, [testId]);
  useEffect(() => { if (tab === 'questions') loadQuestions(); }, [tab, testId]);
  useEffect(() => { if (tab === 'invitations') listInvitations(testId).then(setInvitations); }, [tab, testId]);
  useEffect(() => { if (tab === 'submissions') listSubmissions(testId).then(setSubmissions); }, [tab, testId]);

  const isSlotExpired = (s) => new Date(s.endTime) < new Date();

  const saveTestEdit = async () => {
    try {
      await updateTest(testId, editForm);
      setEditingTest(false);
      loadTest();
    } catch (e) {
      alert(e.message || 'Failed to save test details');
    }
  };

  const removeTest = async () => {
    if (!window.confirm('Delete this entire assessment? This permanently removes all questions, slots, invitations, and submissions.')) return;
    try {
      await deleteTest(testId);
      navigate('/admin');
    } catch (e) {
      alert(e.message || 'Failed to delete assessment');
    }
  };

  const addManualQuestion = async () => {
    if (!manual.questionText.trim() || !manual.optionA.trim() || !manual.optionB.trim()) return;
    try {
      await addQuestions(testId, [manual]);
      setManual({ questionText: '', optionA: '', optionB: '', optionC: '', optionD: '', correctOption: 'A', maxMarks: 10 });
      loadQuestions();
    } catch (e) {
      alert(e.message || 'Failed to add question');
    }
  };

  const draftWithAi = async () => {
    setDrafting(true);
    try {
      const result = await draftQuestionsWithAi(testId, { roleCategory: aiRole, topics: aiTopics, count: aiCount });
      setDrafted(result);
    } catch (e) {
      alert(e.message || 'Failed to generate AI draft');
    } finally {
      setDrafting(false);
    }
  };

  const saveDrafted = async () => {
    try {
      await addQuestions(testId, drafted);
      setDrafted([]);
      loadQuestions();
    } catch (e) {
      alert(e.message || 'Failed to save drafted questions');
    }
  };

  const startEditQuestion = (q) => {
    setEditingQuestionId(q.id);
    setQuestionEditForm({
      questionText: q.questionText,
      optionA: q.optionA,
      optionB: q.optionB,
      optionC: q.optionC || '',
      optionD: q.optionD || '',
      correctOption: q.correctOption,
      maxMarks: q.maxMarks,
    });
  };

  const saveQuestionEdit = async (questionId) => {
    try {
      await updateQuestion(testId, questionId, questionEditForm);
      setEditingQuestionId(null);
      loadQuestions();
    } catch (e) {
      alert(e.message || 'Failed to update question');
    }
  };

  const removeQuestion = async (questionId) => {
    if (!window.confirm('Delete this question permanently?')) return;
    try {
      await deleteQuestion(testId, questionId);
      loadQuestions();
    } catch (e) {
      alert(e.message || 'Failed to delete question');
    }
  };

  const saveSlot = async () => {
    if (!slotForm.startTime || !slotForm.endTime) return;
    const payload = { startTime: toIso(slotForm.startTime), endTime: toIso(slotForm.endTime) };
    try {
      if (editingSlotId) await updateSlot(testId, editingSlotId, payload);
      else await createSlot(testId, payload);
      setSlotForm({ startTime: '', endTime: '' });
      setEditingSlotId(null);
      loadSlots();
    } catch (e) {
      alert(e.message || 'Failed to save slot');
    }
  };

  const editSlot = (s) => {
    setEditingSlotId(s.id);
    setSlotForm({ startTime: s.startTime.slice(0, 16), endTime: s.endTime.slice(0, 16) });
  };

  const removeSlot = async (slotId) => {
    if (!window.confirm('Delete this slot? Candidates invited to it will lose access to this test.')) return;
    try {
      await deleteSlot(testId, slotId);
      await loadSlots();
    } catch (e) {
      alert(e.message || 'Failed to delete slot. Please try again.');
    }
  };

  const sendInvites = async () => {
    if (!selectedSlot || !emailsText.trim()) return;
    const emails = emailsText.split(/[\n,]/).map((e) => e.trim()).filter(Boolean);
    try {
      await inviteCandidates(testId, selectedSlot, emails);
      setEmailsText('');
      listInvitations(testId).then(setInvitations);
    } catch (e) {
      alert(e.message || 'Failed to send invitations');
    }
  };

  if (!test) return <p style={{ padding: 24 }}>Loading...</p>;

  return (
    <div className="profile-container">
      <button className="back-btn" style={{ marginBottom: 16 }} onClick={() => navigate('/admin')}>
        <ArrowLeft size={18} /> Back to Assessments
      </button>

      <div className="profile-hero" style={{ marginBottom: 18 }}>
        <div className="profile-hero-copy">
          {!editingTest ? (
            <>
              <span className="eyebrow">{test.roleCategory}</span>
              <h1>{test.title}</h1>
              <p>{test.description}</p>
              <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                <button className="btn-secondary" onClick={() => setEditingTest(true)}><Pencil size={16} /> Edit Details</button>
                <button
                  className="btn-secondary"
                  style={{ color: '#ffb5b5', borderColor: 'rgba(255,125,125,0.4)' }}
                  onClick={removeTest}
                >
                  <Trash2 size={16} /> Delete Assessment
                </button>
              </div>
            </>
          ) : (
            <div className="edit-form">
              <div className="form-group"><label>Title</label><input value={editForm.title} onChange={(e) => setEditForm({ ...editForm, title: e.target.value })} /></div>
              <div className="form-group"><label>Description</label><input value={editForm.description || ''} onChange={(e) => setEditForm({ ...editForm, description: e.target.value })} /></div>
              <div className="form-group"><label>Role Category</label><input value={editForm.roleCategory} onChange={(e) => setEditForm({ ...editForm, roleCategory: e.target.value })} /></div>
              <div className="details-grid">
                <div className="form-group"><label>Duration (minutes)</label><input type="number" value={editForm.durationMinutes} onChange={(e) => setEditForm({ ...editForm, durationMinutes: Number(e.target.value) })} /></div>
                <div className="form-group"><label>Question Count</label><input type="number" value={editForm.questionCount} onChange={(e) => setEditForm({ ...editForm, questionCount: Number(e.target.value) })} /></div>
              </div>
              <div className="form-group"><label>Max Tab-Switch Warnings</label><input type="number" value={editForm.maxTabSwitchWarnings} onChange={(e) => setEditForm({ ...editForm, maxTabSwitchWarnings: Number(e.target.value) })} /></div>
              <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}><input type="checkbox" checked={editForm.requireCamera} onChange={(e) => setEditForm({ ...editForm, requireCamera: e.target.checked })} /> Require Camera</label>
              <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}><input type="checkbox" checked={editForm.requireMicrophone} onChange={(e) => setEditForm({ ...editForm, requireMicrophone: e.target.checked })} /> Require Microphone</label>
              <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}><input type="checkbox" checked={editForm.requireFullscreen} onChange={(e) => setEditForm({ ...editForm, requireFullscreen: e.target.checked })} /> Require Fullscreen</label>
              <div className="form-actions">
                <button className="btn-secondary" onClick={() => { setEditingTest(false); setEditForm(test); }}><X size={16} /> Cancel</button>
                <button className="btn-primary" onClick={saveTestEdit}><Save size={16} /> Save Changes</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="content-card app-shell-panel" style={{ marginBottom: 18, padding: 8 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {TABS.map((t) => {
            const Icon = t.icon;
            return (
              <button key={t.id} className={`nav-item ${tab === t.id ? 'active' : ''}`} style={{ width: 'auto' }} onClick={() => setTab(t.id)}>
                <Icon size={18} /> {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {tab === 'questions' && (
        <>
          <div className="content-card app-shell-panel" style={{ marginBottom: 18 }}>
            <div className="card-header"><h3>Add MCQ Question Manually</h3></div>
            <div className="edit-form">
              <div className="form-group"><label>Question Text</label>
                <textarea className="answer-input" style={{ minHeight: 70 }} value={manual.questionText} onChange={(e) => setManual({ ...manual, questionText: e.target.value })} />
              </div>
              <div className="details-grid">
                <div className="form-group"><label>Option A</label><input value={manual.optionA} onChange={(e) => setManual({ ...manual, optionA: e.target.value })} /></div>
                <div className="form-group"><label>Option B</label><input value={manual.optionB} onChange={(e) => setManual({ ...manual, optionB: e.target.value })} /></div>
                <div className="form-group"><label>Option C</label><input value={manual.optionC} onChange={(e) => setManual({ ...manual, optionC: e.target.value })} /></div>
                <div className="form-group"><label>Option D</label><input value={manual.optionD} onChange={(e) => setManual({ ...manual, optionD: e.target.value })} /></div>
              </div>
              <div className="details-grid">
                <div className="form-group"><label>Correct Option</label>
                  <select value={manual.correctOption} onChange={(e) => setManual({ ...manual, correctOption: e.target.value })}>
                    <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option>
                  </select>
                </div>
                <div className="form-group"><label>Marks</label><input type="number" value={manual.maxMarks} onChange={(e) => setManual({ ...manual, maxMarks: Number(e.target.value) })} /></div>
              </div>
              <button className="btn-primary" onClick={addManualQuestion}><Plus size={16} /> Add Question</button>
            </div>

            <hr style={{ margin: '24px 0', borderColor: 'var(--border)' }} />

            <div className="card-header"><h3><Sparkles size={18} style={{ verticalAlign: 'middle' }} /> Draft MCQs with AI</h3></div>
            <div className="details-grid" style={{ marginBottom: 12 }}>
              <div className="form-group"><label>Role Category</label><input value={aiRole} onChange={(e) => setAiRole(e.target.value)} placeholder="e.g. Backend Developer" /></div>
              <div className="form-group"><label>Topics</label><input value={aiTopics} onChange={(e) => setAiTopics(e.target.value)} placeholder="Java, Spring Boot, SQL" /></div>
              <div className="form-group"><label>Count</label><input type="number" value={aiCount} onChange={(e) => setAiCount(Number(e.target.value))} /></div>
            </div>
            <button className="btn-secondary" onClick={draftWithAi} disabled={drafting}>{drafting ? 'Generating...' : 'Generate Draft'}</button>

            {drafted.length > 0 && (
              <div style={{ marginTop: 16 }}>
                {drafted.map((q, i) => (
                  <div key={i} className="detail-box" style={{ marginBottom: 8, display: 'block' }}>
                    <p style={{ fontWeight: 800 }}>{q.questionText}</p>
                    <p>A: {q.optionA} &nbsp; B: {q.optionB} &nbsp; C: {q.optionC} &nbsp; D: {q.optionD}</p>
                    <p style={{ color: 'var(--success)' }}>Correct: {q.correctOption}</p>
                  </div>
                ))}
                <button className="btn-primary" onClick={saveDrafted}>Save These Questions</button>
              </div>
            )}
          </div>

          <div className="content-card app-shell-panel">
            <div className="card-header"><h3>Saved Questions ({savedQuestions.length})</h3><p>Review, edit, or remove questions already added to this assessment.</p></div>

            {savedQuestions.length === 0 ? (
              <p style={{ color: 'var(--text-muted)' }}>No questions added yet.</p>
            ) : (
              savedQuestions.map((q) => (
                <div key={q.id} className="question-list-item">
                  {editingQuestionId === q.id ? (
                    <div className="edit-form">
                      <div className="form-group"><label>Question Text</label>
                        <textarea className="answer-input" style={{ minHeight: 60 }} value={questionEditForm.questionText} onChange={(e) => setQuestionEditForm({ ...questionEditForm, questionText: e.target.value })} />
                      </div>
                      <div className="details-grid">
                        <div className="form-group"><label>Option A</label><input value={questionEditForm.optionA} onChange={(e) => setQuestionEditForm({ ...questionEditForm, optionA: e.target.value })} /></div>
                        <div className="form-group"><label>Option B</label><input value={questionEditForm.optionB} onChange={(e) => setQuestionEditForm({ ...questionEditForm, optionB: e.target.value })} /></div>
                        <div className="form-group"><label>Option C</label><input value={questionEditForm.optionC} onChange={(e) => setQuestionEditForm({ ...questionEditForm, optionC: e.target.value })} /></div>
                        <div className="form-group"><label>Option D</label><input value={questionEditForm.optionD} onChange={(e) => setQuestionEditForm({ ...questionEditForm, optionD: e.target.value })} /></div>
                      </div>
                      <div className="details-grid">
                        <div className="form-group"><label>Correct Option</label>
                          <select value={questionEditForm.correctOption} onChange={(e) => setQuestionEditForm({ ...questionEditForm, correctOption: e.target.value })}>
                            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option>
                          </select>
                        </div>
                        <div className="form-group"><label>Marks</label><input type="number" value={questionEditForm.maxMarks} onChange={(e) => setQuestionEditForm({ ...questionEditForm, maxMarks: Number(e.target.value) })} /></div>
                      </div>
                      <div className="form-actions">
                        <button className="btn-secondary" onClick={() => setEditingQuestionId(null)}><X size={16} /> Cancel</button>
                        <button className="btn-primary" onClick={() => saveQuestionEdit(q.id)}><Save size={16} /> Save</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="question-list-main">
                        <p className="question-list-text">{q.questionText}</p>
                        <div className="question-list-options">
                          <span className={q.correctOption === 'A' ? 'correct-option' : ''}>A. {q.optionA}</span>
                          <span className={q.correctOption === 'B' ? 'correct-option' : ''}>B. {q.optionB}</span>
                          {q.optionC && <span className={q.correctOption === 'C' ? 'correct-option' : ''}>C. {q.optionC}</span>}
                          {q.optionD && <span className={q.correctOption === 'D' ? 'correct-option' : ''}>D. {q.optionD}</span>}
                        </div>
                        <p className="question-list-meta">Correct: {q.correctOption} · {q.maxMarks} marks</p>
                      </div>
                      <div className="question-list-actions">
                        <button className="btn-secondary" onClick={() => startEditQuestion(q)}><Pencil size={14} /></button>
                        <button className="btn-secondary" onClick={() => removeQuestion(q.id)}><Trash2 size={14} /></button>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </>
      )}

      {tab === 'slots' && (
        <div className="content-card app-shell-panel">
          <div className="card-header"><h3>{editingSlotId ? 'Edit Slot' : 'Create Time Slot'}</h3></div>
          <div className="details-grid" style={{ marginBottom: 12 }}>
            <div className="form-group"><label>Start</label><input type="datetime-local" value={slotForm.startTime} onChange={(e) => setSlotForm({ ...slotForm, startTime: e.target.value })} /></div>
            <div className="form-group"><label>End</label><input type="datetime-local" value={slotForm.endTime} onChange={(e) => setSlotForm({ ...slotForm, endTime: e.target.value })} /></div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn-primary" onClick={saveSlot}>{editingSlotId ? 'Update Slot' : 'Add Slot'}</button>
            {editingSlotId && <button className="btn-secondary" onClick={() => { setEditingSlotId(null); setSlotForm({ startTime: '', endTime: '' }); }}>Cancel</button>}
          </div>

          <div style={{ marginTop: 18 }}>
            {slots.map((s) => (
              <div key={s.id} className="detail-box" style={{ marginBottom: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p>{new Date(s.startTime).toLocaleString()} — {new Date(s.endTime).toLocaleString()}</p>
                  {isSlotExpired(s) && <span className="history-badge score-low">Expired</span>}
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn-secondary" onClick={() => editSlot(s)}><Pencil size={14} /></button>
                  <button className="btn-secondary" onClick={() => removeSlot(s.id)}><Trash2 size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'invitations' && (
        <div className="content-card app-shell-panel">
          <div className="card-header"><h3>Invite Candidates</h3></div>
          <select value={selectedSlot} onChange={(e) => setSelectedSlot(Number(e.target.value))} defaultValue="" style={{ marginBottom: 12 }}>
            <option value="" disabled>Select a slot</option>
            {slots.filter((s) => !isSlotExpired(s)).map((s) => (
              <option key={s.id} value={s.id}>{new Date(s.startTime).toLocaleString()} — {new Date(s.endTime).toLocaleString()}</option>
            ))}
          </select>
          <textarea className="answer-input" style={{ minHeight: 100, marginBottom: 12 }} placeholder="One email per line" value={emailsText} onChange={(e) => setEmailsText(e.target.value)} />
          <button className="btn-primary" onClick={sendInvites}>Send Invitations</button>

          <div style={{ marginTop: 18 }}>
            {invitations.map((inv) => (
              <div key={inv.id} className="detail-box" style={{ marginBottom: 8 }}>
                <p>{inv.candidateEmail} — <strong>{inv.status}</strong></p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'submissions' && (
        <div className="submissions-list">
          {submissions.length === 0 && <div className="empty-state"><p>No submissions yet.</p></div>}
          {submissions.map((s) => (
            <div
              key={s.submissionId}
              className="submission-row"
              onClick={() => navigate(`/admin/tests/${testId}/submissions/${s.submissionId}`)}
            >
              <div className="history-icon tone-blue"><FileBarChart size={20} /></div>
              <div className="submission-info">
                <h4>{s.candidateName}</h4>
                <span className="submission-email">{s.candidateEmail}</span>
                <span className="submission-meta">
                  {s.highestQualification || 'Education not specified'}
                  {s.institution ? ` · ${s.institution}` : ''}
                  {s.graduationYear ? ` (${s.graduationYear})` : ''}
                </span>
                <span className={`history-badge ${statusBadgeClass(s.status)}`}>{s.status}</span>
              </div>
              <div className="submission-score">
                <strong>{s.totalScore ?? '-'}</strong>
                <span>/ {s.maxPossibleScore ?? '-'}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
