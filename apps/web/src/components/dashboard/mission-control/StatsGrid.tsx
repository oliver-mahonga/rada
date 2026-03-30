"use client";
import { ArrowUpRight, Shield, Zap, Target, Star } from "lucide-react";

type Props = {
  xp: number;
};

export default function StatsGrid({ xp }: Props) {
  const stats = [
    { label: "Neural Level", val: "14", suffix: "", color: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/20", icon: <Shield size={18} /> },
    { label: "Global Rank", val: "4.2", suffix: "k", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", icon: <Zap size={18} /> },
    { label: "XP Earned", val: (xp / 1000).toFixed(1), suffix: "k", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20", icon: <Star size={18} /> },
    { label: "Active Ops", val: "03", suffix: "", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", icon: <Target size={18} /> },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, i) => (
        <div key={i} className={`group relative p-6 md:p-8 rounded-2xl bg-[#0a0520] border ${stat.border} transition-all duration-300 card-glow overflow-hidden`}>
          <div className={`absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity ${stat.bg}`} />
          <div className={`inline-flex p-2.5 rounded-xl mb-5 border ${stat.bg} ${stat.border} ${stat.color}`}>
            {stat.icon}
          </div>
          <p className="mono text-[8px] font-bold uppercase tracking-[3px] text-white/30 mb-1">{stat.label}</p>
          <div className="flex items-baseline gap-1">
            <h3 className={`text-4xl font-extrabold tracking-tight ${stat.color}`}>
              {stat.val}{stat.suffix}
            </h3>
            <ArrowUpRight size={12} className={`opacity-0 group-hover:opacity-100 transition-all ${stat.color}`} />
          </div>
        </div>
      ))}
    </div>
  );
}