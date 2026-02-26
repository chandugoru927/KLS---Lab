import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Activity, 
  CreditCard,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Institution Administration</h1>
          <p className="text-slate-500">Manage departments, faculty, and institutional licenses.</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-sm">
          <Building2 className="w-4 h-4" /> Add Department
        </button>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Departments', value: '8', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Faculty', value: '42', icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'System Health', value: '99.9%', icon: Activity, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'License', value: 'Enterprise', icon: CreditCard, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={stat.bg + " p-2 rounded-lg"}>
                <stat.icon className={stat.color + " w-5 h-5"} />
              </div>
            </div>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Department Management */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Departments</h2>
            <button className="text-sm font-semibold text-indigo-600">Manage All</button>
          </div>
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-wider font-bold">
              <tr>
                <th className="px-6 py-3">Department Name</th>
                <th className="px-6 py-3">Faculty</th>
                <th className="px-6 py-3">Students</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: 'Electronics & Communication', faculty: 12, students: 450, status: 'Active' },
                { name: 'Computer Science', faculty: 18, students: 620, status: 'Active' },
                { name: 'Mechanical Engineering', faculty: 8, students: 320, status: 'Active' },
                { name: 'Electrical Engineering', faculty: 10, students: 380, status: 'Active' },
              ].map((dept) => (
                <tr key={dept.name} className="hover:bg-slate-50 transition-colors cursor-pointer">
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{dept.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{dept.faculty}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{dept.students}</td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full uppercase">
                      {dept.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* System Alerts */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-900">System Alerts</h2>
          </div>
          <div className="p-4 space-y-4">
            {[
              { title: 'License Renewal', desc: 'Your enterprise license expires in 14 days.', type: 'warning' },
              { title: 'New Faculty Request', desc: '3 pending approvals for Dept of CS.', type: 'info' },
              { title: 'Storage Limit', desc: 'Institution storage is at 85% capacity.', type: 'warning' },
            ].map((alert) => (
              <div key={alert.title} className={cn(
                "p-4 rounded-xl border flex gap-3",
                alert.type === 'warning' ? "bg-amber-50 border-amber-100 text-amber-800" : "bg-blue-50 border-blue-100 text-blue-800"
              )}>
                <AlertCircle className="w-5 h-5 shrink-0" />
                <div>
                  <p className="text-sm font-bold">{alert.title}</p>
                  <p className="text-xs opacity-80">{alert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
