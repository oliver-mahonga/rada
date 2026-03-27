"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Zap,
  ChevronRight,
  Layers,
  Binary,
  Network,
  Lock,
  Braces,
  Sparkles,
  BookOpen,
  Users,
  TrendingUp,
  Cpu,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────
   TAILWIND CONFIG ADDITIONS — paste into tailwind.config.js:

   theme: {
     extend: {
       fontFamily: {
         display: ['"DM Serif Display"', 'serif'],
         mono:    ['"JetBrains Mono"', 'monospace'],
         sans:    ['Sora', 'sans-serif'],
       },
     },
   }
────────────────────────────────────────────────────────────── */

/* ── Typed text hook ── */
function useTyped(strings: string[], speed = 65, pause = 1900) {
  const [display, setDisplay] = useState("");
  const [si, setSi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = strings[si];
    const timer = setTimeout(() => {
      if (!del) {
        setDisplay(cur.slice(0, ci + 1));
        if (ci + 1 === cur.length) setTimeout(() => setDel(true), pause);
        else setCi((c) => c + 1);
      } else {
        setDisplay(cur.slice(0, ci - 1));
        if (ci - 1 === 0) { setDel(false); setSi((s) => (s + 1) % strings.length); setCi(0); }
        else setCi((c) => c - 1);
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [ci, del, si, strings, speed, pause]);

  return display;
}

/* ── Counter hook ── */
function useCounter(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let v = 0;
        const step = target / (duration / 16);
        const t = setInterval(() => {
          v += step;
          if (v >= target) { setVal(target); clearInterval(t); } else setVal(Math.floor(v));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);

  return { val, ref };
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { val, ref } = useCounter(target);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export default function LandingPage() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const typed = useTyped(["Distributed Systems", "ML Engineering", "Cloud Architecture", "Blockchain Protocols", "Systems Design"]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorRef.current && Object.assign(cursorRef.current.style, { left: e.clientX + "px", top: e.clientY + "px" });
      ringRef.current   && Object.assign(ringRef.current.style,   { left: e.clientX + "px", top: e.clientY + "px" });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const TICKER_ITEMS = [
    "Neural Pathfinding","·","Microservices","·","System Design","·","ML Pipelines","·",
    "Edge Computing","·","Zero-Trust Security","·","Distributed Ledger","·","Kubernetes","·","WebAssembly","·",
    "Neural Pathfinding","·","Microservices","·","System Design","·","ML Pipelines","·",
    "Edge Computing","·","Zero-Trust Security","·","Distributed Ledger","·","Kubernetes","·","WebAssembly","·",
  ];

  return (
    <>
      {/* ── Fonts + keyframes (minimal global injection) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;500;700&family=Sora:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        body { cursor: none; font-family: 'Sora', sans-serif; }
        .font-display { font-family: 'DM Serif Display', serif; }
        .font-code    { font-family: 'JetBrains Mono', monospace; }

        @keyframes float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        @keyframes orb      { 0%,100%{transform:translate(0,0)scale(1)} 33%{transform:translate(40px,-30px)scale(1.08)} 66%{transform:translate(-30px,20px)scale(.94)} }
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes ticker   { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes fadeUp   { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes spinCW   { from{transform:translate(-50%,-50%)rotate(0deg)} to{transform:translate(-50%,-50%)rotate(360deg)} }
        @keyframes spinCCW  { from{transform:translate(-50%,-50%)rotate(0deg)} to{transform:translate(-50%,-50%)rotate(-360deg)} }
        @keyframes scan     { 0%{top:-10%} 100%{top:110%} }

        .anim-float   { animation: float  6s ease-in-out infinite; }
        .anim-orb0    { animation: orb   10s ease-in-out infinite; }
        .anim-orb1    { animation: orb   10s ease-in-out -4s infinite; }
        .anim-orb2    { animation: orb   10s ease-in-out -7s infinite; }
        .anim-blink   { animation: blink  1s step-end infinite; }
        .anim-ticker  { animation: ticker 28s linear infinite; }
        .anim-spinCW  { animation: spinCW  30s linear infinite; }
        .anim-spinCCW { animation: spinCCW 50s linear infinite; }
        .anim-f1 { animation: fadeUp .7s cubic-bezier(.16,1,.3,1) .0s both; }
        .anim-f2 { animation: fadeUp .7s cubic-bezier(.16,1,.3,1) .18s both; }
        .anim-f3 { animation: fadeUp .7s cubic-bezier(.16,1,.3,1) .34s both; }
        .anim-f4 { animation: fadeUp .7s cubic-bezier(.16,1,.3,1) .50s both; }
        .anim-f5 { animation: fadeUp .7s cubic-bezier(.16,1,.3,1) .66s both; }

        .grad-text {
          background: linear-gradient(135deg, #a78bfa 0%, #c084fc 45%, #22d3ee 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .grad-white {
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        /* Button sweep shine */
        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(135deg, rgba(255,255,255,.22), transparent);
          transform: translateX(-100%); transition: transform .6s;
        }
        .btn-shine:hover::before { transform: translateX(100%); }

        /* Scan-line on terminal */
        .scanwrap { position: relative; overflow: hidden; }
        .scanwrap::after {
          content:''; position:absolute; left:0; right:0; height:2px;
          background: linear-gradient(90deg, transparent, rgba(124,58,237,.55), transparent);
          animation: scan 3.5s linear infinite;
        }

        /* Glass card hover */
        .glass-card {
          background: rgba(255,255,255,.018);
          border: 1px solid rgba(255,255,255,.06);
          transition: border-color .3s, transform .3s, box-shadow .3s;
        }
        .glass-card:hover {
          border-color: rgba(139,92,246,.4);
          transform: translateY(-4px);
          box-shadow: 0 0 40px -10px rgba(124,58,237,.28);
        }

        /* Noise texture */
        .noise-overlay::before {
          content:''; position:fixed; inset:0; z-index:1; pointer-events:none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 200px 200px; opacity: .32;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #04030c; }
        ::-webkit-scrollbar-thumb { background: #7c3aed; border-radius: 4px; }
      `}</style>

      {/* ── Custom cursor ── */}
      <div ref={cursorRef} className="fixed z-[9999] pointer-events-none w-3 h-3 rounded-full bg-violet-300 -translate-x-1/2 -translate-y-1/2 mix-blend-screen" style={{ top: 0, left: 0 }} />
      <div ref={ringRef}   className="fixed z-[9998] pointer-events-none w-9 h-9 rounded-full border border-violet-300/40 -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-150" style={{ top: 0, left: 0 }} />

      <div className="noise-overlay min-h-screen bg-[#04030c] text-[#f0ecff] overflow-x-hidden selection:bg-violet-500/30">

        {/* ── Fixed background ── */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Orbs */}
          <div className="anim-orb0 absolute w-[580px] h-[580px] -top-[8%] -left-[4%] rounded-full bg-violet-700/[.11] blur-[90px]" />
          <div className="anim-orb1 absolute w-[480px] h-[480px] bottom-[8%] -right-[4%] rounded-full bg-fuchsia-700/[.07] blur-[90px]" />
          <div className="anim-orb2 absolute w-[280px] h-[280px] top-[42%] left-[42%] rounded-full bg-cyan-500/[.05] blur-[80px]" />
          {/* Grid */}
          <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.016)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.016)_1px,transparent_1px)] [background-size:64px_64px]" />
          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_35%,#04030c_100%)]" />
        </div>

        {/* ── Ticker ── */}
        <div className="relative z-10 border-b border-white/[.05] bg-[#04030c]/80 backdrop-blur-md py-2.5 overflow-hidden">
          <div className="flex overflow-hidden whitespace-nowrap">
            <div className="anim-ticker flex shrink-0 items-center">
              {TICKER_ITEMS.map((item, i) => (
                <span key={i} className={`font-code text-[10px] tracking-[3px] uppercase mr-8 ${item === "·" ? "text-violet-500" : "text-white/10"}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Navigation ── */}
        <nav className="sticky top-0 z-50 flex justify-between items-center px-8 lg:px-12 py-5 border-b border-white/[.05] bg-[#04030c]/75 backdrop-blur-2xl">
          {/* Logo */}
          <div className="flex items-center gap-3.5 shrink-0">
            <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-[0_0_24px_rgba(124,58,237,.4)]">
              <span className="font-display text-[22px] italic">R</span>
            </div>
            <div>
              <div className="font-code text-[13px] font-bold tracking-[4px] uppercase">Rada</div>
              <div className="font-code text-[8px] tracking-[3px] uppercase text-white/20">University System</div>
            </div>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-9">
            {["Curriculum", "Neural Engine", "Network", "Careers"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="font-code text-[10px] tracking-[3px] uppercase text-white/35 hover:text-white transition-colors cursor-none relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-violet-300 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
                {l}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="cursor-none px-5 py-2.5 rounded-full border border-white/[.08] font-code text-[10px] tracking-[2px] uppercase text-white/35 hover:border-violet-500/40 hover:text-white hover:bg-violet-500/[.08] transition-all">
              Login
            </Link>
            <Link href="/signup" className="btn-shine cursor-none flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 border border-violet-300/20 font-code text-[10px] tracking-[2px] uppercase text-white shadow-[0_0_28px_rgba(124,58,237,.35)] hover:scale-105 hover:shadow-[0_0_44px_rgba(124,58,237,.55)] active:scale-95 transition-all">
              Enroll Now <ChevronRight size={13} />
            </Link>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 pt-28 pb-20 text-center">

          {/* Badge */}
          <div className="anim-f1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/35 bg-violet-500/[.08] font-code text-[9px] tracking-[2.5px] uppercase text-violet-300 mb-8">
            <Zap size={11} /> Enrollment Phase 0.1 — Limited Access
          </div>

          {/* Headline */}
          <h1 className="anim-f2 font-display font-normal leading-[.9] tracking-tight text-[clamp(50px,8vw,94px)] mb-6">
            The Future of<br />
            <em className="grad-text italic">Cognitive Learning</em>
          </h1>

          {/* Sub */}
          <p className="anim-f3 text-base font-light leading-[1.8] text-white/40 max-w-xl mx-auto mb-4">
            Rada University is a high-frequency intelligence network built for engineers.
            Neural recommendation engines architect your professional trajectory in real-time.
          </p>

          {/* Typed line */}
          <div className="anim-f4 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/[.06] bg-white/[.02] mb-12">
            <span className="font-code text-xs text-white/25">Currently mastering:</span>
            <span className="font-code text-xs text-violet-300 min-w-[200px] text-left">
              {typed}
              <span className="anim-blink inline-block w-2 h-3.5 bg-violet-300 align-text-bottom ml-0.5" />
            </span>
          </div>

          {/* CTA row */}
          <div className="anim-f5 flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/signup" className="btn-shine cursor-none inline-flex items-center justify-center gap-2.5 px-10 py-[18px] rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 border border-violet-300/20 font-code text-xs font-bold tracking-[3px] uppercase text-white shadow-[0_0_30px_rgba(124,58,237,.4)] hover:scale-105 hover:shadow-[0_0_52px_rgba(124,58,237,.6)] active:scale-95 transition-all">
              Establish Profile <ArrowRight size={15} />
            </Link>
            <Link href="#curriculum" className="cursor-none inline-flex items-center justify-center gap-2 px-8 py-[18px] rounded-full border border-white/[.08] font-code text-xs tracking-[2px] uppercase text-white/40 hover:border-violet-500/40 hover:text-white hover:bg-violet-500/[.08] transition-all">
              View Curriculum <ChevronRight size={15} />
            </Link>
          </div>

          {/* Social proof counters */}
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[
              { label: "Active Learners", val: 4200, suffix: "+" },
              { label: "Modules Live",    val: 87,   suffix: "" },
              { label: "Hire Rate",       val: 94,   suffix: "%" },
            ].map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="w-px h-8 bg-white/[.06]" />}
                <div className="text-center">
                  <div className="font-display text-[30px] leading-none grad-white">
                    <Counter target={s.val} suffix={s.suffix} />
                  </div>
                  <div className="font-code text-[9px] tracking-[2px] uppercase text-white/20 mt-1">{s.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ── Terminal + Copy ── */}
        <section id="neural-engine" className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Terminal card */}
            <div className="scanwrap anim-float rounded-2xl border border-violet-500/30 bg-[#020210] font-code text-xs overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[.06] bg-white/[.03]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="ml-2 text-violet-300/40 text-[10px]">rada — neural-engine v2.4.1</span>
              </div>
              <div className="p-5 leading-[1.9] space-y-px">
                <p className="text-violet-300/35"># Bootstrapping Rada Intelligence Layer...</p>
                <p><span className="text-violet-400">$</span> <span className="text-white/60"> rada init --profile Oliver_Mahonga</span></p>
                <p className="text-emerald-400">✓ GitHub corpus loaded (2,340 commits)</p>
                <p className="text-emerald-400">✓ Stack fingerprint: NestJS · Python · PostgreSQL</p>
                <p><span className="text-violet-400">$</span> <span className="text-white/60"> rada recommend --depth=3</span></p>
                <p className="text-cyan-300">→ Path [1]: Distributed Systems Architecture</p>
                <p className="text-cyan-300 pl-5">↳ Module 1: CAP Theorem in Practice</p>
                <p className="text-cyan-300 pl-5">↳ Module 2: Consensus Algorithms</p>
                <p className="text-pink-400">→ Path [2]: ML Inference at Scale <span className="opacity-40">[Beta]</span></p>
                <p><span className="text-violet-400">$</span> <span className="text-white/60"> rada enroll --path=1</span></p>
                <p className="text-emerald-400">✓ Enrolled. Estimated mastery: 14 weeks.</p>
                <p className="text-violet-300/35">Streaming session metrics...
                  <span className="anim-blink inline-block w-2 h-3.5 bg-violet-300 align-text-bottom ml-0.5" />
                </p>
              </div>
            </div>

            {/* Feature copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/35 bg-violet-500/[.08] font-code text-[9px] tracking-[2.5px] uppercase text-violet-300 mb-6">
                <Cpu size={11} /> Neural Engine v2
              </div>
              <h2 className="font-display font-normal text-[clamp(30px,4vw,46px)] leading-[1.1] mb-5">
                Your career path,<br />
                <span className="grad-text">computed in real-time.</span>
              </h2>
              <p className="text-white/40 text-sm leading-[1.8] mb-8">
                Our recommendation engine scans your GitHub activity, contribution patterns,
                and system architecture to generate a personalized learning trajectory with zero ambiguity.
              </p>

              {/* Steps */}
              {[
                { Icon: Binary,     label: "Profile Analysis", desc: "Fingerprints your stack and contribution patterns" },
                { Icon: Network,    label: "Path Generation",  desc: "Maps 3 optimal trajectories ranked by ROI" },
                { Icon: TrendingUp, label: "Adaptive Pacing",  desc: "Re-calibrates weekly based on your velocity" },
              ].map(({ Icon, label, desc }, idx, arr) => (
                <div key={label} className="relative pl-8 mb-7">
                  {idx < arr.length - 1 && (
                    <div className="absolute left-[9px] top-6 bottom-[-20px] w-px bg-gradient-to-b from-violet-500/40 to-transparent" />
                  )}
                  <div className="absolute left-0 top-1 w-[19px] h-[19px] rounded-full border border-violet-500/40 bg-violet-500/20 flex items-center justify-center">
                    <Icon size={10} className="text-violet-300" />
                  </div>
                  <div className="text-[13px] font-semibold mb-1">{label}</div>
                  <div className="text-xs text-white/25">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bento Grid ── */}
        <section id="curriculum" className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 pb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/35 bg-violet-500/[.08] font-code text-[9px] tracking-[2.5px] uppercase text-violet-300 mb-5">
              <BookOpen size={11} /> Curriculum
            </div>
            <h2 className="font-display font-normal text-[clamp(30px,4vw,50px)] leading-[1.1]">
              Built for the <em className="grad-text italic">top 1%</em><br />of engineers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Big card */}
            <div className="glass-card md:col-span-2 relative overflow-hidden rounded-[24px] p-10 [background-image:linear-gradient(rgba(255,255,255,.013)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.013)_1px,transparent_1px)] [background-size:40px_40px]">
              <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-violet-600/[.07] blur-[60px] pointer-events-none" />
              <div className="w-[52px] h-[52px] rounded-[14px] border border-violet-500/30 bg-violet-500/[.14] flex items-center justify-center mb-5">
                <Layers size={24} className="text-violet-300" />
              </div>
              <h3 className="font-display font-normal text-[32px] mb-3">Neural Pathfinding Engine</h3>
              <p className="text-white/40 text-sm leading-[1.8] max-w-md mb-7">
                Every module recommendation is generated from a live analysis of your actual codebase.
                No self-reported skill levels, no guesswork.
              </p>
              <div className="flex gap-2.5 flex-wrap">
                {["Python Engine","NestJS Core","Graph Neural Net","Vector Search"].map((t) => (
                  <span key={t} className="px-3.5 py-1.5 rounded-full border border-white/[.06] bg-white/[.03] font-code text-[9px] tracking-[2px] uppercase text-white/25">{t}</span>
                ))}
              </div>
            </div>

            {/* Secure */}
            <div className="glass-card relative overflow-hidden rounded-[24px] p-10">
              <div className="w-[52px] h-[52px] rounded-[14px] border border-fuchsia-500/30 bg-fuchsia-500/[.10] flex items-center justify-center mb-5">
                <Lock size={22} className="text-fuchsia-400" />
              </div>
              <h3 className="font-display font-normal text-2xl mb-3">Secure Core</h3>
              <p className="text-white/40 text-sm leading-[1.7]">256-bit session encryption. Zero data sold. Your trajectory is yours.</p>
            </div>

            {/* Network */}
            <div className="glass-card relative overflow-hidden rounded-[24px] p-10">
              <div className="w-[52px] h-[52px] rounded-[14px] border border-cyan-500/25 bg-cyan-500/[.08] flex items-center justify-center mb-5">
                <Globe size={22} className="text-cyan-400" />
              </div>
              <h3 className="font-display font-normal text-2xl mb-3">Elite Network</h3>
              <p className="text-white/40 text-sm leading-[1.7]">Connect with engineers from Meru University and top-tier tech companies.</p>
            </div>

            {/* Dev First */}
            <div className="glass-card relative overflow-hidden rounded-[24px] p-10">
              <div className="w-[52px] h-[52px] rounded-[14px] border border-emerald-500/25 bg-emerald-500/[.07] flex items-center justify-center mb-5">
                <Braces size={22} className="text-emerald-400" />
              </div>
              <h3 className="font-display font-normal text-2xl mb-3">Dev-First UX</h3>
              <p className="text-white/40 text-sm leading-[1.7]">Full CLI navigation, API hooks, and keyboard shortcuts baked in from day one.</p>
            </div>

            {/* AI Grading — wide */}
            <div className="glass-card md:col-span-2 relative overflow-hidden rounded-[24px] p-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <div className="w-[52px] h-[52px] rounded-[14px] border border-amber-500/25 bg-amber-500/[.07] flex items-center justify-center mb-5">
                  <Sparkles size={22} className="text-amber-400" />
                </div>
                <h3 className="font-display font-normal text-3xl mb-3">AI-Powered Grading</h3>
                <p className="text-white/40 text-sm leading-[1.8] max-w-sm">
                  Submit live code. Our LLM evaluator reads intent, not just test coverage. Feedback in under 30 seconds.
                </p>
              </div>
              <div className="shrink-0 w-44 p-5 rounded-2xl border border-amber-500/20 bg-amber-500/[.04] font-code text-xs">
                <div className="text-amber-400/60 mb-3">// Grade</div>
                <div className="text-5xl font-bold leading-none bg-gradient-to-br from-amber-400 to-amber-500 bg-clip-text text-transparent">A+</div>
                <div className="text-white/20 text-[10px] mt-3">Architecture: Excellent</div>
                <div className="text-white/20 text-[10px]">Scalability: 9.4/10</div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Stats Row ── */}
        <section id="network" className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { Icon: Users,      label: "Active Engineers",       val: 4200, suffix: "+",   accent: "text-violet-300",  border: "border-violet-500/20", bg: "bg-violet-500/[.06]" },
              { Icon: BookOpen,   label: "Modules Available",      val: 87,   suffix: "",    accent: "text-fuchsia-400", border: "border-fuchsia-500/20",bg: "bg-fuchsia-500/[.06]" },
              { Icon: TrendingUp, label: "Hire Rate",              val: 94,   suffix: "%",   accent: "text-cyan-400",    border: "border-cyan-500/20",   bg: "bg-cyan-500/[.06]" },
              { Icon: Zap,        label: "Avg Completion (Weeks)", val: 14,   suffix: "wks", accent: "text-amber-400",   border: "border-amber-500/20",  bg: "bg-amber-500/[.06]" },
            ].map(({ Icon, label, val, suffix, accent, border, bg }) => (
              <div key={label} className={`p-7 rounded-[20px] border ${border} ${bg} hover:-translate-y-1 transition-transform duration-300`}>
                <Icon size={20} className={`${accent} mb-4`} />
                <div className="font-display text-[40px] leading-none grad-white mb-2">
                  <Counter target={val} suffix={suffix} />
                </div>
                <div className="font-code text-[9px] tracking-[2px] uppercase text-white/20">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 pb-28">
          <div className="relative overflow-hidden rounded-[32px] border border-violet-500/30 p-16 md:p-24 text-center bg-[radial-gradient(ellipse_at_60%_0%,rgba(124,58,237,.13)_0%,rgba(79,70,229,.06)_50%,rgba(192,38,211,.07)_100%)]">
            {/* Spinning rings */}
            <div className="anim-spinCW  absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full border border-violet-500/[.07] pointer-events-none" />
            <div className="anim-spinCCW absolute top-1/2 left-1/2 w-[820px] h-[820px] rounded-full border border-violet-500/[.035] pointer-events-none" />

            <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/35 bg-violet-500/[.08] font-code text-[9px] tracking-[2.5px] uppercase text-violet-300 mb-6">
              <Zap size={11} /> Spots are limited
            </div>
            <h2 className="relative font-display font-normal text-[clamp(30px,5vw,58px)] leading-[1.1] mb-5">
              Ready to engineer<br />
              <span className="grad-text">your future?</span>
            </h2>
            <p className="relative text-white/40 text-sm leading-[1.8] max-w-md mx-auto mb-10">
              Join 4,200+ engineers building the systems that matter.
              Your path is waiting — claim it before Phase 0.1 closes.
            </p>
            <Link href="/signup" className="btn-shine cursor-none relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 border border-violet-300/20 font-code text-xs font-bold tracking-[3px] uppercase text-white shadow-[0_0_30px_rgba(124,58,237,.4)] hover:scale-105 hover:shadow-[0_0_60px_rgba(124,58,237,.65)] active:scale-95 transition-all">
              Establish Your Profile <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="relative z-10 border-t border-white/[.05] px-8 lg:px-12 py-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
              <span className="font-display text-lg italic">R</span>
            </div>
            <span className="font-code text-[9px] tracking-[3px] uppercase text-white/20">
              © 2026 Rada University · Protocol Alpha
            </span>
          </div>
          <div className="flex gap-8">
            {["Privacy", "Terms", "GitHub", "Docs"].map((l) => (
              <a key={l} href="#" className="font-code text-[9px] tracking-[2px] uppercase text-white/20 hover:text-white transition-colors cursor-none">
                {l}
              </a>
            ))}
          </div>
        </footer>

      </div>
    </>
  );
}