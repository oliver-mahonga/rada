"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Added for redirect
import { Loader2, ShieldCheck, ArrowRight, Eye, EyeOff, Globe, BookOpen, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);

  // 1. Integrated Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  // 2. Integrated Submit Logic
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Enrollment failed");
      }

      // 3. Save User ID for Onboarding Reference
      localStorage.setItem("rada_user_id", data.id);

      // 4. Redirect to Verification Page
      router.push("/verify-email");
      
    } catch (error: any) {
      alert(error.message || "An error occurred during enrollment.");
    } finally {
      setLoading(false);
    }
  };

  // Helper to update state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#06050e] text-[#f0ecff] grid grid-cols-1 lg:grid-cols-2 font-sans overflow-hidden">
      
      {/* ── LEFT PANEL (UI ONLY) ── */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-[#07060f]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_10%_10%,rgba(49,10,200,0.2)_0%,transparent_60%),radial-gradient(ellipse_50%_70%_at_90%_90%,rgba(99,6,200,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-[0.05] grayscale bg-cover bg-center pointer-events-none" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
        
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

      {/* ── RIGHT PANEL (INTEGRATED FORM) ── */}
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

          <form onSubmit={handleSubmit} className="space-y-[18px]">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className={cn("text-[10px] font-semibold tracking-[2px] uppercase transition-colors px-1", focusedField === 'fname' ? 'text-violet-400' : 'text-white/35')}>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
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
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
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
                name="username"
                value={formData.username}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
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
                I agree to the <a href="#" className="text-white/75 underline underline-offset-2 hover:text-violet-400 transition-colors">Code of Conduct</a> and <a href="#" className="text-white/75 underline underline-offset-2 hover:text-violet-400 transition-colors">Privacy Protocol</a>.
              </span>
            </button>

            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#5b21b6] via-[#6d28d9] to-[#7c3aed] text-white font-mono text-[11px] font-bold tracking-[3px] uppercase transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(109,40,217,0.5)] active:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 relative overflow-hidden group mt-2" disabled={loading || !agreed}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              {loading
                ? <><Loader2 size={15} className="animate-spin" /> Creating account…</>
                : <>Begin Enrollment <ArrowRight size={15} /></>}
            </button>
          </form>
          {/* Footer UI elements remain same as your original */}
        </div>
      </div>
    </div>
  );
}