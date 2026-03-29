import { BarChart3, Flame, Rocket, Star } from "lucide-react";

type Props = {
  streak: number;
  completion: number;
  readiness: number;
};

export default function SummaryBar({
  streak,
  completion,
  readiness,
}: Props) {
  return (
    <section
      className="rounded-[2rem] bg-[#0a0520] border border-white/5 p-6 md:p-8 card-glow"
      style={{ animation: "fadeUp 0.7s ease-out 0.65s both" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <div className="flex items-center gap-3 mb-3">
            <Flame size={16} className="text-orange-400" />
            <p className="mono text-[9px] uppercase tracking-[3px] text-white/35">
              Streak
            </p>
          </div>
          <h3 className="text-3xl font-extrabold">{streak} days</h3>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <div className="flex items-center gap-3 mb-3">
            <BarChart3 size={16} className="text-violet-400" />
            <p className="mono text-[9px] uppercase tracking-[3px] text-white/35">
              Completion
            </p>
          </div>
          <h3 className="text-3xl font-extrabold">{completion}%</h3>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <div className="flex items-center gap-3 mb-3">
            <Star size={16} className="text-emerald-400" />
            <p className="mono text-[9px] uppercase tracking-[3px] text-white/35">
              Readiness
            </p>
          </div>
          <h3 className="text-3xl font-extrabold">{readiness}%</h3>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">
          <div className="flex items-center gap-3 mb-3">
            <Rocket size={16} className="text-pink-400" />
            <p className="mono text-[9px] uppercase tracking-[3px] text-white/35">
              Status
            </p>
          </div>
          <h3 className="text-xl font-extrabold uppercase tracking-tight">
            Ready To Scale
          </h3>
        </div>
      </div>
    </section>
  );
}