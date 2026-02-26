import React, { useState } from 'react';
import { Search, Bell, User, Menu, ChevronDown, Box, Zap, Code2, FlaskConical, Newspaper, Lightbulb, Trophy, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../services/authService';

export function Navbar() {
  const { user } = useAuth();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center font-bold text-white tracking-tighter">K</div>
          <span className="font-black text-xl tracking-tighter text-slate-900 uppercase hidden sm:block">KEP LAB SIMULATOR</span>
        </Link>
        
        <div className="hidden lg:flex items-center w-80">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-500/50 focus:ring-4 focus:ring-teal-500/5 transition-all"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 ml-4">
          {/* Tinker Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('tinker')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all flex items-center gap-1">
              Tinker <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            {activeDropdown === 'tinker' && (
              <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 grid gap-2 mt-0">
                <Link to="/app/3d-design" className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600"><Box className="w-4 h-4" /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">3D Design</p>
                    <p className="text-[10px] text-slate-500">Start designing in 3D</p>
                  </div>
                </Link>
                <Link to="/app/circuits" className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600"><Zap className="w-4 h-4" /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Circuits</p>
                    <p className="text-[10px] text-slate-500">Add light and movement</p>
                  </div>
                </Link>
                <Link to="/app/codeblocks" className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600"><Code2 className="w-4 h-4" /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Codeblocks</p>
                    <p className="text-[10px] text-slate-500">Write programs to build</p>
                  </div>
                </Link>
                <Link to="/app/labs" className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600"><FlaskConical className="w-4 h-4" /></div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Sim Lab</p>
                    <p className="text-[10px] text-slate-500">Simulate physics and forces</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link to="/app/gallery" className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all">Gallery</Link>
          <Link to="/app/learn" className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all">Learn</Link>
          <Link to="/app/teachers" className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all">Teachers</Link>
          
          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('resources')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all flex items-center gap-1">
              Resources <ChevronDown className="w-3 h-3" />
            </button>
            {activeDropdown === 'resources' && (
              <div className="absolute top-full right-0 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 grid gap-2 mt-0">
                <Link to="/app/blog" className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600"><Newspaper className="w-4 h-4" /></div>
                  <p className="text-xs font-bold text-slate-900">KLS Blog</p>
                </Link>
                <Link to="/app/projects" className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600"><Lightbulb className="w-4 h-4" /></div>
                  <p className="text-xs font-bold text-slate-900">Projects</p>
                </Link>
                <Link to="/app/challenges" className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600"><Trophy className="w-4 h-4" /></div>
                  <p className="text-xs font-bold text-slate-900">Challenges</p>
                </Link>
                <Link to="/app/help" className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600"><HelpCircle className="w-4 h-4" /></div>
                  <p className="text-xs font-bold text-slate-900">Help Center</p>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-slate-200 mx-1"></div>
        
        <button className="flex items-center gap-3 pl-2 pr-1 py-1 hover:bg-slate-100 rounded-full transition-all border border-transparent hover:border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900 leading-none">{user?.name || 'User'}</p>
            <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest mt-1">{user?.role || 'Guest'}</p>
          </div>
          <div className="w-9 h-9 bg-teal-600 rounded-full flex items-center justify-center font-bold text-white uppercase text-sm">
            {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
          </div>
        </button>
      </div>
    </header>
  );
}
