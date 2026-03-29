"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Search,
  Filter,
  Flame,
  Monitor,
  Cpu,
  Coins,
  PenTool,
  Code,
  Lock,
  ArrowRight,
  Users,
  Terminal,
  LineChart,
  Mic2,
  Sparkles,
  Clock3,
  Trophy,
  Briefcase,
  Star,
  BookOpen,
  CheckCircle2,
  Layers3,
  BrainCircuit,
} from "lucide-react";

type Category = "all" | "ai" | "dev" | "crypto" | "sales";

type Course = {
  id: string;
  title: string;
  category: Exclude<Category, "all">;
  level: string;
  students: string;
  status: string;
  duration: string;
  lessons: number;
  rating: number;
  xp: number;
  description: string;
  gradient: string;
  border: string;
  tools: string[];
  outcomes: string[];
  toolIcon: React.ReactNode;
  badge: string;
};

const labCategories = [
  { id: "all", label: "All Sectors", icon: <Monitor size={14} /> },
  { id: "ai", label: "Neural AI", icon: <Cpu size={14} /> },
  { id: "dev", label: "Engineering", icon: <Code size={14} /> },
  { id: "crypto", label: "Economics", icon: <Coins size={14} /> },
  { id: "sales", label: "Persuasion", icon: <PenTool size={14} /> },
] satisfies { id: Category; label: string; icon: React.ReactNode }[];

const courses: Course[] = [
  {
    id: "llm-architecture",
    title: "Large Language Model Architecture",
    category: "ai",
    level: "Advanced",
    students: "1.2k",
    status: "Operational",
    duration: "6 Weeks",
    lessons: 28,
    rating: 4.9,
    xp: 1800,
    description:
      "Deep dive into transformer logic, tokenization, embeddings, attention, inference, and practical LLM system design.",
    gradient: "from-blue-600/20 to-indigo-600/20",
    border: "border-blue-500/30",
    tools: ["Neural Sandbox", "Weight Visualizer", "Prompt Lab"],
    outcomes: [
      "Understand transformer internals",
      "Build LLM-powered workflows",
      "Practice real AI product thinking",
    ],
    toolIcon: <Cpu size={16} className="text-blue-400" />,
    badge: "High Demand",
  },
  {
    id: "bitcoin-economics",
    title: "Bitcoin Protocol Deep Dive",
    category: "crypto",
    level: "Expert",
    students: "840",
    status: "Live Now",
    duration: "4 Weeks",
    lessons: 19,
    rating: 4.8,
    xp: 1400,
    description:
      "Analyze the UTXO model, halving cycles, liquidity behavior, market structure, and Bitcoin network fundamentals.",
    gradient: "from-orange-600/20 to-amber-600/20",
    border: "border-orange-500/30",
    tools: ["Live Ticker", "Mempool Sim", "Cycle Tracker"],
    outcomes: [
      "Understand Bitcoin fundamentals",
      "Read market behavior better",
      "Build stronger economic intuition",
    ],
    toolIcon: <LineChart size={16} className="text-orange-400" />,
    badge: "Elite Track",
  },
  {
    id: "copywriting-framework",
    title: "High-Ticket Closing Lab",
    category: "sales",
    level: "Intermediate",
    students: "3.5k",
    status: "Operational",
    duration: "5 Weeks",
    lessons: 24,
    rating: 4.9,
    xp: 1600,
    description:
      "Master persuasion frameworks, offer positioning, objection handling, verbal confidence, and closing psychology.",
    gradient: "from-pink-600/20 to-rose-600/20",
    border: "border-pink-500/30",
    tools: ["Voice AI Bot", "Objection Map", "Pitch Trainer"],
    outcomes: [
      "Sell more confidently",
      "Handle objections better",
      "Learn monetizable communication skills",
    ],
    toolIcon: <Mic2 size={16} className="text-pink-400" />,
    badge: "Fast Income",
  },
  {
    id: "fullstack-systems",
    title: "Fullstack System Architecture",
    category: "dev",
    level: "Advanced",
    students: "2.1k",
    status: "Operational",
    duration: "8 Weeks",
    lessons: 34,
    rating: 4.9,
    xp: 2200,
    description:
      "Learn how to build scalable apps with frontend systems, backend services, databases, auth, APIs, and deployment.",
    gradient: "from-emerald-600/20 to-teal-600/20",
    border: "border-emerald-500/30",
    tools: ["IDE Terminal", "Load Tester", "System Debugger"],
    outcomes: [
      "Build production-grade apps",
      "Think like a systems engineer",
      "Prepare for real software jobs",
    ],
    toolIcon: <Terminal size={16} className="text-emerald-400" />,
    badge: "Career Builder",
  },
];

