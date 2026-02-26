import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Box, 
  Zap, 
  Code2, 
  GraduationCap, 
  Trophy, 
  Search, 
  Bell, 
  User, 
  Plus,
  Menu,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  onCreateNew: () => void;
}

const navItems = [
  { name: 'Home', icon: Home, path: '/app' },
  { name: 'Designs', icon: Box, path: '/app/designs' },
  { name: 'Circuits', icon: Zap, path: '/app/circuits' },
  { name: 'Codeblocks', icon: Code2, path: '/app/codeblocks' },
  { name: 'Lessons/Labs', icon: GraduationCap, path: '/app/labs' },
  { name: 'Challenges', icon: Trophy, path: '/app/challenges' },
];

export function DashboardLayout({ children, onCreateNew }: DashboardLayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Top Navbar */}
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center font-bold text-white tracking-tighter">K</div>
            <span className="font-black text-xl tracking-tighter text-slate-900 uppercase">KEP LAB SIMULATOR</span>
          </Link>
          
          <div className="hidden md:flex items-center w-96">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search designs, circuits, lessons..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-all"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className="h-8 w-[1px] bg-slate-200 mx-1"></div>
          
          <button className="flex items-center gap-3 pl-2 pr-1 py-1 hover:bg-slate-100 rounded-full transition-all border border-transparent hover:border-slate-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900 leading-none">Chandu Goru</p>
              <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest mt-1">Student</p>
            </div>
            <div className="w-9 h-9 bg-teal-600 rounded-full flex items-center justify-center font-bold text-white uppercase text-sm">
              CG
            </div>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col sticky top-16 h-[calc(100vh-64px)] overflow-y-auto shrink-0">
          <div className="p-4">
            <button 
              onClick={onCreateNew}
              className="w-full flex items-center justify-center gap-2 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-teal-600/20 transition-all active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Create New
            </button>
          </div>

          <nav className="flex-1 px-3 py-2 space-y-1">
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
                Institution
              </p>
              <p className="text-sm font-bold text-slate-900 truncate">
                KLS Engineering College
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-slate-50 p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
