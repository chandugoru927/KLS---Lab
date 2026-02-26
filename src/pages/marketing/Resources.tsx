import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Code, Video, FileText, Newspaper, ArrowRight } from 'lucide-react';

const resources = [
  {
    category: "Documentation",
    icon: BookOpen,
    items: [
      { title: "Getting Started Guide", desc: "Learn the basics of KLS Elite in 10 minutes." },
      { title: "API Reference", desc: "Detailed documentation for our IoT and Robotics APIs." },
      { title: "Component Library", desc: "Explore all available circuit components." }
    ]
  },
  {
    category: "Demo Projects",
    icon: Code,
    items: [
      { title: "Smart Traffic System", desc: "A complete IoT-based traffic management simulation." },
      { title: "Robotic Arm Kinematics", desc: "Inverse kinematics demo for 6-DOF arms." },
      { title: "Home Automation Hub", desc: "ESP32-based smart home controller template." }
    ]
  },
  {
    category: "Webinars & Videos",
    icon: Video,
    items: [
      { title: "Future of Digital Labs", desc: "A panel discussion with industry experts." },
      { title: "Mastering the Simulator", desc: "Advanced tips for complex circuit design." },
      { title: "IoT Security Best Practices", desc: "Securing your digital lab infrastructure." }
    ]
  },
  {
    category: "Research Papers",
    icon: FileText,
    items: [
      { title: "Virtual vs Physical Labs", desc: "A comparative study on learning outcomes." },
      { title: "Scalable Simulation Engines", desc: "Technical whitepaper on our core technology." },
      { title: "AI in Engineering Ed", desc: "Exploring the role of LLMs in lab environments." }
    ]
  }
];

export function Resources() {
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
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">Resources</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Everything you need to master the platform and stay ahead in engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {resources.map((section) => (
              <div key={section.category} className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">{section.category}</h2>
                </div>
                <div className="grid gap-4">
                  {section.items.map((item) => (
                    <div key={item.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all group cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-all" />
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Blog Section */}
          <section className="mt-32">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold tracking-tight">Latest from the Blog</h2>
              <button className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors">View All Posts</button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 group cursor-pointer">
                  <div className="aspect-video bg-slate-800 relative overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/blog-${i}/800/450`} 
                      alt="Blog post" 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-4">Engineering</p>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">How Digital Twins are Revolutionizing Lab Learning</h3>
                    <p className="text-sm text-slate-500 mb-6">Exploring the impact of high-fidelity simulations on student retention and practical skills...</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                      <span className="text-xs font-medium text-slate-400">Dr. Sarah Chen • 5 min read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
