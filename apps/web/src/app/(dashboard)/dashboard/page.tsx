"use client";

import { useState, useEffect } from "react";
import { 
  Zap, TrendingUp, Target, Play, 
  Clock, ArrowUpRight, Brain, 
  Trophy, Activity, Box, 
  Layers, ChevronRight, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AIStrategyCard from "@/components/dashboard/mission-control/AIStrategyCard";
import DailyMissions from "@/components/dashboard/mission-control/DailyMissions";
import HeroSection from "@/components/dashboard/mission-control/HeroSection";
import IncomeTracks from "@/components/dashboard/mission-control/IncomeTracks";
import Leaderboard from "@/components/dashboard/mission-control/Leaderboard";
import MarketOpportunities from "@/components/dashboard/mission-control/MarketOpportunities";
import QuickActions from "@/components/dashboard/mission-control/QuickActions";
import RecentActivity from "@/components/dashboard/mission-control/RecentActivity";
import RecommendedCourses from "@/components/dashboard/mission-control/RecommendedCourses";
import StatsGrid from "@/components/dashboard/mission-control/StatsGrid";
import SummaryBar from "@/components/dashboard/mission-control/SummaryBar";
import TabButton from "@/components/dashboard/mission-control/TabButton";

function useCounter(end: number, duration = 1800, start = 0) {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTime: number;
    let raf: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (end - start) + start));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);
  return count;
}

