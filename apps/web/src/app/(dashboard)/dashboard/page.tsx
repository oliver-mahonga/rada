"use client";

import { 
  Zap, TrendingUp, Users, Target, 
  Play, ChevronRight, Star, Clock, 
  ArrowUpRight, Brain, Code, Coins, 
  Trophy
} from "lucide-react";
import { cn } from "@/lib/utils";
export default function MissionControl() {
  return (
    <div className="space-y-10 pb-20">
      
      {/* ── WELCOME HERO: THE "EMPIRE" VIEW ── */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-violet-900/40 to-indigo-950/40 border border-white/10 p-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-violet-600/20 blur-[100px] rounded-full" />
        
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black tracking-[3px] uppercase text-emerald-400">System Online: Level 12 Initiate</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter text-white mb-4 leading-[0.9]">
            Your empire is growing. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-500">Keep pushing, Jordan.</span>
          </h1>
          <p className="text-[#9d96be] font-medium mb-8 text-lg">
            3 modules in progress • 1 Live Masterclass at 3PM • Ranked #12 Globally
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Resume: Crypto Mastery
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white/10 transition-all">
              View Schedule
            </button>
          </div>
        </div>
      </section>

      {/* ── ANALYTICS GRID: REAL-TIME STATS ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Courses Active", val: "3", sub: "+1 this week", icon: <Brain />, color: "border-blue-500/30" },
          { label: "Hours Logged", val: "24.8", sub: "↑ 12% increase", icon: <Clock />, color: "border-purple-500/30" },
          { label: "Day Streak", val: "14", sub: "Personal Best!", icon: <Zap />, color: "border-orange-500/30" },
          { label: "Global Rank", val: "#12", sub: "↑ 3 spots today", icon: <Target />, color: "border-emerald-500/30" },
        ].map((stat, i) => (
          <div key={i} className={`p-6 rounded-[2rem] bg-[#0f0a1e]/50 border ${stat.color} backdrop-blur-sm group hover:bg-white/[0.02] transition-all`}>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-xl bg-black/40 text-white/70 group-hover:text-white transition-colors">
                {stat.icon}
              </div>
              <TrendingUp size={16} className="text-emerald-500" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-[#6b6490] mb-1">{stat.label}</p>
            <h3 className="text-3xl font-black text-white tracking-tighter">{stat.val}</h3>
            <p className="text-[10px] font-bold text-emerald-400 mt-2 uppercase tracking-tight">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* ── CORE CURRICULUM: THE ACTIVE LABS ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        
        {/* RECOMMENDED FOR YOU */}
        <div className="xl:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black uppercase tracking-[4px] text-white">Active Skill Labs</h2>
            <button className="text-[10px] font-black uppercase tracking-widest text-violet-400 hover:text-white transition-colors">View All Curriculum</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "AI Prompt Engineering", tag: "AI", progress: 65, img: "🤖", color: "from-blue-600 to-cyan-500" },
              { title: "Bitcoin Market Cycles", tag: "FINANCE", progress: 32, img: "₿", color: "from-orange-600 to-yellow-500" },
            ].map((course, i) => (
              <div key={i} className="group relative overflow-hidden rounded-[2.5rem] bg-[#0f0a1e] border border-white/5 p-1 transition-all hover:border-white/20">
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                    {course.img}
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-violet-400 uppercase">{course.tag}</span>
                  <h4 className="text-xl font-black text-white mt-2 mb-6 leading-tight group-hover:text-violet-300 transition-colors">
                    {course.title}
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black text-white/40 uppercase tracking-widest">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-1000" 
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <button className="mt-8 w-full py-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center gap-3 group-hover:bg-white group-hover:text-black transition-all">
                    <Play size={14} className="fill-current" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Continue Session</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* THE GLOBAL LEADERBOARD MINI */}
        <div className="space-y-6">
          <h2 className="text-xl font-black uppercase tracking-[4px] text-white">Top Operatives</h2>
          <div className="rounded-[2.5rem] bg-[#0f0a1e] border border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5 bg-white/[0.02]">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                    <Trophy size={20} className="text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-white uppercase tracking-widest">Weekly Arena</p>
                    <p className="text-[9px] font-bold text-[#6b6490] uppercase tracking-widest">Ends in 2d 14h</p>
                  </div>
               </div>
            </div>
            
            <div className="divide-y divide-white/5">
              {[
                { name: "Alex_Dev", xp: "12,400", rank: 1, img: "1" },
                { name: "Sarah_AI", xp: "11,200", rank: 2, img: "2" },
                { name: "You", xp: "9,850", rank: 12, img: "3", isMe: true },
              ].map((user, i) => (
                <div key={i} className={cn(
                  "flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors",
                  user.isMe && "bg-violet-600/5 border-l-2 border-violet-500"
                )}>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black text-[#4b4563] w-4">{user.rank}</span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10" />
                    <span className={cn("text-xs font-bold", user.isMe ? "text-violet-400" : "text-white")}>
                      {user.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-white/40 uppercase">{user.xp} XP</span>
                </div>
              ))}
            </div>

            <button className="w-full py-5 text-[10px] font-black uppercase tracking-widest text-[#6b6490] hover:text-white transition-colors bg-white/[0.01]">
              View Full Leaderboard
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}