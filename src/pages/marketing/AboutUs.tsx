import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye, Users, Award } from 'lucide-react';

const team = [
  {
    name: "Dr. Arvin Keshava",
    role: "Founder & CEO",
    bio: "Former Dean of Engineering with 20+ years in academic infrastructure.",
    image: "https://picsum.photos/seed/founder1/400/400"
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder & CTO",
    bio: "Ex-Robotics Lead at a top tech firm, specialist in real-time simulation.",
    image: "https://picsum.photos/seed/founder2/400/400"
  },
  {
    name: "Vikram Malhotra",
    role: "Head of Product",
    bio: "Product designer focused on educational accessibility and UX.",
    image: "https://picsum.photos/seed/founder3/400/400"
  }
];

const advisors = [
  { name: "Prof. Rajesh Kumar", role: "IIT Madras, Dept of EEE" },
  { name: "Dr. Elena Rodriguez", role: "Global Director, EdTech Alliance" },
  { name: "Sanjay Gupta", role: "VP Engineering, IoT Solutions Corp" }
];

export function AboutUs() {
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
          {/* Vision & Mission */}
          <div className="text-center mb-32">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 uppercase">Our Story</h1>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="p-12 rounded-[40px] bg-white/5 border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl group-hover:bg-indigo-600/20 transition-all"></div>
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 flex items-center justify-center mb-8">
                  <Eye className="w-8 h-8 text-indigo-400" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-xl text-slate-400 leading-relaxed">
                  To democratize high-end engineering education by providing every student, regardless of their location or institution's budget, access to world-class laboratory infrastructure.
                </p>
              </div>
              <div className="p-12 rounded-[40px] bg-white/5 border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl group-hover:bg-emerald-600/20 transition-all"></div>
                <div className="w-16 h-16 rounded-2xl bg-emerald-600/20 flex items-center justify-center mb-8">
                  <Target className="w-8 h-8 text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Building the world's most accurate and accessible digital twin environment for engineering labs, bridging the gap between theoretical knowledge and practical mastery.
                </p>
              </div>
            </div>
          </div>

          {/* Founders */}
          <section className="mb-32">
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px flex-1 bg-white/10"></div>
              <h2 className="text-4xl font-bold tracking-tight uppercase">Founders</h2>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {team.map((member) => (
                <div key={member.name} className="group">
                  <div className="aspect-square rounded-[40px] overflow-hidden mb-8 border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-indigo-400 font-bold text-sm mb-4 uppercase tracking-widest">{member.role}</p>
                  <p className="text-slate-500 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Advisors */}
          <section className="py-20 px-12 rounded-[40px] bg-white/5 border border-white/10">
            <h2 className="text-3xl font-bold mb-12 text-center">Strategic Advisors</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {advisors.map((advisor) => (
                <div key={advisor.name} className="p-6 rounded-2xl bg-slate-900 border border-white/5 text-center">
                  <h4 className="font-bold text-lg mb-1">{advisor.name}</h4>
                  <p className="text-sm text-slate-500">{advisor.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
