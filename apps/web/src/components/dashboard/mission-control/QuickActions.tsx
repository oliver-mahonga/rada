import { Gauge } from "lucide-react";
import { QUICK_ACTIONS } from "./data";
import { QuickAction } from "./types";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function QuickActions() {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <Gauge size={16} className="text-violet-400" />
        <h2 className="text-xl font-extrabold uppercase tracking-tight">
          Quick Controls
        </h2>
        <div className="h-px w-16 bg-white/10" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {QUICK_ACTIONS.map((action: QuickAction, i) => (
          <button
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a0520] p-5 text-left hover:border-violet-500/30 transition-all duration-300 card-glow"
            style={{ animation: `fadeUp 0.6s ease-out ${0.08 * i}s both` }}
          >
            <div
              className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br",
                action.color
              )}
              style={{ mixBlendMode: "overlay" }}
            />
            <div className="relative z-10">
              <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
                {action.icon}
              </div>
              <h3 className="font-extrabold uppercase tracking-tight text-sm mb-1">
                {action.title}
              </h3>
              <p className="mono text-[10px] text-white/45 leading-relaxed">
                {action.desc}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}