import React from 'react';
import { motion } from 'framer-motion';
import { Box, Plus, Users, Play, ChevronRight, MousePointer2, Layers, Maximize, Cpu, Zap, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TinkerCircuits() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero Section - Full Screen with Background Video and Grid */}
      <section className="relative h-[calc(100vh-64px)] overflow-hidden bg-[#4CAF50]">
        {/* Grid Overlay - White lines on green background */}
        <div 
          className="absolute inset-0 z-10 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#fff 1.5px, transparent 1.5px), linear-gradient(90deg, #fff 1.5px, transparent 1.5px)`,
            backgroundSize: '60px 60px',
            backgroundPosition: 'center center'
          }}
        ></div>

        {/* Background Video Embed */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dzprbyas3&public_id=hero-circuits_pgqxih&autoplay=true&loop=true&muted=true&controls=false"
            className="w-full h-full scale-[1.05]"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            frameBorder="0"
          ></iframe>
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl mb-8"
            >
              Power up your <br />
              <span className="text-white/90">imagination</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed"
          >
            From blinking your first LED to building autonomous robots, we’ll show you the ropes, buttons, and breadboards of electronics.
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button className="px-10 py-5 bg-[#4CAF50] text-white rounded-2xl font-black text-xl hover:bg-[#43A047] transition-all shadow-2xl shadow-green-500/40 hover:scale-105">
              Start Tinkering
            </button>
            <button className="px-10 py-5 bg-slate-100 text-slate-900 border-2 border-slate-200 rounded-2xl font-black text-xl hover:bg-slate-200 transition-all hover:scale-105">
              Join Class
            </button>
          </div>
        </div>
      </section>

      {/* Easy in every way Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">Easy in every way</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#4CAF50]">
                  <Cpu className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Place a component</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  From resistors and LEDs to sensors and microcontrollers, we have everything you need to build your next big idea.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-600">
                  <Zap className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Wire it up</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Connect components with virtual wires. It's as simple as clicking and dragging to create a complete circuit.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-purple-600">
                  <Play className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Simulate</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Test your circuit in real-time. See LEDs light up, motors spin, and sensors react to your code.
                </p>
              </div>
            </div>

            <div className="bg-slate-100 rounded-3xl aspect-video relative overflow-hidden shadow-inner border border-slate-200">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dzprbyas3&public_id=circuits-sim_demo&autoplay=true&loop=true&muted=true&controls=false"
                className="w-full h-full"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Dark Theme */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-black tracking-tight uppercase">Simulate and test</h2>
              <p className="text-slate-400 text-lg">
                Before you build it for real, test it in KEP Lab. Our simulator lets you experiment safely and learn how electronics work.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time circuit simulation",
                  "Interactive components",
                  "Safe experimentation environment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <div className="w-5 h-5 bg-[#4CAF50] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-gradient-to-br from-[#4CAF50] to-emerald-800 rounded-3xl aspect-square p-8 shadow-2xl">
                <div className="w-full h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center">
                  <Cpu className="w-32 h-32 text-white/20 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Explore resources Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Explore resources</h2>
            <button className="text-[#4CAF50] font-bold flex items-center gap-2 hover:gap-3 transition-all">
              More Tutorials <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Introducing Sim Lab!",
                desc: "Get your designs moving with Sim Lab, our new physics exploration space.",
                img: "https://i.postimg.cc/cJbvfPhY/blog-simlab.gif"
              },
              {
                title: "Keyboard Shortcuts in 3D",
                desc: "Use these handy shortcuts to speed up your Tinkercad 3D workflow.",
                img: "https://i.postimg.cc/rFXtnXkS/blog-3D-keyboard-shortcuts.webp"
              },
              {
                title: "Meet the Tinkercad Shapes Panel",
                desc: "Learn about the latest update to our Shapes Panel in the 3D workspace.",
                img: "https://i.postimg.cc/YqHhN66Z/blog-3D-shapes-panel.webp"
              }
            ].map((resource, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-slate-200 shadow-sm">
                  <img 
                    src={resource.img} 
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-black mb-2 group-hover:text-[#4CAF50] transition-colors">{resource.title}</h3>
                <p className="text-slate-600 mb-4">{resource.desc}</p>
                <button className="text-[#4CAF50] font-bold text-sm uppercase tracking-wider">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Level up to Fusion Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-slate-200 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-12 md:p-20 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase">
                Level up to <br />
                <span className="text-orange-600">Fusion</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Ready to design, model, and make like the pros? Send your Tinkercad designs to Fusion for professional simulation, animation, rendering, and more.
              </p>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">Available to ages 13 and over.</p>
              <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-black transition-all hover:scale-105">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2 h-full">
              <img 
                src="https://i.postimg.cc/fbmb0k3z/fusion-level-up.webp" 
                alt="Fusion Level Up"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
