"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ShieldAlert, ArrowLeft, KeyRound, 
  Fingerprint, Mail, Zap, ShieldCheck 
} from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#050308] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

      <div className="w-full max-w-md relative z-10 animate-in fade-in zoom-in-95 duration-700">
        
        {/* Header Branding */}
        <div className="text-center mb-10">
          <div className="inline-flex p-4 rounded-3xl bg-white/5 border border-white/10 mb-6 shadow-2xl">
            <ShieldAlert size={32} className="text-red-500 animate-pulse" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic">Access Recovery</h1>
          <p className="text-[#6b6490] text-sm font-medium mt-2">Initialize credential reset protocol</p>
        </div>

        {!isSubmitted ? (
          <div className="bg-[#0f0a1e] border border-white/5 rounded-[3rem] p-10 shadow-2xl">
            <form onSubmit={handleRecovery} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/20 uppercase tracking-[4px] ml-2">Operator Email</label>
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[#6b6490] group-focus-within:text-white transition-colors" size={18} />
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter registered email..."
                    className="w-full bg-black/40 border border-white/5 rounded-2xl py-5 pl-14 pr-6 text-sm text-white placeholder:text-white/10 outline-none focus:border-red-500/50 transition-all"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-[4px] hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-3"
              >
                Request Reset <KeyRound size={14} />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-4">
              <Link 
                href="/login" 
                className="flex items-center justify-center gap-2 text-[10px] font-black text-[#6b6490] uppercase tracking-widest hover:text-white transition-colors"
              >
                <ArrowLeft size={12} /> Back to Terminal
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-[#0f0a1e] border border-white/5 rounded-[3rem] p-12 text-center shadow-2xl animate-in slide-in-from-bottom-4">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} className="text-emerald-500" />
            </div>
            <h3 className="text-xl font-black text-white uppercase italic mb-4">Transmission Sent</h3>
            <p className="text-sm text-[#9d96be] font-medium leading-relaxed mb-8">
              "We have dispatched a recovery sequence to <span className="text-white">{email}</span>. Check your encrypted inbox."
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-[10px] uppercase tracking-[4px] hover:bg-white hover:text-black transition-all"
            >
              Re-attempt Reset
            </button>
          </div>
        )}

        {/* Security Footer */}
        <div className="mt-10 flex items-center justify-center gap-6 opacity-30">
          <div className="flex items-center gap-2">
            <Fingerprint size={14} className="text-white" />
            <span className="text-[8px] font-black text-white uppercase tracking-widest">Biometric Ready</span>
          </div>
          <div className="h-1 w-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-white" />
            <span className="text-[8px] font-black text-white uppercase tracking-widest">Instant Auth</span>
          </div>
        </div>
      </div>
    </div>
  );
}