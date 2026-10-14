import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTest } from '../../api/admin';
import '../Profile.css';

const LIMIT_FIELDS = [
  ['maxTabSwitchWarnings', 'Tab switches allowed'],
  ['maxFullscreenExits', 'Fullscreen exits allowed'],
  ['maxMultipleFaces', 'Multiple-face detections allowed'],
  ['maxNoFace', 'Face-not-visible allowed'],
  ['maxNoise', 'Background-noise warnings allowed'],
  ['maxDevTools', 'DevTools openings allowed'],
];

export default function CreateTest() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '', description: '', roleCategory: '',
    durationMinutes: 60, questionCount: 5,
    requireCamera: true, requireMicrophone: true, requireFullscreen: true,
    maxTabSwitchWarnings: 2,
    maxFullscreenExits: 2,
    maxMultipleFaces: 2,
    maxNoFace: 2,
    maxNoise: 2,
    maxDevTools: 2,
  });
  const [saving, setSaving] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const test = await createTest(form);
      navigate(`/admin/tests/${test.id}`);
    } catch (err) {
      alert(err.message || 'Failed to create assessment');
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
            <input type="number" min="1" value={form.durationMinutes} onChange={(e) => update('durationMinutes', Number(e.target.value))} />
          </div>
          <div className="form-group"><label>Number of Questions</label>
            <input type="number" min="1" value={form.questionCount} onChange={(e) => update('questionCount', Number(e.target.value))} />
          </div>

          <div className="card-header"><h3>Allowed violations (exceeding any limit auto-submits)</h3></div>
          {LIMIT_FIELDS.map(([key, label]) => (
            <div className="form-group" key={key}>
              <label>{label}</label>
              <input type="number" min="0" value={form[key]} onChange={(e) => update(key, Number(e.target.value))} />
            </div>
          ))}

          <label><input type="checkbox" checked={form.requireCamera} onChange={(e) => update('requireCamera', e.target.checked)} /> Require Camera</label>
          <label><input type="checkbox" checked={form.requireMicrophone} onChange={(e) => update('requireMicrophone', e.target.checked)} /> Require Microphone</label>
          <label><input type="checkbox" checked={form.requireFullscreen} onChange={(e) => update('requireFullscreen', e.target.checked)} /> Require Fullscreen</label>

          <button type="submit" className="btn-primary" disabled={saving}>{saving ? 'Creating...' : 'Create Test'}</button>
        </form>
      </div>
    </div>
  );
}
