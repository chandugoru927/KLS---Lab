import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Calendar, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-white/10 rounded-[40px] p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Select a Time Slot</h3>
            <p className="text-slate-400 text-sm mb-6">Choose a convenient time for your 30-minute institutional walkthrough.</p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'].map((time) => (
                <button 
                  key={time}
                  onClick={() => {
                    setShowCalendar(false);
                    alert(`Demo booked for ${time}! We will send a calendar invite shortly.`);
                  }}
                  className="py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-indigo-600 hover:border-indigo-500 transition-all"
                >
                  {time}
                </button>
              ))}
            </div>
            <button 
              onClick={() => setShowCalendar(false)}
              className="w-full py-3 text-slate-500 font-bold hover:text-white transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

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
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">Get in Touch</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Ready to transform your institution? Let's start a conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Email Us</h4>
                      <p className="text-slate-400">support@klselite.com</p>
                      <p className="text-slate-400">sales@klselite.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600/20 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Call Us</h4>
                      <p className="text-slate-400">+91 80 4567 8900</p>
                      <p className="text-slate-400">Mon-Fri, 9am - 6pm IST</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Our Office</h4>
                      <p className="text-slate-400">Keshava Elite Tech Park, 4th Block</p>
                      <p className="text-slate-400">Koramangala, Bengaluru, KA 560034</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-400" /> Book a Demo
                </h3>
                <p className="text-slate-400 text-sm">
                  Schedule a 30-minute walkthrough with our product specialists to see how KLS Elite fits your department.
                </p>
                <button 
                  onClick={() => setShowCalendar(true)}
                  className="w-full py-4 bg-white text-slate-950 rounded-2xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  Open Calendar <Calendar className="w-4 h-4" />
                </button>
              </div>

              <div className="p-8 rounded-3xl bg-emerald-600/10 border border-emerald-500/20 space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2 text-emerald-400">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Support
                </h3>
                <p className="text-slate-400 text-sm">
                  Need quick answers? Chat with our support team directly on WhatsApp.
                </p>
                <a 
                  href="https://wa.me/918045678900" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
                >
                  Start Chatting <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-12">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h2 className="text-3xl font-bold">Message Received!</h2>
                  <p className="text-slate-400 max-w-xs">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                      <input required type="text" className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                      <input required type="email" className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all" placeholder="john@university.edu" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Institution Name</label>
                    <input required type="text" className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all" placeholder="MIT Engineering College" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Subject</label>
                    <select className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all appearance-none">
                      <option>Institutional Demo Request</option>
                      <option>Pricing Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnership Opportunity</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                    <textarea required rows={5} className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none" placeholder="Tell us about your requirements..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/20">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
