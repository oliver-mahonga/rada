"use client";
import { Briefcase, TrendingUp } from "lucide-react";

export default function MarketOpportunities() {
  const ops = [
    { title: "AI Automation Agency", trend: "+240%", income: "$10k+/mo", demand: "Critical" },
    { title: "Smart Contract Audit", trend: "+115%", income: "$150/hr", demand: "High" }
  ];

  return (
    <section>
      <div className="flex items-center gap-4 mb-4">
        <Briefcase size={16} className="text-emerald-400" />
        <h2 className="text-xl font-extrabold uppercase tracking-tight">Opportunities</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ops.map((item, i) => (
          <div key={i} className="rounded-2xl border border-white/5 bg-[#0a0520] p-6">
            <div className="flex justify-between mb-4">
              <TrendingUp className="text-emerald-400" size={20} />
              <span className="mono text-[9px] px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg">{item.trend}</span>
            </div>
            <h3 className="text-lg font-extrabold uppercase mb-2">{item.title}</h3>
            <div className="flex justify-between text-xs mt-4">
              <span className="text-white/40 uppercase tracking-tighter">Income</span>
              <span className="text-emerald-400 font-bold">{item.income}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}