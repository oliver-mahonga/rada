"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Wallet, TrendingUp, ArrowUpRight, ArrowDownLeft, 
  Coins, Landmark, CreditCard, Activity,
  PieChart, ArrowRight, ShieldCheck, Zap
} from "lucide-react";

export default function FinancePage() {
  const [activeTab, setActiveTab] = useState("Assets");

  const transactions = [
    { id: "TX-9021", type: "Credit", amount: "+500 RADA", status: "Settled", label: "Lab Completion: AI Neural Link", date: "MAR 12" },
    { id: "TX-8842", type: "Debit", amount: "-1,200 KES", status: "Processing", label: "I-Chama Contribution: Tech Pool A", date: "MAR 11" },
    { id: "TX-8711", type: "Credit", amount: "+2,000 RADA", status: "Settled", label: "Referral Bonus: @Satoshi_Seeker", date: "MAR 09" },
  ];

  return (
    <div className="space-y-10 pb-20 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      
      {/* ── TOP: LIQUIDITY OVERVIEW ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Wallet Card */}
        <div className="lg:col-span-2 bg-gradient-to-br from-violet-600 to-indigo-900 rounded-[3.5rem] p-12 relative overflow-hidden group shadow-2xl">
           <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Landmark size={180} />
           </div>
           
           <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                 <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                       <Wallet size={20} className="text-white" />
                    </div>
                    <span className="text-[10px] font-black text-white uppercase tracking-[4px]">Verified Capital</span>
                 </div>
                 <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Total Net Worth (RADA + KES)</p>
                 <h2 className="text-6xl font-black text-white tracking-tighter italic">42,850.40</h2>
              </div>

              <div className="mt-12 flex gap-8">
                 <div>
                    <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">Staked Assets</p>
                    <p className="text-xl font-black text-white">12,400 RADA</p>
                 </div>
                 <div className="w-px h-10 bg-white/10 self-end" />
                 <div>
                    <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">M-Pesa Reserve</p>
                    <p className="text-xl font-black text-white italic">8,200.00 KES</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#0f0a1e]/50 border border-white/5 rounded-[3.5rem] p-10 flex flex-col justify-between group hover:border-white/10 transition-colors">
           <div className="space-y-4">
              <button className="w-full py-5 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-all">
                 Withdraw Funds <ArrowUpRight size={14} />
              </button>
              <button className="w-full py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                 Stake RADA <Zap size={14} fill="currentColor" />
              </button>
           </div>
           
           <div className="mt-8 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="flex justify-between items-center mb-2">
                 <span className="text-[9px] font-black text-[#6b6490] uppercase tracking-widest">System Trust</span>
                 <ShieldCheck size={12} className="text-emerald-500" />
              </div>
              <p className="text-[10px] font-bold text-white/60 italic">"Security protocol v4.2 active. All transactions encrypted."</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ── THE LEDGER: TRANSACTION HISTORY ── */}
        <div className="lg:col-span-2 bg-[#050308] border border-white/5 rounded-[3.5rem] p-10 shadow-2xl">
           <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-black text-white tracking-tighter uppercase italic">Transaction Terminal</h3>
              <div className="flex gap-4">
                 {["Assets", "History", "Pools"].map(tab => (
                    <button 
                      key={tab} 
                      onClick={() => setActiveTab(tab)}
                      className={cn("text-[10px] font-black uppercase tracking-widest transition-all", activeTab === tab ? "text-violet-400 border-b border-violet-400" : "text-white/20")}
                    >
                       {tab}
                    </button>
                 ))}
              </div>
           </div>

           <div className="space-y-4">
              {transactions.map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white/[0.01] border border-white/5 rounded-2xl hover:bg-white/[0.03] transition-all group">
                   <div className="flex items-center gap-6">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center border",
                        tx.type === "Credit" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" : "bg-pink-500/10 border-pink-500/20 text-pink-500"
                      )}>
                         {tx.type === "Credit" ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                      </div>
                      <div>
                         <p className="text-[11px] font-black text-white tracking-wide uppercase">{tx.label}</p>
                         <p className="text-[9px] font-bold text-[#6b6490] uppercase mt-1 font-mono tracking-tighter">{tx.id} • {tx.date}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className={cn("text-sm font-black tracking-tight", tx.type === "Credit" ? "text-emerald-500" : "text-white")}>{tx.amount}</p>
                      <p className="text-[8px] font-black text-white/10 uppercase tracking-widest mt-1">{tx.status}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* ── SIDEBAR: I-CHAMA POOL PREVIEW ── */}
        <div className="bg-[#0f0a1e]/50 border border-white/5 rounded-[3.5rem] p-8">
           <div className="flex items-center gap-3 mb-8">
              <PieChart size={18} className="text-violet-400" />
              <p className="text-[10px] font-black text-white uppercase tracking-widest">Active Chama Pools</p>
           </div>
           
           <div className="space-y-6">
              {[
                { name: "Tech Hardware Pool", progress: 65, goal: "50k KES" },
                { name: "AI Subscription Pool", progress: 92, goal: "12k RADA" }
              ].map((pool, i) => (
                <div key={i} className="space-y-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                   <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black text-white uppercase tracking-tight">{pool.name}</span>
                      <span className="text-[9px] font-bold text-violet-400 italic">Target: {pool.goal}</span>
                   </div>
                   <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-violet-600 to-pink-500" style={{ width: `${pool.progress}%` }} />
                   </div>
                   <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">{pool.progress}% Contributed</p>
                </div>
              ))}
           </div>

           <button className="w-full mt-10 py-4 bg-violet-600/10 border border-violet-500/20 rounded-2xl text-[9px] font-black text-violet-400 uppercase tracking-[4px] hover:bg-violet-600 hover:text-white transition-all">
              Initialize New Pool
           </button>
        </div>

      </div>
    </div>
  );
}