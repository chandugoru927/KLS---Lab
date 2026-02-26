import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  BarChart3, 
  Search, 
  Filter,
  MoreVertical,
  ChevronRight,
  GraduationCap,
  Zap
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useAuth } from '../../services/authService';

const MOCK_STUDENTS = [
  { id: '1', name: 'Alice Johnson', progress: 85, labsCompleted: 12, lastActive: '2 hours ago', status: 'On Track' },
  { id: '2', name: 'Bob Smith', progress: 45, labsCompleted: 6, lastActive: '5 hours ago', status: 'At Risk' },
  { id: '3', name: 'Charlie Brown', progress: 92, labsCompleted: 14, lastActive: '10 mins ago', status: 'Excellent' },
  { id: '4', name: 'Diana Prince', progress: 78, labsCompleted: 11, lastActive: '1 day ago', status: 'On Track' },
  { id: '5', name: 'Ethan Hunt', progress: 60, labsCompleted: 8, lastActive: '3 hours ago', status: 'Needs Attention' },
];

const MOCK_SUBMISSIONS = [
  { id: '1', student: 'Alice Johnson', lab: 'Circuit Simulation 101', submittedAt: '2024-02-25 14:30', status: 'Pending Review' },
  { id: '2', student: 'Charlie Brown', lab: 'IoT Gateway Config', submittedAt: '2024-02-25 16:45', status: 'Graded' },
  { id: '3', student: 'Diana Prince', lab: 'Robotic Arm Kinematics', submittedAt: '2024-02-26 09:15', status: 'Pending Review' },
];

export function FacultyDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Faculty <span className="text-teal-600">Dashboard.</span></h1>
          <p className="text-slate-500 text-sm mt-1">Monitor student performance and manage lab submissions.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2">
            <BarChart3 className="w-4 h-4" /> Generate Report
          </button>
          <button className="px-4 py-2 bg-teal-600 text-white rounded-xl text-xs font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20">
            Create New Lab
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Students', value: '124', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Avg. Completion', value: '72%', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Pending Reviews', value: '18', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'At Risk Students', value: '5', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", stat.bg)}>
              <stat.icon className={cn("w-6 h-6", stat.color)} />
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
            <p className="text-2xl font-black text-slate-900 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Student Progress Table */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-teal-600" /> Student Progress
            </h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search students..." 
                  className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                />
              </div>
              <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Student</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Progress</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Labs</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_STUDENTS.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-xs">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{student.name}</p>
                          <p className="text-[10px] text-slate-500">Active {student.lastActive}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-full max-w-[120px] space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] font-bold text-slate-500">
                          <span>{student.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={cn(
                              "h-full rounded-full transition-all duration-1000",
                              student.progress > 80 ? "bg-emerald-500" : student.progress > 50 ? "bg-teal-500" : "bg-amber-500"
                            )}
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-slate-700">{student.labsCompleted}</span>
                      <span className="text-[10px] text-slate-400 ml-1">/ 15</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider",
                        student.status === 'Excellent' ? 'bg-emerald-50 text-emerald-600' :
                        student.status === 'On Track' ? 'bg-blue-50 text-blue-600' :
                        student.status === 'Needs Attention' ? 'bg-amber-50 text-amber-600' :
                        'bg-red-50 text-red-600'
                      )}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-slate-400 hover:text-slate-900 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-teal-600" /> Submissions
            </h2>
            <button className="text-[10px] font-bold text-teal-600 uppercase tracking-widest hover:text-teal-700">View All</button>
          </div>

          <div className="space-y-3">
            {MOCK_SUBMISSIONS.map((sub) => (
              <div key={sub.id} className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm hover:border-teal-500/30 transition-all group cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{sub.lab}</p>
                      <p className="text-[10px] text-slate-500">{sub.student}</p>
                    </div>
                  </div>
                  <span className={cn(
                    "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest",
                    sub.status === 'Graded' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                  )}>
                    {sub.status}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                  <span className="text-[9px] text-slate-400 font-medium">Submitted {sub.submittedAt}</span>
                  <button className="flex items-center gap-1 text-[10px] font-bold text-teal-600 group-hover:translate-x-1 transition-transform">
                    Review <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Lab Completion Summary Card */}
          <div className="bg-teal-600 rounded-3xl p-6 text-white shadow-xl shadow-teal-600/20">
            <h3 className="text-sm font-bold uppercase tracking-widest opacity-80">Lab Completion %</h3>
            <div className="mt-4 flex items-end gap-4">
              <p className="text-4xl font-black tracking-tighter">84.2%</p>
              <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-white rounded-full" style={{ width: '84.2%' }} />
              </div>
            </div>
            <p className="text-[10px] font-medium mt-4 opacity-70">
              +12.5% increase from last week. Students are engaging more with the "IoT Gateway" module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
