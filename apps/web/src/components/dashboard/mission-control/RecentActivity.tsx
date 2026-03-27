import { CalendarDays } from "lucide-react";
import { RECENT_ACTIVITY } from "./data";
import { ActivityItem } from "./types";

export default function RecentActivity() {
  return (
    <section style={{ animation: "fadeUp 0.7s ease-out 0.48s both" }}>
      <div className="flex items-center gap-3 mb-4">
        <CalendarDays size={16} className="text-blue-400" />
        <h2 className="text-xl font-extrabold uppercase tracking-tight">
          Recent Activity
        </h2>
      </div>

      <div className="rounded-[2rem] bg-[#0a0520] border border-white/5 overflow-hidden card-glow">
        <div className="divide-y divide-white/[0.04]">
          {RECENT_ACTIVITY.map((item: ActivityItem, i) => (
            <div key={i} className="px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-white/90">{item.title}</p>
              </div>
              <span className="mono text-[9px] uppercase tracking-[3px] text-white/30">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}