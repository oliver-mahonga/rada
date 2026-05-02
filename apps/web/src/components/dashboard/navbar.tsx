"use client";

import { Search, Bell, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
// import PersonaSwitcher from "@/components/navigation/dashboard/PersonaSwitcher";
import { useEffect, useState } from "react";
import PersonaSwitcher from "../navigation/PersonaSwitcher";

export function Navbar({ isCollapsed }: { isCollapsed: boolean }) {
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
  
    const userId = localStorage.getItem("rada_user_id");
    if (userId?.endsWith("0001")) setUserName("dennis");
    if (userId?.endsWith("0002")) setUserName("wendy ");
    if (userId?.endsWith("0003")) setUserName("Oliver Mahonga");
  }, []);

  return (
    <header className={cn(
      "fixed top-0 right-0 h-20 border-b border-white/5 bg-[#050308]/90 backdrop-blur-2xl z-40 px-8 transition-all duration-300 ease-in-out",
      isCollapsed ? "left-20" : "left-72"
    )}>
      <div className="h-full flex items-center justify-between gap-8">
        
        
        <div className="flex items-center gap-4">
          <p className="text-[9px] mono text-white/20 uppercase tracking-[2px] hidden xl:block">Vector Selection:</p>
          <PersonaSwitcher />
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl group transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-[1.02]">
            <Sparkles size={14} className="text-white animate-pulse" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Go Elite</span>
          </button>

          <div className="h-8 w-px bg-white/10" />

          <div className="flex items-center gap-4">
            <button className="p-2.5 text-[#6b6490] hover:text-white transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#050308]" />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-[11px] font-black text-white uppercase tracking-tighter leading-none mb-1">{userName}</p>
                <div className="flex items-center justify-end gap-1">
                  <Zap size={10} className="text-violet-400 fill-violet-400" />
                  <p className="text-[9px] font-black text-violet-400 uppercase tracking-widest">Active Link</p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 overflow-hidden group cursor-pointer hover:border-violet-500/50 transition-all">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`} alt="Avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}