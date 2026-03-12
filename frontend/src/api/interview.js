function getAuthHeader() {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function handleResponse(res) {
  const text = await res.text();
  if (!res.ok) {
    try {
      const json = JSON.parse(text);
      throw new Error(json.message || json.error || text);
    } catch (e) {
      if (e instanceof Error) throw e;
      throw new Error(text || 'Request failed');
    }
  }
  return text ? JSON.parse(text) : null;
}

export async function getMockInterviewTypes() {
  const res = await fetch('/interview/types', {
    headers: getAuthHeader(),
  });
  if (!res.ok) throw new Error('Failed to fetch interview types');
  return res.json();
}

export async function startSession(typeId, body) {
  const res = await fetch(`/interview/start/${typeId}`, {
    method: 'POST',
    headers: { ...getAuthHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return handleResponse(res);
}

export async function getNextQuestion(sessionId) {
  const res = await fetch(`/interview/${sessionId}/question`, {
    headers: getAuthHeader(),
  });
  return handleResponse(res);
}

export async function evaluateAnswer(sessionId, questionId, answer) {
  const res = await fetch(`/interview/${sessionId}/question/${questionId}/evaluate`, {
    method: 'POST',
    headers: { ...getAuthHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ answer }),
  });
  return handleResponse(res);
}

export async function submitAnswer(sessionId, questionId, answer) {
  const res = await fetch(`/interview/${sessionId}/question/${questionId}/submit`, {
    method: 'POST',
    headers: { ...getAuthHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ answer }),
  });
  return handleResponse(res);
}

export async function getSessionResult(sessionId) {
  const res = await fetch(`/interview/${sessionId}/result`, {
    headers: getAuthHeader(),
  });
  return handleResponse(res);
}

export async function getSessionQuestions(sessionId) {
  const res = await fetch(`/interview/${sessionId}/questions`, {
    headers: getAuthHeader(),
  });
  return handleResponse(res);
}

export async function getInterviewHistory() {
  const res = await fetch('/interview/history', {
    headers: getAuthHeader(),
  });
  return handleResponse(res);
}
