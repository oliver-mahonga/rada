"use client";

import { ChevronRight, Target, CheckCircle2, Zap, Cpu, Globe } from "lucide-react";

type Mission = {
  id: string;
  title: string;
  xp: number;
  isDone: boolean;
  icon?: string;
};

export default function DailyMissions({ missions }: { missions: Mission[] }) {
  // Helper to map string icons from DB to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap size={18} />;
      case 'Cpu': return <Cpu size={18} />;
      default: return <Globe size={18} />;
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <Target size={16} className="text-orange-400" />
          <h2 className="text-xl font-extrabold uppercase tracking-tight">Daily Missions</h2>
          <div className="h-px w-16 bg-white/10" />
        </div>
      </div>

      <div className="rounded-[2rem] bg-[#0a0520] border border-white/5 overflow-hidden">
        <div className="divide-y divide-white/[0.04]">
          {missions.length > 0 ? missions.map((mission) => (
            <div key={mission.id} className="flex items-center justify-between px-6 py-5 hover:bg-white/[0.02] transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${mission.isDone ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-white/5 border-white/10 text-white/70"}`}>
                  {mission.isDone ? <CheckCircle2 size={18} /> : getIcon(mission.icon || '')}
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-tight">{mission.title}</p>
                  <p className="mono text-[9px] uppercase tracking-[3px] text-white/30 mt-1">Reward {mission.xp} XP</p>
                </div>
              </div>
              <button className={`px-4 py-2 rounded-xl text-[10px] uppercase font-bold tracking-[3px] border transition-all ${mission.isDone ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "border-white/10 hover:bg-white hover:text-black"}`}>
                {mission.isDone ? "Completed" : "Start"}
              </button>
            </div>
          )) : (
            <div className="p-10 text-center mono text-[10px] text-white/20 uppercase tracking-widest">No active missions found</div>
          )}
        </div>
      </div>
    </section>
  );
}