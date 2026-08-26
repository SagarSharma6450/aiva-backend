const BASE = 'https://aiva-backend-3.onrender.com';
function authHeader() {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}
async function handle(res) {
  const text = await res.text();
  if (!res.ok) {
    try { const j = JSON.parse(text); throw new Error(j.message || j.error || text); }
    catch (e) { throw e instanceof Error ? e : new Error(text || 'Request failed'); }
  }
  return text ? JSON.parse(text) : null;
}

export async function createTest(payload) {
  const res = await fetch(`${BASE}/admin/tests`, {
    method: 'POST', headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return handle(res);
}

export async function listTests() {
  const res = await fetch(`${BASE}/admin/tests`, { headers: authHeader() });
  return handle(res);
}

export async function addQuestions(testId, questions) {
  const res = await fetch(`${BASE}/admin/tests/${testId}/questions`, {
    method: 'POST', headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(questions),
  });
  return handle(res);
}

export async function draftQuestionsWithAi(testId, payload) {
  const res = await fetch(`${BASE}/admin/tests/${testId}/questions/ai-draft`, {
    method: 'POST', headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return handle(res);
}

export async function createSlot(testId, payload) {
  const res = await fetch(`${BASE}/admin/tests/${testId}/slots`, {
    method: 'POST', headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return handle(res);
}

export async function listSlots(testId) {
  const res = await fetch(`${BASE}/admin/tests/${testId}/slots`, { headers: authHeader() });
  return handle(res);
}

export async function inviteCandidates(testId, slotId, emails) {
  const res = await fetch(`${BASE}/admin/tests/${testId}/invite?slotId=${slotId}`, {
    method: 'POST', headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(emails),
  });
  return handle(res);
}

export async function listInvitations(testId) {
  const res = await fetch(`${BASE}/admin/tests/${testId}/invitations`, { headers: authHeader() });
  return handle(res);
}

export async function listSubmissions(testId) {
  const res = await fetch(`${BASE}/admin/reports/tests/${testId}/submissions`, { headers: authHeader() });
  return handle(res);
}

export async function getSubmissionDetail(submissionId) {
  const res = await fetch(`${BASE}/admin/reports/submissions/${submissionId}`, { headers: authHeader() });
  return handle(res);
}
