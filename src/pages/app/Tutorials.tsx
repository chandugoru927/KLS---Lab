import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  ChevronRight, 
  Clock, 
  Box, 
  Zap, 
  Code2, 
  FlaskConical,
  LayoutGrid
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface Tutorial {
  id: string;
  title: string;
  type: '3D' | 'Circuit' | 'Codeblocks';
  duration: string;
  thumbnail: string;
  status: 'Not started' | 'In progress' | 'Completed';
  timeAgo?: string;
}

const MY_TUTORIALS: Tutorial[] = [
  { id: 'm1', title: 'Start Simulating', type: 'Circuit', duration: '5 min', status: 'Not started', timeAgo: 'an hour ago', thumbnail: 'https://picsum.photos/seed/tut1/400/300' },
  { id: 'm2', title: 'Editing Components', type: 'Circuit', duration: '8 min', status: 'Not started', timeAgo: 'a day ago', thumbnail: 'https://picsum.photos/seed/tut2/400/300' },
];

const RECOMMENDED_3D: Tutorial[] = [
  { id: '3d1', title: 'Place It', type: '3D', duration: '1 min', status: 'Not started', thumbnail: 'https://picsum.photos/seed/3d_tut1/400/300' },
  { id: '3d2', title: 'View It', type: '3D', duration: '1 min', status: 'Not started', thumbnail: 'https://picsum.photos/seed/3d_tut2/400/300' },
  { id: '3d3', title: 'Move It', type: '3D', duration: '1 min', status: 'Not started', thumbnail: 'https://picsum.photos/seed/3d_tut3/400/300' },
  { id: '3d4', title: 'Rotate It', type: '3D', duration: '1 min', status: 'Not started', thumbnail: 'https://picsum.photos/seed/3d_tut4/400/300' },
];

const RECOMMENDED_CIRCUITS: Tutorial[] = [
  { id: 'c1', title: 'Wiring Components', type: 'Circuit', duration: '1 min', status: 'Not started', thumbnail: 'https://picsum.photos/seed/c_tut1/400/300' },
  { id: 'c2', title: 'Adding Components', type: 'Circuit', duration: '1 min', status: 'Not started', thumbnail: 'https://picsum.photos/seed/c_tut2/400/300' },
  { id: 'c3', title: 'Introducing the Breadboard', type: 'Circuit', duration: '1 min', status: 'Not started', thumbnail: 'https://picsum.photos/seed/c_tut3/400/300' },
  { id: 'c4', title: "Ohm's Law", type: 'Circuit', duration: '1 min', status: 'Not started', thumbnail: 'https://picsum.photos/seed/c_tut4/400/300' },
];

function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden group hover:shadow-xl transition-all"
    >
      <div className="aspect-video bg-slate-100 relative overflow-hidden">
        <img 
          src={tutorial.thumbnail} 
          alt={tutorial.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-wider shadow-sm">
            {tutorial.status}
          </span>
        </div>
        {tutorial.type === 'Circuit' && (
          <div className="absolute bottom-3 right-3 p-1.5 bg-emerald-500 rounded-lg shadow-lg">
            <Zap className="w-3.5 h-3.5 text-white" />
          </div>
        )}
        {tutorial.type === '3D' && (
          <div className="absolute bottom-3 right-3 p-1.5 bg-blue-500 rounded-lg shadow-lg">
            <Box className="w-3.5 h-3.5 text-white" />
          </div>
        )}
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h4 className="font-bold text-slate-900 text-sm truncate group-hover:text-teal-600 transition-colors">{tutorial.title}</h4>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] text-slate-400 font-medium">{tutorial.timeAgo || tutorial.duration}</span>
          </div>
        </div>
        <button className="w-full py-2 bg-slate-100 hover:bg-teal-600 hover:text-white text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2">
          <Play className="w-3 h-3 fill-current" />
          Start
        </button>
      </div>
    </motion.div>
  );
}

export function Tutorials() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Your <span className="text-teal-600">tutorials.</span></h1>
        <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
          <LayoutGrid className="w-4 h-4" />
          All tutorials
        </button>
      </div>

      {/* Section 1: Your tutorial designs */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Your tutorial designs</h2>
          <button className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1">
            View all <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MY_TUTORIALS.map((tut) => (
            <TutorialCard key={tut.id} tutorial={tut} />
          ))}
        </div>
      </section>

      {/* Section 2: Recommended 3D Design */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Recommended 3D Design</h2>
          <button className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1">
            View all <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECOMMENDED_3D.map((tut) => (
            <TutorialCard key={tut.id} tutorial={tut} />
          ))}
        </div>
      </section>

      {/* Section 3: Recommended Circuits */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Recommended Circuits</h2>
          <button className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1">
            View all <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECOMMENDED_CIRCUITS.map((tut) => (
            <TutorialCard key={tut.id} tutorial={tut} />
          ))}
        </div>
      </section>

      {/* Footer Info */}
      <div className="pt-12 border-t border-slate-200">
        <div className="bg-teal-600 rounded-[32px] p-12 text-white relative overflow-hidden shadow-2xl shadow-teal-600/20">
          <div className="relative z-10 max-w-2xl space-y-6">
            <h3 className="text-4xl font-black tracking-tighter leading-none uppercase">
              Master the skills <br /> <span className="text-teal-200">of the future.</span>
            </h3>
            <p className="text-teal-50 text-lg font-medium opacity-90">
              Our guided lessons take you from absolute beginner to advanced creator. Learn 3D modeling, electronics, and coding in one place.
            </p>
            <button className="px-8 py-4 bg-white text-teal-700 rounded-2xl font-bold text-sm hover:bg-teal-50 transition-all shadow-xl">
              Explore Learning Center
            </button>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
