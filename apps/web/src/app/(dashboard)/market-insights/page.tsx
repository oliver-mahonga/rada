"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  ShoppingBag, Tag, Search, Filter, 
  Zap, Code2, Terminal, Mic2, 
  ArrowRight, Sparkles, ShieldCheck,
  LayoutGrid, List, Flame
} from "lucide-react";

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState("All Assets");

  const products = [
    {
      id: 1,
      title: "Neural-Link V2 Template",
      author: "Alpha_Architect",
      price: "12,500 RADA",
      category: "Code",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=400&auto=format&fit=crop",
      isHot: true
    },
    {
      id: 2,
      title: "High-Ticket Closing Script",
      author: "Closing_King",
      price: "4,200 KES",
      category: "Persuasion",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
      isHot: false
    },
    {
      id: 3,
      title: "Next.js 15 Enterprise Boilerplate",
      author: "Jordan_Rada",
      price: "8,000 RADA",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=400&auto=format&fit=crop",
      isHot: true
    }
  ];

  return (
    <div className="space-y-10 pb-20 animate-in fade-in zoom-in-95 duration-1000">
      
      {/* ── TOP: THE AUCTION BANNER ── */}
      <div className="relative h-80 rounded-[4rem] bg-[#0f0a1e] border border-white/5 overflow-hidden flex items-center px-16 group">
         <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-transparent pointer-events-none" />
         <div className="absolute -right-20 -top-20 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] group-hover:bg-violet-600/20 transition-all duration-700" />
         
         <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-3 mb-6">
               <span className="px-3 py-1 rounded-full bg-violet-500 text-[8px] font-black uppercase tracking-widest text-white shadow-lg shadow-violet-600/40">Exclusive Drop</span>
               <span className="text-[10px] font-bold text-white/20 uppercase tracking-[4px]">Verified Intel</span>
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-none mb-6">Quantum Trading <br/> Bot Logic</h1>
            <p className="text-[#6b6490] font-medium italic mb-8">Deploy professional-grade liquidity scripts in seconds. 4/10 Licenses remaining.</p>
            <button className="px-8 py-4 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-[4px] hover:scale-105 transition-all flex items-center gap-3 shadow-2xl">
               Acquire Asset <ArrowRight size={14} />
            </button>
         </div>
      </div>

      {/* ── NAVIGATION & FILTERS ── */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="flex bg-[#0f0a1e] border border-white/5 p-1.5 rounded-[1.5rem] overflow-x-auto max-w-full">
            {["All Assets", "Code", "Persuasion", "AI Prompts", "Consulting"].map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                  activeCategory === cat ? "bg-white text-black shadow-lg" : "text-[#6b6490] hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
         </div>

         <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={14} />
               <input 
                 placeholder="Search the exchange..." 
                 className="w-full bg-[#0f0a1e] border border-white/5 rounded-2xl py-3 pl-10 pr-4 text-[10px] text-white outline-none focus:border-white/20 transition-all"
               />
            </div>
            <button className="p-3 rounded-2xl bg-[#0f0a1e] border border-white/5 text-[#6b6490] hover:text-white transition-all">
               <Filter size={18} />
            </button>
         </div>
      </div>

      {/* ── THE GRID: ASSET CARDS ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {products.map((asset) => (
            <div key={asset.id} className="bg-[#050308] border border-white/5 rounded-[3rem] overflow-hidden group hover:border-violet-500/30 transition-all duration-500 shadow-xl">
               <div className="relative h-60 overflow-hidden">
                  <img src={asset.image} alt={asset.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050308] to-transparent opacity-80" />
                  
                  {asset.isHot && (
                    <div className="absolute top-6 left-6 px-3 py-1 bg-orange-600 rounded-lg flex items-center gap-2">
                       <Flame size={10} className="text-white fill-current" />
                       <span className="text-[8px] font-black text-white uppercase tracking-widest">Trending</span>
                    </div>
                  )}
                  
                  <div className="absolute bottom-6 left-8">
                     <span className="text-[9px] font-black text-violet-400 uppercase tracking-[4px]">{asset.category}</span>
                  </div>
               </div>

               <div className="p-8">
                  <div className="flex justify-between items-start mb-2">
                     <h3 className="text-lg font-black text-white tracking-tight uppercase group-hover:text-violet-400 transition-colors">{asset.title}</h3>
                     <ShieldCheck size={16} className="text-white/10" />
                  </div>
                  <p className="text-[10px] font-bold text-[#6b6490] uppercase tracking-tighter mb-8 italic">Published by @{asset.author}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                     <div>
                        <p className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">Exchange Price</p>
                        <p className="text-lg font-black text-white italic">{asset.price}</p>
                     </div>
                     <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black hover:scale-110 transition-all shadow-xl">
                        <ShoppingBag size={18} />
                     </button>
                  </div>
               </div>
            </div>
         ))}
      </div>

      {/* ── FOOTER: BECOME A VENDOR ── */}
      <div className="bg-gradient-to-br from-[#0f0a1e] to-black border border-white/5 rounded-[4rem] p-12 flex flex-col items-center text-center">
         <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-500 mb-6 shadow-2xl">
            <Sparkles size={32} />
         </div>
         <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic mb-4">Have intellectual capital?</h2>
         <p className="text-sm text-[#6b6490] font-medium max-w-md mb-8 italic">"Monetize your code, prompts, and persuasion scripts on the Rada Exchange. Keep 95% of every transaction."</p>
         <button className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-[10px] uppercase tracking-[4px] hover:bg-white hover:text-black transition-all">
            Apply to be a Vendor
         </button>
      </div>
    </div>
  );
}