import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, Play, Share2, Clock } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    type: '3D Design' | 'Circuit' | 'Lab';
    lastModified: string;
    thumbnail: string;
  };
  onEdit: (id: string) => void;
  onSimulate: (id: string) => void;
  onShare: (id: string) => void;
}

export function ProjectCard({ project, onEdit, onSimulate, onShare }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden group transition-all"
    >
      {/* Thumbnail */}
      <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
        
        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-md text-[10px] font-bold text-slate-600 uppercase tracking-wider">
            {project.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-slate-900 truncate group-hover:text-teal-600 transition-colors">
            {project.name}
          </h3>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-1">
            <Clock className="w-3 h-3" />
            <span>Modified {project.lastModified}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
          <button
            onClick={() => onEdit(project.id)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition-all"
          >
            <Edit3 className="w-3.5 h-3.5" />
            Edit
          </button>
          <button
            onClick={() => onSimulate(project.id)}
            className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-all"
            title="Simulate"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
          </button>
          <button
            onClick={() => onShare(project.id)}
            className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg transition-all"
            title="Share"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
