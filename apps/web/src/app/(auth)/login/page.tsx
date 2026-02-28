"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2, Zap, Target, Flame, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Future integration with NestJS backend
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#07050f] text-[#f1eeff] grid grid-cols-1 lg:grid-cols-2 overflow-x-hidden">

      {/* ── LEFT PANEL ── */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-violet-900 via-purple-800 to-pink-800 relative overflow-hidden">
        
        {/* CREATIVE ADDITION: BACKGROUND IMAGE */}
        {/* Shifted right, 80% opacity, blended into the purple theme */}
        <div 
          className="absolute top-0 -right-20 w-full h-full opacity-80 mix-blend-luminosity pointer-events-none grayscale brightness-[0.4]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070')", 
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
          }}
        />

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Orb glows */}
        <div className="absolute -top-32 -left-32 w-[460px] h-[460px] rounded-full bg-violet-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-20 w-[400px] h-[400px] rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />
        
        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/30 flex items-center justify-center font-extrabold text-xl text-white shadow-2xl backdrop-blur-md">
            R
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-widest uppercase">Rada</div>
            <div className="text-[9px] text-white/60 tracking-[3px] uppercase font-medium">University</div>
          </div>
        </div>

        {/* Middle copy */}
        <div className="relative z-10 space-y-8">
          <div>
            <h2 className="text-4xl xl:text-5xl font-extrabold leading-[1.1] tracking-tight mb-4 text-white">
              Welcome back<br />to your{" "}
              <span className="bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent">
                journey.
              </span>
            </h2>
            <div className="w-40 h-[3px] rounded-full bg-gradient-to-r from-violet-300 to-pink-300 mb-5" />
            <p className="text-white/70 text-sm leading-relaxed font-light max-w-sm">
              Elite education for the modern world. Your courses, community, and mentors are waiting inside the Rada network.
            </p>
          </div>

          {/* Feature list */}
          <div className="space-y-4">
            {[
              { icon: <Zap size={15} />, text: "Access 130+ premium courses instantly" },
              { icon: <Target size={15} />, text: "Rejoin your live mentor sessions" },
              { icon: <Flame size={15} />, text: "Connect with 52,000+ driven members" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4 group">
                <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white/20 transition-colors shadow-lg">
                  {item.icon}
                </div>
                <span className="text-sm text-white/80 font-medium group-hover:text-white transition-colors tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="flex gap-8 pt-6 border-t border-white/10">
            {[
              { num: "52K+", label: "Students" },
              { num: "130+", label: "Courses" },
              { num: "4.9★", label: "Rating" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <div className="text-xl font-black text-white">{s.num}</div>
                <div className="text-[9px] text-white/50 uppercase tracking-[2px] font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest relative z-10">
          © 2026 Rada University · Est. 2024
        </p>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex items-center justify-center px-6 py-16 lg:px-16 bg-[#07050f] relative overflow-hidden">
        {/* Animated accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-pink-500 to-violet-600 animate-gradient-x" />

        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <Link href="/" className="lg:hidden flex items-center gap-2 text-xl font-black tracking-tighter mb-10">
            <span className="p-1 px-2 rounded bg-primary text-primary-foreground">R</span>
            RADA UNIVERSITY
          </Link>

          {/* Progress badge */}
          <div className="mb-8">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-black tracking-[3px] uppercase text-violet-500">Membership Login</span>
              <span className="text-[10px] font-bold text-[#6b6490]">SECURE GATEWAY</span>
            </div>
            <div className="h-[2px] w-full rounded-full bg-violet-900/30">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
            </div>
          </div>

          <h1 className="text-3xl font-black tracking-tighter mb-2 text-white">Sign in to Rada</h1>
          <p className="text-sm text-[#9d96be] font-medium mb-10 leading-relaxed">
            Ready to ascend?{" "}
            <Link href="/signup" className="text-violet-500 font-bold hover:text-pink-400 transition-all border-b border-transparent hover:border-pink-400">
              Join the network →
            </Link>
          </p>

          {/* OAuth Section */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-3 py-3.5 bg-[#120f20] border border-purple-900/30 rounded-xl text-sm text-[#f1eeff] font-bold hover:border-violet-500/50 hover:bg-violet-500/5 transition-all active:scale-[0.98]">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-3.5 bg-[#1877f2] rounded-xl text-sm text-white font-bold hover:bg-[#1565d8] transition-all active:scale-[0.98]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-purple-900/20" />
            <span className="text-[10px] font-black tracking-widest uppercase text-[#6b6490] whitespace-nowrap">Corporate Credentials</span>
            <div className="flex-1 h-px bg-purple-900/20" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest uppercase text-[#9d96be] ml-1">
                University ID / Email
              </label>
              <input
                type="email"
                placeholder="you@university.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-4 bg-[#120f20] border border-purple-900/30 rounded-xl text-sm text-white placeholder-[#4b4470] outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all shadow-inner"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-[10px] font-black tracking-widest uppercase text-[#9d96be] ml-1">
                  Access Key
                </label>
                <Link href="/forgot" className="text-[10px] font-black text-violet-500 hover:text-pink-400 uppercase tracking-widest transition-colors">Forgot Key?</Link>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter access key"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-5 py-4 pr-12 bg-[#120f20] border border-purple-900/30 rounded-xl text-sm text-white placeholder-[#4b4470] outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all shadow-inner"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b6490] hover:text-violet-400 transition-colors"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <label className="flex items-center gap-3 group cursor-pointer">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 border-2 border-purple-900/50 rounded-md peer-checked:bg-violet-600 peer-checked:border-violet-600 transition-all" />
                  <ShieldCheck className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 left-[3px] transition-opacity" />
                </div>
                <span className="text-xs text-[#9d96be] group-hover:text-white transition-colors font-medium">Keep me synced with the network</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-violet-700 via-purple-600 to-pink-600 text-white text-xs font-black tracking-[3px] uppercase rounded-xl hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Authenticating...
                </>
              ) : (
                "Authorize Access →"
              )}
            </button>
          </form>

          {/* Security note */}
          <div className="mt-10 p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0 shadow-lg">
              <ShieldCheck className="w-5 h-5 text-violet-500" />
            </div>
            <div>
              <p className="text-[10px] text-white font-black uppercase tracking-widest mb-0.5">Secure Gateway Active</p>
              <p className="text-[9px] text-[#6b6490] font-bold uppercase tracking-widest leading-none">
                AES-256 Encryption &nbsp;·&nbsp; SSL SECURED
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}