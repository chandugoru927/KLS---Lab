import React from 'react';
import { motion } from 'framer-motion';
import { FolderPlus, Plus, Folder } from 'lucide-react';

export function Collections() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Your <span className="text-teal-600">collections.</span></h1>
        <button className="px-6 py-2.5 bg-teal-600 text-white rounded-xl font-bold text-sm hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New collection
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[32px] border border-slate-200 p-20 flex flex-col items-center text-center space-y-6 shadow-sm"
      >
        {/* Folder Icon Illustration */}
        <div className="relative w-48 h-48 bg-slate-50 rounded-full flex items-center justify-center">
          <div className="absolute inset-0 bg-slate-100/50 rounded-full animate-pulse" />
          <div className="relative z-10 text-slate-300">
            <Folder className="w-24 h-24 stroke-[1.5]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-12 h-1 bg-white rounded-full opacity-50" />
            </div>
          </div>
        </div>

        <div className="max-w-md space-y-2">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight uppercase">You haven't created any collections yet.</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Collections help you organize your designs and circuits into groups. Start by creating your first collection.
          </p>
        </div>

        <div className="pt-4">
          <button className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-teal-600/20 flex items-center gap-2">
            <FolderPlus className="w-4 h-4" />
            Create a collection
          </button>
        </div>
      </motion.div>

      {/* Footer Info Section */}
      <div className="pt-12 border-t border-slate-200">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Folder className="w-5 h-5 text-teal-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Stay Organized</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Group related designs together for easier access and management.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Plus className="w-5 h-5 text-teal-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Bulk Actions</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Move multiple designs at once into your custom collections.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <FolderPlus className="w-5 h-5 text-teal-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Share Collections</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Soon you'll be able to share entire collections with your classmates.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
