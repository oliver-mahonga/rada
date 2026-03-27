"use client";

import { useState } from "react";
import {
  MessageSquare, Share2, Heart, TrendingUp,
  Globe, Zap, ShieldCheck, Search,
  MoreHorizontal, Flame, Users, BookOpen,
  Plus, Hash, ChevronRight,
} from "lucide-react";

const cn = (...cls: (string | false | undefined)[]) => cls.filter(Boolean).join(" ");

type Post = {
  id: number;
  user: string;
  rank: string;
  rankColor: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  isVerified: boolean;
  tag: string;
  tagColor: string;
  liked: boolean;
};

const INITIAL_POSTS: Post[] = [
  {
    id: 1,
    user: "Alpha_Architect",
    rank: "Top 1%",
    rankColor: "text-amber-400",
    time: "2m ago",
    content: "Cracked the multi-node LLM deployment sequence. If you're hitting rate limits, the fix is in your backoff strategy inside the header logic — not the client. Sharing the full implementation in The Vault.",
    likes: 124, comments: 18, isVerified: true,
    tag: "Engineering", tagColor: "bg-violet-500/15 text-violet-300 border-violet-500/25",
    liked: false,
  },
  {
    id: 2,
    user: "Satoshi_Seeker",
    rank: "Top 3%",
    rankColor: "text-violet-300",
    time: "15m ago",
    content: "Institutional inflow just hit a 30-day high. Watching the 98k resistance level closely — Mempool congestion is starting to build. This setup looks identical to the Q4 2023 breakout.",
    likes: 89, comments: 42, isVerified: false,
    tag: "Strategy", tagColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
    liked: false,
  },
  {
    id: 3,
    user: "Closing_King",
    rank: "Top 5%",
    rankColor: "text-fuchsia-400",
    time: "1h ago",
    content: "Used the Frame Control technique from Module 4 on a $50k SaaS lead. Closed in 20 minutes. The psychology here is simple: whoever controls the frame controls the outcome.",
    likes: 210, comments: 56, isVerified: true,
    tag: "Intelligence", tagColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
    liked: false,
  },
  {
    id: 4,
    user: "Neural_Link",
    rank: "Top 8%",
    rankColor: "text-cyan-400",
    time: "3h ago",
    content: "Shipped a Kubernetes autoscaler that cut our infra bill by 40% without touching application code. The secret is custom metrics via Prometheus + KEDA — HPA alone won't cut it.",
    likes: 176, comments: 31, isVerified: true,
    tag: "Engineering", tagColor: "bg-violet-500/15 text-violet-300 border-violet-500/25",
    liked: false,
  },
];

const CHANNELS = [
  { id: "Intelligence", icon: Globe,      color: "text-emerald-400" },
  { id: "Strategy",     icon: TrendingUp, color: "text-cyan-400" },
  { id: "The Vault",    icon: ShieldCheck,color: "text-amber-400" },
  { id: "Showcase",     icon: Zap,        color: "text-fuchsia-400" },
  { id: "Learning",     icon: BookOpen,   color: "text-violet-400" },
];

const TRENDING = [
  { tag: "BITCOIN_HALVING", posts: "1.2k" },
  { tag: "NEURAL_NETS",     posts: "842" },
  { tag: "CLOSING_SECRETS", posts: "621" },
  { tag: "RADA_XP_FARM",    posts: "450" },
  { tag: "K8S_PATTERNS",    posts: "318" },
];

const OPERATORS = [
  { name: "Alpha_Architect", rank: "Top 1%", rankColor: "text-amber-400" },
  { name: "Satoshi_Seeker",  rank: "Top 3%", rankColor: "text-violet-300" },
  { name: "Neural_Link",     rank: "Top 5%", rankColor: "text-cyan-400" },
  { name: "Closing_King",    rank: "Top 8%", rankColor: "text-fuchsia-400" },
];

