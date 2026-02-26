import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutGrid, 
  Box, 
  Zap, 
  Code2, 
  Trash2, 
  ChevronDown, 
  Heart, 
  Eye,
  Plus,
  Search,
  Filter
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

type DesignType = '3D' | 'Circuit' | 'Codeblocks';

interface Design {
  id: string;
  name: string;
  type: DesignType;
  lastModified: string;
  status: 'Private' | 'Public';
  thumbnail: string;
  likes: number;
  views: number;
}

const MOCK_DESIGNS: Design[] = [
  { 
    id: '1', 
    name: 'Spectacular Sango-Jaban', 
    type: 'Codeblocks', 
    lastModified: '2 days ago', 
    status: 'Private', 
    thumbnail: 'https://picsum.photos/seed/code1/800/600',
    likes: 0,
    views: 0
  },
  { 
    id: '2', 
    name: 'Powerful Jery', 
    type: '3D', 
    lastModified: '7 days ago', 
    status: 'Private', 
    thumbnail: 'https://picsum.photos/seed/3d_1/800/600',
    likes: 0,
    views: 2
  },
  { 
    id: '3', 
    name: 'Brave Bojo', 
    type: '3D', 
    lastModified: '8 days ago', 
    status: 'Private', 
    thumbnail: 'https://picsum.photos/seed/3d_2/800/600',
    likes: 0,
    views: 1
  },
];

export function Designs() {
  const [filter, setFilter] = useState<DesignType | 'All'>('All');

  const filteredDesigns = MOCK_DESIGNS.filter(d => filter === 'All' || d.type === filter);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Your <span className="text-teal-600">designs.</span></h1>
        <button className="px-6 py-2.5 bg-teal-600 text-white rounded-xl font-bold text-sm hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create New
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-2xl">
            {[
              { id: 'All', icon: LayoutGrid, label: 'All' },
              { id: '3D', icon: Box, label: '3D' },
              { id: 'Circuit', icon: Zap, label: 'Circuits' },
              { id: 'Codeblocks', icon: Code2, label: 'Codeblocks' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id as any)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all",
                  filter === item.id 
                    ? "bg-white text-teal-600 shadow-sm" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors">
            <Trash2 className="w-4 h-4" />
            Recycle bin
          </button>
          <div className="h-4 w-[1px] bg-slate-200" />
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 rounded-xl transition-all">
            Edited
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Designs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredDesigns.map((design) => (
            <motion.div
              layout
              key={design.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                <img 
                  src={design.thumbnail} 
                  alt={design.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                
                {/* Type Icon Overlay */}
                <div className="absolute top-3 left-3">
                  <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
                    {design.type === '3D' && <Box className="w-4 h-4 text-blue-600" />}
                    {design.type === 'Circuit' && <Zap className="w-4 h-4 text-emerald-600" />}
                    {design.type === 'Codeblocks' && <Code2 className="w-4 h-4 text-purple-600" />}
                  </div>
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-teal-600 transition-colors truncate">
                    {design.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-slate-400 font-medium">{design.lastModified}</span>
                    <span className="text-[10px] text-slate-300">•</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{design.status}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-slate-400">
                      <Heart className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold">{design.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400">
                      <Eye className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold">{design.views}</span>
                    </div>
                  </div>
                  <button className="text-[10px] font-bold text-teal-600 hover:text-teal-700 uppercase tracking-widest">
                    Edit This
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center pt-8">
        <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
          <button className="p-2 hover:bg-slate-100 rounded-lg disabled:opacity-30" disabled>
            <ChevronDown className="w-4 h-4 rotate-90" />
          </button>
          <span>1 of 1 pages</span>
          <button className="p-2 hover:bg-slate-100 rounded-lg disabled:opacity-30" disabled>
            <ChevronDown className="w-4 h-4 -rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
}
