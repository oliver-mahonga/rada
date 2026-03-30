"use client";

import { useEffect, useMemo, useState } from "react";
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
  Loader2,
} from "lucide-react";

type Category = "all" | "ai" | "dev" | "crypto" | "sales";

// Updated to match your NestJS Service & Prisma Schema
type Course = {
  id: string;
  title: string;
  category: string;
  level: string;
  students: string;
  status: string;
  duration: string;
  lessons?: number;
  rating?: number;
  xp?: number;
  description: string;
  tools: string[];
  outcomes: string[];
};

const labCategories = [
  { id: "all", label: "All Sectors", icon: <Monitor size={14} /> },
  { id: "ai", label: "Neural AI", icon: <Cpu size={14} /> },
  { id: "dev", label: "Engineering", icon: <Code size={14} /> },
  { id: "crypto", label: "Economics", icon: <Coins size={14} /> },
  { id: "sales", label: "Persuasion", icon: <PenTool size={14} /> },
] satisfies { id: Category; label: string; icon: React.ReactNode }[];

export default function SkillLabs() {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. INTEGRATION: Fetch from NestJS Controller
  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch("http://localhost:3001/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Failed to sync with Skill Lab API:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  // 2. Dynamic UI Helpers
  const getCategoryTheme = (cat: string) => {
    const themes: any = {
      ai: { gradient: "from-blue-600/20 to-indigo-600/20", border: "border-blue-500/30", icon: <Cpu size={16} className="text-blue-400" /> },
      crypto: { gradient: "from-orange-600/20 to-amber-600/20", border: "border-orange-500/30", icon: <LineChart size={16} className="text-orange-400" /> },
      sales: { gradient: "from-pink-600/20 to-rose-600/20", border: "border-pink-500/30", icon: <Mic2 size={16} className="text-pink-400" /> },
      dev: { gradient: "from-emerald-600/20 to-teal-600/20", border: "border-emerald-500/30", icon: <Terminal size={16} className="text-emerald-400" /> },
    };
    return themes[cat] || themes.dev;
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesTab = activeTab === "all" || course.category === activeTab;
      const q = search.toLowerCase();
      return matchesTab && (course.title.toLowerCase().includes(q) || course.description.toLowerCase().includes(q));
    });
  }, [activeTab, search, courses]);

  if (loading) return (
    <div className="flex h-[60vh] items-center justify-center">
      <Loader2 className="animate-spin text-violet-500" size={40} />
    </div>
  );

  return (
    <div className="space-y-10 pb-24">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0b0717]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_30%)]" />
        <div className="relative z-10 px-6 py-10 md:px-10 md:py-14 lg:px-14">
          <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 mb-6">
                <Flame size={14} className="text-violet-400" />
                <span className="text-[10px] font-black tracking-[3px] uppercase text-violet-300">Mission Learning Core</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[0.92]">
                Skill Labs That Teach <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Real Skills</span>
              </h1>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <p className="text-[10px] uppercase tracking-[3px] text-white/40 font-black">Active Tracks</p>
                  <p className="text-xl font-black text-white mt-1">{courses.length}</p>
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <p className="text-[10px] uppercase tracking-[3px] text-white/40 font-black">Outcome Focus</p>
                  <p className="text-xl font-black text-emerald-400 mt-1">Income + Career</p>
                </div>
              </div>
            </div>

            {/* AI Insight Panel (Dynamic) */}
            <div className="w-full xl:w-[380px] rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center"><Sparkles size={18} /></div>
                <p className="text-sm font-bold">Neural Recommendations</p>
              </div>
              <div className="p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10">
                <p className="text-[10px] uppercase tracking-[3px] text-emerald-400 font-black">Model Status: Active</p>
                <p className="text-xs text-white mt-2 leading-relaxed">
                  System identified {filteredCourses.length} optimal pathways based on current dataset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH & FILTERS */}
      <section className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
        <div className="flex items-center gap-2 p-1.5 bg-[#0f0a1e] border border-white/5 rounded-[1.5rem] w-fit">
          {labCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                activeTab === tab.id ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white" : "text-[#6b6490] hover:text-white"
              )}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="bg-[#0f0a1e] border border-white/5 rounded-2xl py-3.5 pl-12 pr-6 text-xs text-white outline-none focus:border-violet-500/40 w-full sm:w-80"
          />
        </div>
      </section>

      {/* LAB GRID */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => {
            const theme = getCategoryTheme(course.category);
            return (
              <div key={course.id} className={cn("group relative overflow-hidden rounded-[2.5rem] border transition-all bg-[#0f0a1e]", theme.border)}>
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20", theme.gradient)} />
                <div className="relative z-10 p-8 md:p-10">
                  <div className="flex justify-between items-start mb-8">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest">{course.level}</span>
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-black uppercase tracking-widest">{course.status || "Operational"}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tighter italic">{course.title}</h3>
                  <p className="text-[#9b93b6] text-sm mb-6 line-clamp-2">{course.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-7">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                      <p className="text-[9px] uppercase tracking-[2px] text-white/30 font-black">Duration</p>
                      <p className="text-sm font-bold text-white mt-1">{course.duration}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                      <p className="text-[9px] uppercase tracking-[2px] text-white/30 font-black">XP Reward</p>
                      <p className="text-sm font-bold text-white mt-1">{course.xp || 1000}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                      <p className="text-[9px] uppercase tracking-[2px] text-white/30 font-black">Track</p>
                      <div className="flex items-center gap-2 mt-1">
                        {theme.icon}
                        <p className="text-sm font-bold text-white capitalize">{course.category}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-7">
                    <p className="text-[10px] font-black uppercase tracking-[3px] text-white/35 mb-3">Lab Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {course.tools?.map((tool, idx) => (
                        <div key={idx} className="px-3 py-2 rounded-xl bg-black/40 border border-white/5 text-[9px] font-black text-white/60 uppercase">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2">
                       <Users size={14} className="text-white/20" />
                       <span className="text-xs font-bold text-white/40">{course.students} Learners</span>
                    </div>
                    <Link href={`/courses/${course.id}`}>
                      <button className="flex items-center gap-3 px-6 py-3.5 bg-white text-black rounded-2xl font-black uppercase tracking-[2px] text-[10px] hover:scale-105 transition-all">
                        Enter Skill Lab <ArrowRight size={14} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-[2.5rem]">
             <p className="text-white/20 uppercase tracking-[4px] font-black">No Courses Found In Database</p>
             <p className="text-[10px] text-[#6b6490] mt-2 italic">Run `npx prisma db seed` to populate your research dataset.</p>
          </div>
        )}
      </section>
    </div>
  );
}