export default function MissionControl() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [serverData, setServerData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isScanning, setIsScanning] = useState(true); // Scanning State

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    async function syncNeuralLink() {
      try {
        const response = await fetch("http://localhost:3001/dashboard/YOUR_USER_ID");
        const data = await response.json();
        setServerData(data);
        // Keep scanning animation for 2 seconds for "Aura" effect
        setTimeout(() => setIsScanning(false), 2000);
      } catch (error) {
        console.error("Sync Failed", error);
        setIsScanning(false);
      } finally {
        setLoading(false);
      }
    }
    syncNeuralLink();
    setMounted(true);
  }, []);

  const xp = useCounter(serverData?.stats?.xp ?? 0);
  const streak = useCounter(serverData?.stats?.streak ?? 0);
  const completion = useCounter(serverData?.stats?.completion ?? 0);
  const readiness = useCounter(serverData?.stats?.readiness ?? 0);

  // Navigation Handler
  const handleCourseClick = (courseId: string) => {
    router.push(`/dashboard/courses/${courseId}`);
  };

  if (loading) return <div className="min-h-screen bg-[#050310]" />;

  return (
    <div className={cn(
      "space-y-10 pb-20 transition-all duration-1000",
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    )}>
      
      {/* ── SECTION 1: SYSTEM OVERVIEW (THE HERO) ── */}
      <section className="relative group overflow-hidden rounded-[3.5rem] bg-[#0f0a1e] border border-white/5 p-12 shadow-2xl">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] -mr-40 -mt-40 animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-ping" />
              <span className="text-[10px] font-black tracking-[4px] uppercase text-white/70">Neural Link: Synchronized</span>
            </div>
            
            <h1 className="text-6xl font-black tracking-tighter text-white mb-6 leading-[0.85] italic uppercase">
              The System is <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-500 to-orange-400">Optimized for Growth.</span>
            </h1>
            
            <p className="text-[#9d96be] font-medium mb-10 text-xl italic leading-relaxed max-w-lg">
              "Your trajectory is locked. 3 Neural Labs are active. Global ranking improved by 4% in the last 24h."
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="group px-10 py-5 bg-white text-black font-black uppercase tracking-[3px] text-[10px] rounded-[2rem] hover:scale-105 transition-all flex items-center gap-3 shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                Initialize Sequence <Play size={14} fill="black" />
              </button>
              <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-[3px] text-[10px] rounded-[2rem] hover:bg-white/10 transition-all backdrop-blur-sm">
                Operational Logs
              </button>
            </div>
          </div>

          {/* REAL-TIME MOMENTUM CHART (SVG MOCKUP) */}
          <div className="hidden lg:block w-80 h-48 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group-hover:border-white/20 transition-colors">
            <p className="text-[9px] font-black text-[#6b6490] uppercase tracking-[3px] mb-6">Cognitive Velocity</p>
            <svg viewBox="0 0 200 100" className="w-full h-24 overflow-visible">
              <path 
                d="M0,80 Q25,70 50,85 T100,40 T150,60 T200,10" 
                fill="none" 
                stroke="url(#grad)" 
                strokeWidth="4" 
                strokeLinecap="round"
                className="animate-[dash_3s_ease-in-out_infinite]"
                style={{ strokeDasharray: 300, strokeDashoffset: 0 }}
              />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
            <div className="mt-4 flex justify-between items-end">
               <div>
                  <p className="text-2xl font-black text-white italic">+14.2%</p>
                  <p className="text-[8px] font-bold text-emerald-500 uppercase">Retention Rate</p>
               </div>
               <TrendingUp className="text-emerald-500 mb-1" size={16} />
    <>
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(1000%); opacity: 0; }
        }
        .scanning-line {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(139,92,246,0.2), transparent);
          height: 100px;
          width: 100%;
          animation: scanline 3s linear infinite;
          pointer-events: none;
        }
      `}</style>

      <div className={`min-h-screen bg-[#050310] text-white pb-24 px-4 md:px-8 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {isScanning && <div className="scanning-line z-50" />}
        
        <HeroSection mounted={mounted} pulseRing={true} canvasRef={canvasRef} />

        <div className="flex flex-wrap gap-3 mb-8">
          {["overview", "courses", "opportunities", "earnings", "community", "ai-mentor"].map((t) => (
            <TabButton key={t} label={t} active={activeTab === t} onClick={() => setActiveTab(t)} />
          ))}
        </div>

        {activeTab === "overview" && (
          <>
            <QuickActions />
            <StatsGrid xp={xp} />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
              <div className="xl:col-span-2 space-y-8">
                <RecommendedCourses 
                  mounted={mounted} 
                  courses={serverData?.recommendedCourses ?? []} 
                  onCourseClick={handleCourseClick} // Pass Navigation Function
                />
                <MarketOpportunities />
                <DailyMissions missions={serverData?.missions ?? []} />
              </div>
              <div className="space-y-8">
                <AIStrategyCard 
                  readiness={readiness} 
                  completion={completion} 
                  streak={streak} 
                  isScanning={isScanning}
                  move={isScanning ? "RE-CALCULATING..." : serverData?.aiStrategy?.move} 
                />
                <IncomeTracks />
                <RecentActivity />
                <Leaderboard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE METRIC MATRIX ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: "Active Nodes", val: "03", icon: <Layers size={20} />, color: "text-blue-400", bg: "bg-blue-400/10" },
          { label: "Session Uptime", val: "4.2h", icon: <Activity size={20} />, color: "text-violet-400", bg: "bg-violet-400/10" },
          { label: "Neural XP", val: "12.8k", icon: <Sparkles size={20} />, color: "text-orange-400", bg: "bg-orange-400/10" },
          { label: "Global Delta", val: "Top 2%", icon: <Target size={20} />, color: "text-emerald-400", bg: "bg-emerald-400/10" },
        ].map((stat, i) => (
          <div key={i} className="group relative p-8 rounded-[2.5rem] bg-[#050308] border border-white/5 hover:border-white/20 transition-all cursor-default">
            <div className={cn("inline-flex p-3 rounded-2xl mb-6 transition-transform group-hover:scale-110", stat.bg, stat.color)}>
              {stat.icon}
            </div>
            <p className="text-[10px] font-black uppercase tracking-[4px] text-[#6b6490] mb-2">{stat.label}</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-4xl font-black text-white italic tracking-tighter">{stat.val}</h3>
              <ArrowUpRight size={14} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-all" />
            </div>
          </div>
        ))}
      </div>

      {/* ── SECTION 3: SKILL CLUSTERS & RANKING ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        
        {/* ACTIVE MODULES FEED */}
        <div className="xl:col-span-2 space-y-8">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
               <h2 className="text-2xl font-black uppercase tracking-tighter text-white italic">Neural Processing</h2>
               <div className="h-px w-20 bg-white/10" />
            </div>
            <button className="group flex items-center gap-2 text-[9px] font-black uppercase tracking-[3px] text-violet-400 hover:text-white transition-all">
              All Sessions <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Next.js Architecture", tag: "Engineering", level: "Senior", progress: 78, icon: <Box className="text-blue-500" /> },
              { title: "Psychological Sales", tag: "Persuasion", level: "Elite", progress: 45, icon: <Brain className="text-pink-500" /> },
            ].map((node, i) => (
              <div key={i} className="group relative bg-[#0f0a1e]/40 border border-white/5 rounded-[3rem] p-10 hover:bg-white/[0.02] transition-all overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                   {node.icon}
                </div>
                
                <div className="flex justify-between items-start mb-8">
                   <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-black text-violet-400 uppercase tracking-[4px]">{node.tag}</span>
                      <h4 className="text-2xl font-black text-white tracking-tight italic uppercase">{node.title}</h4>
                   </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest italic">
                    <span className="text-[#6b6490]">Neural Sync</span>
                    <span className="text-white">{node.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 transition-all duration-1000 ease-out" 
                      style={{ width: `${node.progress}%` }}
                    />
                  </div>
                </div>

                <button className="mt-10 w-full py-5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-4 group-hover:bg-white group-hover:text-black transition-all">
                  <span className="text-[10px] font-black uppercase tracking-[4px]">Enter Lab</span>
                  <Zap size={14} className="fill-current" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR: MINI RANKING TERMINAL */}
        <div className="space-y-8">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white italic px-4">Elite Tier</h2>
          <div className="rounded-[3rem] bg-[#050308] border border-white/5 overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-white/5 bg-white/[0.01]">
               <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                    <Trophy size={24} className="text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white uppercase tracking-[3px]">Season 04 Arena</p>
                    <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest mt-0.5">Global Protocol Active</p>
                  </div>
               </div>
            </div>
            
            <div className="divide-y divide-white/[0.03]">
              {[
                { name: "Alpha_Arc", xp: "142k", rank: 1, trend: "up" },
                { name: "Satoshi_V", xp: "128k", rank: 2, trend: "up" },
                { name: "Jordan_R", xp: "12.8k", rank: 42, trend: "up", isUser: true },
              ].map((user, i) => (
                <div key={i} className={cn(
                  "flex items-center justify-between p-6 transition-all",
                  user.isUser ? "bg-violet-600/10 border-l-4 border-violet-500" : "hover:bg-white/[0.01]"
                )}>
                  <div className="flex items-center gap-5">
                    <span className="text-[10px] font-black text-[#4b4563] w-5">0{user.rank}</span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="avatar" />
                    </div>
                    <div>
                       <p className={cn("text-xs font-black uppercase tracking-tight", user.isUser ? "text-violet-400" : "text-white")}>{user.name}</p>
                       <p className="text-[8px] font-bold text-[#6b6490] uppercase tracking-widest">Active Operator</p>
                    </div>
                  </div>
                  <div className="text-right">
                     <p className="text-xs font-black text-white">{user.xp}</p>
                     <p className="text-[8px] font-black text-emerald-500 uppercase tracking-tighter">↑ 12%</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-white/[0.01]">
               <button className="w-full py-4 text-[9px] font-black uppercase tracking-[5px] text-[#6b6490] hover:text-white transition-all border border-white/5 rounded-2xl">
                 Full Global Intel
               </button>
            </div>
          </div>
        </div>

            <SummaryBar streak={streak} completion={completion} readiness={readiness} />
          </>
        )}
      </div>
    </div>
  );
}