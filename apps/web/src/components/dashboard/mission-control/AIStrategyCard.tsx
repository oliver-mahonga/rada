import { Brain } from "lucide-react";

type Props = {
  readiness: number;
  completion: number;
  streak: number;
};

export default function AIStrategyCard({
  readiness,
  completion,
  streak,
}: Props) {
  return (
    <section style={{ animation: "fadeUp 0.7s ease-out 0.35s both" }}>
      <div className="flex items-center gap-3 mb-4">
        <Brain size={16} className="text-pink-400" />
        <h2 className="text-xl font-extrabold uppercase tracking-tight">
          AI Strategy
        </h2>
      </div>

      <div className="rounded-[2rem] bg-[#0a0520] border border-white/5 p-6 card-glow">
        <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-5">
          <Brain size={18} />
        </div>

        <h3 className="text-lg font-extrabold uppercase tracking-tight mb-3">
          Best Next Move
        </h3>
        <p className="mono text-[10px] text-white/45 leading-relaxed mb-5">
          Based on your progress, the fastest path is:
          <span className="text-white"> Frontend Engineering + AI Automation</span>.
          This combination gives you the strongest short-term income
          opportunity and long-term leverage.
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/45">Income readiness</span>
            <span className="font-semibold text-emerald-400">{readiness}%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/45">Course completion</span>
            <span className="font-semibold text-violet-400">{completion}%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/45">Current streak</span>
            <span className="font-semibold text-orange-400">{streak} days</span>
          </div>
        </div>

        <button className="w-full py-3.5 rounded-xl bg-white text-black font-bold text-[10px] uppercase tracking-[3px] hover:scale-[1.02] transition-all">
          Generate My Plan
        </button>
      </div>
    </section>
  );
}