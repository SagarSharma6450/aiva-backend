import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTest } from '../../api/admin';
import '../Profile.css';

export default function CreateTest() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '', description: '', roleCategory: '',
    durationMinutes: 60, questionCount: 5,
    requireCamera: true, requireMicrophone: true, requireFullscreen: true,
    maxTabSwitchWarnings: 2,
  });
  const [saving, setSaving] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const test = await createTest(form);
      navigate(`/admin/tests/${test.id}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="profile-container">
      <div className="content-card app-shell-panel">
        <div className="card-header"><h3>Create Assessment</h3></div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="form-group"><label>Title</label>
            <input value={form.title} onChange={(e) => update('title', e.target.value)} required />
          </div>
          <div className="form-group"><label>Description</label>
            <input value={form.description} onChange={(e) => update('description', e.target.value)} />
          </div>
          <div className="form-group"><label>Role Category</label>
            <input value={form.roleCategory} onChange={(e) => update('roleCategory', e.target.value)} placeholder="e.g. Backend Developer" required />
          </div>
          <div className="form-group"><label>Duration (minutes)</label>
            <input type="number" value={form.durationMinutes} onChange={(e) => update('durationMinutes', Number(e.target.value))} />
          </div>
          <div className="form-group"><label>Number of Questions</label>
            <input type="number" value={form.questionCount} onChange={(e) => update('questionCount', Number(e.target.value))} />
          </div>
          <div className="form-group"><label>Max Tab-Switch Warnings</label>
            <input type="number" value={form.maxTabSwitchWarnings} onChange={(e) => update('maxTabSwitchWarnings', Number(e.target.value))} />
          </div>
          <label><input type="checkbox" checked={form.requireCamera} onChange={(e) => update('requireCamera', e.target.checked)} /> Require Camera</label>
          <label><input type="checkbox" checked={form.requireMicrophone} onChange={(e) => update('requireMicrophone', e.target.checked)} /> Require Microphone</label>
          <label><input type="checkbox" checked={form.requireFullscreen} onChange={(e) => update('requireFullscreen', e.target.checked)} /> Require Fullscreen</label>

          <button type="submit" className="btn-primary" disabled={saving}>{saving ? 'Creating...' : 'Create Test'}</button>
        </form>
      </div>
    </div>
  );
}
