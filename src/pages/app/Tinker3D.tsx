import React from 'react';
import { motion } from 'framer-motion';
import { Box, Plus, Users, Play, ChevronRight, MousePointer2, Layers, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Tinker3D() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section - Full Screen with Background Video */}
      <section className="relative h-[calc(100vh-64px)] overflow-hidden bg-slate-900">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://res.cloudinary.com/dzprbyas3/video/upload/hero-design_htj2tw.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="relative z-20 h-full flex items-start justify-center pt-24 md:pt-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-2xl"
            >
              Start designing in <span className="text-blue-400">3D</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Intro Section - Moved out of Hero */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed"
          >
            If you can dream it, you can build it. From product models to printable parts, 
            3D design is the first step in making big ideas real.
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button className="px-10 py-5 bg-blue-500 text-white rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/40 hover:scale-105">
              Start Tinkering
            </button>
            <button className="px-10 py-5 bg-slate-100 text-slate-900 border-2 border-slate-200 rounded-2xl font-black text-xl hover:bg-slate-200 transition-all hover:scale-105">
              Join Class
            </button>
          </div>
        </div>
      </section>

      {/* Easy in every way Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Easy in every way</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-blue-600">Place a shape</h3>
              <p className="text-xl text-slate-600 leading-relaxed max-w-md">
                Shapes are the building blocks of KEP Lab. You can add pre-existing shapes, or import your own.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <div className="aspect-video w-full">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=dzprbyas3&public_id=place_qsh4w2&autoplay=true&loop=true&muted=true&controls=false"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Adjust objects section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-blue-600">Adjust objects</h3>
              <p className="text-xl text-slate-600 leading-relaxed max-w-md">
                Simply rotate the workplane to adjust shapes or change views. Input exact dimensions with the ruler.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <div className="aspect-video w-full">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=dzprbyas3&public_id=adjust_eu12gs&autoplay=true&loop=true&muted=true&controls=false"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
