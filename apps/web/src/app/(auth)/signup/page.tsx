"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, ShieldCheck, UserPlus, Globe, BookOpen, Rocket } from "lucide-react";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Integration point for NestJS /api/auth/signup
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#07050f] text-[#f1eeff] grid grid-cols-1 lg:grid-cols-2 overflow-x-hidden">

      {/* ── LEFT PANEL ── */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900 relative overflow-hidden">
        
        {/* BACKGROUND IMAGE - Shifted right, 80% opacity, High-end University/Library vibe */}
        <div 
          className="absolute top-0 -right-20 w-full h-full opacity-80 mix-blend-luminosity pointer-events-none grayscale brightness-[0.3]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071')", 
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-500/10 rounded-full blur-[120px]" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-black text-xl text-white backdrop-blur-md">
            R
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-widest uppercase">Rada</div>
            <div className="text-[9px] text-white/50 tracking-[3px] uppercase font-bold">University</div>
          </div>
        </div>

        {/* Copy */}
        <div className="relative z-10 space-y-10">
          <div className="space-y-4">
            <h2 className="text-5xl xl:text-6xl font-black leading-tight tracking-tighter text-white">
              Escape the <br />
              <span className="bg-gradient-to-r from-blue-400 to-violet-300 bg-clip-text text-transparent">
                Ordinary.
              </span>
            </h2>
            <div className="w-24 h-1 bg-violet-500 rounded-full" />
            <p className="text-white/60 text-lg font-medium max-w-sm leading-relaxed">
              Stop consuming. Start producing. Join the elite 1% and master the skills that actually pay.
            </p>
          </div>

          {/* Perks */}
          <div className="space-y-6">
            {[
              { icon: <Globe size={18} />, title: "Global Network", desc: "Connect with high-performers worldwide." },
              { icon: <BookOpen size={18} />, title: "Elite Curriculum", desc: "130+ courses updated weekly." },
              { icon: <Rocket size={18} />, title: "Job Placement", desc: "Direct pipelines to top-tier roles." },
            ].map((perk, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-violet-400 group-hover:scale-110 transition-transform">
                  {perk.icon}
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-white">{perk.title}</h4>
                  <p className="text-xs text-white/50 font-medium">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest relative z-10">
          The Rada Standard · Secure Membership Portal
        </p>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex items-center justify-center px-6 py-16 lg:px-16 bg-[#07050f] relative overflow-y-auto">
        {/* Neon Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50" />

        <div className="w-full max-w-md">
          {/* Progress Header */}
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
              <span className="text-[10px] font-black text-violet-400 uppercase tracking-widest">Enrollment Phase 01</span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white mb-2">Create Your Profile</h1>
            <p className="text-sm text-[#6b6490] font-medium">
              Already a member? <Link href="/login" className="text-violet-500 hover:text-pink-400 transition-colors font-bold uppercase tracking-tighter ml-1">Sign In →</Link>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#9d96be] uppercase tracking-widest ml-1">First Name</label>
                <input required type="text" placeholder="John" className="w-full px-5 py-3.5 bg-[#120f20] border border-purple-900/30 rounded-xl text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/5 transition-all shadow-inner" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-[#9d96be] uppercase tracking-widest ml-1">Last Name</label>
                <input required type="text" placeholder="Doe" className="w-full px-5 py-3.5 bg-[#120f20] border border-purple-900/30 rounded-xl text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/5 transition-all shadow-inner" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#9d96be] uppercase tracking-widest ml-1">Username</label>
              <input required type="text" placeholder="johndoe_elite" className="w-full px-5 py-3.5 bg-[#120f20] border border-purple-900/30 rounded-xl text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/5 transition-all shadow-inner" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#9d96be] uppercase tracking-widest ml-1">Corporate Email</label>
              <input required type="email" placeholder="john@example.com" className="w-full px-5 py-3.5 bg-[#120f20] border border-purple-900/30 rounded-xl text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/5 transition-all shadow-inner" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#9d96be] uppercase tracking-widest ml-1">Secure Password</label>
              <input required type="password" placeholder="••••••••" className="w-full px-5 py-3.5 bg-[#120f20] border border-purple-900/30 rounded-xl text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/5 transition-all shadow-inner" />
            </div>

            <p className="text-[10px] text-[#6b6490] leading-relaxed text-center px-4">
              By joining, you agree to the <span className="text-white underline">Code of Conduct</span> and <span className="text-white underline">Privacy Protocol</span>.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white text-xs font-black tracking-[3px] uppercase rounded-xl hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <><UserPlus size={16} /> Begin Enrollment</>}
            </button>
          </form>

          {/* Social Auth */}
          <div className="mt-8">
            <div className="relative flex items-center mb-6">
              <div className="flex-1 h-px bg-purple-900/20" />
              <span className="px-4 text-[9px] font-black text-[#6b6490] uppercase tracking-widest">Rapid Access</span>
              <div className="flex-1 h-px bg-purple-900/20" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 bg-[#120f20] border border-purple-900/30 rounded-xl text-xs font-bold hover:bg-violet-500/5 transition-all">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
                Google
              </button>
              <button className="flex items-center justify-center gap-3 py-3 bg-[#1877f2] rounded-xl text-xs font-bold hover:opacity-90 transition-all">
                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-4 h-4 brightness-0 invert" alt="Facebook" />
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}