import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Mountain, Compass, Target, Award } from 'lucide-react';

export function Challenges() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Your <span className="text-teal-600">challenges.</span></h1>
        <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
          <Compass className="w-4 h-4 text-teal-600" />
          Challenge Hub
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[32px] border border-slate-200 p-20 flex flex-col items-center text-center space-y-6 shadow-sm"
      >
        {/* Mountain Illustration */}
        <div className="relative w-48 h-48 bg-slate-50 rounded-full flex items-center justify-center">
          <div className="absolute inset-0 bg-slate-100/50 rounded-full animate-pulse" />
          <div className="relative z-10 text-slate-300">
            <Mountain className="w-24 h-24 stroke-[1.5]" />
            <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-teal-500 rounded-sm rotate-12 flex items-center justify-center shadow-sm">
              <div className="w-1 h-4 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>

        <div className="max-w-md space-y-2">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight uppercase">You haven't joined any challenges yet.</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Challenges are a great way to test your skills and win prizes. Browse our active challenges to get started.
          </p>
        </div>

        <div className="pt-4">
          <button className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-teal-600/20 flex items-center gap-2">
            Browse all challenges
          </button>
        </div>
      </motion.div>

      {/* Footer Info Section */}
      <div className="pt-12 border-t border-slate-200">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Target className="w-5 h-5 text-teal-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Skill Building</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Each challenge is designed to push your creative and technical boundaries.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Award className="w-5 h-5 text-teal-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Win Prizes</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Top designs are featured in our global gallery and can win exclusive rewards.</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <Trophy className="w-5 h-5 text-teal-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Global Rankings</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Compete with innovators from around the world and climb the leaderboard.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
