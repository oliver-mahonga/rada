"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Trophy, Star, Target, Zap, 
  TrendingUp, Award, Globe, 
  ChevronRight, Hexagon, ShieldCheck,
  Cpu, Coins, Mic2, Code
} from "lucide-react";

export default function CommandCenter() {
  const [activeRange, setActiveRange] = useState("Global");

  const stats = [
    { label: "Total XP", value: "12,840", icon: <Zap size={16} />, color: "text-violet-400" },
    { label: "Global Rank", value: "#42", icon: <Globe size={16} />, color: "text-emerald-400" },
    { label: "Labs Completed", value: "18", icon: <Target size={16} />, color: "text-blue-400" },
  ];

  const skills = [
    { name: "Neural AI", level: 85, icon: <Cpu size={14} />, color: "bg-blue-500" },
    { name: "Economics", level: 60, icon: <Coins size={14} />, color: "bg-orange-500" },
    { name: "Persuasion", level: 92, icon: <Mic2 size={14} />, color: "bg-pink-500" },
    { name: "Engineering", level: 74, icon: <Code size={14} />, color: "bg-violet-500" },
  ];

  const leaderboard = [
    { rank: 1, name: "Alpha_Dev", xp: "42,000", status: "Legendary" },
    { rank: 2, name: "Satoshi_N", xp: "38,500", status: "Master" },
    { rank: 3, name: "Jordan_Rada", xp: "12,840", isUser: true, status: "Expert" },
    { rank: 4, name: "Neural_Link", xp: "11,200", status: "Expert" },
    { rank: 5, name: "Cyber_Punk", xp: "9,800", status: "Advanced" },
  ];

  return (
    <div className="space-y-10 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* ── TOP HERO: THE IDENTITY ── */}
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-end justify-between">
        <div className="flex items-center gap-8">
           <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-violet-600 to-pink-500 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative w-32 h-32 rounded-[2.5rem] bg-[#0f0a1e] border border-white/10 overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-violet-600 rounded-2xl border-4 border-[#050308] flex items-center justify-center text-white shadow-xl">
                 <ShieldCheck size={18} />
              </div>
           </div>
           <div>
              <div className="flex items-center gap-3 mb-2">
                 <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[9px] font-black text-violet-400 uppercase tracking-widest">Lvl 24 Operator</span>
                 <span className="text-[10px] font-bold text-white/20 uppercase tracking-[4px]">Verified</span>
              </div>
              <h1 className="text-5xl font-black text-white tracking-tighter italic uppercase">Jordan Rada</h1>
              <p className="text-[#6b6490] mt-1 font-medium italic">"System Architect & Persuasion Specialist"</p>
           </div>
        </div>

        <div className="flex gap-4">
           {stats.map((stat, i) => (
             <div key={i} className="bg-[#0f0a1e] border border-white/5 rounded-[2rem] p-6 w-40 flex flex-col items-center text-center group hover:border-white/20 transition-all">
                <div className={cn("mb-3 p-2 rounded-xl bg-white/5", stat.color)}>{stat.icon}</div>
                <p className="text-[10px] font-black text-[#6b6490] uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-xl font-black text-white">{stat.value}</p>
             </div>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ── LEFT: SKILL MATRIX ── */}
        <div className="lg:col-span-2 bg-[#0f0a1e]/50 border border-white/5 rounded-[3.5rem] p-10 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-5">
              <Hexagon size={200} className="text-violet-500" />
           </div>

           <div className="flex justify-between items-start mb-12">
              <div>
                 <h2 className="text-2xl font-black text-white tracking-tighter uppercase italic">Skill Radar</h2>
                 <p className="text-xs text-[#6b6490] font-medium">Your neural network proficiency across core sectors.</p>
              </div>
              <button className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white/40 hover:text-white">
                 <TrendingUp size={18} />
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                 {skills.map((skill, i) => (
                    <div key={i} className="space-y-3">
                       <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                             <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-white", skill.color + "/20 border border-" + skill.color.split('-')[1] + "-500/30")}>
                                {skill.icon}
                             </div>
                             <span className="text-[10px] font-black text-white uppercase tracking-widest">{skill.name}</span>
                          </div>
                          <span className="text-xs font-bold text-[#6b6490]">{skill.level}%</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full transition-all duration-1000", skill.color)} style={{ width: `${skill.level}%` }} />
                       </div>
                    </div>
                 ))}
              </div>
              
              {/* THE RADAR IMAGE PLACEHOLDER */}
              <div className="flex items-center justify-center relative">
                 
                 <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <Hexagon size={240} strokeWidth={1} />
                 </div>
              </div>
           </div>
        </div>

        {/* ── RIGHT: GLOBAL LEADERBOARD ── */}
        <div className="bg-[#050308] border border-white/5 rounded-[3.5rem] p-8 shadow-2xl">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-black text-white tracking-tight uppercase italic flex items-center gap-3">
                 <Trophy size={18} className="text-yellow-500" /> Leaderboard
              </h2>
              <div className="flex bg-white/5 rounded-xl p-1">
                 {["Global", "Local"].map(t => (
                    <button key={t} onClick={() => setActiveRange(t)} className={cn("px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all", activeRange === t ? "bg-white text-black" : "text-[#6b6490]")}>
                       {t}
                    </button>
                 ))}
              </div>
           </div>

           <div className="space-y-4">
              {leaderboard.map((user, i) => (
                 <div key={i} className={cn(
                    "flex items-center justify-between p-4 rounded-[1.5rem] transition-all border",
                    user.isUser ? "bg-violet-600/20 border-violet-500/40 shadow-lg shadow-violet-600/5" : "bg-white/[0.02] border-transparent hover:border-white/10"
                 )}>
                    <div className="flex items-center gap-4">
                       <span className={cn(
                          "text-xs font-black w-5",
                          user.rank === 1 ? "text-yellow-500" : user.rank === 2 ? "text-slate-400" : "text-[#6b6490]"
                       )}>0{user.rank}</span>
                       <div className="w-10 h-10 rounded-xl bg-white/5 overflow-hidden border border-white/10">
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="user" />
                       </div>
                       <div>
                          <p className="text-[11px] font-black text-white tracking-wide">{user.name}</p>
                          <p className="text-[8px] font-black text-violet-400 uppercase tracking-widest">{user.status}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-xs font-black text-white">{user.xp}</p>
                       <p className="text-[8px] font-bold text-[#6b6490] uppercase tracking-tighter">TOTAL XP</p>
                    </div>
                 </div>
              ))}
           </div>

           <button className="w-full mt-8 py-4 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black text-[#6b6490] uppercase tracking-[4px] hover:bg-white hover:text-black transition-all">
              View All Rankings
           </button>
        </div>

      </div>

      {/* ── ACHIEVEMENTS STRIP ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { title: "First Blood", desc: "Complete 1st Lab", icon: <Zap /> },
           { title: "Node Master", desc: "Deploy 10 Clusters", icon: <Cpu /> },
           { title: "Whale Talker", desc: "Close $1M Deal", icon: <Mic2 /> },
           { title: "Early Adopter", desc: "Beta Access 2026", icon: <Award /> },
         ].map((badge, i) => (
           <div key={i} className="bg-gradient-to-br from-[#0f0a1e] to-black border border-white/5 rounded-[2rem] p-6 flex items-center gap-5 grayscale hover:grayscale-0 transition-all cursor-help opacity-60 hover:opacity-100">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40">
                 {badge.icon}
              </div>
              <div>
                 <p className="text-[10px] font-black text-white uppercase tracking-widest">{badge.title}</p>
                 <p className="text-[9px] font-bold text-[#6b6490]">{badge.desc}</p>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}