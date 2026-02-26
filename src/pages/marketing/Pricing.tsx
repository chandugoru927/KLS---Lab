import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Zap, Building2, Globe } from 'lucide-react';

const plans = [
  {
    name: "Free Tier",
    price: "₹0",
    description: "Perfect for individual students starting their engineering journey.",
    features: [
      "Access to basic Circuit Simulator",
      "Limited Firmware Engine usage",
      "Community Support",
      "Public Projects only",
      "Basic IoT Dashboard (1 device)"
    ],
    cta: "Start Learning",
    highlight: false
  },
  {
    name: "Department License",
    price: "Custom",
    description: "Tailored for specific engineering departments (ECE, CSE, ME).",
    features: [
      "Full access to all Engines",
      "Department-wide user management",
      "Private Project hosting",
      "Accreditation Support (NBA/NAAC)",
      "Priority Faculty Support",
      "Advanced Analytics"
    ],
    cta: "Contact Sales",
    highlight: true
  },
  {
    name: "Enterprise / University",
    price: "Custom",
    description: "Complete digital infrastructure for the entire institution.",
    features: [
      "Unlimited Departments & Users",
      "Custom Domain & Branding",
      "LMS Integration (Moodle/Canvas)",
      "Dedicated Account Manager",
      "On-premise deployment options",
      "Research & Development API"
    ],
    cta: "Book a Demo",
    highlight: false
  }
];

export function Pricing() {
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
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">Flexible Pricing</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Choose the plan that fits your academic or institutional needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name} 
                className={`p-10 rounded-[40px] border transition-all flex flex-col ${
                  plan.highlight 
                    ? "bg-indigo-600 border-indigo-400 shadow-2xl shadow-indigo-600/20 scale-105 z-10" 
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-sm opacity-60">/mo</span>}
                </div>
                <p className={`text-sm mb-8 ${plan.highlight ? "text-indigo-100" : "text-slate-400"}`}>
                  {plan.description}
                </p>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-white" : "text-indigo-500"}`} />
                      <span className={plan.highlight ? "text-indigo-50" : "text-slate-300"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/login"
                  className={`w-full py-4 rounded-2xl font-bold transition-all text-center ${
                    plan.highlight 
                      ? "bg-white text-indigo-600 hover:bg-slate-100" 
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
