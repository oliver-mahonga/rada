"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, FlaskConical, Users2, Trophy, Cpu, Wallet,
  Settings, ChevronLeft, ChevronRight, NotebookPen, 
  Terminal, ShieldAlert, Sparkles
} from "lucide-react";

const navigation = [
  { name: "Mission Control", href: "/dashboard", icon: LayoutDashboard, color: "text-blue-400" },
  { name: "Skill Labs", href: "/courses", icon: FlaskConical, color: "text-emerald-400" },
  { name: "Wealth Portals", href: "/finance", icon: Wallet, color: "text-amber-400" },
  { name: "Connection Hub", href: "/community", icon: Users2, color: "text-purple-400" },
  { name: "Neural Link", href: "/ai-mentor", icon: Cpu, color: "text-rose-400" },
  { name: "Global Arena", href: "/leaderboard", icon: Trophy, color: "text-yellow-400" },
];

export function Sidebar({ isCollapsed, setIsCollapsed }: { isCollapsed: boolean, setIsCollapsed: (v: boolean) => void }) {
  const pathname = usePathname();

  return (
    <div className={cn(
      "fixed left-0 top-0 h-screen bg-[#050308] border-r border-white/5 z-50 transition-all duration-300 ease-in-out flex flex-col",
      isCollapsed ? "w-20" : "w-72"
    )}>
      
      {/* ── COLLAPSE TOGGLE ── */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-24 w-6 h-6 bg-violet-600 rounded-full flex items-center justify-center border border-white/20 hover:scale-110 transition-transform z-[60] shadow-[0_0_15px_rgba(139,92,246,0.5)]"
      >
        {isCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>

      {/* ── LOGO ── */}
      <div className={cn("p-6 flex items-center gap-3 transition-all", isCollapsed && "justify-center px-0")}>
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-900 flex items-center justify-center shrink-0 border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
          <span className="font-black text-2xl text-white tracking-tighter">R</span>
        </div>
        {!isCollapsed && (
          <div className="animate-in fade-in slide-in-from-left-2 duration-500">
            <h1 className="text-sm font-black tracking-[4px] text-white uppercase">Rada</h1>
            <p className="text-[9px] font-bold text-violet-400 tracking-[1px] uppercase opacity-70">University</p>
          </div>
        )}
      </div>

      {/* ── NAVIGATION ── */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div className={cn(
                "relative flex items-center rounded-xl transition-all duration-200 group",
                isCollapsed ? "justify-center p-3" : "px-4 py-3 gap-4",
                isActive ? "bg-violet-600/10 border border-violet-500/20" : "hover:bg-white/5 border border-transparent"
              )}>
                <item.icon size={20} className={cn(isActive ? item.color : "text-[#6b6490] group-hover:text-white")} />
                {!isCollapsed && (
                  <span className={cn("text-[11px] font-black uppercase tracking-[1.5px]", isActive ? "text-white" : "text-[#6b6490]")}>
                    {item.name}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* ── INNOVATIVE FEATURE: NEURAL NOTES ── */}
      <div className="p-4 mt-auto border-t border-white/5 bg-black/20">
        {!isCollapsed ? (
          <div className="space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <NotebookPen size={14} className="text-violet-400" />
                  <span className="text-[10px] font-black text-white/50 uppercase tracking-widest">Neural Notes</span>
               </div>
               <Settings size={14} className="text-white/20 hover:text-white cursor-pointer" />
            </div>
            <textarea 
              className="w-full bg-white/5 border border-white/5 rounded-xl p-3 text-[11px] font-medium text-white/70 placeholder:text-white/10 outline-none focus:border-violet-500/30 h-24 resize-none transition-all"
              placeholder="Jot down quick strategies or BTC levels..."
            />
            <div className="flex items-center gap-2 px-2">
                <Terminal size={12} className="text-emerald-500" />
                <span className="text-[9px] font-bold text-emerald-500/70 uppercase">Local System: Stable</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6 py-2 text-[#6b6490]">
            <NotebookPen size={20} className="hover:text-violet-400 cursor-pointer" />
            <Settings size={20} className="hover:text-white cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
}