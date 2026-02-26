import React from 'react';
import { BarChart3, TrendingUp, Users, PieChart, Download } from 'lucide-react';

export function AnalyticsEngine() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Advanced Analytics</h1>
          <p className="text-slate-500">Deep insights into lab performance and student engagement.</p>
        </div>
        <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
          <Download className="w-4 h-4" /> Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Success Rate</h3>
          </div>
          <p className="text-3xl font-bold text-slate-900">88.4%</p>
          <p className="text-xs text-emerald-600 font-medium mt-1">+2.4% from last semester</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Active Users</h3>
          </div>
          <p className="text-3xl font-bold text-slate-900">1,240</p>
          <p className="text-xs text-slate-500 font-medium mt-1">Across 12 institutions</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <PieChart className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Lab Distribution</h3>
          </div>
          <p className="text-3xl font-bold text-slate-900">42</p>
          <p className="text-xs text-slate-500 font-medium mt-1">Unique lab templates</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-bold text-slate-900">Engagement Over Time</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold">7D</button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded text-xs font-bold">30D</button>
            <button className="px-3 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold">1Y</button>
          </div>
        </div>
        
        <div className="h-64 flex items-end justify-between gap-2">
          {[40, 65, 45, 90, 75, 55, 80, 60, 95, 70, 85, 50].map((height, i) => (
            <div key={i} className="flex-1 bg-indigo-50 rounded-t-lg relative group">
              <div 
                className="absolute bottom-0 left-0 right-0 bg-indigo-600 rounded-t-lg transition-all duration-500 group-hover:bg-indigo-500" 
                style={{ height: `${height}%` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>
      </div>
    </div>
  );
}
