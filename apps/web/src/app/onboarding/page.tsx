"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Camera, ArrowRight, CheckCircle2, User, Sparkles, 
  Code, Brain, Coins, PenTool, BarChart3, 
  ChevronRight, Target, Zap, Globe, Loader2, Quote
} from "lucide-react";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const [profile, setProfile] = useState({
    avatar: null as string | null,
    bio: "",
    interests: [] as string[],
    experienceLevel: "beginner",
    primaryGoal: "",
  });

  const skillOptions = [
    { id: "ai", label: "Artificial Intelligence", icon: <Brain size={16} />, color: "text-blue-400" },
    { id: "coding", label: "Software Engineering", icon: <Code size={16} />, color: "text-green-400" },
    { id: "crypto", label: "Bitcoin & Web3", icon: <Coins size={16} />, color: "text-orange-400" },
    { id: "copy", label: "Copywriting & Sales", icon: <PenTool size={16} />, color: "text-pink-400" },
    { id: "trading", label: "Financial Markets", icon: <BarChart3 size={16} />, color: "text-yellow-400" },
    { id: "marketing", label: "Digital Marketing", icon: <Globe size={16} />, color: "text-purple-400" },
  ];

  const handleInterestToggle = (id: string) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests.includes(id) 
        ? prev.interests.filter(i => i !== id) 
        : [...prev.interests, id]
    }));
  };

  const nextStep = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(s => s + 1);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#07050f] text-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* ── BACKGROUND VISUALS ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,10,41,1)_0%,_rgba(7,5,15,1)_100%)]" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      
      <div className="w-full max-w-2xl relative z-10">
        
        {/* ── PROGRESS STATUS ── */}
        <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/5 border border-violet-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-ping" />
              <span className="text-[10px] font-black tracking-[4px] uppercase text-violet-400">Network Calibration: Step {step} of 3</span>
           </div>
           <div className="flex justify-center gap-3">
              {[1, 2, 3].map(i => (
                <div key={i} className={`h-1.5 w-16 rounded-full transition-all duration-700 ${step >= i ? "bg-gradient-to-r from-violet-500 to-pink-500 shadow-[0_0_15px_rgba(139,92,246,0.6)]" : "bg-white/5"}`} />
              ))}
           </div>
        </div>

        {/* ── STEP 1: VISUAL & BIO ── */}
        {step === 1 && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="text-center">
              <h1 className="text-5xl font-black tracking-tighter mb-3">Sync Your Presence</h1>
              <p className="text-[#9d96be] font-medium max-w-sm mx-auto">First impressions are everything in the network. Define how you are perceived.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 bg-[#0f0a1e]/50 p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-md">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-tr from-violet-600 to-pink-500 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative w-40 h-40 rounded-full bg-[#07050f] border-2 border-white/10 flex items-center justify-center overflow-hidden">
                  {profile.avatar ? (
                    <img src={profile.avatar} className="w-full h-full object-cover" alt="Avatar" />
                  ) : (
                    <User size={60} className="text-white/10" />
                  )}
                  <label className="absolute inset-0 bg-violet-600/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center cursor-pointer">
                    <Camera size={24} />
                    <span className="text-[9px] font-black uppercase mt-2 tracking-widest">Update Photo</span>
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => {/* Handle upload logic */}} />
                  </label>
                </div>
              </div>

              <div className="w-full space-y-4">
                <div className="relative">
                  <Quote className="absolute -top-3 -left-3 text-violet-500/20" size={30} />
                  <textarea 
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    placeholder="Tell us about your drive... e.g., 'Aspiring AI Architect focusing on decentralized finance systems.'"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-lg font-medium placeholder:text-white/20 outline-none focus:border-violet-500 transition-all resize-none h-32"
                  />
                </div>
                <p className="text-[10px] text-[#6b6490] font-bold uppercase tracking-widest">A short mission statement (max 160 characters)</p>
              </div>
            </div>

            <button onClick={nextStep} className="w-full py-5 bg-white text-black font-black uppercase tracking-[4px] text-xs rounded-2xl hover:bg-violet-100 transition-all flex items-center justify-center gap-3 active:scale-95">
              Confirm Profile Details <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* ── STEP 2: INTERESTS & ALIGNMENT ── */}
        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="text-center">
              <h1 className="text-5xl font-black tracking-tighter mb-3">Skill Alignment</h1>
              <p className="text-[#9d96be] font-medium">Select the high-income skills you want Rada to prioritize for you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillOptions.map((skill) => (
                <button 
                  key={skill.id}
                  onClick={() => handleInterestToggle(skill.id)}
                  className={`p-6 rounded-3xl border-2 transition-all flex items-center gap-5 text-left group relative overflow-hidden ${
                    profile.interests.includes(skill.id) 
                    ? "bg-violet-600/10 border-violet-500 shadow-[0_0_25px_rgba(139,92,246,0.15)]" 
                    : "bg-[#0f0a1e] border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className={`p-4 rounded-2xl bg-black/40 ${skill.color} group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <div>
                    <p className={`text-base font-black tracking-tight ${profile.interests.includes(skill.id) ? "text-white" : "text-white/60"}`}>
                      {skill.label}
                    </p>
                    <p className="text-[9px] text-white/30 uppercase font-bold tracking-widest">Industry Standard Path</p>
                  </div>
                  {profile.interests.includes(skill.id) && (
                    <div className="ml-auto w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center">
                       <CheckCircle2 size={14} className="text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="pt-6">
               <button 
                disabled={profile.interests.length === 0}
                onClick={nextStep} 
                className="w-full py-5 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-black uppercase tracking-[4px] text-xs rounded-2xl hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all flex items-center justify-center gap-3 disabled:opacity-20 disabled:grayscale"
              >
                Generate Custom Curriculum <Sparkles size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 3: FINALIZATION ── */}
        {step === 3 && (
          <div className="text-center space-y-10 animate-in zoom-in-95 duration-1000">
            <div className="relative inline-block group">
               <div className="absolute inset-0 bg-violet-600 blur-[120px] opacity-40 animate-pulse" />
               <div className="w-40 h-40 rounded-[2.5rem] bg-gradient-to-br from-violet-600 to-indigo-900 flex items-center justify-center mx-auto border border-white/20 relative shadow-2xl transform group-hover:rotate-6 transition-transform">
                  {loading ? <Loader2 size={50} className="animate-spin" /> : <Zap size={60} className="text-white fill-white" />}
               </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl font-black tracking-tighter">Access Authorized</h1>
              <p className="text-[#9d96be] font-medium max-w-sm mx-auto leading-relaxed">
                Your path is set. Rada AI has unlocked <span className="text-white font-black underline decoration-violet-500 underline-offset-4">specialized modules</span> based on your profile.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
               <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-left backdrop-blur-sm group hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center mb-3">
                     <Target size={16} className="text-violet-400" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Primary Node</p>
                  <p className="text-sm font-black italic">Advanced Curriculum</p>
               </div>
               <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-left backdrop-blur-sm group hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center mb-3">
                     <Zap size={16} className="text-pink-400" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Network Bonus</p>
                  <p className="text-sm font-black italic">Community Mastermind</p>
               </div>
            </div>

            <Link 
              href="/dashboard"
              className="block w-full py-6 bg-white text-black font-black uppercase tracking-[5px] text-xs rounded-2xl hover:scale-[1.02] transition-all shadow-[0_20px_60px_rgba(255,255,255,0.1)] mt-12"
            >
              Enter The Rada Core →
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}