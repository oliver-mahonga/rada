"use client";

import { useState, useEffect, useRef } from "react";
import {
  Activity, BrainCircuit, Command, Send,
  Sparkles, Terminal, Fingerprint, Cpu,
  ChevronRight, Zap, X, RotateCcw,
} from "lucide-react";

/* ── tiny cn helper (no external dep needed) ── */
const cn = (...cls: (string | false | undefined)[]) => cls.filter(Boolean).join(" ");

/* ── Message type ── */
type Msg = { role: "user" | "ai"; text: string; ts: string };

function timestamp() {
  return new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
}

const AI_REPLIES = [
  "Analyzing your query across distributed nodes… The optimal path forward involves decomposing the problem into three discrete layers.",
  "Vector search complete. I've identified 14 high-confidence matches in the knowledge corpus relevant to your architecture question.",
  "Interesting approach. Let me model the trade-offs: latency vs. throughput, consistency vs. availability. Here's what the data suggests…",
  "Pattern recognized. This mirrors a known anti-pattern in distributed systems. I'd recommend revisiting your consensus strategy.",
  "Processing complete. The semantic mesh has surfaced three adjacent concepts you may want to explore next.",
];

export default function AIMentorPage() {
  const [input, setInput]       = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [processing, setProc]   = useState(false);
  const [synapses, setSynapses] = useState([72, 58, 41, 88]);
  const bottomRef               = useRef<HTMLDivElement>(null);

  /* Animate processing bars */
  useEffect(() => {
    const id = setInterval(() => {
      setSynapses(prev => prev.map(v => Math.max(20, Math.min(98, v + (Math.random() * 20 - 10)))));
    }, 1600);
    return () => clearInterval(id);
  }, []);

  /* Auto-scroll */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send() {
    if (!input.trim() || processing) return;
    const userMsg: Msg = { role: "user", text: input.trim(), ts: timestamp() };
    setMessages(p => [...p, userMsg]);
    setInput("");
    setProc(true);
    setTimeout(() => {
      const aiMsg: Msg = {
        role: "ai",
        text: AI_REPLIES[Math.floor(Math.random() * AI_REPLIES.length)],
        ts: timestamp(),
      };
      setMessages(p => [...p, aiMsg]);
      setProc(false);
    }, 1800 + Math.random() * 800);
  }

  const CHAINS = [
    { label: "Logic Core",    color: "from-violet-600 to-indigo-500" },
    { label: "Semantic Mesh", color: "from-fuchsia-600 to-violet-500" },
    { label: "Vector Search", color: "from-cyan-500 to-blue-500" },
    { label: "Memory Graph",  color: "from-emerald-500 to-teal-500" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;500;700&family=Sora:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'DM Serif Display', serif; }
        .font-code    { font-family: 'JetBrains Mono', monospace; }
        body          { font-family: 'Sora', sans-serif; }

        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse-ring  { 0%{transform:scale(1);opacity:.6} 100%{transform:scale(1.6);opacity:0} }
        @keyframes spin-dash   { to{stroke-dashoffset:-60} }
        @keyframes glow-beat   { 0%,100%{box-shadow:0 0 20px rgba(124,58,237,.3)} 50%{box-shadow:0 0 50px rgba(124,58,237,.7)} }
        @keyframes dot-bounce  { 0%,80%,100%{transform:scaleY(0.4)} 40%{transform:scaleY(1)} }
        @keyframes think-spin  { to{transform:rotate(360deg)} }

        .msg-enter   { animation: fadeSlideUp .35s cubic-bezier(.16,1,.3,1) both; }
        .glow-beat   { animation: glow-beat 2.5s ease-in-out infinite; }
        .spin-border { animation: think-spin 1.4s linear infinite; }
        .dot-1 { animation: dot-bounce 1.2s .0s ease-in-out infinite; }
        .dot-2 { animation: dot-bounce 1.2s .15s ease-in-out infinite; }
        .dot-3 { animation: dot-bounce 1.2s .30s ease-in-out infinite; }

        .chat-scroll::-webkit-scrollbar { width: 4px; }
        .chat-scroll::-webkit-scrollbar-track { background: transparent; }
        .chat-scroll::-webkit-scrollbar-thumb { background: rgba(124,58,237,.3); border-radius: 4px; }

        .input-glow:focus-within { box-shadow: 0 0 0 1px rgba(139,92,246,.5), 0 0 40px rgba(124,58,237,.2); }
      `}</style>

      <div className="flex gap-5 h-[calc(100vh-120px)] overflow-hidden">

        {/* ── LEFT PANEL: System Diagnostics ── */}
        <div className="w-72 shrink-0 flex flex-col gap-4">

          {/* Status card */}
          <div className="rounded-2xl border border-white/[.06] bg-[#08061a] p-6">
            <p className="font-code text-[9px] tracking-[3px] uppercase text-violet-400 mb-4">Neural Status</p>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[.03] border border-white/[.05] mb-6">
              <div className="relative shrink-0">
                <Activity size={18} className="text-emerald-400 relative z-10" />
                <div className="absolute inset-0 bg-emerald-400 blur-md opacity-30 animate-pulse" />
              </div>
              <div>
                <p className="font-code text-[11px] font-bold text-white uppercase tracking-tight">Online</p>
                <p className="font-code text-[9px] text-white/25 uppercase tracking-widest">Latency · 12ms</p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.6)] animate-pulse" />
            </div>

            <p className="font-code text-[9px] tracking-[3px] uppercase text-white/20 mb-4">Processing Chains</p>
            <div className="space-y-4">
              {CHAINS.map((c, i) => (
                <div key={c.label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-code text-[9px] uppercase tracking-widest text-white/30">{c.label}</span>
                    <span className="font-code text-[9px] text-white/60">{Math.round(synapses[i])}%</span>
                  </div>
                  <div className="h-1 w-full bg-white/[.04] rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${c.color} rounded-full transition-all duration-1000 ease-in-out`}
                      style={{ width: `${synapses[i]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Presets */}
          <div className="rounded-2xl border border-white/[.06] bg-[#08061a] p-6 flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Terminal size={13} className="text-violet-400" />
              <p className="font-code text-[9px] tracking-[3px] uppercase text-white/20">Neural Presets</p>
            </div>
            <div className="space-y-2">
              {["Architecture Review", "Code Audit", "Sales Framework", "Market Analysis"].map((p) => (
                <button key={p} className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[.03] border border-white/[.05] hover:border-violet-500/30 hover:bg-violet-500/[.06] transition-all group">
                  <span className="font-code text-[9px] uppercase tracking-widest text-white/30 group-hover:text-white/70 transition-colors">{p}</span>
                  <ChevronRight size={11} className="text-white/10 group-hover:text-violet-400 transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="rounded-2xl border border-white/[.06] bg-[#08061a] p-6 relative overflow-hidden">
            <Fingerprint size={80} className="absolute -bottom-4 -right-4 text-white/[.025]" />
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <p className="font-code text-[9px] tracking-[3px] uppercase text-white/20">E2E Encrypted</p>
            </div>
            <p className="font-code text-[10px] text-white/25 leading-relaxed">
              Neural traffic is locally siloed. Zero telemetry transmitted.
            </p>
          </div>
        </div>

        {/* ── CENTER: Chat Interface ── */}
        <div className="flex-1 flex flex-col rounded-2xl border border-white/[.06] bg-[#04030c] overflow-hidden relative">

          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-violet-700/[.07] rounded-full blur-[100px]" />
          </div>

          {/* Top bar */}
          <div className="relative z-10 flex items-center justify-between px-7 py-4 border-b border-white/[.05] bg-white/[.015] shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-violet-500" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-violet-500 animate-ping opacity-60" />
              </div>
              <span className="font-code text-[11px] uppercase tracking-[4px] text-white/60">Neural Link</span>
              <span className="font-code text-[9px] px-2 py-0.5 rounded-md bg-violet-500/15 border border-violet-500/25 text-violet-300 uppercase tracking-widest">Session 04</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setMessages([])}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[.04] border border-white/[.06] font-code text-[9px] uppercase tracking-widest text-white/30 hover:text-white hover:border-white/20 transition-all"
              >
                <RotateCcw size={10} /> Clear
              </button>
              <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-violet-600 font-code text-[9px] uppercase tracking-widest text-white hover:bg-violet-500 transition-colors shadow-[0_0_20px_rgba(124,58,237,.3)]">
                <Zap size={10} /> Advanced
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div className="chat-scroll flex-1 overflow-y-auto p-7 space-y-6 relative z-10">
            {messages.length === 0 ? (
              /* Empty state */
              <div className="h-full flex flex-col items-center justify-center text-center gap-6">
                <div className="relative glow-beat w-28 h-28 rounded-full border border-violet-500/30 bg-violet-500/[.06] flex items-center justify-center">
                  <BrainCircuit size={48} className="text-violet-400" />
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 112 112">
                    <circle cx="56" cy="56" r="54" fill="none" stroke="rgba(139,92,246,.25)" strokeWidth="1" strokeDasharray="10 5" className="spin-border" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-display italic text-2xl text-white mb-2">How can I optimize your trajectory?</h2>
                  <p className="font-code text-[10px] uppercase tracking-[3px] text-white/20 max-w-xs">
                    Architecture · Analysis · Strategy · Code Review
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 max-w-sm w-full">
                  {["Debug my architecture", "Analyze my codebase", "Draft a pitch deck", "Explain CAP theorem"].map((s) => (
                    <button key={s} onClick={() => setInput(s)}
                      className="p-3 rounded-xl bg-white/[.03] border border-white/[.05] hover:border-violet-500/30 hover:bg-violet-500/[.06] transition-all text-left font-code text-[9px] uppercase tracking-wider text-white/30 hover:text-white/70">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((m, i) => (
                <div key={i} className={`msg-enter flex gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  {/* Avatar */}
                  <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${m.role === "ai" ? "bg-violet-600/20 border border-violet-500/30" : "bg-white/[.06] border border-white/[.08]"}`}>
                    {m.role === "ai"
                      ? <BrainCircuit size={14} className="text-violet-400" />
                      : <span className="font-code text-[9px] text-white/50">You</span>}
                  </div>
                  {/* Bubble */}
                  <div className={`max-w-[72%] ${m.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                    <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      m.role === "ai"
                        ? "bg-white/[.04] border border-white/[.06] text-white/80 rounded-tl-sm"
                        : "bg-violet-600 text-white rounded-tr-sm shadow-[0_0_20px_rgba(124,58,237,.25)]"
                    }`}>
                      {m.text}
                    </div>
                    <span className="font-code text-[8px] text-white/15 px-1">{m.ts}</span>
                  </div>
                </div>
              ))
            )}

            {/* Thinking indicator */}
            {processing && (
              <div className="msg-enter flex gap-3">
                <div className="shrink-0 w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center">
                  <BrainCircuit size={14} className="text-violet-400" />
                </div>
                <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white/[.04] border border-white/[.06] flex items-center gap-1.5">
                  <div className="dot-1 w-1 h-4 bg-violet-400 rounded-full" />
                  <div className="dot-2 w-1 h-4 bg-violet-400 rounded-full" />
                  <div className="dot-3 w-1 h-4 bg-violet-400 rounded-full" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="relative z-10 p-5 border-t border-white/[.05] shrink-0">
            <div className="input-glow rounded-2xl border border-white/[.08] bg-[#08061a] flex items-center gap-3 px-4 py-3 transition-all">
              <Command size={16} className="text-white/20 shrink-0" />
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && send()}
                placeholder="Type a command or query…"
                className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder:text-white/15 font-body py-1"
              />
              {input && (
                <button onClick={() => setInput("")} className="text-white/20 hover:text-white/50 transition-colors">
                  <X size={14} />
                </button>
              )}
              <button
                onClick={send}
                disabled={!input.trim() || processing}
                className="shrink-0 w-9 h-9 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-[0_0_20px_rgba(124,58,237,.3)] hover:shadow-[0_0_30px_rgba(124,58,237,.5)] hover:scale-105 active:scale-95"
              >
                <Send size={14} className="text-white" />
              </button>
            </div>
            <p className="text-center mt-3 font-code text-[8px] uppercase tracking-[3px] text-white/10">
              Enter to transmit · End-to-end encrypted
            </p>
          </div>
        </div>

        {/* ── RIGHT PANEL: Context & Memory ── */}
        <div className="w-64 shrink-0 flex flex-col gap-4">

          {/* Session context */}
          <div className="rounded-2xl border border-white/[.06] bg-[#08061a] p-6">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles size={13} className="text-violet-400" />
              <p className="font-code text-[9px] tracking-[3px] uppercase text-white/20">Session Context</p>
            </div>
            <div className="space-y-3">
              {[
                { label: "Project",   val: "Rada University" },
                { label: "Focus",     val: "Next.js Architecture" },
                { label: "Goal",      val: "SaaS Deployment" },
                { label: "Messages",  val: `${messages.length} this session` },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-xl bg-white/[.03] border border-white/[.05]">
                  <p className="font-code text-[8px] uppercase tracking-widest text-white/20 mb-1">{item.label}</p>
                  <p className="font-code text-[11px] text-white/70">{item.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="rounded-2xl border border-white/[.06] bg-[#08061a] p-6 flex-1">
            <div className="flex items-center gap-2 mb-5">
              <Cpu size={13} className="text-violet-400" />
              <p className="font-code text-[9px] tracking-[3px] uppercase text-white/20">Capabilities</p>
            </div>
            <div className="space-y-2">
              {[
                "System Architecture",
                "Code Review",
                "Market Analysis",
                "Sales Psychology",
                "Technical Writing",
                "Data Modeling",
              ].map((cap) => (
                <div key={cap} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                  <span className="font-code text-[9px] uppercase tracking-wider text-white/30">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Model info */}
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[.06] p-5">
            <p className="font-code text-[8px] uppercase tracking-[3px] text-violet-400 mb-2">Active Model</p>
            <p className="font-code text-sm font-bold text-white mb-1">Rada Neural v2</p>
            <p className="font-code text-[9px] text-white/25 uppercase tracking-widest">128k context · Streaming</p>
          </div>
        </div>

      </div>
    </>
  );
}