import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../../components/dashboard/ProjectCard';
import { Plus, Filter, LayoutGrid, List, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useAuth } from '../../services/authService';

type ProjectType = '3D Design' | 'Circuit' | 'Lab';

interface Project {
  id: string;
  name: string;
  type: ProjectType;
  lastModified: string;
  thumbnail: string;
}

const MOCK_PROJECTS: Project[] = [
  { id: '1', name: 'Smart Home Controller', type: 'Circuit', lastModified: '2 hours ago', thumbnail: 'https://picsum.photos/seed/circuit1/800/600' },
  { id: '2', name: 'Robotic Arm Base', type: '3D Design', lastModified: 'Yesterday', thumbnail: 'https://picsum.photos/seed/3d1/800/600' },
  { id: '3', name: 'IoT Sensor Node', type: 'Circuit', lastModified: '3 days ago', thumbnail: 'https://picsum.photos/seed/circuit2/800/600' },
  { id: '4', name: 'Drone Frame v2', type: '3D Design', lastModified: '1 week ago', thumbnail: 'https://picsum.photos/seed/3d2/800/600' },
  { id: '5', name: 'Embedded Systems Lab 4', type: 'Lab', lastModified: '2 weeks ago', thumbnail: 'https://picsum.photos/seed/lab1/800/600' },
  { id: '6', name: 'PID Controller Simulation', type: 'Lab', lastModified: '1 month ago', thumbnail: 'https://picsum.photos/seed/lab2/800/600' },
];

export function UserDashboard() {
  const { user } = useAuth();
  const [filter, setFilter] = useState<ProjectType | 'All'>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProjects = MOCK_PROJECTS.filter(p => filter === 'All' || p.type === filter);

  const handleCreateNew = () => {
    console.log('Create new project');
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Welcome Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-teal-600 rounded-[32px] p-8 md:p-12 overflow-hidden shadow-2xl shadow-teal-600/20"
      >
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> Featured Contest
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
            Welcome Back, <br /> <span className="text-teal-200">{user?.name || 'Chandu Goru'}.</span>
          </h1>
          <p className="text-teal-50 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
            Ready to build something amazing today? Your last project "Smart Home Controller" is waiting for you.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-white text-teal-700 rounded-xl font-bold text-sm hover:bg-teal-50 transition-all shadow-lg">
              Resume Last Project
            </button>
            <button className="px-6 py-3 bg-teal-500 text-white rounded-xl font-bold text-sm hover:bg-teal-400 transition-all border border-teal-400/50">
              Browse Lessons
            </button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/30 rounded-full blur-[100px]" />
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-teal-400/20 rounded-full blur-[40px]" />
        </div>
      </motion.div>

      {/* Filter & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 p-1 bg-white border border-slate-200 rounded-2xl shadow-sm">
          {(['All', '3D Design', 'Circuit', 'Lab'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-bold transition-all",
                filter === t 
                  ? "bg-teal-600 text-white shadow-lg shadow-teal-600/20" 
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              {t === 'All' ? 'All Projects' : t === 'Lab' ? 'Assigned Labs' : `${t}s`}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 p-1 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <button 
              onClick={() => setViewMode('grid')}
              className={cn(
                "p-2 rounded-xl transition-all",
                viewMode === 'grid' ? "bg-slate-100 text-teal-600" : "text-slate-400 hover:text-slate-600"
              )}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={cn(
                "p-2 rounded-xl transition-all",
                viewMode === 'list' ? "bg-slate-100 text-teal-600" : "text-slate-400 hover:text-slate-600"
              )}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Project Grid */}
      <motion.div 
        layout
        className={cn(
          "grid gap-6",
          viewMode === 'grid' ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
        )}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={(id) => console.log('Edit', id)}
              onSimulate={(id) => console.log('Simulate', id)}
              onShare={(id) => console.log('Share', id)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mx-auto">
            <Plus className="w-10 h-10 text-slate-300" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">No projects found</h3>
            <p className="text-slate-500 text-sm mt-1">Try changing your filter or create a new design to get started.</p>
          </div>
          <button 
            onClick={handleCreateNew}
            className="px-6 py-3 bg-teal-600 text-white rounded-xl font-bold text-sm hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20"
          >
            Create New Design
          </button>
        </div>
      )}
    </div>
  );
}
