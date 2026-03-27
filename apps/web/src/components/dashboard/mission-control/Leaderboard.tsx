import { Trophy } from "lucide-react";
import { LEADERS } from "./data";
import { Leader } from "./types";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Leaderboard() {
  return (
    <section style={{ animation: "fadeUp 0.7s ease-out 0.55s both" }}>
      <div className="flex items-center gap-3 mb-4">
        <Trophy size={16} className="text-yellow-400" />
        <h2 className="text-xl font-extrabold uppercase tracking-tight">
          Elite Tier
        </h2>
      </div>

      <div className="rounded-[2rem] bg-[#0a0520] border border-white/5 overflow-hidden card-glow">
        <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
          <div>
            <p className="mono text-[9px] font-bold text-white/60 uppercase tracking-[3px]">
              Season 04 Arena
            </p>
            <p className="mono text-[8px] text-emerald-400 tracking-widest uppercase mt-0.5">
              ● Global Protocol Active
            </p>
          </div>
          <div className="p-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
            <Trophy size={16} className="text-yellow-400" />
          </div>
        </div>

        <div className="divide-y divide-white/[0.04]">
          {LEADERS.map((user: Leader, i) => (
            <div
              key={i}
              className={cn(
                "flex items-center justify-between px-6 py-4 transition-all",
                user.isUser
                  ? "bg-violet-600/10 border-l-2 border-violet-500"
                  : "hover:bg-white/[0.02]"
              )}
            >
              <div className="flex items-center gap-4">
                <span className="mono text-[10px] font-bold text-white/20 w-5 shrink-0">
                  {String(user.rank).padStart(2, "0")}
                </span>
                <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/10 shrink-0">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.seed}`}
                    alt={user.name}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <p
                    className={cn(
                      "text-xs font-bold uppercase tracking-tight",
                      user.isUser ? "text-violet-400" : "text-white"
                    )}
                  >
                    {user.name}
                  </p>
                  <p className="mono text-[8px] text-white/20 uppercase tracking-widest">
                    Active Operator
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="mono text-xs font-bold text-white">{user.xp}</p>
                <p className="mono text-[8px] font-bold text-emerald-400 uppercase">
                  ↑ {user.delta}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-5">
          <button className="w-full py-3.5 border border-white/5 rounded-xl mono text-[9px] font-bold uppercase tracking-[4px] text-white/20 hover:text-white hover:border-violet-500/30 transition-all">
            Full Global Intel
          </button>
        </div>
      </div>
    </section>
  );
}