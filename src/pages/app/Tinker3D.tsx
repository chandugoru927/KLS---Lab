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

          {/* Combine elements section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-blue-600">Combine elements</h3>
              <p className="text-xl text-slate-600 leading-relaxed max-w-md">
                Create custom shapes to build detailed, intricate models. The sky’s the limit!
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <div className="aspect-video w-full">
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=dzprbyas3&public_id=combine-2_m1lwk0&autoplay=true&loop=true&muted=true&controls=false"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Endless possibilities section */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Endless possibilities</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-600">Align</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Easily preview and align multiple objects along any axis. You can also align objects relative to a reference shape.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-600">Duplicate</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Create exact copies of a shape. Duplicate and repeat to apply the same changes to each new instance.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-600">Ruler</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Place a ruler to type in exact dimensions and measure the distance between objects for precise 3D printing.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://player.cloudinary.com/embed/?cloud_name=dzprbyas3&public_id=align_kjddya&autoplay=true&loop=true&muted=true&controls=false"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Get Started Section */}
          <div className="mt-32 border-t border-slate-200 pt-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">Get Started</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Learn the basics of 3D design with these guided step-by-step tutorials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Learn the Moves", img: "https://i.postimg.cc/bvjYxpcF/learn-the-moves.jpg" },
                { title: "Chess Pawn", img: "https://i.postimg.cc/rsYFx4q2/chess-pawn.jpg" },
                { title: "Ruler", img: "https://i.postimg.cc/wMPg7dQb/tutorial-3D-ruler.webp" },
                { title: "Luggage Tag", img: "https://i.postimg.cc/nz3Hfms6/tutorial-3D-luggage.webp" },
                { title: "Die from Scratch", img: "https://i.postimg.cc/5tq4pTfC/tutorial-3D-die.webp" },
                { title: "Saw Shaped Wrench", img: "https://i.postimg.cc/4NDXGsdx/tutorial-3D-wrench.webp" }
              ].map((tutorial, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100 group cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img 
                      src={tutorial.img} 
                      alt={tutorial.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-slate-900">{tutorial.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                More Tutorials
              </button>
            </div>
          </div>

          {/* Bring your designs to life Section */}
          <div className="mt-32 border-t border-slate-200 pt-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Bring your designs to life</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Augmented Reality",
                  description: "With nothing more than an iPad, KEP Lab makes it easy to turn your designs into augmented reality (AR) experiences.",
                  img: "https://i.postimg.cc/3NjzH5bn/card-AR-ipad.webp"
                },
                {
                  title: "Brickify Your Creations",
                  description: "It only takes moments to transform your designs into brick models that you can break down and rebuild, one layer at a time.",
                  img: "https://i.postimg.cc/c4mP9W3G/card-brickify.webp"
                },
                {
                  title: "Welcome to KEPcraft",
                  description: "The easiest, fastest, funniest way to build in Minecraft. You can even 3D print your creations to bring them into the real world.",
                  img: "https://i.postimg.cc/P5V9HMKZ/card-tinkercraft.webp"
                }
              ].map((item, index) => (
                <div key={index} className="space-y-6 group cursor-pointer">
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-100">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    <button className="flex items-center gap-1 text-blue-600 font-bold hover:gap-2 transition-all">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explore resources Section */}
          <div className="mt-32 border-t border-slate-200 pt-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Explore resources</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Introducing Sim Lab!",
                  description: "Get your designs moving with Sim Lab, our new physics exploration space.",
                  img: "https://i.postimg.cc/cJbvfPhY/blog-simlab.gif"
                },
                {
                  title: "Keyboard Shortcuts in 3D",
                  description: "Use these handy shortcuts to speed up your KEP Lab 3D workflow.",
                  img: "https://i.postimg.cc/rFXtnXkS/blog-3D-keyboard-shortcuts.webp"
                },
                {
                  title: "Meet the KEP Lab Shapes Panel",
                  description: "Learn about the latest update to our Shapes Panel in the 3D workspace.",
                  img: "https://i.postimg.cc/YqHhN66Z/blog-3D-shapes-panel.webp"
                }
              ].map((item, index) => (
                <div key={index} className="space-y-6 group cursor-pointer">
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-100">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    <button className="flex items-center gap-1 text-blue-600 font-bold hover:gap-2 transition-all">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <button className="px-8 py-3 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-900 transition-colors shadow-lg">
                KEP Lab Blog
              </button>
            </div>
          </div>

          {/* Level up to Fusion Section */}
          <div className="mt-32 border-t border-slate-200 pt-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Level up to Fusion</h2>
                <div className="space-y-6">
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Ready to design, model, and make like the pros? Send your KEP Lab designs to Fusion for professional simulation, animation, rendering, and more.
                  </p>
                  <p className="text-lg text-slate-400">
                    Available to ages 13 and over.
                  </p>
                </div>
                <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                  Learn More
                </button>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                <img 
                  src="https://i.postimg.cc/fbmb0k3z/fusion-level-up.webp" 
                  alt="Level up to Fusion"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
