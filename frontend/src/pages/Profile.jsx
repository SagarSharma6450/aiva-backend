import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile, updateProfile } from '../api/profile';
import { uploadResume, checkResumeStatus } from '../api/resume';
import './Profile.css';

const PROFESSION_LABELS = {
  STUDENT: 'Student',
  WORKING_PROFESSIONAL: 'Working Professional',
};

export default function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('STUDENT');
  const [designation, setDesignation] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [hasResume, setHasResume] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState('');
  const [toast, setToast] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) { navigate('/login'); return; }
    getProfile()
      .then((data) => {
        setProfile(data);
        setName(data.name || '');
        setProfession(data.profession || 'STUDENT');
        setDesignation(data.designation || '');
        checkResumeStatus().then(setHasResume).catch(() => {});
      })
      .catch(() => navigate('/login'))
      .finally(() => setLoading(false));
  }, [navigate]);

  const handleSave = async (e) => {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      const data = await updateProfile({
        name,
        profession,
        designation: profession === 'WORKING_PROFESSIONAL' ? designation : null,
      });
      setProfile(data);
      setEditing(false);
      setToast(true);
      setTimeout(() => setToast(false), 3000);
    } catch (err) {
      setError(err.message || 'Update failed');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setName(profile?.name || '');
    setProfession(profile?.profession || 'STUDENT');
    setDesignation(profile?.designation || '');
    setEditing(false);
    setError('');
  };

  const handleResumeUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  if (file.type !== 'application/pdf') {
    setUploadMsg('Only PDF files are allowed');
    return;
  }
  setUploading(true);
  setUploadMsg('');
  try {
    await uploadResume(file);
    setHasResume(true);
    setUploadMsg('Resume uploaded successfully!');
  } catch (err) {
    setUploadMsg('Upload failed. Try again.');
  } finally {
    setUploading(false);
  }
};

  const initials = profile?.name
    ? profile.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : '?';

  if (loading) {
    return (
      <div className="profile-shell">
        <div className="profile-bg-orbs" aria-hidden="true">
          <div className="p-orb p-orb-1" /><div className="p-orb p-orb-2" /><div className="p-orb p-orb-3" />
        </div>
        <div className="profile-loading-screen">
          <div className="profile-spinner" />
          <span>Loading profile…</span>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-shell">

      {/* Background orbs */}
      <div className="profile-bg-orbs" aria-hidden="true">
        <div className="p-orb p-orb-1" />
        <div className="p-orb p-orb-2" />
        <div className="p-orb p-orb-3" />
      </div>

      {/* Toast */}
      {toast && (
        <div className="profile-toast">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          Profile updated successfully
        </div>
      )}

      {/* Topbar */}
      <header className="profile-topbar">
        <button className="profile-back-btn" onClick={() => navigate('/dashboard')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to Dashboard
        </button>
        <div className="profile-topbar-brand">
          <div className="profile-brand-dot" />
          <span>AIVA</span>
        </div>
      </header>

      {/* Main layout */}
      <main className="profile-main">

        {/* Left — Avatar card */}
        <aside className="profile-avatar-panel">
          <div className="profile-avatar-ring">
            <div className="profile-avatar-circle">
              {initials}
            </div>
          </div>
          <h2 className="profile-avatar-name">{profile?.name || '—'}</h2>
          <span className="profile-avatar-role">
            {PROFESSION_LABELS[profile?.profession] || profile?.profession || 'Member'}
          </span>
          {profile?.profession === 'WORKING_PROFESSIONAL' && profile?.designation && (
            <span className="profile-avatar-designation">{profile.designation}</span>
          )}

          <div className="profile-avatar-divider" />

          <div className="profile-meta-list">
            <div className="profile-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>{profile?.name || '—'}</span>
            </div>
            <div className="profile-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>{profile?.email || '—'}</span>
            </div>
            <div className="profile-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span>{PROFESSION_LABELS[profile?.profession] || '—'}</span>
            </div>
          </div>

          {!editing && (
            <button className="profile-edit-trigger" onClick={() => setEditing(true)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              Edit Profile
            </button>
          )}
        </aside>

        {/* Right — Info / Edit form */}
        <section className="profile-content-panel">

          {!editing ? (
            /* ── VIEW MODE ── */
            <div className="profile-view-mode" key="view">
              <div className="panel-header">
                <h1 className="panel-title">Profile Details</h1>
                <p className="panel-sub">Your personal information and preferences</p>
              </div>

              <div className="profile-detail-grid">
                <div className="detail-card">
                  <div className="detail-card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <div className="detail-card-body">
                    <span className="detail-label">Full Name</span>
                    <span className="detail-value">{profile?.name || '—'}</span>
                  </div>
                </div>

                <div className="detail-card">
                  <div className="detail-card-icon detail-icon-blue">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div className="detail-card-body">
                    <span className="detail-label">Email Address</span>
                    <span className="detail-value">{profile?.email || '—'}</span>
                  </div>
                </div>

                <div className="detail-card">
                  <div className="detail-card-icon detail-icon-purple">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8l-2 4h12l-2-4z"/></svg>
                  </div>
                  <div className="detail-card-body">
                    <span className="detail-label">Profession</span>
                    <span className="detail-value">
                      {PROFESSION_LABELS[profile?.profession] || profile?.profession || '—'}
                    </span>
                  </div>
                </div>

                {profile?.profession === 'WORKING_PROFESSIONAL' && (
                  <div className="detail-card">
                    <div className="detail-card-icon detail-icon-gold">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
                    </div>
                    <div className="detail-card-body">
                      <span className="detail-label">Designation</span>
                      <span className="detail-value">{profile?.designation || '—'}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Resume Upload */}
              <div className="profile-resume-section">
                <h3 className="account-section-title">Resume</h3>
                <div className="resume-upload-box">
                  {hasResume ? (
                    <span className="resume-status">✅ Resume uploaded — interviews will be personalized</span>
                  ) : (
                    <span className="resume-status">📄 No resume uploaded yet</span>
                  )}
                  <label className="resume-upload-btn">
                    {uploading ? 'Uploading...' : hasResume ? 'Replace Resume' : 'Upload PDF'}
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={handleResumeUpload}
                      disabled={uploading}
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>
                {uploadMsg && (
                  <p className="resume-msg" style={{ color: uploadMsg.includes('success') ? 'var(--accent)' : 'var(--error)' }}>
                    {uploadMsg}
                  </p>
                )}
              </div>

              <div className="profile-account-section">
                <h3 className="account-section-title">Account</h3>
                <div className="account-info-row">
                  <div className="account-info-left">
                    <span className="account-info-label">Member since</span>
                    <span className="account-info-value">Active Account</span>
                  </div>
                  <div className="account-status-badge">
                    <span className="status-dot" />
                    Active
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ── EDIT MODE ── */
            <div className="profile-edit-mode" key="edit">
              <div className="panel-header">
                <h1 className="panel-title">Edit Profile</h1>
                <p className="panel-sub">Update your personal information below</p>
              </div>

              {error && (
                <div className="profile-error-banner">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  {error}
                </div>
              )}

              <form className="profile-form-new" onSubmit={handleSave}>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Full Name
                    </label>
                    <div className="form-input-wrap">
                      <input
                        className="form-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      Email Address
                    </label>
                    <div className="form-input-wrap form-input-disabled">
                      <input
                        className="form-input"
                        type="email"
                        value={profile?.email || ''}
                        disabled
                      />
                      <span className="form-input-lock">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      </span>
                    </div>
                    <span className="form-hint">Email cannot be changed</span>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8l-2 4h12l-2-4z"/></svg>
                    Profession
                  </label>
                  <div className="form-select-wrap">
                    <select
                      className="form-select"
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                    >
                      <option value="STUDENT">Student</option>
                      <option value="WORKING_PROFESSIONAL">Working Professional</option>
                    </select>
                    <svg className="select-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>

                {profession === 'WORKING_PROFESSIONAL' && (
                  <div className="form-group form-group-animated">
                    <label className="form-label">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
                      Designation
                    </label>
                    <div className="form-input-wrap">
                      <input
                        className="form-input"
                        type="text"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        placeholder="e.g. Software Engineer, Product Manager"
                        required={profession === 'WORKING_PROFESSIONAL'}
                      />
                    </div>
                  </div>
                )}

                <div className="form-actions">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="form-btn form-btn-cancel"
                    disabled={saving}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="form-btn form-btn-save"
                    disabled={saving}
                  >
                    {saving ? (
                      <>
                        <span className="btn-spinner" />
                        Saving…
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}