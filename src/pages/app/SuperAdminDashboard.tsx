import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Server, 
  Globe, 
  Building2, 
  Users, 
  Zap, 
  AlertTriangle, 
  Search, 
  Plus,
  ChevronRight,
  BarChart3,
  Database
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useAuth } from '../../services/authService';

const MOCK_INSTITUTIONS = [
  { name: 'KLS Engineering College', location: 'Bangalore', departments: 8, status: 'Active', health: 98 },
  { name: 'MIT Academy of Tech', location: 'Pune', departments: 12, status: 'Active', health: 95 },
  { name: 'IIT Madras Research', location: 'Chennai', departments: 5, status: 'Active', health: 99 },
  { name: 'Delhi Tech University', location: 'Delhi', departments: 15, status: 'Maintenance', health: 82 },
];

export function SuperAdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-600/20">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Global <span className="text-teal-600">Control.</span></h1>
            <p className="text-slate-500 text-sm mt-1">KEP Elite Platform • System Administrator</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2">
            <Database className="w-4 h-4" /> DB Backups
          </button>
          <button className="px-6 py-2.5 bg-teal-600 text-white rounded-xl text-xs font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 flex items-center gap-2">
            <Plus className="w-4 h-4" /> Onboard Institution
          </button>
        </div>
      </div>

      {/* Global Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Institutions', value: '24', icon: Building2, color: 'text-teal-600', bg: 'bg-teal-50' },
          { label: 'Global Users', value: '42.5K', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Active Sessions', value: '1.2K', icon: Zap, iconColor: 'text-amber-500', bg: 'bg-amber-50' },
          { label: 'System Health', value: '99.9%', icon: Server, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", stat.bg)}>
              <stat.icon className={cn("w-6 h-6", stat.color || stat.iconColor)} />
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
            <p className="text-2xl font-black text-slate-900 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Institution Management */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">Institution <span className="text-teal-600">Network.</span></h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search network..." 
                className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-teal-500/20 w-64"
              />
            </div>
          </div>

          <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Institution</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Location</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Health</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_INSTITUTIONS.map((inst, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{inst.name}</p>
                          <p className="text-[10px] text-slate-500">{inst.departments} Departments</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">{inst.location}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className={cn(
                            "h-full rounded-full",
                            inst.health > 90 ? "bg-emerald-500" : "bg-amber-500"
                          )} style={{ width: `${inst.health}%` }} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-500">{inst.health}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest",
                        inst.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                      )}>
                        {inst.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-slate-400 hover:text-teal-600 rounded-xl transition-all opacity-0 group-hover:opacity-100">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Global System Health */}
        <div className="space-y-6">
          <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">System <span className="text-teal-600">Status.</span></h2>
          
          <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <Globe className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Global CDN</p>
                  <p className="text-[10px] text-emerald-600 font-bold uppercase">Operational</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-slate-900">24ms</p>
                <p className="text-[10px] text-slate-400 font-medium uppercase">Latency</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Server className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-bold text-slate-700">Compute Clusters</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-600">99.9%</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-bold text-slate-700">Simulation Engine</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-600">Active</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-amber-600 mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Active Alerts</span>
              </div>
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                <p className="text-[10px] font-medium text-amber-800">
                  High traffic detected on Delhi Tech University cluster. Auto-scaling initiated.
                </p>
              </div>
            </div>
          </div>

          {/* Platform Performance Card */}
          <div className="bg-slate-900 rounded-[32px] p-8 text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest opacity-60">Global Analytics</h3>
              <p className="text-4xl font-black tracking-tighter">1.2M+</p>
              <p className="text-xs font-medium opacity-80">Simulations run platform-wide this month.</p>
              <button className="flex items-center gap-2 text-xs font-bold text-teal-400 hover:text-teal-300 transition-colors pt-2">
                View Full Analytics <BarChart3 className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
