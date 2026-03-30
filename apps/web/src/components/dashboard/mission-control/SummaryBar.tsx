"use client";
import { BarChart3, Flame, Rocket, Star } from "lucide-react";

export default function SummaryBar({ streak, completion, readiness }: { streak: number, completion: number, readiness: number }) {
  const stats = [
    { label: "Streak", val: `${streak} days`, icon: <Flame className="text-orange-400" /> },
    { label: "Completion", val: `${completion}%`, icon: <BarChart3 className="text-violet-400" /> },
    { label: "Readiness", val: `${readiness}%`, icon: <Star className="text-emerald-400" /> },
    { label: "Status", val: "Ready To Scale", icon: <Rocket className="text-pink-400" /> },
  ];

  return (
    <section className="rounded-[2rem] bg-[#0a0520] border border-white/5 p-6 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
            <div className="flex items-center gap-3 mb-3">
              {s.icon}
              <p className="mono text-[9px] uppercase tracking-[3px] text-white/35">{s.label}</p>
            </div>
            <h3 className={i === 3 ? "text-xl font-extrabold uppercase" : "text-3xl font-extrabold"}>{s.val}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}