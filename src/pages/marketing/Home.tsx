import React from 'react';
import { Hero3D } from '../../components/marketing/Hero3D';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, FlaskConical, Globe, ShieldCheck } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl">K</div>
            <span className="font-bold text-2xl tracking-tighter">KEP LAB SIMULATOR</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link to="/product" className="hover:text-white transition-colors">Product</Link>
            <Link to="/colleges" className="hover:text-white transition-colors">For Colleges</Link>
            <Link to="/students" className="hover:text-white transition-colors">For Students</Link>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link to="/resources" className="hover:text-white transition-colors">Resources</Link>
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-semibold hover:text-indigo-400 transition-colors">Log in</Link>
            <Link to="/login" className="bg-white text-slate-950 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-200 transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Three.js */}
      <Hero3D />

      {/* Problem Section */}
      <section className="py-32 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                The Infrastructure Gap in <span className="text-indigo-500">Engineering Education.</span>
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Globe, title: "Limited Access", desc: "Physical labs are restricted by hours and location." },
                  { icon: ShieldCheck, title: "Costly Hardware", desc: "Maintaining high-end equipment is a financial burden for institutions." },
                  { icon: Cpu, title: "Rapid Obsolescence", desc: "Technology moves faster than physical infrastructure can update." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-indigo-600/20 to-slate-800 rounded-3xl border border-white/10 flex items-center justify-center">
               <FlaskConical className="w-32 h-32 text-indigo-500 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">One Platform. Infinite Labs.</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to teach and learn modern engineering in a high-fidelity digital environment.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { title: "Circuit Simulator", desc: "Professional-grade SVG canvas for complex designs." },
            { title: "Firmware Engine", desc: "Monaco-based editor for C++ and Python development." },
            { title: "IoT Dashboard", desc: "Real-time telemetry and device management." },
            { title: "Robotics Module", desc: "3D physics-based environment for kinematic testing." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all group">
              <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold">K</div>
            <span className="font-bold text-xl tracking-tighter">KEP LAB SIMULATOR</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link to="/resources" className="hover:text-white transition-colors">Resources</Link>
          </div>
          <p className="text-slate-500 text-sm">© 2026 KEP Lab Simulator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
