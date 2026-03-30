"use client";

import { Gauge, Zap, Shield, Terminal, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

const ACTIONS = [
  { id: 'deploy', title: "Deploy Lab", desc: "Push build to staging", icon: <Zap size={20} />, color: "from-violet-600/20", path: "/courses" },
  { id: 'audit', title: "Audit Link", desc: "Run security scan", icon: <Shield size={20} />, color: "from-emerald-600/20", path: "/dashboard" },
  { id: 'terminal', title: "Open Terminal", desc: "Access course CLI", icon: <Terminal size={20} />, color: "from-blue-600/20", path: "/courses" },
  { id: 'sync', title: "Sync Data", desc: "Refresh neural profile", icon: <Settings size={20} />, color: "from-pink-600/20", path: "/dashboard" },
];

export default function QuickActions() {
  const router = useRouter();

  const handleAction = (path: string) => {
    // Add a small "system delay" feel for the demo
    const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-50.mp3");
    audio.volume = 0.2;
    audio.play().catch(() => {}); // Catch if browser blocks autoplay
    router.push(path);
  };

  return (
    <section className="mb-8">
      <div className="flex items-center gap-4 mb-4 px-2">
        <div className="p-1.5 bg-violet-500/10 rounded-md border border-violet-500/20">
            <Gauge size={14} className="text-violet-400" />
        </div>
        <h2 className="text-sm font-black uppercase tracking-[3px] text-white/80">Quick Controls</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {ACTIONS.map((action, i) => (
          <button
            key={i}
            onClick={() => handleAction(action.path)}
            className="group relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-[#0a0520]/60 p-5 text-left hover:border-violet-500/30 transition-all duration-500"
          >
            {/* Hover Background Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${action.color}`} />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white group-hover:scale-110 group-hover:border-violet-500/50 transition-all duration-500">
                {action.icon}
              </div>
              <h3 className="font-black uppercase tracking-widest text-[11px] mb-1 group-hover:text-violet-400 transition-colors">
                {action.title}
              </h3>
              <p className="mono text-[9px] text-white/40 uppercase tracking-tighter">
                {action.desc}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}