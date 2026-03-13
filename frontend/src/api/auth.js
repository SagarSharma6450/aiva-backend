const API_BASE = 'https://aiva-backend-3.onrender.com/auth';

async function getErrorMessage(res) {
  const text = await res.text();
  try {
    const json = JSON.parse(text);
    return json.message || json.error || text;
  } catch {
    return text || 'Request failed';
  }
}

export async function signup(name, email, password) {
  const res = await fetch(`${API_BASE}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) throw new Error(await getErrorMessage(res));
  return res.text();
}

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error(await getErrorMessage(res));
  return res.text(); // JWT token
}
