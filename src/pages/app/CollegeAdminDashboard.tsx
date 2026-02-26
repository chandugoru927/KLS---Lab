import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  GraduationCap, 
  Activity, 
  TrendingUp, 
  ShieldCheck, 
  Globe, 
  FileText,
  ChevronRight,
  Settings,
  Plus
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useAuth } from '../../services/authService';

const MOCK_DEPARTMENTS = [
  { name: 'Computer Science', faculty: 24, students: 450, activity: 92, status: 'Active' },
  { name: 'Electronics & Comm.', faculty: 18, students: 320, activity: 78, status: 'Active' },
  { name: 'Mechanical Engineering', faculty: 15, students: 280, activity: 65, status: 'Maintenance' },
  { name: 'Civil Engineering', faculty: 12, students: 210, activity: 45, status: 'Active' },
];

export function CollegeAdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm">
            <Building2 className="w-8 h-8 text-teal-600" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Institutional <span className="text-teal-600">Oversight.</span></h1>
            <p className="text-slate-500 text-sm mt-1">{user?.institution || 'KLS Engineering College'} • Admin Portal</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2">
            <Settings className="w-4 h-4" /> College Settings
          </button>
          <button className="px-6 py-2.5 bg-teal-600 text-white rounded-xl text-xs font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Department
          </button>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Faculty', value: '69', icon: GraduationCap, color: 'text-teal-600', bg: 'bg-teal-50' },
          { label: 'Total Students', value: '1,260', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Active Labs', value: '42', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Platform Usage', value: '88%', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition-all"
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
        {/* Departmental Performance */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">Departmental <span className="text-teal-600">Performance.</span></h2>
            <button className="text-xs font-bold text-teal-600 hover:text-teal-700">View Detailed Analytics</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_DEPARTMENTS.map((dept, i) => (
              <div key={i} className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm hover:border-teal-500/30 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{dept.name}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{dept.status}</p>
                  </div>
                  <div className={cn(
                    "px-2 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest",
                    dept.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                  )}>
                    {dept.activity}% Activity
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50">
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Faculty</p>
                    <p className="text-lg font-black text-slate-900">{dept.faculty}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Students</p>
                    <p className="text-lg font-black text-slate-900">{dept.students}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(n => (
                      <div key={n} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
                    ))}
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-teal-600 flex items-center justify-center text-[8px] font-bold text-white">
                      +{dept.faculty - 3}
                    </div>
                  </div>
                  <button className="text-xs font-bold text-slate-400 hover:text-teal-600 flex items-center gap-1 transition-colors">
                    Manage <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Compliance & Health */}
        <div className="space-y-6">
          <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">System <span className="text-teal-600">Health.</span></h2>
          
          <div className="bg-slate-900 rounded-[32px] p-6 text-white shadow-2xl shadow-slate-900/20 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <p className="text-sm font-bold">Security Compliance</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Verified 100%</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-slate-400">Server Load</span>
                  <span className="text-teal-400">Low</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: '24%' }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-slate-400">Lab Uptime</span>
                  <span className="text-teal-400">99.9%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '99%' }} />
                </div>
              </div>
            </div>

            <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl text-xs font-bold transition-all">
              View Infrastructure Logs
            </button>
          </div>

          <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Globe className="w-4 h-4 text-teal-600" /> Recent Activity
            </h3>
            <div className="space-y-4">
              {[
                { msg: 'New Faculty onboarded to CS Dept', time: '1h ago', icon: GraduationCap },
                { msg: 'System maintenance scheduled', time: '3h ago', icon: Activity },
                { msg: 'Annual lab report generated', time: '1d ago', icon: FileText },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-700">{item.msg}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
