"use client";
import { DollarSign, Code, Briefcase, Sparkles } from "lucide-react";

type Track = {
  title: string;
  score: number;
  subtitle: string;
};

export default function IncomeTracks({ tracks }: { tracks?: Track[] }) {
  // Fallback if DB is empty during presentation
  const displayTracks = tracks?.length ? tracks : [
    { title: "SAAS Builder", score: 85, subtitle: "Fullstack Architecture" },
    { title: "AI Consultant", score: 42, subtitle: "LLM Orchestration" }
  ];

  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <DollarSign size={16} className="text-emerald-400" />
        <h2 className="text-xl font-extrabold uppercase tracking-tight">Income Tracks</h2>
      </div>

      <div className="rounded-[2rem] bg-[#0a0520] border border-white/5 overflow-hidden">
        <div className="divide-y divide-white/[0.04]">
          {displayTracks.map((track, i) => (
            <div key={i} className="px-6 py-5 hover:bg-white/[0.02] transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                    {i === 0 ? <Briefcase size={18} /> : <Sparkles size={18} />}
                  </div>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-tight">{track.title}</p>
                    <p className="mono text-[9px] uppercase tracking-[2px] text-white/30 mt-1">{track.subtitle}</p>
                  </div>
                </div>
                <span className="mono text-sm font-bold text-emerald-400">{track.score}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}