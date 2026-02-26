import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/marketing/Home';
import { Product } from './pages/marketing/Product';
import { Colleges } from './pages/marketing/Colleges';
import { Students } from './pages/marketing/Students';
import { Pricing } from './pages/marketing/Pricing';
import { Resources } from './pages/marketing/Resources';
import { AboutUs } from './pages/marketing/AboutUs';
import { Contact } from './pages/marketing/Contact';
import { ThreeDDesign } from './pages/marketing/ThreeDDesign';
import { Login } from './pages/auth/Login';
import { AppLayout } from './components/layout/AppLayout';
import { DashboardNavbarOnlyLayout } from './components/layout/DashboardNavbarOnlyLayout';
import { UserDashboard } from './pages/app/UserDashboard';
import { Designs } from './pages/app/Designs';
import { Classes } from './pages/app/Classes';
import { Collections } from './pages/app/Collections';
import { Tutorials } from './pages/app/Tutorials';
import { Challenges } from './pages/app/Challenges';
import { CircuitCanvas } from './pages/app/CircuitCanvas';
import { Tinker3D } from './pages/app/Tinker3D';
import { AuthProvider } from './services/authService';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Marketing Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/students" element={<Students />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/3d-design" element={<ThreeDDesign />} />
          <Route path="/login" element={<Login />} />

          {/* Authenticated App Routes */}
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="designs" element={<Designs />} />
            <Route path="classes" element={<Classes />} />
            <Route path="collections" element={<Collections />} />
            <Route path="tutorials" element={<Tutorials />} />
            <Route path="circuits" element={<div className="p-8 text-slate-900">Circuits Workspace</div>} />
            <Route path="codeblocks" element={<div className="p-8">Codeblocks Editor</div>} />
            <Route path="challenges" element={<Challenges />} />
            <Route path="gallery" element={<div className="p-8 text-slate-900">Community Gallery</div>} />
            <Route path="learn" element={<div className="p-8 text-slate-900">Learning Center</div>} />
            <Route path="teachers" element={<div className="p-8 text-slate-900">Teacher Resources</div>} />
            <Route path="blog" element={<div className="p-8 text-slate-900">KLS Blog</div>} />
            <Route path="help" element={<div className="p-8 text-slate-900">Help Center</div>} />
            <Route path="projects" element={<div className="p-8 text-slate-900">My Projects List</div>} />
            <Route path="projects/:id" element={<CircuitCanvas />} />
            <Route path="labs" element={<div className="p-8">Virtual Labs Management</div>} />
            <Route path="analytics" element={<div className="p-8">Analytics & Insights Engine</div>} />
            <Route path="settings" element={<div className="p-8">Account & Workspace Settings</div>} />
            <Route path="components" element={<div className="p-8">Components Library</div>} />
            <Route path="editor" element={<div className="p-8">Code Editor</div>} />
            <Route path="iot" element={<div className="p-8">IoT Dashboard</div>} />
            <Route path="robotics" element={<div className="p-8">Robotics Module</div>} />
            
            {/* Admin Specific */}
            <Route path="institutions" element={<div className="p-8">Institutional Management</div>} />
            <Route path="departments" element={<div className="p-8">Departmental Controls</div>} />
            <Route path="faculty" element={<div className="p-8">Faculty Directory & Management</div>} />
            
            {/* Faculty Specific */}
            <Route path="students" element={<div className="p-8">Student Progress Tracking</div>} />
            <Route path="assignments" element={<div className="p-8">Lab Assignments & Grading</div>} />
            
            {/* Super Admin Specific */}
            <Route path="db" element={<div className="p-8">Global Database Controls</div>} />
            
            {/* Student Specific */}
            <Route path="path" element={<div className="p-8">Personalized Learning Path</div>} />
          </Route>

          <Route path="/app" element={<DashboardNavbarOnlyLayout />}>
            <Route path="3d-design" element={<Tinker3D />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
