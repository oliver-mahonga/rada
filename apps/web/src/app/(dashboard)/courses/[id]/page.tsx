"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  Play, CheckCircle2, Terminal, Cpu, MessageSquare, 
  Zap, Maximize2, Layers, Code2, Landmark, LineChart,
  Mic2, Volume2, BarChart3, ShieldAlert, PhoneIncoming,
  Upload, X, Trophy, Globe, Activity
} from "lucide-react";

export default function InternalLab() {
  const params = useParams();
  const [activeStep, setActiveStep] = useState(1);
  const [activeTab, setActiveTab] = useState("main");
  const [price, setPrice] = useState(98432.40);
  const [isRecording, setIsRecording] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // ── DYNAMIC LOGIC SWITCHES ──
  const id = params.id?.toString() || "";
  const isCrypto = id.includes("bitcoin") || id.includes("crypto");
  const isSales = id.includes("copywriting") || id.includes("sales") || id.includes("closing");
  const isAI = id.includes("llm") || id.includes("ai");
  const isDev = !isCrypto && !isSales && !isAI;

  // ── BITCOIN LIVE PRICE SIMULATION ──
  useEffect(() => {
    if (!isCrypto) return;
    const interval = setInterval(() => {
      setPrice(p => p + (Math.random() * 20 - 10));
    }, 2000);
    return () => clearInterval(interval);
  }, [isCrypto]);

  // ── DYNAMIC CURRICULUM STEPS ──
  const getSteps = () => {
    if (isCrypto) return [
      { id: 1, title: "UTXO Model Overview", duration: "5:20", type: "video" },
      { id: 2, title: "Live Mempool Analysis", duration: "Interactive", type: "lab" },
      { id: 3, title: "Halving Cycle Theory", duration: "12:00", type: "video" },
    ];
    if (isSales) return [
      { id: 1, title: "Frame Control Basics", duration: "4:15", type: "video" },
      { id: 2, title: "Voice AI Roleplay", duration: "Active", type: "lab" },
      { id: 3, title: "Closing The Whale", duration: "08:00", type: "video" },
    ];
    if (isAI) return [
        { id: 1, title: "Transformer Attention", duration: "10:20", type: "video" },
        { id: 2, title: "Weight Optimization", duration: "Sandbox", type: "lab" },
        { id: 3, title: "Fine-tuning Protocol", duration: "14:00", type: "video" },
    ];
    return [
      { id: 1, title: "Architecture Briefing", duration: "6:30", type: "video" },
      { id: 2, title: "Node Implementation", duration: "Interactive", type: "lab" },
      { id: 3, title: "System Stress Test", duration: "15:00", type: "video" },
    ];
  };

  const steps = getSteps();

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col lg:flex-row gap-6 animate-in fade-in duration-700 overflow-hidden relative">
      
      {/* ── LEFT SIDEBAR: THE SEQUENCE ── */}
      <div className="w-full lg:w-80 shrink-0 flex flex-col bg-[#0f0a1e]/50 border border-white/5 rounded-[2.5rem] overflow-hidden">
        <div className="p-6 border-b border-white/5 bg-white/[0.02]">
           <p className={cn(
             "text-[10px] font-black uppercase tracking-[3px] mb-1",
             isCrypto ? "text-orange-400" : isSales ? "text-pink-400" : isAI ? "text-blue-400" : "text-violet-400"
           )}>Current Sequence</p>
           <h2 className="text-lg font-black text-white leading-tight uppercase tracking-tighter">
             {isCrypto ? "Bitcoin Economics" : isSales ? "Persuasion Lab" : isAI ? "Neural AI" : "Engineering"}
           </h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {steps.map((step) => (
            <button 
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={cn(
                "w-full p-4 rounded-2xl border transition-all flex items-start gap-4 text-left group",
                activeStep === step.id 
                  ? "bg-white/5 border-white/20 shadow-lg" 
                  : "bg-transparent border-transparent hover:bg-white/5"
              )}
            >
              <div className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center shrink-0 border mt-1",
                activeStep === step.id ? "bg-white border-white text-black" : "border-white/10 text-white/40"
              )}>
                {activeStep > step.id ? <CheckCircle2 size={12} /> : <span className="text-[10px] font-bold">{step.id}</span>}
              </div>
              <div>
                <p className={cn("text-[10px] font-black uppercase tracking-wide mb-1", activeStep === step.id ? "text-white" : "text-[#6b6490]")}>
                  {step.title}
                </p>
                <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">{step.duration}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── CENTER: THE MULTIMODAL LABORATORY ── */}
      <div className="flex-1 flex flex-col bg-[#050308] border border-white/5 rounded-[3rem] overflow-hidden relative shadow-2xl">
        
        {/* Lab Header */}
        <div className="h-16 border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-8">
           <div className="flex items-center gap-6">
              <button onClick={() => setActiveTab("main")} className={cn("text-[10px] font-black uppercase tracking-widest transition-all", activeTab === "main" ? "text-white border-b-2 border-white pb-1" : "text-[#6b6490] hover:text-white")}>
                {isCrypto ? "Market Pulse" : isSales ? "Voice Link" : isAI ? "Neural Sandbox" : "Terminal"}
              </button>
              <button onClick={() => setActiveTab("video")} className={cn("text-[10px] font-black uppercase tracking-widest transition-all", activeTab === "video" ? "text-white border-b-2 border-white pb-1" : "text-[#6b6490] hover:text-white")}>Briefing Video</button>
           </div>
           <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[9px] font-black text-white/60 uppercase tracking-tighter tracking-widest">Operational Status</span>
              </div>
              <Maximize2 size={14} className="text-[#6b6490] cursor-pointer hover:text-white" />
           </div>
        </div>

        {/* Dynamic Content Area */}
        <div className="flex-1 p-8 overflow-hidden relative">
          {activeTab === "main" ? (
            <>
              {/* 1. CRYPTO INTERFACE */}
              {isCrypto && (
                <div className="h-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-500">
                  <div className="text-center mb-12">
                    <p className="text-5xl font-black text-white tracking-tighter mb-2">
                      ${price.toLocaleString(undefined, {minimumFractionDigits: 2})}
                    </p>
                    <p className="text-[10px] font-black text-orange-400 uppercase tracking-[4px]">Real-Time Bitcoin Liquidity</p>
                  </div>
                  <div className="relative w-full h-48 flex items-end gap-1 px-10">
                    {[40, 70, 45, 90, 65, 80, 30, 100, 80, 110, 95, 120, 80, 60, 40, 90].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-gradient-to-t from-orange-500/40 to-transparent border-t border-orange-500/50 rounded-t-sm" />
                    ))}
                  </div>
                </div>
              )}

              {/* 2. SALES/VOICE INTERFACE */}
              {isSales && (
                <div className="h-full flex flex-col items-center justify-center animate-in fade-in duration-500">
                  <div className={cn(
                    "w-48 h-48 rounded-full border-4 flex items-center justify-center transition-all duration-700 relative",
                    isRecording ? "border-pink-500 shadow-[0_0_100px_rgba(236,72,153,0.2)] scale-110" : "border-white/5"
                  )}>
                    {isRecording && <div className="absolute inset-0 rounded-full border border-pink-500/50 animate-ping" />}
                    <Mic2 size={48} className={isRecording ? "text-pink-500" : "text-white/20"} />
                  </div>
                  <div className="mt-12 text-center">
                    <div className="flex items-center gap-2 justify-center mb-2">
                        <Activity size={14} className="text-pink-500" />
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Biometric Sync Active</span>
                    </div>
                    <h3 className="text-xl font-black text-white uppercase tracking-[4px]">Neural Roleplay Hub</h3>
                    <p className="text-xs text-[#6b6490] mt-2 italic max-w-xs mx-auto">"Handling: Price Objections. Tap the button below to start the verbal sequence."</p>
                  </div>
                </div>
              )}

              {/* 3. AI NEURAL SANDBOX */}
              {isAI && (
                <div className="h-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-500">
                    <div className="flex gap-8 items-center">
                        {[1, 2, 3].map((layer) => (
                            <div key={layer} className="space-y-4">
                                {[1, 2, 3, 4].map((node) => (
                                    <div key={node} className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-black text-[10px] animate-pulse">
                                        {Math.floor(Math.random() * 99)}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <h3 className="text-lg font-black text-white uppercase tracking-[4px]">Transformer Weight Sandbox</h3>
                        <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest mt-2">Adjusting Attention Head #4</p>
                    </div>
                </div>
              )}

              {/* 4. DEV/IDE INTERFACE */}
              {isDev && (
                <div className="h-full w-full bg-[#0d0d12] rounded-[2rem] border border-white/5 p-8 font-mono text-sm relative overflow-hidden animate-in slide-in-from-bottom-4">
                  <div className="space-y-3 text-white/60">
                    <p className="text-emerald-400 opacity-50">// System: Initializing RadaNode v4.0</p>
                    <p className="text-violet-400">async function <span className="text-blue-400">deployCore</span>() {"{"}</p>
                    <p className="pl-6">const <span className="text-orange-400">status</span> = await <span className="text-yellow-400">syncCluster</span>();</p>
                    <p className="pl-6 text-emerald-400 italic">return status === "READY" ? 200 : 500;</p>
                    <p className="text-violet-400">{"}"}</p>
                    <div className="h-4 w-1 bg-violet-500 animate-pulse inline-block" />
                  </div>
                  <button className="absolute bottom-8 right-8 px-8 py-3 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform">Run Script</button>
                </div>
              )}
            </>
          ) : (
            /* VIDEO TAB (Universal) */
            <div className="h-full w-full rounded-[2rem] bg-black border border-white/10 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 to-transparent group-hover:opacity-0 transition-opacity" />
               <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                  <Play size={32} className="text-white fill-current" />
               </div>
               <div className="absolute bottom-8 left-8 text-left">
                  <p className="text-[10px] font-black text-white/40 uppercase mb-1">Intelligence Module</p>
                  <p className="text-lg font-black text-white tracking-tighter uppercase italic">Theoretical Foundation</p>
               </div>
            </div>
          )}
        </div>

        {/* Action Footer for Lab */}
        {activeTab === "main" && (
           <div className="p-8 border-t border-white/5 bg-white/[0.01]">
              {isSales ? (
                <button 
                    onClick={() => setIsRecording(!isRecording)}
                    className={cn(
                    "w-full py-6 rounded-[2rem] font-black uppercase tracking-[6px] text-xs transition-all flex items-center justify-center gap-4",
                    isRecording ? "bg-pink-600 text-white shadow-[0_0_30px_rgba(219,39,119,0.3)]" : "bg-white text-black"
                    )}
                >
                    {isRecording ? "Terminate Link" : "Initialize Verbal Link"} <Zap size={14} fill="currentColor" />
                </button>
              ) : (
                <button 
                    onClick={() => setShowSubmitModal(true)}
                    className="w-full py-6 bg-white text-black rounded-[2rem] font-black uppercase tracking-[6px] text-xs hover:scale-[1.01] transition-all flex items-center justify-center gap-4 shadow-xl"
                >
                    Complete & Submit Project <Upload size={14} />
                </button>
              )}
           </div>
        )}
      </div>

      {/* ── RIGHT SIDEBAR: INTELLIGENCE PANEL ── */}
      <div className="w-full lg:w-80 shrink-0 flex flex-col gap-6">
        <div className="flex-1 bg-[#0f0a1e]/50 border border-white/5 rounded-[2.5rem] p-6 flex flex-col group hover:border-white/10 transition-colors">
          <div className="flex items-center gap-3 mb-8">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Cpu size={20} className="text-white" />
             </div>
             <div>
                <p className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Neural Link</p>
                <p className="text-[9px] font-bold text-violet-400 uppercase tracking-widest opacity-60 italic tracking-tighter">AI Mentor 4.0</p>
             </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="text-xs font-medium text-[#9d96be] leading-relaxed italic border-l-2 border-violet-500/30 pl-4">
              {isCrypto 
                ? "Jordan, institutional whales are accumulating at this level. Notice the order flow density."
                : isSales 
                ? "Tone alert: You are sounding too 'eager'. Shift your tonality to a neutral, authoritative down-swing."
                : isAI
                ? "The weights are slightly off-center. Focus on the Attention Head #2 to optimize the gradient descent."
                : "The system cluster is ready for deployment. Execute the sync script to finalize the node."
              }
            </div>

            {/* Live Stats UI */}
            <div className="space-y-4 pt-4 border-t border-white/5">
                <p className="text-[9px] font-black text-white/20 uppercase tracking-[2px]">Real-time Diagnostics</p>
                {[{ label: "Neural Load", v: 42, color: "bg-blue-500" }, { label: "System Sync", v: 98, color: "bg-emerald-500" }].map((s, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-[8px] font-black text-white/40 uppercase">
                      <span>{s.label}</span>
                      <span>{s.v}%</span>
                    </div>
                    <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className={cn("h-full transition-all duration-1000", s.color)} style={{ width: `${s.v}%` }} />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-8 relative">
             <input 
               placeholder="Query Neural Link..." 
               className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-5 text-[10px] font-bold text-white outline-none focus:border-violet-500/50 transition-all placeholder:text-white/10" 
             />
             <MessageSquare className="absolute right-5 top-1/2 -translate-y-1/2 text-white/10" size={14} />
          </div>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                    <Trophy size={14} />
                </div>
                <div>
                    <p className="text-[8px] font-black text-white/30 uppercase tracking-widest">Rewards Potential</p>
                    <p className="text-xs font-black text-white uppercase tracking-tighter">+500 RADA XP</p>
                </div>
            </div>
        </div>
      </div>

      {/* ── SUBMISSION MODAL ── */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setShowSubmitModal(false)} />
            <div className="relative w-full max-w-lg bg-[#0f0a1e] border border-white/10 rounded-[3rem] p-10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-pink-500" />
                <button onClick={() => setShowSubmitModal(false)} className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors">
                    <X size={20} />
                </button>

                <div className="text-center mb-10">
                    <div className="w-16 h-16 rounded-3xl bg-violet-600/20 flex items-center justify-center text-violet-500 mx-auto mb-6 border border-violet-500/30 shadow-2xl">
                        <Upload size={30} />
                    </div>
                    <h2 className="text-3xl font-black text-white tracking-tighter uppercase mb-2 italic">Project Validation</h2>
                    <p className="text-sm text-[#6b6490] font-medium">Upload your lab proof or repository link for AI verification.</p>
                </div>

                <div className="space-y-4">
                    <div className="p-6 border-2 border-dashed border-white/5 rounded-3xl hover:border-violet-500/30 transition-all cursor-pointer group bg-white/[0.02]">
                        <p className="text-[10px] font-black text-white/20 uppercase tracking-widest text-center group-hover:text-violet-400">Drag & Drop Lab Documentation</p>
                    </div>
                    <input 
                        placeholder="Link to Git Repo or Deployment..." 
                        className="w-full bg-white/5 border border-white/5 rounded-2xl py-5 px-6 text-xs font-bold text-white outline-none focus:border-violet-500/40" 
                    />
                    <button className="w-full py-5 bg-violet-600 text-white rounded-2xl font-black uppercase tracking-[4px] text-xs hover:bg-violet-500 transition-all shadow-lg shadow-violet-600/20">
                        Finalize Submission
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}