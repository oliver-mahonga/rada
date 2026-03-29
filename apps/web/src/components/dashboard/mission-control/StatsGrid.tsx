import { ArrowUpRight } from "lucide-react";
import { STATS } from "./data";
import { Stat } from "./types";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  xp: number;
};

export default function StatsGrid({ xp }: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {STATS.map((stat: Stat, i) => (
        <div
          key={i}
          className={cn(
            "group relative p-6 md:p-8 rounded-2xl bg-[#0a0520] border transition-all duration-300 cursor-default card-glow overflow-hidden",
            stat.border
          )}
          style={{ animation: `fadeUp 0.6s ease-out ${0.1 * i + 0.2}s both` }}
        >
          <div
            className={cn(
              "absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity",
              stat.bg
            )}
          />
          <div
            className={cn(
              "inline-flex p-2.5 rounded-xl mb-5 border transition-transform group-hover:scale-110",
              stat.bg,
              stat.border,
              stat.color
            )}
          >
            {stat.icon}
          </div>
          <p className="mono text-[8px] font-bold uppercase tracking-[3px] text-white/30 mb-1">
            {stat.label}
          </p>
          <div className="flex items-baseline gap-1">
            <h3
              className={cn(
                "text-4xl font-extrabold tracking-tight stat-num",
                stat.color
              )}
            >
              {i === 1 ? "4.2" : i === 2 ? `${(xp / 1000).toFixed(1)}` : stat.val}
              {stat.suffix}
            </h3>
            <ArrowUpRight
              size={12}
              className={cn(
                "opacity-0 group-hover:opacity-100 transition-all",
                stat.color
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
}