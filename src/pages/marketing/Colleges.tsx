import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, ShieldCheck, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

export function Colleges() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl">K</div>
            <span className="font-bold text-2xl tracking-tighter">KLS ELITE</span>
          </Link>
          <Link to="/" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">For Institutions</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transform your engineering department with a digital-first infrastructure that scales infinitely.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              { title: "90% Cost Reduction", icon: TrendingUp, desc: "Eliminate the need for expensive physical components and maintenance." },
              { title: "Accreditation Ready", icon: ShieldCheck, desc: "Built-in reporting and analytics to support NBA/NAAC accreditation." },
              { title: "Infinite Scalability", icon: Users, desc: "Support thousands of students simultaneously with zero hardware bottlenecks." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-indigo-600 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Ready to modernize your lab?</h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-12 relative z-10">
              Join leading institutions already using KLS Elite to provide world-class engineering education.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all">
                Request Institutional Demo
              </button>
              <button className="bg-indigo-700 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-800 transition-all border border-white/10">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
