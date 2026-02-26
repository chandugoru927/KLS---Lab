import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Cpu, Boxes, ArrowRight } from 'lucide-react';

import { useAuth } from '@/src/services/authService';
import { UserRole } from '@/src/types';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: UserRole) => {
    login(role);
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Public Nav */}
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">K</div>
          <span className="font-bold text-2xl tracking-tight text-slate-900">KLS ELITE</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to="/product" className="hover:text-indigo-600">Product</Link>
          <Link to="/solutions" className="hover:text-indigo-600">Solutions</Link>
          <Link to="/pricing" className="hover:text-indigo-600">Pricing</Link>
          <Link to="/resources" className="hover:text-indigo-600">Resources</Link>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => handleLogin(UserRole.STUDENT)} className="text-sm font-semibold text-slate-900 hover:text-indigo-600">Log in</button>
          <button onClick={() => handleLogin(UserRole.STUDENT)} className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Next-Gen Engineering Education
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
          The Digital Lab for <span className="text-indigo-600">Future Engineers.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          High-fidelity simulation, real-time IoT visualization, and 3D robotics environments—all in one unified platform for institutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button onClick={() => handleLogin(UserRole.STUDENT)} className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
            Student Portal <ArrowRight className="w-5 h-5" />
          </button>
          <button onClick={() => handleLogin(UserRole.FACULTY)} className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
            Faculty Portal <ArrowRight className="w-5 h-5" />
          </button>
          <button onClick={() => handleLogin(UserRole.COLLEGE_ADMIN)} className="w-full sm:w-auto border border-slate-200 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all">
            Admin Demo
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Circuit Simulator</h3>
              <p className="text-slate-600 leading-relaxed">Drag-and-drop circuit design with real-time physics and component analysis.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">IoT Engine</h3>
              <p className="text-slate-600 leading-relaxed">Connect virtual and physical devices with real-time MQTT data visualization.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Robotics 3D</h3>
              <p className="text-slate-600 leading-relaxed">Test algorithms in a 3D physics-based environment before deploying to hardware.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
