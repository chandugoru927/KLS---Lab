import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Award, Zap, Globe, Cpu, Boxes } from 'lucide-react';

export function Students() {
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
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">For Students</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Master IoT, Robotics, and Embedded Systems with a professional-grade digital lab environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-12">
              {[
                { title: "Learn by Doing", icon: Zap, desc: "Access high-fidelity simulations 24/7. No more waiting for lab hours or sharing equipment." },
                { title: "Industry Certification", icon: Award, desc: "Earn certifications as you complete complex projects and labs." },
                { title: "Global Portfolio", icon: Globe, desc: "Share your projects with potential employers through a professional digital portfolio." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-12 bg-white/5 border border-white/10 rounded-[40px] relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl"></div>
              <h3 className="text-3xl font-bold mb-8">Student Roadmap</h3>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Fundamentals", desc: "Master basic circuits and logic gates." },
                  { step: "02", title: "Embedded Systems", desc: "Write firmware for virtual microcontrollers." },
                  { step: "03", title: "IoT & Robotics", desc: "Build complex, connected systems." },
                  { step: "04", title: "Capstone", desc: "Complete a professional-grade project." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="text-3xl font-black text-indigo-600/30">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
