"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { 
  Cpu, MessageSquare, Zap, Activity, 
  Terminal, ShieldCheck, Sparkles, 
  Command, Send, BrainCircuit, Fingerprint
} from "lucide-react";

export default function AIMentorPage() {
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [synapses, setSynapses] = useState<number[]>([]);

  // Simulate "Neural Activity" background pulses
  useEffect(() => {
    const interval = setInterval(() => {
      setSynapses(Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleTransmit = () => {
    if (!input.trim()) return;
    setIsProcessing(true);
    // Simulate AI "Thinking"
    setTimeout(() => setIsProcessing(false), 2000);
    setInput("");
  };

  return (
    <div className="h-[calc(100vh-140px)] flex gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 overflow-hidden relative">
      
      {/* ── LEFT: SYSTEM DIAGNOSTICS ── */}
      <div className="w-80 shrink-0 flex flex-col gap-6">
        <div className="bg-[#0f0a1e]/50 border border-white/5 rounded-[3rem] p-8 flex flex-col gap-8">
           <div>
              <p className="text-[10px] font-black text-violet-400 uppercase tracking-[4px] mb-4">Neural Status</p>
              <div className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                 <div className="relative">
                    <Activity size={20} className="text-emerald-500" />
                    <div className="absolute inset-0 bg-emerald-500 blur-md opacity-20 animate-pulse" />
                 </div>
                 <div>
                    <p className="text-xs font-black text-white uppercase tracking-tighter">System Ready</p>
                    <p className="text-[9px] font-bold text-[#6b6490] uppercase">Latency: 12ms</p>
                 </div>
              </div>
           </div>

           <div>
              <p className="text-[10px] font-black text-white/20 uppercase tracking-[4px] mb-6">Processing Chains</p>
              <div className="space-y-6">
                 {["Logic Core", "Semantic Mesh", "Vector Search"].map((chain, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between text-[9px] font-black text-[#6b6490] uppercase tracking-widest">
                          <span>{chain}</span>
                          <span className="text-white">{synapses[i] || 0}%</span>
                       </div>
                       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-violet-600 to-indigo-400 transition-all duration-1000 ease-in-out" 
                            style={{ width: `${synapses[i] || 0}%` }} 
                          />
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="flex-1 bg-gradient-to-b from-[#0f0a1e]/50 to-transparent border border-white/5 rounded-[3rem] p-8 relative overflow-hidden">
           <Fingerprint size={120} className="absolute -bottom-10 -right-10 text-white/[0.02] -rotate-12" />
           <p className="text-[10px] font-black text-white/20 uppercase tracking-[4px] mb-4">Security Protocol</p>
           <p className="text-[11px] font-bold text-[#9d96be] italic leading-relaxed">
             "End-to-end neural encryption is active. Your proprietary logic and code remain locally siloed."
           </p>
        </div>
      </div>

      {/* ── CENTER: THE NEURAL INTERFACE ── */}
      <div className="flex-1 flex flex-col bg-[#050308] border border-white/5 rounded-[4rem] relative shadow-2xl overflow-hidden">
        
        {/* Animated Background Atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        {/* Header */}
        <div className="h-20 border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-10 relative z-10">
           <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-violet-500 animate-ping" />
              <h2 className="text-sm font-black text-white uppercase tracking-[6px]">Neural Link: Session 04</h2>
           </div>
           <div className="flex gap-2">
              <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black text-[#6b6490] uppercase tracking-widest hover:text-white transition-all">Clear Memory</button>
              <button className="px-4 py-2 rounded-xl bg-violet-600 text-white text-[9px] font-black uppercase tracking-widest shadow-lg shadow-violet-600/20">Advanced Mode</button>
           </div>
        </div>

        {/* Chat / Neural Core Display */}
        <div className="flex-1 p-12 overflow-y-auto relative z-10 flex flex-col items-center justify-center space-y-8">
           
           {!isProcessing ? (
             <div className="group relative cursor-pointer">
                <div className="absolute -inset-8 bg-violet-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000" />
                <div className="relative w-40 h-40 rounded-full border border-white/10 flex items-center justify-center bg-black">
                   <BrainCircuit size={60} className="text-violet-500 group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-0 rounded-full border-t-2 border-violet-500 animate-spin" />
                </div>
             </div>
           ) : (
             <div className="flex flex-col items-center">
                <div className="flex gap-2 mb-4">
                   {[1, 2, 3].map((d) => (
                     <div key={d} className="w-2 h-8 bg-violet-500 rounded-full animate-bounce" style={{ animationDelay: `${d * 0.1}s` }} />
                   ))}
                </div>
                <p className="text-[10px] font-black text-violet-400 uppercase tracking-[4px]">Synthesizing Intelligence...</p>
             </div>
           )}

           <div className="max-w-xl text-center">
              <h1 className="text-3xl font-black text-white tracking-tighter uppercase mb-4 italic">How can we optimize your trajectory today?</h1>
              <p className="text-sm text-[#6b6490] font-medium leading-relaxed italic">
                "Ready to assist with system architecture, market liquidity analysis, or psychological persuasion frameworks."
              </p>
           </div>
        </div>

        {/* Input Dock */}
        <div className="p-10 relative z-10">
           <div className="max-w-3xl mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-indigo-500 to-pink-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-[#0f0a1e] border border-white/10 rounded-[2.5rem] p-2 flex items-center shadow-2xl">
                 <div className="pl-6 text-white/20">
                    <Command size={18} />
                 </div>
                 <input 
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   onKeyDown={(e) => e.key === "Enter" && handleTransmit()}
                   placeholder="Type a command or query..." 
                   className="flex-1 bg-transparent border-none outline-none px-6 py-6 text-sm text-white font-medium placeholder:text-white/10"
                 />
                 <button 
                   onClick={handleTransmit}
                   className="mr-2 w-14 h-14 bg-white rounded-[1.8rem] flex items-center justify-center text-black hover:scale-105 transition-all shadow-xl"
                 >
                    <Send size={20} fill="black" />
                 </button>
              </div>
           </div>
           <p className="text-center mt-6 text-[9px] font-black text-white/10 uppercase tracking-[4px]">Press Enter to Transmit Sequence</p>
        </div>
      </div>

      {/* ── RIGHT: INTELLIGENCE RECALL ── */}
      <div className="w-80 shrink-0 space-y-6">
        <div className="bg-[#0f0a1e]/50 border border-white/5 rounded-[3rem] p-8">
           <div className="flex items-center gap-3 mb-8">
              <Sparkles size={16} className="text-violet-400" />
              <p className="text-[10px] font-black text-white uppercase tracking-widest">Recent Context</p>
           </div>
           <div className="space-y-4">
              {[
                { label: "Project", val: "Rada University" },
                { label: "Focus", val: "Next.js Architecture" },
                { label: "Goal", val: "SaaS Deployment" }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                   <p className="text-[8px] font-black text-[#6b6490] uppercase mb-1">{item.label}</p>
                   <p className="text-[11px] font-black text-white">{item.val}</p>
                </div>
              ))}
           </div>
        </div>

        <div className="p-8 bg-violet-600/10 border border-violet-500/20 rounded-[3rem] group cursor-pointer hover:bg-violet-600/20 transition-all">
           <div className="flex items-center justify-between mb-4">
              <Terminal size={16} className="text-violet-400" />
              <div className="px-2 py-0.5 rounded-md bg-violet-500 text-white text-[8px] font-black uppercase">New</div>
           </div>
           <p className="text-xs font-black text-white uppercase tracking-tight mb-2 italic">Neural Presets</p>
           <p className="text-[10px] text-[#9d96be] leading-relaxed font-medium">
             Load pre-defined cognitive models for "Aggressive Sales" or "Clean Code Auditing".
           </p>
        </div>
      </div>
    </div>
  );
}