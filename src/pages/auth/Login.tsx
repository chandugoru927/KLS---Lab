import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../services/authService';
import { UserRole } from '../../types';
import { Shield, Building2, GraduationCap, User as UserIcon, ArrowRight } from 'lucide-react';

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role: UserRole) => {
    login(role);
    navigate('/app');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center font-bold text-2xl text-white">K</div>
            <span className="font-black text-3xl tracking-tighter text-slate-900 uppercase">KEP LAB SIMULATOR</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              Portal <br /> <span className="text-teal-600">Access.</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-md">
              Welcome to the next generation of engineering education. Select your role to enter the workspace.
            </p>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 max-w-sm shadow-sm">
            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
              <Shield className="w-5 h-5 text-teal-600" />
            </div>
            <p className="text-sm text-slate-600">Secure, encrypted access for all institutional roles.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { 
              role: UserRole.SUPER_ADMIN, 
              label: 'Super Admin', 
              desc: 'KEP Team', 
              icon: Shield, 
              color: 'text-red-600', 
              bg: 'bg-red-50',
              border: 'hover:border-red-600/50'
            },
            { 
              role: UserRole.COLLEGE_ADMIN, 
              label: 'College Admin', 
              desc: 'Institutional', 
              icon: Building2, 
              color: 'text-teal-600', 
              bg: 'bg-teal-50',
              border: 'hover:border-teal-600/50'
            },
            { 
              role: UserRole.FACULTY, 
              label: 'Faculty', 
              desc: 'Academic', 
              icon: GraduationCap, 
              color: 'text-emerald-600', 
              bg: 'bg-emerald-50',
              border: 'hover:border-emerald-600/50'
            },
            { 
              role: UserRole.STUDENT, 
              label: 'Student', 
              desc: 'Learning', 
              icon: UserIcon, 
              color: 'text-blue-600', 
              bg: 'bg-blue-50',
              border: 'hover:border-blue-600/50'
            },
          ].map((item) => (
            <button
              key={item.role}
              onClick={() => handleLogin(item.role)}
              className={`p-6 rounded-[32px] bg-white border border-slate-200 transition-all text-left group ${item.border} flex flex-col h-full shadow-sm hover:shadow-xl hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{item.label}</h3>
              <p className="text-xs text-slate-500 mb-4">{item.desc}</p>
              <div className="mt-auto flex items-center gap-2 text-xs font-bold text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Enter Portal <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
