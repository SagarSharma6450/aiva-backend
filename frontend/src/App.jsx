import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OrgSignup from './pages/OrgSignup';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Interview from './pages/Interview';
import IntroSplash from './components/IntroSplash';
import ProtectedRoute from './components/ProtectedRoute';

import CandidateTests from './pages/candidate/CandidateTests';
import TestInstructions from './pages/candidate/TestInstructions';
import AssessmentSession from './pages/candidate/AssessmentSession';
import Submitted from './pages/candidate/Submitted';

import AdminDashboard from './pages/admin/AdminDashboard';
import CreateTest from './pages/admin/CreateTest';
import TestDetail from './pages/admin/TestDetail';
import SubmissionReport from './pages/admin/SubmissionReport';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroSplash onDone={() => setShowIntro(false)} />}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/org/signup" element={<OrgSignup />} />

          {/* legacy practice mode — kept, candidate-only, unlinked from main nav */}
          <Route path="/dashboard" element={<ProtectedRoute allow={['CANDIDATE']}><Dashboard /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute allow={['CANDIDATE']}><Profile /></ProtectedRoute>} />
          <Route path="/interview/:typeId" element={<ProtectedRoute allow={['CANDIDATE']}><Interview /></ProtectedRoute>} />
          <Route path="/interview/:typeId/:sessionId" element={<ProtectedRoute allow={['CANDIDATE']}><Interview /></ProtectedRoute>} />

          {/* candidate assessment flow */}
          <Route path="/tests" element={<ProtectedRoute allow={['CANDIDATE']}><CandidateTests /></ProtectedRoute>} />
          <Route path="/tests/:testId/instructions" element={<ProtectedRoute allow={['CANDIDATE']}><TestInstructions /></ProtectedRoute>} />
          <Route path="/tests/:testId/session/:submissionId" element={<ProtectedRoute allow={['CANDIDATE']}><AssessmentSession /></ProtectedRoute>} />
          <Route path="/submitted" element={<ProtectedRoute allow={['CANDIDATE']}><Submitted /></ProtectedRoute>} />

          {/* admin panel */}
          <Route path="/admin" element={<ProtectedRoute allow={['ORG_ADMIN', 'SUPER_ADMIN']}><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/tests/new" element={<ProtectedRoute allow={['ORG_ADMIN', 'SUPER_ADMIN']}><CreateTest /></ProtectedRoute>} />
          <Route path="/admin/tests/:testId" element={<ProtectedRoute allow={['ORG_ADMIN', 'SUPER_ADMIN']}><TestDetail /></ProtectedRoute>} />
          <Route path="/admin/tests/:testId/submissions/:submissionId" element={<ProtectedRoute allow={['ORG_ADMIN', 'SUPER_ADMIN']}><SubmissionReport /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
