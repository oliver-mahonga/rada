"use client";
import { Trophy } from "lucide-react";

export default function Leaderboard() {
  const leaders = [
    { name: "MOHONGA", xp: "14,500", rank: 1, isUser: true },
    { name: "WENDY", xp: "12,200", rank: 2, isUser: false },
    { name: "MOZOPS", xp: "10,800", rank: 3, isUser: false }
  ];

  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <Trophy size={16} className="text-yellow-400" />
        <h2 className="text-xl font-extrabold uppercase tracking-tight">Elite Tier</h2>
      </div>
      <div className="rounded-[2rem] bg-[#0a0520] border border-white/5 overflow-hidden">
        {leaders.map((u, i) => (
          <div key={i} className={`flex items-center justify-between px-6 py-4 ${u.isUser ? "bg-violet-600/10 border-l-2 border-violet-500" : ""}`}>
             <div className="flex items-center gap-4">
                <span className="mono text-[10px] text-white/20">{u.rank}</span>
                <p className={`text-xs font-bold uppercase ${u.isUser ? "text-violet-400" : "text-white"}`}>{u.name}</p>
             </div>
             <p className="mono text-xs font-bold text-white">{u.xp} XP</p>
          </div>
        ))}
      </div>
    </section>
  );
}