import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, User, Mail, Briefcase, Award, 
  FileText, UploadCloud, CheckCircle, ShieldCheck, 
  Edit2, X, Save 
} from 'lucide-react';
import { getProfile, updateProfile } from '../api/profile';
import { uploadResume, checkResumeStatus } from '../api/resume';
import TiltCard from '../components/TiltCard';
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

  // YOUR EXACT LOGIC - UNTOUCHED
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
      <div className="profile-layout loading-layout">
        <div className="spinner"></div>
        <p>Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="profile-layout">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            className="toast-notification glass-panel"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <CheckCircle size={20} color="var(--success)" />
            Profile updated successfully
          </motion.div>
        )}
      </AnimatePresence>

      <header className="profile-topbar">
        <button className="back-btn" onClick={() => navigate('/dashboard')}>
          <ArrowLeft size={20} /> Back to Dashboard
        </button>
      </header>

      <main className="profile-container">
        {/* Left Side: Avatar Panel */}
        <TiltCard className="profile-sidebar glass-panel">
          <div className="avatar-wrapper">
            <div className="avatar-circle">{initials}</div>
          </div>
          <h2 className="profile-name">{profile?.name || '—'}</h2>
          <span className="profile-role">
            {PROFESSION_LABELS[profile?.profession] || profile?.profession || 'Member'}
          </span>
          {profile?.profession === 'WORKING_PROFESSIONAL' && profile?.designation && (
            <span className="profile-designation">{profile.designation}</span>
          )}

          <div className="divider" />

          <div className="meta-list">
            <div className="meta-item"><User size={16} /> <span>{profile?.name || '—'}</span></div>
            <div className="meta-item"><Mail size={16} /> <span>{profile?.email || '—'}</span></div>
            <div className="meta-item"><Briefcase size={16} /> <span>{PROFESSION_LABELS[profile?.profession] || '—'}</span></div>
          </div>

          {!editing && (
            <button className="btn-primary edit-btn" onClick={() => setEditing(true)}>
              <Edit2 size={16} /> Edit Profile
            </button>
          )}
        </TiltCard>

        {/* Right Side: Content Area */}
        <section className="profile-content">
          <AnimatePresence mode="wait">
            {!editing ? (
              <motion.div 
                key="view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="content-wrapper"
              >
                {/* Details Card */}
                <div className="glass-panel content-card">
                  <div className="card-header">
                    <h3>Profile Details</h3>
                    <p>Your personal information and preferences.</p>
                  </div>
                  
                  <div className="details-grid">
                    <div className="detail-box">
                      <div className="detail-icon"><User size={20} /></div>
                      <div>
                        <label>Full Name</label>
                        <p>{profile?.name || '—'}</p>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="detail-icon blue"><Mail size={20} /></div>
                      <div>
                        <label>Email Address</label>
                        <p>{profile?.email || '—'}</p>
                      </div>
                    </div>
                    <div className="detail-box">
                      <div className="detail-icon purple"><Briefcase size={20} /></div>
                      <div>
                        <label>Profession</label>
                        <p>{PROFESSION_LABELS[profile?.profession] || profile?.profession || '—'}</p>
                      </div>
                    </div>
                    {profile?.profession === 'WORKING_PROFESSIONAL' && (
                      <div className="detail-box">
                        <div className="detail-icon gold"><Award size={20} /></div>
                        <div>
                          <label>Designation</label>
                          <p>{profile?.designation || '—'}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Resume Card */}
                <div className="glass-panel content-card">
                  <div className="card-header">
                    <h3>Resume Integration</h3>
                    <p>Upload your resume to get highly personalized interview questions.</p>
                  </div>
                  
                  <div className={`resume-upload-zone ${hasResume ? 'has-file' : ''}`}>
                    {hasResume ? (
                      <FileText size={40} className="resume-icon success" />
                    ) : (
                      <UploadCloud size={40} className="resume-icon" />
                    )}
                    
                    <div className="resume-text">
                      <h4>{hasResume ? 'Resume Active' : 'No Resume Found'}</h4>
                      <p>{hasResume ? 'Your mock interviews are currently tailored to this resume.' : 'Upload a PDF to improve AI context.'}</p>
                    </div>

                    <label className={`btn-secondary upload-btn ${uploading ? 'disabled' : ''}`}>
                      {uploading ? 'Uploading...' : hasResume ? 'Replace File' : 'Upload PDF'}
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
                    <p className={`upload-msg ${uploadMsg.includes('success') ? 'success' : 'error'}`}>
                      {uploadMsg}
                    </p>
                  )}
                </div>

                {/* Account Status Card */}
                <div className="glass-panel content-card account-status-card">
                  <div className="account-info">
                    <ShieldCheck size={24} className="shield-icon" />
                    <div>
                      <h4>Account Status</h4>
                      <p>Active and ready for mock sessions.</p>
                    </div>
                  </div>
                  <span className="status-badge"><span className="pulse-dot"></span> Active</span>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="edit"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="content-wrapper"
              >
                <div className="glass-panel content-card edit-card">
                  <div className="card-header">
                    <h3>Edit Profile</h3>
                    <p>Update your personal information below.</p>
                  </div>

                  {error && (
                    <div className="error-banner">
                      <X size={16} /> {error}
                    </div>
                  )}

                  <form className="edit-form" onSubmit={handleSave}>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Email Address <span className="hint">(Cannot be changed)</span></label>
                      <input
                        type="email"
                        value={profile?.email || ''}
                        disabled
                        className="disabled-input"
                      />
                    </div>

                    <div className="form-group">
                      <label>Profession</label>
                      <select
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                      >
                        <option value="STUDENT">Student</option>
                        <option value="WORKING_PROFESSIONAL">Working Professional</option>
                      </select>
                    </div>

                    <AnimatePresence>
                      {profession === 'WORKING_PROFESSIONAL' && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="form-group"
                        >
                          <label>Designation</label>
                          <input
                            type="text"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            placeholder="e.g. Software Engineer, Product Manager"
                            required
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="form-actions">
                      <button type="button" className="btn-secondary" onClick={handleCancel} disabled={saving}>
                        Cancel
                      </button>
                      <button type="submit" className="btn-primary save-btn" disabled={saving}>
                        {saving ? 'Saving...' : <><Save size={18} /> Save Changes</>}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}
