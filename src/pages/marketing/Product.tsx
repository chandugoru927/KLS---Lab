import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, FlaskConical, Globe, ShieldCheck, Zap, Database, Boxes } from 'lucide-react';

export function Product() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl">K</div>
            <span className="font-bold text-2xl tracking-tighter">KEP LAB SIMULATOR</span>
          </Link>
          <Link to="/" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">THE TECHNICAL STACK</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A deep dive into the engines powering the KEP Lab Simulator digital lab infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "Circuit Simulator", 
                icon: FlaskConical,
                desc: "High-fidelity SVG-based canvas with real-time physics. Support for thousands of components, custom sub-circuits, and automated analysis.",
                features: ["Real-time SPICE simulation", "SVG Component Library", "Automated Netlist Generation"]
              },
              { 
                title: "Firmware Engine", 
                icon: Cpu,
                desc: "Cloud-based development environment powered by Monaco. Compile and run code for virtual microcontrollers with zero setup.",
                features: ["C++/Python Support", "Virtual Serial Monitor", "Library Manager"]
              },
              { 
                title: "IoT Dashboard", 
                icon: Globe,
                desc: "Complete telemetry stack for device management. Visualize data streams, set up alerts, and manage virtual/physical device bridges.",
                features: ["MQTT/HTTP Protocols", "Custom Widget Builder", "Data Persistence"]
              },
              { 
                title: "Robotics Module", 
                icon: Boxes,
                desc: "3D physics environment for kinematic and dynamic testing. Test algorithms in a safe, repeatable digital twin.",
                features: ["Physics-based Simulation", "Kinematic Analysis", "Sensor Feedback"]
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center mb-8">
                  <item.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{item.desc}</p>
                <ul className="space-y-3">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
