import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Plus, ArrowRightLeft } from 'lucide-react';

export function Classes() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Your <span className="text-teal-600">classes.</span></h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[32px] border border-slate-200 p-12 flex flex-col items-center text-center space-y-6 shadow-sm"
      >
        {/* Illustration Placeholder - Apple on Book style */}
        <div className="relative w-48 h-48 bg-teal-50 rounded-full flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-100/50 rounded-full animate-pulse" />
          <div className="relative z-10 text-teal-600">
            <BookOpen className="w-24 h-24 stroke-[1.5]" />
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
              <div className="w-1 h-3 bg-emerald-600 rounded-full -rotate-45 -translate-y-1" />
            </div>
          </div>
        </div>

        <div className="max-w-md space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Enroll in a class</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            You are not in any classes yet. Join a class to get started. Moving classes? You can also transfer your designs from another account or class.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm transition-all flex items-center gap-2">
            <ArrowRightLeft className="w-4 h-4" />
            Transfer designs
          </button>
          <button className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-teal-600/20 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Join a Class
          </button>
        </div>
      </motion.div>

      {/* Footer Info Section as seen in video */}
      <div className="pt-12 border-t border-slate-200">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter leading-none uppercase">
              Tomorrow's innovators <br /> <span className="text-teal-600">are made today.</span>
            </h3>
            <p className="text-slate-500 text-sm max-w-md">
              At KLS Elite, we empower innovators everywhere to take the problems of today and turn them into something amazing.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2.5 bg-teal-600 text-white rounded-xl font-bold text-xs hover:bg-teal-700 transition-all">Start Tinkering</button>
              <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-xs hover:bg-slate-50 transition-all">Learn More</button>
            </div>
          </div>
          <div className="aspect-video bg-slate-100 rounded-[32px] overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/innovate/800/450" 
              alt="Innovation" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
              <p className="text-white font-bold text-lg">Join the global community of creators.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
