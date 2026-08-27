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

export async function getAssignedTests() {
  const res = await fetch(`${BASE}/candidate/tests`, { headers: authHeader() });
  return handle(res);
}

export async function getInstructions(testId) {
  const res = await fetch(`${BASE}/candidate/tests/${testId}/instructions`, { headers: authHeader() });
  return handle(res);
}

export async function startTest(testId) {
  const res = await fetch(`${BASE}/candidate/tests/${testId}/start`, {
    method: 'POST', headers: authHeader(),
  });
  return handle(res);
}

export async function getQuestion(submissionId, index) {
  const res = await fetch(`${BASE}/candidate/tests/submissions/${submissionId}/question/${index}`, { headers: authHeader() });
  return handle(res);
}

export async function submitAnswer(submissionId, questionId, selectedOption) {
  const res = await fetch(`${BASE}/candidate/tests/submissions/${submissionId}/question/${questionId}/answer`, {
    method: 'POST', headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ selectedOption }),
  });
  return handle(res);
}

export async function logProctorEvent(submissionId, type) {
  const res = await fetch(`${BASE}/candidate/tests/submissions/${submissionId}/proctor-event`, {
    method: 'POST', headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ type }),
  });
  return handle(res);
}

export async function completeTest(submissionId) {
  const res = await fetch(`${BASE}/candidate/tests/submissions/${submissionId}/complete`, {
    method: 'POST', headers: authHeader(),
  });
  return handle(res);
}
