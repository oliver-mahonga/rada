import { ChevronRight, Target } from "lucide-react";
import { DAILY_MISSIONS } from "./data";
import { Mission } from "./types";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DailyMissions() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <Target size={16} className="text-orange-400" />
          <h2 className="text-xl font-extrabold uppercase tracking-tight">
            Daily Missions
          </h2>
          <div className="h-px w-16 bg-white/10" />
        </div>
        <button className="group flex items-center gap-1.5 mono text-[9px] font-bold uppercase tracking-[3px] text-orange-400 hover:text-white transition-all">
          Full Taskboard{" "}
          <ChevronRight
            size={11}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      <div className="rounded-[2rem] bg-[#0a0520] border border-white/5 overflow-hidden card-glow">
        <div className="divide-y divide-white/[0.04]">
          {DAILY_MISSIONS.map((mission: Mission, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-6 py-5 hover:bg-white/[0.02] transition-all"
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "w-10 h-10 rounded-2xl flex items-center justify-center border",
                    mission.done
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      : "bg-white/5 border-white/10 text-white/70"
                  )}
                >
                  {mission.icon}
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-tight">
                    {mission.title}
                  </p>
                  <p className="mono text-[9px] uppercase tracking-[3px] text-white/30 mt-1">
                    Reward {mission.xp}
                  </p>
                </div>
              </div>

              <button
                className={cn(
                  "px-4 py-2 rounded-xl text-[10px] uppercase font-bold tracking-[3px] border transition-all",
                  mission.done
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                    : "border-white/10 hover:bg-white hover:text-black"
                )}
              >
                {mission.done ? "Completed" : "Start"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}