export default function CommunityPage() {
  const [activeChannel, setActiveChannel] = useState("Intelligence");
  const [posts, setPosts]                 = useState<Post[]>(INITIAL_POSTS);
  const [draft, setDraft]                 = useState("");
  const [search, setSearch]               = useState("");

  function toggleLike(id: number) {
    setPosts(p => p.map(post =>
      post.id === id
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  }

  function submitPost() {
    if (!draft.trim()) return;
    const newPost: Post = {
      id: Date.now(), user: "You", rank: "Member", rankColor: "text-violet-300",
      time: "Just now", content: draft.trim(),
      likes: 0, comments: 0, isVerified: false,
      tag: activeChannel, tagColor: "bg-violet-500/15 text-violet-300 border-violet-500/25",
      liked: false,
    };
    setPosts(p => [newPost, ...p]);
    setDraft("");
  }

  const filtered = posts.filter(p =>
    search === "" || p.content.toLowerCase().includes(search.toLowerCase()) ||
    p.user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;500;700&family=Sora:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'DM Serif Display', serif; }
        .font-code    { font-family: 'JetBrains Mono', monospace; }
        body          { font-family: 'Sora', sans-serif; }

        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        .post-enter { animation: fadeSlideUp .4s cubic-bezier(.16,1,.3,1) both; }

        .feed-scroll::-webkit-scrollbar { width: 4px; }
        .feed-scroll::-webkit-scrollbar-track { background: transparent; }
        .feed-scroll::-webkit-scrollbar-thumb { background: rgba(124,58,237,.25); border-radius: 4px; }
      `}</style>

      <div className="flex gap-5 h-[calc(100vh-120px)] overflow-hidden">

        {/* ── LEFT: Channels ── */}
        <div className="w-60 shrink-0 flex flex-col gap-4">

          {/* Channels nav */}
          <div className="rounded-2xl border border-white/[.06] bg-[#08061a] p-5">
            <p className="font-code text-[9px] tracking-[3px] uppercase text-white/20 mb-4">Channels</p>
            <nav className="space-y-1">
              {CHANNELS.map(({ id, icon: Icon, color }) => (
                <button
                  key={id}
                  onClick={() => setActiveChannel(id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-code text-[9px] uppercase tracking-widest transition-all",
                    activeChannel === id
                      ? "bg-violet-600 text-white shadow-[0_0_20px_rgba(124,58,237,.3)]"
                      : "text-white/30 hover:bg-white/[.04] hover:text-white/70"
                  )}
                >
                  <Icon size={13} className={activeChannel === id ? "text-white" : color} />
                  <span>{id}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Live stats */}
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[.06] p-5">
            <div className="flex items-center gap-2 mb-3">
              <Flame size={13} className="text-orange-400" />
              <p className="font-code text-[9px] tracking-[3px] uppercase text-white/40">Live Now</p>
            </div>
            <div className="font-display italic text-2xl text-white mb-1">2,482</div>
            <p className="font-code text-[9px] uppercase tracking-widest text-white/20 mb-4">Operators online</p>
            <button className="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 transition-colors font-code text-[9px] uppercase tracking-widest text-white shadow-[0_0_20px_rgba(124,58,237,.25)]">
              Join General Chat
            </button>
          </div>

          {/* New post shortcut */}
          <button
            onClick={() => document.getElementById("draft-area")?.focus()}
            className="flex items-center justify-center gap-2 py-3 rounded-2xl border border-dashed border-white/[.08] hover:border-violet-500/40 hover:bg-violet-500/[.05] transition-all font-code text-[9px] uppercase tracking-widest text-white/20 hover:text-violet-300"
          >
            <Plus size={13} /> New Post
          </button>
        </div>

        {/* ── CENTER: Feed ── */}
        <div className="flex-1 flex flex-col rounded-2xl border border-white/[.06] bg-[#04030c] overflow-hidden">

          {/* Feed header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[.05] bg-white/[.015] shrink-0">
            <div className="flex items-center gap-3">
              <Hash size={14} className="text-violet-400" />
              <span className="font-display italic text-lg text-white">{activeChannel}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="relative w-56">
              <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search feed…"
                className="w-full bg-white/[.04] border border-white/[.06] rounded-xl py-2 pl-9 pr-4 font-code text-[10px] text-white placeholder:text-white/15 outline-none focus:border-violet-500/40 transition-all"
              />
            </div>
          </div>

          {/* Scrollable feed */}
          <div className="feed-scroll flex-1 overflow-y-auto p-5 space-y-4">

            {/* Compose */}
            <div className="p-5 rounded-2xl border border-white/[.06] bg-white/[.02]">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/30 shrink-0 flex items-center justify-center font-code text-[9px] text-violet-300">
                  You
                </div>
                <div className="flex-1">
                  <textarea
                    id="draft-area"
                    value={draft}
                    onChange={e => setDraft(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && e.metaKey && submitPost()}
                    placeholder="Share your latest breakthrough…"
                    rows={2}
                    className="w-full bg-transparent border-none outline-none text-sm text-white placeholder:text-white/15 resize-none leading-relaxed"
                  />
                  <div className="flex items-center justify-between pt-3 border-t border-white/[.05] mt-2">
                    <div className="flex gap-1.5">
                      {[MessageSquare, Zap, Hash].map((Icon, i) => (
                        <button key={i} className="p-2 rounded-lg hover:bg-white/[.05] text-white/20 hover:text-white/60 transition-all">
                          <Icon size={13} />
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={submitPost}
                      disabled={!draft.trim()}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-30 disabled:cursor-not-allowed font-code text-[9px] uppercase tracking-widest text-white transition-all hover:shadow-[0_0_20px_rgba(124,58,237,.35)]"
                    >
                      Transmit <Zap size={10} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts */}
            {filtered.map((post, idx) => (
              <article
                key={post.id}
                className="post-enter p-5 rounded-2xl border border-white/[.05] bg-[#08061a]/60 hover:border-white/[.1] transition-all group"
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                {/* Post header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="relative shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-white/[.04] border border-white/[.08] overflow-hidden">
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.user}`}
                          alt={post.user}
                          className="w-full h-full"
                        />
                      </div>
                      {post.isVerified && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-md bg-violet-600 border border-[#04030c] flex items-center justify-center">
                          <ShieldCheck size={8} className="text-white" />
                        </div>
                      )}
                    </div>
                    {/* Name + meta */}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-code text-xs font-bold text-white">{post.user}</span>
                        <span className={`font-code text-[8px] uppercase tracking-widest ${post.rankColor}`}>{post.rank}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-code text-[8px] text-white/20">{post.time}</span>
                        <span className={`font-code text-[8px] px-1.5 py-0.5 rounded-md border uppercase tracking-widest ${post.tagColor}`}>
                          {post.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="text-white/10 hover:text-white/40 transition-colors opacity-0 group-hover:opacity-100">
                    <MoreHorizontal size={16} />
                  </button>
                </div>

                {/* Content */}
                <p className="text-sm text-white/60 leading-[1.8] mb-5">{post.content}</p>

                {/* Actions */}
                <div className="flex items-center gap-5 pt-4 border-t border-white/[.04]">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={cn(
                      "flex items-center gap-1.5 font-code text-[9px] uppercase tracking-widest transition-all",
                      post.liked ? "text-pink-400" : "text-white/20 hover:text-pink-400"
                    )}
                  >
                    <Heart size={13} fill={post.liked ? "currentColor" : "none"} />
                    {post.likes}
                  </button>
                  <button className="flex items-center gap-1.5 font-code text-[9px] uppercase tracking-widest text-white/20 hover:text-blue-400 transition-colors">
                    <MessageSquare size={13} /> {post.comments}
                  </button>
                  <button className="ml-auto flex items-center gap-1.5 font-code text-[9px] uppercase tracking-widest text-white/20 hover:text-white/60 transition-colors">
                    <Share2 size={13} />
                  </button>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="py-16 text-center">
                <p className="font-code text-[10px] uppercase tracking-[3px] text-white/15">No posts match your search</p>
              </div>
            )}
          </div>
        </div>

        {/* ── RIGHT: Trending + Operators ── */}
        <div className="w-60 shrink-0 flex flex-col gap-4">

          {/* Trending */}
          <div className="rounded-2xl border border-white/[.06] bg-[#08061a] p-5">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp size={13} className="text-violet-400" />
              <p className="font-code text-[9px] tracking-[3px] uppercase text-white/20">Hot Topics</p>
            </div>
            <div className="space-y-3">
              {TRENDING.map((item, i) => (
                <button key={i} className="w-full flex items-center justify-between group">
                  <div className="flex items-center gap-2">
                    <span className="font-code text-[8px] text-white/20 w-3">{i + 1}</span>
                    <span className="font-code text-[9px] italic text-white/40 group-hover:text-violet-300 transition-colors">#{item.tag}</span>
                  </div>
                  <span className="font-code text-[8px] uppercase tracking-wider text-white/15">{item.posts}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Elite Operators */}
          <div className="rounded-2xl border border-white/[.06] bg-[#08061a] p-5">
            <div className="flex items-center gap-2 mb-5">
              <Users size={13} className="text-violet-400" />
              <p className="font-code text-[9px] tracking-[3px] uppercase text-white/20">Elite Operators</p>
            </div>
            <div className="space-y-4">
              {OPERATORS.map((op, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/[.04] border border-white/[.07] overflow-hidden shrink-0">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${op.name}`} alt={op.name} className="w-full h-full" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-code text-[10px] text-white/70 truncate">{op.name}</p>
                    <p className={`font-code text-[8px] uppercase tracking-widest ${op.rankColor}`}>{op.rank}</p>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,.5)] shrink-0" />
                </div>
              ))}
            </div>
            <button className="w-full mt-5 py-2.5 rounded-xl border border-white/[.06] hover:border-violet-500/30 hover:bg-violet-500/[.05] font-code text-[9px] uppercase tracking-widest text-white/20 hover:text-white/60 transition-all flex items-center justify-center gap-1.5">
              View Directory <ChevronRight size={10} />
            </button>
          </div>

          {/* Channel stats */}
          <div className="rounded-2xl border border-white/[.06] bg-[#08061a] p-5 flex-1">
            <p className="font-code text-[9px] tracking-[3px] uppercase text-white/20 mb-4">Channel Stats</p>
            <div className="space-y-3">
              {[
                { label: "Posts today",  val: "1,204" },
                { label: "Active now",   val: "2,482" },
                { label: "Your posts",   val: posts.filter(p => p.user === "You").length.toString() },
                { label: "Your likes",   val: posts.filter(p => p.liked).length.toString() },
              ].map(({ label, val }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="font-code text-[9px] uppercase tracking-widest text-white/20">{label}</span>
                  <span className="font-code text-[11px] text-white/60">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}