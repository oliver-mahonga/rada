import { Briefcase, ChevronRight } from "lucide-react";
import { MARKET_OPPORTUNITIES } from "./data";
import { MarketOpportunity } from "./types";

export default function MarketOpportunities() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <Briefcase size={16} className="text-emerald-400" />
          <h2 className="text-xl font-extrabold uppercase tracking-tight">
            Market Opportunities
          </h2>
          <div className="h-px w-16 bg-white/10" />
        </div>
        <button className="group flex items-center gap-1.5 mono text-[9px] font-bold uppercase tracking-[3px] text-emerald-400 hover:text-white transition-all">
          Explore More{" "}
          <ChevronRight
            size={11}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {MARKET_OPPORTUNITIES.map((item: MarketOpportunity, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/5 bg-[#0a0520] p-6 card-glow"
            style={{
              animation: `fadeUp 0.7s ease-out ${0.25 + i * 0.08}s both`,
            }}
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                {item.icon}
              </div>
              <span className="mono text-[9px] px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase tracking-[3px]">
                {item.trend}
              </span>
            </div>

            <h3 className="text-lg font-extrabold uppercase tracking-tight mb-2">
              {item.title}
            </h3>
            <p className="mono text-[10px] text-white/40 mb-4">{item.fit}</p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-white/45">Demand</span>
                <span className="text-white font-semibold">{item.demand}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/45">Income Potential</span>
                <span className="text-white font-semibold">{item.income}</span>
              </div>
            </div>

            <button className="mt-5 w-full py-3 rounded-xl border border-white/10 hover:bg-white hover:text-black transition-all text-[10px] uppercase font-bold tracking-[3px]">
              View Strategy
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}