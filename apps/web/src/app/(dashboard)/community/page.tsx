"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  MessageSquare, Share2, Heart, TrendingUp, 
  Globe, Zap, ShieldCheck, Search, 
  Filter, MoreHorizontal, Flame, Users
} from "lucide-react";

export default function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState("Intelligence");

  const feeds = [
    {
      id: 1,
      user: "Alpha_Architect",
      rank: "Lvl 42",
      time: "2m ago",
      content: "Just cracked the sequence for the multi-node LLM deployment. If you're hitting rate limits, check your backoff strategy in the header logic. #AI #Engineering",
      likes: 124,
      comments: 18,
      isVerified: true,
    },
    {
      id: 2,
      user: "Satoshi_Seeker",
      rank: "Lvl 28",
      time: "15m ago",
      content: "Bitcoin institutional inflow just hit a 30-day high. Watching the 98k resistance level closely. The Mempool is starting to congest.",
      likes: 89,
      comments: 42,
      isVerified: false,
    },
    {
      id: 3,
      user: "Closing_King",
      rank: "Lvl 35",
      time: "1h ago",
      content: "Just used the 'Frame Control' technique from Module 4 on a $50k SaaS lead. Closed in 20 minutes. The psychology behind this is insane.",
      likes: 210,
      comments: 56,
      isVerified: true,
    }
  ];

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 overflow-hidden">
      
      {/* ── LEFT: NAVIGATION & CATEGORIES ── */}
      <div className="w-full lg:w-64 shrink-0 space-y-6">
        <div className="bg-[#0f0a1e]/50 border border-white/5 rounded-[2.5rem] p-6">
           <p className="text-[10px] font-black text-white/20 uppercase tracking-[4px] mb-6">Channels</p>
           <nav className="space-y-2">
              {["Intelligence", "Strategy", "The Vault", "Showcase"].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all",
                    activeCategory === cat ? "bg-white text-black shadow-lg" : "text-[#6b6490] hover:bg-white/5 hover:text-white"
                  )}
                >
                   {cat === "Intelligence" && <Globe size={14} />}
                   {cat === "Strategy" && <TrendingUp size={14} />}
                   {cat === "The Vault" && <ShieldCheck size={14} />}
                   {cat === "Showcase" && <Zap size={14} />}
                   {cat}
                </button>
              ))}
           </nav>
        </div>

        <div className="p-6 bg-gradient-to-br from-violet-600/20 to-transparent border border-violet-500/20 rounded-[2.5rem]">
           <div className="flex items-center gap-2 mb-3">
              <Flame size={14} className="text-orange-500" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Active Hubs</span>
           </div>
           <p className="text-[11px] font-bold text-[#9d96be] leading-relaxed mb-4 italic">
             2,482 Operators currently online across 12 sectors.
           </p>
           <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Join General Chat
           </button>
        </div>
      </div>

      {/* ── CENTER: THE INTEL FEED ── */}
      <div className="flex-1 flex flex-col bg-[#050308] border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
        
        {/* Feed Header */}
        <div className="h-20 border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-10">
           <div className="flex items-center gap-4">
              <h2 className="text-xl font-black text-white tracking-tighter uppercase italic">{activeCategory} Feed</h2>
              <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
           </div>
           <div className="relative w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={14} />
              <input 
                placeholder="Scan intelligence..." 
                className="w-full bg-white/5 border border-white/5 rounded-full py-2.5 pl-10 pr-4 text-[10px] text-white outline-none focus:border-white/20 transition-all"
              />
           </div>
        </div>

        {/* Scrollable Feed */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
           {/* Post Input */}
           <div className="p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-violet-600 shrink-0" />
              <div className="flex-1 space-y-4">
                 <textarea 
                   placeholder="Share your latest breakthrough..." 
                   className="w-full bg-transparent border-none outline-none text-sm text-white font-medium resize-none placeholder:text-white/10"
                   rows={2}
                 />
                 <div className="flex justify-between items-center pt-2">
                    <div className="flex gap-2">
                       <button className="p-2 rounded-lg bg-white/5 text-[#6b6490] hover:text-white transition-colors"><MessageSquare size={14} /></button>
                       <button className="p-2 rounded-lg bg-white/5 text-[#6b6490] hover:text-white transition-colors"><Zap size={14} /></button>
                    </div>
                    <button className="px-6 py-2 bg-white text-black rounded-xl font-black text-[9px] uppercase tracking-widest hover:scale-105 transition-all">
                       Transmit <Zap size={10} fill="currentColor" className="inline ml-1" />
                    </button>
                 </div>
              </div>
           </div>

           {/* Feed Posts */}
           {feeds.map((post) => (
             <div key={post.id} className="p-8 bg-[#0f0a1e]/30 border border-white/5 rounded-[2.5rem] group hover:border-white/10 transition-all">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 overflow-hidden border border-white/10 relative">
                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.user}`} alt="avatar" />
                         {post.isVerified && (
                           <div className="absolute -bottom-1 -right-1 bg-violet-600 text-white rounded-md p-0.5 border-2 border-[#0f0a1e]">
                             <ShieldCheck size={10} />
                           </div>
                         )}
                      </div>
                      <div>
                         <div className="flex items-center gap-2">
                            <p className="text-sm font-black text-white">{post.user}</p>
                            <span className="text-[9px] font-black text-violet-400 uppercase tracking-widest">{post.rank}</span>
                         </div>
                         <p className="text-[10px] font-bold text-white/20 uppercase tracking-tighter">{post.time}</p>
                      </div>
                   </div>
                   <button className="text-white/10 hover:text-white"><MoreHorizontal size={18} /></button>
                </div>
                
                <p className="text-sm text-[#9d96be] leading-relaxed mb-8 font-medium italic">
                  "{post.content}"
                </p>

                <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                   <button className="flex items-center gap-2 text-[10px] font-black text-[#6b6490] hover:text-pink-500 transition-colors uppercase tracking-widest">
                      <Heart size={14} /> {post.likes}
                   </button>
                   <button className="flex items-center gap-2 text-[10px] font-black text-[#6b6490] hover:text-blue-500 transition-colors uppercase tracking-widest">
                      <MessageSquare size={14} /> {post.comments}
                   </button>
                   <button className="flex items-center gap-2 text-[10px] font-black text-[#6b6490] hover:text-white transition-colors uppercase tracking-widest ml-auto">
                      <Share2 size={14} />
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* ── RIGHT: TRENDING & TOP OPERATORS ── */}
      <div className="w-full lg:w-80 shrink-0 space-y-6">
        
        {/* Trending Tags */}
        <div className="bg-[#0f0a1e]/50 border border-white/5 rounded-[2.5rem] p-8">
           <h3 className="text-[10px] font-black text-white uppercase tracking-[4px] mb-6 flex items-center gap-2">
             <TrendingUp size={14} className="text-violet-400" /> Hot Topics
           </h3>
           <div className="space-y-4">
              {[
                { tag: "BITCOIN_HALVING", posts: "1.2k" },
                { tag: "NEURAL_NETS", posts: "842" },
                { tag: "CLOSING_SECRETS", posts: "621" },
                { tag: "RADA_XP_FARM", posts: "450" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center group cursor-pointer">
                   <span className="text-[10px] font-black text-[#6b6490] group-hover:text-white transition-colors tracking-tighter italic">#{item.tag}</span>
                   <span className="text-[9px] font-bold text-white/20 uppercase">{item.posts} INTEL</span>
                </div>
              ))}
           </div>
        </div>

        {/* Top Operators List */}
        <div className="bg-[#0f0a1e]/50 border border-white/5 rounded-[2.5rem] p-8">
           <h3 className="text-[10px] font-black text-white uppercase tracking-[4px] mb-6 flex items-center gap-2">
             <Users size={14} className="text-violet-400" /> Elite Operators
           </h3>
           <div className="space-y-6">
              {[
                { name: "Alpha_Architect", rank: "Top 1%" },
                { name: "Satoshi_Seeker", rank: "Top 3%" },
                { name: "Neural_Link", rank: "Top 5%" },
              ].map((op, i) => (
                <div key={i} className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-lg bg-white/5 overflow-hidden border border-white/10">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${op.name}`} alt="user" />
                   </div>
                   <div>
                      <p className="text-[11px] font-black text-white leading-none">{op.name}</p>
                      <p className="text-[8px] font-black text-violet-400 uppercase tracking-widest mt-1">{op.rank}</p>
                   </div>
                   <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                </div>
              ))}
           </div>
           <button className="w-full mt-8 py-4 bg-white/5 border border-white/5 rounded-2xl text-[9px] font-black text-[#6b6490] uppercase tracking-[4px] hover:text-white transition-colors">
              Directory
           </button>
        </div>
      </div>
    </div>
  );
}