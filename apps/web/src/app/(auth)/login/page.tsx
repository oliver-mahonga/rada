"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Eye, EyeOff, Loader2, ShieldCheck, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => { setMounted(true); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2500);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#06050e] text-[#f0ecff] grid grid-cols-1 lg:grid-cols-2 font-sans overflow-hidden">
      
      {/* ── LEFT PANEL: THE BRAND EXPERIENCE ── */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-[#080613]">
        {/* Gradients & Textures */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_20%,rgba(88,28,235,0.25)_0%,transparent_60%),radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(236,72,153,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-[0.07] grayscale bg-cover bg-center pointer-events-none" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        {/* Logo Section */}
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/30 to-pink-500/20 border border-violet-500/40 flex items-center justify-center font-serif text-2xl font-semibold text-violet-300 backdrop-blur-xl relative overflow-hidden transition-all group-hover:border-violet-400">
              R
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            </div>
            <div>
              <div className="font-mono text-sm font-semibold tracking-[4px] uppercase text-white">Rada</div>
              <div className="text-[9px] tracking-[3px] uppercase text-white/40 font-normal">University</div>
            </div>
          </Link>
        </div>

        {/* Content Section */}
        <div className="relative z-10 my-auto py-16">
          <h2 className="font-serif text-[clamp(40px,4vw,58px)] font-light leading-[1.1] tracking-tighter text-white/95 mb-5">
            Welcome back<br />to your <em className="italic bg-gradient-to-r from-violet-400 to-pink-300 bg-clip-text text-transparent not-italic">journey.</em>
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-[#c9a96e] to-transparent mb-5" />
          <p className="text-sm leading-relaxed text-white/50 max-w-[320px] mb-12 font-light">
            Elite education for those who refuse the ordinary. Your courses, mentors, and community are waiting inside the Rada network.
          </p>

          <div className="flex flex-col gap-3.5 mb-12">
            {[
              { icon: "⚡", text: "Access 130+ premium courses instantly" },
              { icon: "🎯", text: "Rejoin live mentor sessions" },
              { icon: "🌐", text: "Connect with 52,000+ driven members" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-transparent bg-white/[0.02] hover:border-violet-500/20 hover:bg-violet-500/5 hover:translate-x-1 transition-all cursor-default">
                <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-sm shrink-0 transition-all group-hover:bg-violet-500/20">
                  {item.icon}
                </div>
                <span className="text-[13px] text-white/70 font-normal tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-10 pt-8 border-t border-white/5">
            {[{ num: "52K+", label: "Students" }, { num: "130+", label: "Courses" }, { num: "4.9★", label: "Rating" }].map((s, i) => (
              <div key={i}>
                <div className="font-serif text-[28px] font-semibold text-white/90 leading-none tracking-tighter">{s.num}</div>
                <div className="text-[9px] uppercase tracking-[2.5px] text-white/35 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-[10px] text-white/20 tracking-[2px] uppercase font-medium">
          © 2026 Rada University · Est. 2024
        </p>
      </div>

      {/* ── RIGHT PANEL: THE LOGIN FORM ── */}
      <div className="relative flex items-center justify-center p-8 lg:p-16 bg-[#06050e]">
        {/* Ambient background glows */}
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[300px] h-[300px] rounded-full bg-pink-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

        <div className="w-full max-w-[420px] relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] font-semibold tracking-[2px] uppercase text-violet-400">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Member Login
            </span>
          </div>

          <h1 className="font-serif text-4xl lg:text-[42px] font-light tracking-tighter text-white/95 leading-[1.1] mb-2">Sign in to<br />Rada</h1>
          <p className="text-[13px] text-[#7a7399] mb-10 font-light">
            New here?{" "}
            <Link href="/signup" className="text-violet-400 font-medium hover:text-pink-300 transition-colors">Join the network →</Link>
          </p>

          {/* Social Auth */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <button className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-[#0d0b1a] border border-white/5 text-[13px] font-medium hover:bg-[#13102a] hover:border-white/10 hover:-translate-y-0.5 transition-all shadow-lg active:scale-[0.98]">
              <svg width="17" height="17" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-[#1877f2] text-white text-[13px] font-medium hover:-translate-y-0.5 transition-all shadow-lg active:scale-[0.98]">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-[1px] bg-white/5" />
            <span className="text-[9px] font-semibold tracking-[2.5px] uppercase text-white/20 whitespace-nowrap">or continue with email</span>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className={cn("text-[10px] font-semibold tracking-[2px] uppercase transition-colors px-1", focusedField === 'email' ? 'text-violet-400' : 'text-white/40')}>
                University ID / Email
              </label>
              <input
                type="email"
                placeholder="you@university.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full p-4 bg-[#0d0b1a] border border-white/5 rounded-xl text-sm text-[#f0ecff] outline-none transition-all hover:bg-[#13102a] focus:border-violet-500/50 focus:ring-4 focus:ring-violet-500/5 shadow-inner"
                required
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className={cn("text-[10px] font-semibold tracking-[2px] uppercase transition-colors", focusedField === 'pass' ? 'text-violet-400' : 'text-white/40')}>
                  Access Key
                </label>
                <Link href="/forgot" className="text-[10px] font-semibold tracking-[1.5px] uppercase text-violet-500/70 hover:text-pink-300 transition-colors">Forgot key?</Link>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter access key"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('pass')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 pr-12 bg-[#0d0b1a] border border-white/5 rounded-xl text-sm text-[#f0ecff] outline-none transition-all hover:bg-[#13102a] focus:border-violet-500/50 focus:ring-4 focus:ring-violet-500/5 shadow-inner"
                  required
                />
                <button 
                  type="button" 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-violet-400 hover:bg-violet-500/10 p-1.5 rounded-lg transition-all"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button 
              type="button"
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => setRemember(!remember)}
            >
              <div className={cn(
                "w-[18px] h-[18px] rounded-md border border-white/15 flex items-center justify-center transition-all shrink-0 relative",
                remember ? "bg-gradient-to-br from-violet-600 to-violet-500 border-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.3)]" : "bg-[#0d0b1a]"
              )}>
                <svg className={cn("transition-all", remember ? "opacity-100 scale-100" : "opacity-0 scale-50")} width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[13px] text-white/50 font-light group-hover:text-white/70 transition-colors">Keep me signed in for 30 days</span>
            </button>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-600 text-white font-mono text-[11px] font-bold tracking-[3px] uppercase transition-all hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(109,40,217,0.5)] active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              {loading ? (
                <><Loader2 size={15} className="animate-spin" /> Authenticating…</>
              ) : (
                <>Authorize Access <ArrowRight size={15} /></>
              )}
            </button>
          </form>

          {/* Security Indicator */}
          <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3.5 hover:border-violet-500/20 transition-all">
            <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center shrink-0">
              <ShieldCheck size={17} className="text-violet-400" />
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[2px] uppercase text-white/70">Secure Gateway Active</div>
              <div className="text-[9px] tracking-[1.5px] uppercase text-white/25 font-medium">AES-256 Encryption · TLS 1.3 · SSL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}