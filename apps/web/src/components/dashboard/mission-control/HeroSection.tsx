import { ArrowUpRight, Globe, Play, Radio, TrendingUp } from "lucide-react";
import { PARTICLES } from "./data";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div className="absolute rounded-full pointer-events-none" style={style} />
  );
}

function SparkLine() {
  const points = [80, 65, 72, 55, 60, 40, 48, 30, 38, 18, 25, 10];
  const max = 90;
  const w = 200;
  const h = 80;
  const path = points
    .map((p, i) => `${(i / (points.length - 1)) * w},${(p / max) * h}`)
    .join(" L ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20 overflow-visible">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d={`M ${path}`}
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
        style={{
          strokeDasharray: 600,
          strokeDashoffset: 0,
          animation: "drawLine 2s ease-out forwards",
        }}
      />
      <circle
        cx={(11 / 11) * w}
        cy={(10 / max) * h}
        r="4"
        fill="#f97316"
        filter="url(#glow)"
      />
    </svg>
  );
}

type HeroSectionProps = {
  mounted: boolean;
  pulseRing: boolean;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
};

export default function HeroSection({
  mounted,
  pulseRing,
  canvasRef,
}: HeroSectionProps) {
  return (
    <section
      className="relative rounded-[2.5rem] overflow-hidden mb-8 hero-bg border"
      style={{
        animation: "borderGlow 4s ease-in-out infinite",
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => (
          <Particle key={i} style={p} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"
          style={{ animation: "scanline 6s linear infinite" }}
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-12 p-10 md:p-16">
        <div
          className="flex-1 max-w-3xl"
          style={{ animation: "fadeUp 0.8s ease-out both" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span
                  className={cn(
                    "absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75",
                    pulseRing ? "animate-ping" : "",
                  )}
                />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="mono text-[9px] font-bold tracking-[3px] text-white/50 uppercase">
                Mission Control Online
              </span>
              <Radio size={10} className="text-violet-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.88] tracking-tight mb-6 uppercase">
            Control Your
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
            >
              Skills. Income.
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400">
              Future.
            </span>
          </h1>

          <p className="mono text-sm text-white/45 mb-10 max-w-2xl leading-relaxed">
            // One dashboard to manage your learning, business direction, income
            opportunities, AI guidance, streaks, tasks, progress, and next
            moves.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="group relative overflow-hidden px-8 py-4 bg-white text-black rounded-2xl font-bold text-[11px] uppercase tracking-[3px] flex items-center gap-3 hover:scale-105 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <span className="relative z-10 flex items-center gap-3">
                Continue Mission <Play size={12} fill="black" />
              </span>
            </button>
            <button className="px-8 py-4 border border-white/10 text-white/70 rounded-2xl font-bold text-[11px] uppercase tracking-[3px] hover:border-violet-500/50 hover:text-white transition-all duration-200 backdrop-blur-sm">
              Explore Opportunities
            </button>
          </div>
        </div>

        <div
          className="flex flex-col gap-6 items-end"
          style={{ animation: "fadeUp 0.8s ease-out 0.15s both" }}
        >
          <div className="relative w-52 h-52 rounded-full bg-[#0a0520] border border-violet-500/20 overflow-hidden shadow-[0_0_60px_rgba(124,58,237,0.15)]">
            <canvas
              ref={canvasRef}
              width={208}
              height={208}
              className="absolute inset-0"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Globe size={16} className="text-violet-400/40 mx-auto mb-1" />
                <p className="mono text-[8px] text-violet-400/60 tracking-widest uppercase">
                  Scanning Next Move
                </p>
              </div>
            </div>
          </div>

          <div className="w-52 bg-white/[0.02] border border-white/5 rounded-2xl p-5 card-glow transition-all">
            <div className="flex justify-between items-center mb-3">
              <p className="mono text-[8px] text-white/30 uppercase tracking-[3px]">
                Growth Velocity
              </p>
              <TrendingUp size={12} className="text-emerald-400" />
            </div>
            <SparkLine />
            <div className="mt-3 flex justify-between items-end">
              <div>
                <p className="text-2xl font-extrabold text-white stat-num">
                  +14.2%
                </p>
                <p className="mono text-[8px] text-emerald-400 uppercase tracking-widest">
                  Weekly Momentum
                </p>
              </div>
              <ArrowUpRight size={14} className="text-emerald-400 mb-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
