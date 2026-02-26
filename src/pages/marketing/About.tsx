import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye, Users, Award } from 'lucide-react';

export function About() {
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
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">About Us</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We are on a mission to democratize high-end engineering infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-32">
            <div className="p-12 rounded-[40px] bg-white/5 border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                To bridge the gap between theoretical knowledge and practical application by providing every student with a world-class digital laboratory, regardless of their location or financial status.
              </p>
            </div>
            <div className="p-12 rounded-[40px] bg-white/5 border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                To become the global standard for engineering education infrastructure, empowering the next generation of innovators to build the future without boundaries.
              </p>
            </div>
          </div>

          {/* Founders */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold tracking-tight mb-16 text-center">The Founders</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { name: "Keshava Murthy", role: "CEO & Founder", bio: "Former engineering professor with 20+ years in technical education." },
                { name: "Ananya Rao", role: "CTO", bio: "Ex-Robotics lead at a top tech firm, passionate about simulation physics." },
                { name: "Vikram Singh", role: "COO", bio: "Operations expert with a focus on institutional scaling and partnerships." }
              ].map((person) => (
                <div key={person.name} className="text-center group">
                  <div className="w-48 h-48 rounded-full bg-slate-800 mx-auto mb-8 overflow-hidden border-4 border-white/5 group-hover:border-indigo-500/50 transition-all">
                    <img 
                      src={`https://picsum.photos/seed/${person.name}/400/400`} 
                      alt={person.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{person.name}</h3>
                  <p className="text-indigo-400 font-bold text-sm mb-4 uppercase tracking-widest">{person.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{person.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Advisors */}
          <section>
            <h2 className="text-4xl font-bold tracking-tight mb-16 text-center">Advisory Board</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: "Dr. Robert Vance", role: "MIT Research" },
                { name: "Sarah Jenkins", role: "EdTech Strategy" },
                { name: "Michael Chang", role: "IoT Architecture" },
                { name: "Elena Rodriguez", role: "Academic Accreditation" }
              ].map((advisor) => (
                <div key={advisor.name} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                  <h3 className="font-bold text-lg mb-1">{advisor.name}</h3>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">{advisor.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
