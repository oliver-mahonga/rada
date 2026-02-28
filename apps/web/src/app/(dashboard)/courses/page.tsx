"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Search, Filter, Flame, Monitor, 
  Cpu, Coins, PenTool, Code, 
  Lock, ArrowRight, Users, 
  Terminal, LineChart, Mic2, FileJson, Layers
} from "lucide-react";

const labCategories = [
  { id: "all", label: "All Sectors", icon: <Monitor size={14} /> },
  { id: "ai", label: "Neural AI", icon: <Cpu size={14} /> },
  { id: "dev", label: "Engineering", icon: <Code size={14} /> },
  { id: "crypto", label: "Economics", icon: <Coins size={14} /> },
  { id: "sales", label: "Persuasion", icon: <PenTool size={14} /> },
];

const courses = [
  {
    title: "Large Language Model Architecture",
    category: "ai",
    level: "Advanced",
    students: "1.2k",
    status: "Operational",
    description: "Deep dive into transformer logic. Includes a Neural Sandbox to test weights in real-time.",
    gradient: "from-blue-600/20 to-indigo-600/20",
    border: "border-blue-500/30",
    tools: ["Neural Sandbox", "Weight Visualizer"],
    toolIcon: <Cpu size={16} className="text-blue-400" />
  },
  {
    title: "Bitcoin Protocol Deep Dive",
    category: "crypto",
    level: "Expert",
    students: "840",
    status: "Live Now",
    description: "Analyzing the UTXO model. Laboratory includes a Live Mempool Observer and Node Simulator.",
    gradient: "from-orange-600/20 to-amber-600/20",
    border: "border-orange-500/30",
    tools: ["Live Ticker", "Mempool Sim"],
    toolIcon: <LineChart size={16} className="text-orange-400" />
  },
  {
    title: "High-Ticket Closing Lab",
    category: "sales",
    level: "Intermediate",
    students: "3.5k",
    status: "Operational",
    description: "Master the $10M framework. Features an AI Voice Roleplay bot for live rebuttal practice.",
    gradient: "from-pink-600/20 to-rose-600/20",
    border: "border-pink-500/30",
    tools: ["Voice AI Bot", "Objection Map"],
    toolIcon: <Mic2 size={16} className="text-pink-400" />
  },
  {
    title: "Fullstack System Architecture",
    category: "dev",
    level: "Advanced",
    students: "2.1k",
    status: "Maintenance",
    description: "Scaling to millions. Laboratory features a VS-Code integrated environment and Stress Tester.",
    gradient: "from-emerald-600/20 to-teal-600/20",
    border: "border-emerald-500/30",
    tools: ["IDE Terminal", "Load Tester"],
    toolIcon: <Terminal size={16} className="text-emerald-400" />
  }
];

export default function SkillLabs() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="space-y-12 pb-20">
      
      {/* ── HEADER & SEARCH ── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
             <div className="p-2 rounded-lg bg-violet-600/20 text-violet-400 border border-violet-500/20">
                <Flame size={18} className="animate-pulse" />
             </div>
             <span className="text-[10px] font-black tracking-[4px] uppercase text-white/50">Knowledge Base</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter text-white">Courses</h1>
          <p className="text-[#6b6490] mt-2 font-medium italic">Multimodal training environments. Not just videos—interactive labs.</p>
        </div>

        <div className="flex items-center gap-4">
           <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4b4563] group-focus-within:text-violet-500 transition-colors" size={16} />
              <input 
                placeholder="Search Intelligence..."
                className="bg-[#0f0a1e] border border-white/5 rounded-2xl py-3 pl-12 pr-6 text-xs font-bold text-white outline-none focus:border-violet-500/40 w-64 lg:w-80 transition-all"
              />
           </div>
           <button className="p-3 bg-[#0f0a1e] border border-white/5 rounded-2xl text-[#6b6490] hover:text-white transition-all">
              <Filter size={18} />
           </button>
        </div>
      </div>

      {/* ── SECTOR TABS ── */}
      <div className="flex items-center gap-2 p-1.5 bg-[#0f0a1e] border border-white/5 rounded-[1.5rem] w-fit overflow-x-auto no-scrollbar">
        {labCategories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
              activeTab === tab.id 
                ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg" 
                : "text-[#6b6490] hover:text-white hover:bg-white/5"
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── LAB GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
        {courses.filter(c => activeTab === "all" || c.category === activeTab).map((course, i) => (
          <div 
            key={i} 
            className={cn(
              "group relative overflow-hidden rounded-[3rem] border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
              course.border,
              "bg-[#0f0a1e]"
            )}
          >
            <div className={cn("absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity", course.gradient)} />
            
            <div className="p-10 relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-white uppercase tracking-tighter">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                     <span className="text-[9px] font-black text-emerald-400 uppercase tracking-tighter">{course.status}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#6b6490]">
                  <Users size={14} />
                  <span className="text-[10px] font-bold">{course.students}</span>
                </div>
              </div>

              <h3 className="text-3xl font-black text-white tracking-tighter mb-4 leading-tight group-hover:text-violet-400 transition-all">
                {course.title}
              </h3>
              
              <p className="text-[#6b6490] font-medium text-sm leading-relaxed mb-6 max-w-md italic">
                "{course.description}"
              </p>

              {/* ── THE INNOVATION: INTEGRATED TOOLS ── */}
              <div className="flex flex-wrap gap-2 mb-8">
                {course.tools.map((tool, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/40 border border-white/5 text-[9px] font-black text-white/60 uppercase tracking-widest group-hover:border-white/20 transition-all">
                    {course.toolIcon}
                    {tool}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0f0a1e] bg-[#1a152e] overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.title + i}`} alt="User" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-[#0f0a1e] bg-violet-600 flex items-center justify-center text-[8px] font-black">
                    +12
                  </div>
                </div>
                
                <button className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 active:scale-95 transition-all">
                  Initialize Lab <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* ── LOCKED / UPCOMING LAB ── */}
        <div className="rounded-[3rem] border border-dashed border-white/10 bg-transparent flex flex-col items-center justify-center p-10 opacity-40 group cursor-not-allowed">
           <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/20 group-hover:text-white/40 transition-colors">
              <Lock size={24} />
           </div>
           <p className="text-xs font-black uppercase tracking-[4px] text-white/40">Expansion Pending</p>
           <p className="text-[10px] font-bold text-[#6b6490] mt-2 italic">Neural Sync Scheduled Q3 2026</p>
        </div>
      </div>
    </div>
  );
}