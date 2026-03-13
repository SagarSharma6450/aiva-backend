const BASE = 'https://aiva-backend-3.onrender.com';
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

export async function getProfile() {
  const res = await fetch('${BASE}/profile', {
    headers: { ...getAuthHeader(), 'Content-Type': 'application/json' },
  });
  return handleResponse(res);
}

export async function updateProfile(data) {
  const res = await fetch('${BASE}/profile', {
    method: 'PUT',
    headers: { ...getAuthHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
}
