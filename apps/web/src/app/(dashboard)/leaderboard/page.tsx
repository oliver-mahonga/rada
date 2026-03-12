"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Trophy, Crown, Medal, Globe, 
  TrendingUp, Zap, ChevronUp, 
  Search, Filter, Target, Flame
} from "lucide-react";

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState("All Time");

  const topThree = [
    { rank: 2, name: "Satoshi_N", xp: "84,200", level: 68, color: "text-slate-300", border: "border-slate-300/20" },
    { rank: 1, name: "Alpha_Architect", xp: "125,000", level: 92, color: "text-yellow-500", border: "border-yellow-500/30" },
    { rank: 3, name: "Neural_Link", xp: "72,150", level: 54, color: "text-orange-600", border: "border-orange-600/20" },
  ];

  const others = [
    { rank: 4, name: "Cyber_Punk", xp: "68,400", level: 48, trend: "up", status: "Elite" },
    { rank: 5, name: "Jordan_Rada", xp: "12,840", level: 24, trend: "up", status: "Operator", isUser: true },
    { rank: 6, name: "Quant_Vortex", xp: "11,200", level: 22, trend: "down", status: "Operator" },
    { rank: 7, name: "Deep_Logic", xp: "9,800", level: 19, trend: "up", status: "Novice" },
  ];

  return (
    <div className="space-y-12 pb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000">
      
      {/* ── HEADER: GLOBAL PULSE ── */}
      <div className="flex flex-col lg:flex-row justify-between items-end gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
             <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Live Ranking Active</span>
             </div>
             <span className="text-[10px] font-bold text-white/20 uppercase tracking-[4px]">Verified 2026</span>
          </div>
          <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-none">Global Rankings</h1>
          <p className="text-[#6b6490] mt-4 font-medium italic max-w-md leading-relaxed">
            "The proof-of-work leaderboard for the top 1% of system architects and persuasion experts."
          </p>
        </div>

        <div className="flex bg-[#0f0a1e] border border-white/5 p-1.5 rounded-[1.5rem] shadow-xl">
           {["Daily", "Weekly", "All Time"].map((t) => (
             <button 
               key={t}
               onClick={() => setTimeframe(t)}
               className={cn(
                 "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                 timeframe === t ? "bg-white text-black" : "text-[#6b6490] hover:text-white"
               )}
             >
               {t}
             </button>
           ))}
        </div>
      </div>

      {/* ── THE PODIUM: TOP 3 ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end pt-10">
        {topThree.map((user) => (
          <div key={user.rank} className={cn(
            "relative flex flex-col items-center group",
            user.rank === 1 ? "order-2 mb-8" : user.rank === 2 ? "order-1" : "order-3"
          )}>
            <div className={cn(
              "absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500",
              user.color
            )}>
               {user.rank === 1 ? <Crown size={32} /> : <Medal size={24} />}
            </div>
            
            <div className={cn(
              "w-full bg-[#0f0a1e]/50 border rounded-[3rem] p-10 flex flex-col items-center transition-all duration-500 group-hover:border-white/20",
              user.border,
              user.rank === 1 ? "h-80 shadow-[0_0_50px_rgba(234,179,8,0.05)]" : "h-64"
            )}>
               <div className="relative mb-6">
                  <div className={cn("absolute -inset-2 rounded-full blur-md opacity-20", user.rank === 1 ? "bg-yellow-500" : "bg-white")} />
                  <div className="relative w-20 h-20 rounded-3xl bg-black border border-white/10 overflow-hidden shadow-2xl">
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="top-user" className="w-full h-full object-cover" />
                  </div>
                  <div className={cn("absolute -bottom-2 -right-2 w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black border-2 border-[#050308]", user.rank === 1 ? "bg-yellow-500 text-black" : "bg-white text-black")}>
                     {user.rank}
                  </div>
               </div>
               
               <p className="text-sm font-black text-white tracking-wide uppercase mb-1">{user.name}</p>
               <p className={cn("text-[9px] font-black uppercase tracking-widest mb-4", user.color)}>Lvl {user.level}</p>
               <div className="mt-auto text-center">
                  <p className="text-2xl font-black text-white">{user.xp}</p>
                  <p className="text-[8px] font-black text-[#6b6490] uppercase tracking-widest">Total XP Earned</p>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── THE LIST: MAIN RANKINGS ── */}
      <div className="bg-[#050308] border border-white/5 rounded-[4rem] overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
        
        <table className="w-full text-left border-collapse">
           <thead>
              <tr className="border-b border-white/5 bg-white/[0.01]">
                 <th className="py-8 px-10 text-[10px] font-black text-white/20 uppercase tracking-[4px]">Operator</th>
                 <th className="py-8 px-10 text-[10px] font-black text-white/20 uppercase tracking-[4px]">Status</th>
                 <th className="py-8 px-10 text-[10px] font-black text-white/20 uppercase tracking-[4px]">Level</th>
                 <th className="py-8 px-10 text-[10px] font-black text-white/20 uppercase tracking-[4px] text-right">XP Capital</th>
              </tr>
           </thead>
           <tbody className="divide-y divide-white/[0.02]">
              {others.map((user) => (
                 <tr key={user.rank} className={cn(
                    "group transition-all hover:bg-white/[0.02]",
                    user.isUser ? "bg-violet-600/5" : ""
                 )}>
                    <td className="py-8 px-10">
                       <div className="flex items-center gap-6">
                          <span className="text-xs font-black text-[#6b6490] w-6">0{user.rank}</span>
                          <div className="w-12 h-12 rounded-2xl bg-[#0f0a1e] border border-white/10 overflow-hidden relative">
                             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="user" />
                             {user.isUser && (
                               <div className="absolute inset-0 bg-violet-600/20 border border-violet-500 flex items-center justify-center">
                                  <Zap size={14} className="text-white animate-pulse" fill="white" />
                               </div>
                             )}
                          </div>
                          <div>
                             <p className="text-sm font-black text-white uppercase tracking-tight">{user.name}</p>
                             <div className="flex items-center gap-2 mt-1">
                                {user.trend === "up" ? <ChevronUp size={10} className="text-emerald-500" /> : <div className="w-2 h-0.5 bg-white/20" />}
                                <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">Active Sequence</span>
                             </div>
                          </div>
                       </div>
                    </td>
                    <td className="py-8 px-10">
                       <span className={cn(
                          "px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border",
                          user.status === "Elite" ? "bg-pink-500/10 border-pink-500/30 text-pink-400" : "bg-white/5 border-white/10 text-[#6b6490]"
                       )}>
                          {user.status}
                       </span>
                    </td>
                    <td className="py-8 px-10">
                       <div className="flex items-center gap-3">
                          <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full bg-violet-600" style={{ width: `${user.level}%` }} />
                          </div>
                          <span className="text-[10px] font-black text-white">{user.level}</span>
                       </div>
                    </td>
                    <td className="py-8 px-10 text-right">
                       <p className="text-lg font-black text-white">{user.xp}</p>
                       <p className="text-[8px] font-bold text-emerald-500 uppercase tracking-tighter">Verified Assets</p>
                    </td>
                 </tr>
              ))}
           </tbody>
        </table>

        {/* BOTTOM CALL TO ACTION */}
        <div className="p-10 border-t border-white/5 bg-white/[0.01] flex justify-center">
            <button className="flex items-center gap-4 text-[10px] font-black text-white/20 hover:text-white uppercase tracking-[6px] transition-all">
               Load Global Directory <Globe size={14} />
            </button>
        </div>
      </div>

      {/* ── FOOTER STATS ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { label: "Active Nodes", val: "12,402", icon: <Zap className="text-violet-400" /> },
           { label: "XP Distributed", val: "4.2M", icon: <Flame className="text-orange-500" /> },
           { label: "Top Sector", val: "Neural AI", icon: <Target className="text-blue-500" /> }
         ].map((stat, i) => (
           <div key={i} className="bg-[#0f0a1e]/50 border border-white/5 rounded-[2.5rem] p-8 flex items-center justify-between">
              <div>
                 <p className="text-[9px] font-black text-[#6b6490] uppercase tracking-[3px] mb-1">{stat.label}</p>
                 <p className="text-2xl font-black text-white italic tracking-tighter uppercase">{stat.val}</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                 {stat.icon}
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}