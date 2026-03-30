"use client";

import { Brain, Zap } from "lucide-react";

type Props = {
  readiness: number;
  completion: number;
  streak: number;
  aiMove?: string;
};

export default function AIStrategyCard({ readiness, completion, streak, aiMove }: Props) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <Brain size={16} className="text-pink-400" />
        <h2 className="text-xl font-extrabold uppercase tracking-tight">Neural Insight</h2>
      </div>

      <div className="rounded-[2rem] bg-[#0a0520] border border-white/5 p-6 relative overflow-hidden group">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 blur-[50px] rounded-full" />
        
        <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-5 relative z-10">
          <Brain size={18} />
        </div>

        <h3 className="text-lg font-extrabold uppercase tracking-tight mb-3 relative z-10">Neural Trajectory</h3>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 relative z-10">
           <p className="mono text-[10px] text-white/45 leading-relaxed">
            Optimal path based on current skill vector:
            <span className="text-white block mt-2 font-bold text-[11px] uppercase tracking-wider leading-relaxed">
              {aiMove || "Calibrating Neural Link..."}
            </span>
          </p>
        </div>

        <div className="space-y-4 mb-6 relative z-10 px-1">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-[10px] uppercase mono">
              <span className="text-white/45">Market Readiness</span>
              <span className="text-emerald-400 font-bold">{readiness}%</span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500" style={{ width: `${readiness}%` }} />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-[10px] uppercase mono">
              <span className="text-white/45">Lab Completion</span>
              <span className="text-violet-400 font-bold">{completion}%</span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-violet-500" style={{ width: `${completion}%` }} />
            </div>
          </div>
        </div>

        <button className="w-full py-4 rounded-xl bg-white text-black font-extrabold text-[10px] uppercase tracking-[3px] hover:bg-pink-500 hover:text-white transition-all relative z-10">
          Sync Roadmap
        </button>
      </div>
    </section>
  );
}