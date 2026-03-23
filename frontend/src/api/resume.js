const BASE = 'https://aiva-backend-3.onrender.com';

function getAuthHeader() {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function uploadResume(file) {
  const formData = new FormData();
  formData.append('file', file);
  const res = await fetch(`${BASE}/resume/upload`, {
    method: 'POST',
    headers: getAuthHeader(),
    body: formData,
  });
  if (!res.ok) throw new Error('Failed to upload resume');
  return res.text();
}

export async function checkResumeStatus() {
  const res = await fetch(`${BASE}/resume/status`, {
    headers: getAuthHeader(),
  });
  if (!res.ok) return false;
  return res.json();
}