const recommendations = [
  {
    title: "Best next if you want money fast",
    value: "High-Ticket Closing Lab",
    icon: <Briefcase size={16} className="text-emerald-400" />,
  },
  {
    title: "Best long-term career path",
    value: "Fullstack System Architecture",
    icon: <Trophy size={16} className="text-violet-400" />,
  },
  {
    title: "Best future-proof skill",
    value: "Large Language Model Architecture",
    icon: <BrainCircuit size={16} className="text-blue-400" />,
  },
];

export default function SkillLabs() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesTab = activeTab === "all" || course.category === activeTab;
      const q = search.toLowerCase();

      const matchesSearch =
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.tools.some((tool) => tool.toLowerCase().includes(q)) ||
        course.outcomes.some((o) => o.toLowerCase().includes(q));

      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  const totalStudents = useMemo(() => {
    return "7.6k+";
  }, []);

  return (
    <div className="space-y-10 pb-24">
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0b0717]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="relative z-10 px-6 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 mb-6">
                <Flame size={14} className="text-violet-400" />
                <span className="text-[10px] font-black tracking-[3px] uppercase text-violet-300">
                  Mission Learning Core
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[0.92]">
                Skill Labs That Teach{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
                  Real Skills
                </span>
              </h1>

              <p className="text-sm md:text-base text-[#a49cbe] mt-5 max-w-2xl leading-relaxed">
                Not just videos. This is a modern online university experience
                with structured lessons, guided labs, practical tools, skill
                tracks, and career-focused learning paths that actually help
                users grow.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <p className="text-[10px] uppercase tracking-[3px] text-white/40 font-black">
                    Active Courses
                  </p>
                  <p className="text-xl font-black text-white mt-1">4</p>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <p className="text-[10px] uppercase tracking-[3px] text-white/40 font-black">
                    Learners
                  </p>
                  <p className="text-xl font-black text-white mt-1">{totalStudents}</p>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <p className="text-[10px] uppercase tracking-[3px] text-white/40 font-black">
                    Outcome Focus
                  </p>
                  <p className="text-xl font-black text-emerald-400 mt-1">Income + Career</p>
                </div>
              </div>
            </div>

            {/* Recommendation Panel */}
            <div className="w-full xl:w-[380px] rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[3px] text-white/40">
                    AI Recommendations
                  </p>
                  <p className="text-sm font-bold text-white">Best paths for learners</p>
                </div>
              </div>

              <div className="space-y-3">
                {recommendations.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="mt-0.5">{item.icon}</div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[2px] text-white/35 font-black">
                        {item.title}
                      </p>
                      <p className="text-sm font-bold text-white mt-1">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                <p className="text-[10px] uppercase tracking-[3px] text-emerald-400 font-black">
                  Recommendation Engine
                </p>
                <p className="text-sm text-white mt-2 leading-relaxed">
                  Later, your backend can recommend courses based on user
                  interests, progress, skill gaps, income goals, and market demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── CONTROLS ───────────────── */}
      <section className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
        <div className="flex items-center gap-2 p-1.5 bg-[#0f0a1e] border border-white/5 rounded-[1.5rem] w-fit overflow-x-auto no-scrollbar">
          {labCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                activeTab === tab.id
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg"
                  : "text-[#6b6490] hover:text-white hover:bg-white/5"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4b4563] group-focus-within:text-violet-500 transition-colors"
              size={16}
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses, skills, tools..."
              className="bg-[#0f0a1e] border border-white/5 rounded-2xl py-3.5 pl-12 pr-6 text-xs font-bold text-white outline-none focus:border-violet-500/40 w-full sm:w-72 lg:w-96 transition-all"
            />
          </div>

          <button className="px-4 py-3.5 bg-[#0f0a1e] border border-white/5 rounded-2xl text-[#6b6490] hover:text-white hover:border-white/10 transition-all flex items-center gap-2">
            <Filter size={16} />
            <span className="text-[10px] font-black uppercase tracking-[2px]">
              Filters
            </span>
          </button>
        </div>
      </section>

      {/* ───────────────── TRUST STRIP ───────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Structured Learning",
            desc: "Lessons, labs, progression, and practical exercises.",
            icon: <BookOpen size={18} className="text-blue-400" />,
          },
          {
            title: "Career-Oriented",
            desc: "Courses are designed around real marketable outcomes.",
            icon: <Briefcase size={18} className="text-emerald-400" />,
          },
          {
            title: "Interactive Labs",
            desc: "Users learn by doing, not by just watching.",
            icon: <Layers3 size={18} className="text-violet-400" />,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-[2rem] border border-white/10 bg-[#0f0a1e]/70 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-sm font-black text-white uppercase tracking-wide">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-[#9b93b6] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ───────────────── LAB GRID ───────────────── */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
              Available Skill Labs
            </h2>
            <p className="text-sm text-[#7e7699] mt-1">
              Choose a course and enter its guided learning environment.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03]">
            <CheckCircle2 size={14} className="text-emerald-400" />
            <span className="text-[10px] font-black uppercase tracking-[2px] text-white/50">
              {filteredCourses.length} visible
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)] bg-[#0f0a1e]",
                course.border
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-15 transition-opacity",
                  course.gradient
                )}
              />
              <div className="relative z-10 p-8 md:p-10">
                {/* Top */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-white uppercase tracking-widest">
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">
                        {course.status}
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[9px] font-black text-violet-300 uppercase tracking-widest">
                      {course.badge}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-[#8f88ab]">
                    <div className="flex items-center gap-1.5">
                      <Users size={14} />
                      <span className="text-[10px] font-bold">{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-[10px] font-bold">{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3 leading-tight group-hover:text-violet-300 transition-all">
                  {course.title}
                </h3>

                <p className="text-[#9b93b6] font-medium text-sm leading-relaxed mb-6 max-w-2xl">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-7">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <p className="text-[9px] uppercase tracking-[2px] text-white/30 font-black">
                      Duration
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Clock3 size={14} className="text-violet-400" />
                      <p className="text-sm font-bold text-white">{course.duration}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <p className="text-[9px] uppercase tracking-[2px] text-white/30 font-black">
                      Lessons
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <BookOpen size={14} className="text-blue-400" />
                      <p className="text-sm font-bold text-white">{course.lessons}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <p className="text-[9px] uppercase tracking-[2px] text-white/30 font-black">
                      XP Reward
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Sparkles size={14} className="text-orange-400" />
                      <p className="text-sm font-bold text-white">{course.xp}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <p className="text-[9px] uppercase tracking-[2px] text-white/30 font-black">
                      Track
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      {course.toolIcon}
                      <p className="text-sm font-bold text-white capitalize">
                        {course.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="mb-7">
                  <p className="text-[10px] font-black uppercase tracking-[3px] text-white/35 mb-3">
                    Included Lab Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.tools.map((tool, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/40 border border-white/5 text-[10px] font-black text-white/65 uppercase tracking-[2px] group-hover:border-white/15 transition-all"
                      >
                        {course.toolIcon}
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mb-8">
                  <p className="text-[10px] font-black uppercase tracking-[3px] text-white/35 mb-3">
                    What You’ll Learn
                  </p>
                  <div className="grid gap-2">
                    {course.outcomes.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm text-[#c8c1de]"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-emerald-400 mt-0.5 shrink-0"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 pt-6 border-t border-white/5">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full border-2 border-[#0f0a1e] bg-[#1a152e] overflow-hidden"
                      >
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.title + i}`}
                          alt="Student"
                          className="w-full h-full"
                        />
                      </div>
                    ))}
                    <div className="w-9 h-9 rounded-full border-2 border-[#0f0a1e] bg-violet-600 flex items-center justify-center text-[9px] font-black text-white">
                      +12
                    </div>
                  </div>

                  <Link href={`/courses/${course.id}`}>
                    <button className="flex items-center gap-3 px-6 py-3.5 bg-white text-black rounded-2xl font-black uppercase tracking-[2px] text-[10px] hover:scale-105 active:scale-95 transition-all shadow-xl">
                      Enter Skill Lab <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Locked Future Lab */}
          <div className="rounded-[2.5rem] border border-dashed border-white/10 bg-transparent flex flex-col items-center justify-center p-10 opacity-50 group cursor-not-allowed min-h-[320px]">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white/20 group-hover:text-white/40 transition-colors">
              <Lock size={24} />
            </div>
            <p className="text-xs font-black uppercase tracking-[4px] text-white/40">
              Expansion Pending
            </p>
            <p className="text-[10px] font-bold text-[#6b6490] mt-2 italic">
              New tracks: Design, Finance, Entrepreneurship, Data Science
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}