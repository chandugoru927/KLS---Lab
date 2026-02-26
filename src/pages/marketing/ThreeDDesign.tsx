import React from 'react';
import { motion } from 'framer-motion';
import { Box, Plus, Users, Play, ChevronRight, MousePointer2, Layers, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/layout/Navbar';

export function ThreeDDesign() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      
      {/* Hero Section - Full Screen with Background Video */}
      <section className="relative h-screen overflow-hidden bg-slate-900">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-60"
        >
          <source src="https://res.cloudinary.com/dzprbyas3/video/upload/hero-design_htj2tw.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl"
            >
              Start designing in <span className="text-blue-400">3D</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-lg"
            >
              If you can dream it, you can build it. From product models to printable parts, 
              3D design is the first step in making big ideas real.
            </motion.p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              <Link 
                to="/login" 
                className="px-10 py-5 bg-blue-500 text-white rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/40 hover:scale-105"
              >
                Start Tinkering
              </Link>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-2xl font-black text-xl hover:bg-white/20 transition-all hover:scale-105">
                Join Class
              </button>
            </div>
          </div>
        </div>

        {/* Grid Background Overlay (Subtle) */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', 
            backgroundSize: '80px 80px' 
          }} 
        />
      </section>

      {/* Easy in every way Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight uppercase">Easy in every way</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-600">
                  <MousePointer2 className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Place a shape</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Shapes are the building blocks of KLS. You can add pre-existing shapes, or import your own.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-teal-600">
                  <Maximize className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Adjust objects</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Simply rotate the workplace to adjust shapes or change views. Input exact dimensions with the ruler.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-purple-600">
                  <Layers className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Combine elements</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Create custom shapes to build detailed, intricate models. The sky's the limit!
                </p>
              </div>
            </div>

            <div className="bg-slate-100 rounded-3xl aspect-video relative overflow-hidden shadow-inner border border-slate-200">
              {/* Placeholder for the animation video/gif */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Play className="w-6 h-6 text-blue-600 fill-current" />
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Watch how it works</p>
                </div>
              </div>
              <img 
                src="https://picsum.photos/seed/3d-demo/1200/800" 
                alt="3D Design Demo" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Endless Possibilities */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-black tracking-tight uppercase">Endless possibilities</h2>
              <p className="text-slate-400 text-lg">
                Whether you're making a simple keychain or a complex robotic arm, 
                KLS provides the tools to bring your imagination to life.
              </p>
              <ul className="space-y-4">
                {['Align objects perfectly', 'Duplicate with precision', 'Use the ruler for accuracy'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl aspect-square p-8 shadow-2xl">
                <div className="w-full h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center">
                   <Box className="w-32 h-32 text-white/20 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Get Started</h2>
            <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              More Tutorials <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Learn the Moves', img: 'https://picsum.photos/seed/move/600/400' },
              { title: 'Chess Pawn', img: 'https://picsum.photos/seed/chess/600/400' },
              { title: 'Ruler', img: 'https://picsum.photos/seed/ruler/600/400' },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden mb-4 border border-slate-200">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
            Tomorrow's innovators are made today
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join millions of users worldwide and start your journey into the world of 3D design and engineering.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link 
              to="/login" 
              className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all shadow-2xl"
            >
              Start Tinkering
            </Link>
            <button className="px-10 py-5 bg-blue-700 text-white rounded-2xl font-black text-xl hover:bg-blue-800 transition-all border-2 border-blue-500/50">
              Join Class
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
