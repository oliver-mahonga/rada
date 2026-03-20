"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, ShieldCheck, ArrowRight, Eye, EyeOff, Globe, BookOpen, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#06050e] text-[#f0ecff] grid grid-cols-1 lg:grid-cols-2 font-sans overflow-hidden">
      
      {/* ── LEFT PANEL ── */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-[#07060f]">
        {/* Ambient Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_10%_10%,rgba(49,10,200,0.2)_0%,transparent_60%),radial-gradient(ellipse_50%_70%_at_90%_90%,rgba(99,6,200,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-[0.05] grayscale bg-cover bg-center pointer-events-none" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
        
        {/* Geometric Decor */}
        <div className="absolute top-12 right-12 w-[180px] h-[180px] border-t border-r border-violet-500/15 rounded-tr-[24px] pointer-events-none" />
        <div className="absolute bottom-12 left-12 w-[120px] h-[120px] border-b border-l border-violet-500/10 rounded-bl-[16px] pointer-events-none" />

        <Link href="/" className="relative z-10 flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#6306c8]/30 to-violet-500/20 border border-violet-500/35 flex items-center justify-center font-serif text-2xl font-semibold text-[#c4b5fd] relative overflow-hidden transition-all group-hover:border-violet-400">
            R
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          </div>
          <div>
            <div className="font-mono text-sm font-semibold tracking-[4px] uppercase text-white">Rada</div>
            <div className="text-[9px] tracking-[3px] uppercase text-white/35 font-normal">University</div>
          </div>
        </Link>

        <div className="relative z-10 my-auto py-16">
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 border border-violet-500/20 rounded-full bg-violet-500/5">
            <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#6d28d9] to-[#9d5af7] flex items-center justify-center text-[9px] font-bold text-white">1</div>
            <span className="text-[10px] font-semibold tracking-[2px] uppercase text-violet-400">Enrollment Open</span>
          </div>

          <h2 className="font-serif text-[clamp(44px,4vw,64px)] font-light leading-[1.05] tracking-tighter text-white/95 mb-4">
            Escape the<br /><em className="italic bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent not-italic">Ordinary.</em>
          </h2>
          <div className="w-10 h-[1px] bg-gradient-to-r from-[#c9a96e] to-transparent mb-5" />
          <p className="text-sm leading-relaxed text-white/45 max-w-[300px] mb-12 font-light">
            Stop consuming. Start producing. Join the elite network and master the skills that actually pay.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { Icon: Globe, title: "Global Network", desc: "Connect with high-performers worldwide." },
              { Icon: BookOpen, title: "Elite Curriculum", desc: "130+ courses, updated every week." },
              { Icon: Rocket, title: "Job Placement", desc: "Direct pipelines to top-tier roles." },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-4 items-start p-4 rounded-xl border border-transparent bg-white/[0.015] hover:border-violet-500/15 hover:bg-violet-500/5 hover:translate-x-1 transition-all cursor-default group">
                <div className="w-[38px] h-[38px] shrink-0 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center text-violet-400 transition-all group-hover:bg-violet-500/20 group-hover:shadow-[0_0_16px_rgba(139,92,246,0.15)]">
                  <Icon size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold tracking-[2px] uppercase text-white/80 mb-1">{title}</div>
                  <div className="text-xs text-white/40 font-light">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-[10px] text-white/20 tracking-[2px] uppercase font-medium">
          The Rada Standard · Secure Membership Portal
        </p>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="relative flex items-start justify-center p-8 lg:p-16 bg-[#06050e] overflow-y-auto">
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#6306c8]/50 to-transparent" />
        <div className="absolute -top-36 -right-36 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[100px] pointer-events-none" />

        <div className="w-full max-w-[440px] pt-8 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-[10px] font-semibold tracking-[2px] uppercase text-violet-400">Enrollment Phase 01</span>
            </span>
          </div>

          <h1 className="font-serif text-[42px] font-light tracking-tighter text-white/95 leading-[1.1] mb-2">Create Your<br />Profile</h1>
          <p className="text-[13px] text-[#7a7399] mb-9 font-light">
            Already a member?{" "}
            <Link href="/login" className="text-violet-400 font-medium hover:text-pink-300 transition-colors">Sign in →</Link>
          </p>

          {/* Progress Bar */}
          <div className="flex items-center mb-9">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold font-mono bg-gradient-to-br from-[#6d28d9] to-[#9d5af7] text-white shadow-[0_4px_12px_rgba(109,40,217,0.4)]">1</div>
              <span className="text-[9px] font-semibold tracking-[1.5px] uppercase text-white/70">Account</span>
            </div>
            <div className="flex-1 h-[1px] bg-white/5 mx-2" />
            <div className="flex items-center gap-2 flex-1">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold font-mono border border-white/10 text-white/20">2</div>
              <span className="text-[9px] font-semibold tracking-[1.5px] uppercase text-white/20">Profile</span>
            </div>
            <div className="flex-1 h-[1px] bg-white/5 mx-2" />
            <div className="flex items-center gap-2 flex-1 text-right">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold font-mono border border-white/10 text-white/20">3</div>
              <span className="text-[9px] font-semibold tracking-[1.5px] uppercase text-white/20">Plan</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-[18px]">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className={cn("text-[10px] font-semibold tracking-[2px] uppercase transition-colors px-1", focusedField === 'fname' ? 'text-violet-400' : 'text-white/35')}>First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  required
                  onFocus={() => setFocusedField('fname')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 bg-[#0d0b1a] border border-white/5 rounded-xl text-sm text-[#f0ecff] outline-none transition-all hover:bg-[#13102a] focus:border-violet-500/45 focus:ring-4 focus:ring-violet-500/5 shadow-inner"
                />
              </div>
              <div className="space-y-1.5">
                <label className={cn("text-[10px] font-semibold tracking-[2px] uppercase transition-colors px-1", focusedField === 'lname' ? 'text-violet-400' : 'text-white/35')}>Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  required
                  onFocus={() => setFocusedField('lname')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 bg-[#0d0b1a] border border-white/5 rounded-xl text-sm text-[#f0ecff] outline-none transition-all hover:bg-[#13102a] focus:border-violet-500/45 focus:ring-4 focus:ring-violet-500/5 shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className={cn("text-[10px] font-semibold tracking-[2px] uppercase transition-colors px-1", focusedField === 'username' ? 'text-violet-400' : 'text-white/35')}>Username</label>
              <input
                type="text"
                placeholder="johndoe_elite"
                required
                onFocus={() => setFocusedField('username')}
                onBlur={() => setFocusedField(null)}
                className="w-full p-4 bg-[#0d0b1a] border border-white/5 rounded-xl text-sm text-[#f0ecff] outline-none transition-all hover:bg-[#13102a] focus:border-violet-500/45 focus:ring-4 focus:ring-violet-500/5 shadow-inner"
              />
            </div>

            <div className="space-y-1.5">
              <label className={cn("text-[10px] font-semibold tracking-[2px] uppercase transition-colors px-1", focusedField === 'email' ? 'text-violet-400' : 'text-white/35')}>Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full p-4 bg-[#0d0b1a] border border-white/5 rounded-xl text-sm text-[#f0ecff] outline-none transition-all hover:bg-[#13102a] focus:border-violet-500/45 focus:ring-4 focus:ring-violet-500/5 shadow-inner"
              />
            </div>

            <div className="space-y-1.5">
              <label className={cn("text-[10px] font-semibold tracking-[2px] uppercase transition-colors px-1", focusedField === 'pass' ? 'text-violet-400' : 'text-white/35')}>Secure Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  required
                  onFocus={() => setFocusedField('pass')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 pr-12 bg-[#0d0b1a] border border-white/5 rounded-xl text-sm text-[#f0ecff] outline-none transition-all hover:bg-[#13102a] focus:border-violet-500/45 focus:ring-4 focus:ring-violet-500/5 shadow-inner"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-violet-400 hover:bg-violet-500/10 p-1.5 rounded-lg transition-all" onClick={() => setShowPass(!showPass)}>
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button 
              type="button"
              className="flex items-start gap-3 py-0.5 group cursor-pointer" 
              onClick={() => setAgreed(!agreed)}
            >
              <div className={cn(
                "w-[18px] h-[18px] rounded-md border border-white/12 flex items-center justify-center transition-all shrink-0 mt-0.5",
                agreed ? "bg-gradient-to-br from-[#6d28d9] to-[#9d5af7] border-violet-500 shadow-[0_0_10px_rgba(109,40,217,0.3)]" : "bg-[#0d0b1a]"
              )}>
                <svg className={cn("transition-all", agreed ? "opacity-100 scale-100" : "opacity-0 scale-50")} width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xs text-white/40 leading-relaxed font-light">
                I agree to the <a href="#" className="text-white/75 underline underline-offset-2 hover:text-violet-400 transition-colors">Code of Conduct</a> and <a href="#" className="text-white/75 underline underline-offset-2 hover:text-violet-400 transition-colors">Privacy Protocol</a>. I understand that Rada University holds its members to the highest standards.
              </span>
            </button>

            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#5b21b6] via-[#6d28d9] to-[#7c3aed] text-white font-mono text-[11px] font-bold tracking-[3px] uppercase transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(109,40,217,0.5)] active:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 relative overflow-hidden group mt-2" disabled={loading || !agreed}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              {loading
                ? <><Loader2 size={15} className="animate-spin" /> Creating account…</>
                : <>Begin Enrollment <ArrowRight size={15} /></>}
            </button>
          </form>

          <div className="flex items-center gap-4 mt-6 mb-4">
            <div className="flex-1 h-[1px] bg-white/5" />
            <span className="text-[9px] font-semibold tracking-[2.5px] uppercase text-white/20 whitespace-nowrap">Or rapid access</span>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-[#0d0b1a] border border-white/5 text-[13px] font-medium hover:bg-[#13102a] hover:border-white/10 hover:-translate-y-0.5 transition-all shadow-lg active:scale-[0.97] group overflow-hidden relative" type="button">
              <div className="absolute inset-0 bg-white/[0.025] opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-[#1877f2] text-white text-[13px] font-medium hover:-translate-y-0.5 transition-all shadow-lg active:scale-[0.97] group overflow-hidden relative" type="button">
              <div className="absolute inset-0 bg-white/[0.08] opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </button>
          </div>

          <div className="mt-5 p-4 rounded-xl bg-white/[0.015] border border-white/5 flex items-center gap-3.5 hover:border-violet-500/12 transition-all">
            <div className="w-[34px] h-[34px] shrink-0 rounded-[9px] bg-violet-500/10 border border-violet-500/15 flex items-center justify-center">
              <ShieldCheck size={16} className="text-violet-400" />
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-white/60">256-bit Encrypted</div>
              <div className="text-[9px] tracking-[1px] uppercase text-white/20 font-medium">Your data is protected · GDPR Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}