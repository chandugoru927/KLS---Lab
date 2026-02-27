import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users,
  Box, 
  Zap,
  Layers,
  GraduationCap, 
  Trophy, 
  Plus,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useAuth } from '../../services/authService';
import { UserRole } from '../../types';

const navItems = [
  { name: 'Home', icon: Home, path: '/app' },
  { name: 'Classes', icon: Users, path: '/app/classes' },
  { name: 'Designs', icon: Box, path: '/app/designs' },
  { name: 'Circuits', icon: Zap, path: '/app/circuits' },
  { name: 'Collections', icon: Layers, path: '/app/collections' },
  { name: 'Tutorials', icon: GraduationCap, path: '/app/tutorials' },
  { name: 'Challenges', icon: Trophy, path: '/app/challenges' },
];

export function Sidebar() {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen sticky top-0 flex flex-col shrink-0">
      <div className="p-4 border-b border-slate-100">
        <button 
          className="w-full flex items-center justify-center gap-2 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-teal-600/20 transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Create New
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center justify-between group px-3 py-2.5 rounded-xl transition-all text-sm font-semibold",
                isActive 
                  ? "bg-teal-50 text-teal-700" 
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn("w-5 h-5", isActive ? "text-teal-600" : "text-slate-400 group-hover:text-slate-600")} />
                {item.name}
              </div>
              {isActive && <ChevronRight className="w-4 h-4" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-slate-100">
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
          <p className="text-[10px] font-bold text-teal-600 uppercase tracking-widest mb-1">
            {user?.role === UserRole.SUPER_ADMIN ? 'System Status' : 'Institution'}
          </p>
          <p className="text-sm font-bold text-slate-900 truncate">
            {user?.institution || 'KLS Engineering College'}
          </p>
        </div>
      </div>
    </aside>
  );
}
