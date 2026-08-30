const BASE = 'https://aiva-backend-3.onrender.com';
function authHeader() {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}
async function handle(res) {
  const text = await res.text();
  if (!res.ok) {
    let message = text || `Request failed (${res.status})`;
    try {
      const j = JSON.parse(text);
      message = j.message || j.error || message;
    } catch {
      // response wasn't JSON — keep the raw text/status as the message
    }
    throw new Error(message);
  }
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
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

export async function getTest(testId) {
  const res = await fetch(`${BASE}/admin/tests/${testId}`, { headers: authHeader() });
  return handle(res);
}

export async function updateTest(testId, payload) {
  const res = await fetch(`${BASE}/admin/tests/${testId}`, {
    method: 'PUT', headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return handle(res);
}

export async function updateSlot(testId, slotId, payload) {
  const res = await fetch(`${BASE}/admin/tests/${testId}/slots/${slotId}`, {
    method: 'PUT', headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return handle(res);
}

export async function deleteSlot(testId, slotId) {
  const res = await fetch(`${BASE}/admin/tests/${testId}/slots/${slotId}`, {
    method: 'DELETE', headers: authHeader(),
  });
  return handle(res);
}
export async function deleteTest(testId) {
  const res = await fetch(`${BASE}/admin/tests/${testId}`, {
    method: 'DELETE', headers: authHeader(),
  });
  return handle(res);
}

export async function getQuestions(testId) {
  const res = await fetch(`${BASE}/admin/tests/${testId}/questions`, { headers: authHeader() });
  return handle(res);
}

export async function updateQuestion(testId, questionId, payload) {
  const res = await fetch(`${BASE}/admin/tests/${testId}/questions/${questionId}`, {
    method: 'PUT', headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return handle(res);
}

export async function deleteQuestion(testId, questionId) {
  const res = await fetch(`${BASE}/admin/tests/${testId}/questions/${questionId}`, {
    method: 'DELETE', headers: authHeader(),
  });
  return handle(res);
}
export async function deleteSubmission(submissionId) {
  const res = await fetch(`${BASE}/admin/reports/submissions/${submissionId}`, {
    method: 'DELETE', headers: authHeader(),
  });
  return handle(res);
}

export async function deleteAllSubmissions(testId) {
  const res = await fetch(`${BASE}/admin/reports/tests/${testId}/submissions`, {
    method: 'DELETE', headers: authHeader(),
  });
  return handle(res);
}
