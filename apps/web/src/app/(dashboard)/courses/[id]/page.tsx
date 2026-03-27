"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Play,
  CheckCircle2,
  Cpu,
  MessageSquare,
  Zap,
  Maximize2,
  Mic2,
  Upload,
  X,
  Trophy,
  Activity,
  BookOpen,
  Clock3,
  Brain,
  FileText,
  ClipboardCheck,
  ArrowRight,
  Star,
  Video,
  TerminalSquare,
  BarChart3,
  Lightbulb,
  Sparkles,
  FolderKanban,
  Award,
  CirclePlay,
  Globe,
  ShieldCheck,
  Target,
  Users,
  GraduationCap,
  BriefcaseBusiness,
  WalletCards,
} from "lucide-react";

type Step = {
  id: number;
  title: string;
  duration: string;
  type: "video" | "lab" | "quiz" | "project";
  completed?: boolean;
};

type Resource = {
  title: string;
  type: string;
};

type Outcome = {
  title: string;
};

type Recommendation = {
  title: string;
  tag: string;
  icon: React.ReactNode;
};

export default function InternalLab() {
  const params = useParams();
  const [activeStep, setActiveStep] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "overview" | "lab" | "video" | "notes" | "project"
  >("overview");
  const [price, setPrice] = useState(98432.4);
  const [isRecording, setIsRecording] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [notes, setNotes] = useState("");
  const [mentorPrompt, setMentorPrompt] = useState("");

  const id = params.id?.toString().toLowerCase() || "";

  const isCrypto = id.includes("bitcoin") || id.includes("crypto");
  const isSales =
    id.includes("copywriting") ||
    id.includes("sales") ||
    id.includes("closing");
  const isAI = id.includes("llm") || id.includes("ai");
  const isDev = !isCrypto && !isSales && !isAI;

  useEffect(() => {
    if (!isCrypto) return;
    const interval = setInterval(() => {
      setPrice((p) => p + (Math.random() * 120 - 60));
    }, 2200);
    return () => clearInterval(interval);
  }, [isCrypto]);

  const courseMeta = useMemo(() => {
    if (isCrypto) {
      return {
        title: "Bitcoin Economics & Market Intelligence",
        category: "Finance / Crypto",
        level: "Intermediate",
        duration: "3h 42m",
        students: "8,412 learners",
        progress: 61,
        theme:
          "from-orange-500/20 via-amber-500/10 to-yellow-500/10 border-orange-500/20",
        accent: "text-orange-400",
        short:
          "Understand Bitcoin cycles, market structure, order flow, and long-term wealth positioning.",
        mentor:
          "You’re currently in a high-signal market intelligence module. Focus on price structure, liquidity zones, and cycle timing instead of reacting emotionally.",
      };
    }

    if (isSales) {
      return {
        title: "Copywriting, Persuasion & Sales Closing",
        category: "Marketing / Sales",
        level: "Advanced",
        duration: "4h 16m",
        students: "13,980 learners",
        progress: 47,
        theme:
          "from-pink-500/20 via-rose-500/10 to-fuchsia-500/10 border-pink-500/20",
        accent: "text-pink-400",
        short:
          "Master persuasion, objection handling, voice tonality, and high-converting offer presentation.",
        mentor:
          "Your biggest edge in sales is certainty and emotional control. Speak slower, reduce neediness, and lead the frame.",
      };
    }

    if (isAI) {
      return {
        title: "Applied AI Systems & LLM Engineering",
        category: "AI / Engineering",
        level: "Professional",
        duration: "5h 05m",
        students: "10,124 learners",
        progress: 38,
        theme:
          "from-blue-500/20 via-cyan-500/10 to-indigo-500/10 border-blue-500/20",
        accent: "text-blue-400",
        short:
          "Learn modern AI workflows, prompt systems, transformer concepts, and practical product integration.",
        mentor:
          "Move beyond theory. Think in terms of systems: prompt design, retrieval, evaluation, and business utility.",
      };
    }

    return {
      title: "Software Engineering Systems Lab",
      category: "Software Engineering",
      level: "Intermediate",
      duration: "4h 48m",
      students: "16,233 learners",
      progress: 72,
      theme:
        "from-violet-500/20 via-indigo-500/10 to-fuchsia-500/10 border-violet-500/20",
      accent: "text-violet-400",
      short:
        "Build production-grade engineering thinking through architecture, implementation, debugging, and deployment workflows.",
      mentor:
        "Don’t just code to finish. Code to design systems that scale, fail gracefully, and are easy to maintain.",
    };
  }, [isAI, isCrypto, isDev, isSales]);

  const steps: Step[] = useMemo(() => {
    if (isCrypto) {
      return [
        {
          id: 1,
          title: "Bitcoin Fundamentals & UTXO Model",
          duration: "12 min",
          type: "video",
          completed: true,
        },
        {
          id: 2,
          title: "Live Mempool & Liquidity Analysis",
          duration: "Interactive",
          type: "lab",
        },
        {
          id: 3,
          title: "Market Cycles & Halving Theory",
          duration: "16 min",
          type: "video",
        },
        {
          id: 4,
          title: "Risk Management Quiz",
          duration: "8 min",
          type: "quiz",
        },
        {
          id: 5,
          title: "Portfolio Strategy Project",
          duration: "Project",
          type: "project",
        },
      ];
    }

    if (isSales) {
      return [
        {
          id: 1,
          title: "Offer Framing & Positioning",
          duration: "10 min",
          type: "video",
          completed: true,
        },
        {
          id: 2,
          title: "AI Voice Roleplay Simulation",
          duration: "Interactive",
          type: "lab",
        },
        {
          id: 3,
          title: "Objection Handling Framework",
          duration: "14 min",
          type: "video",
        },
        {
          id: 4,
          title: "Sales Psychology Quiz",
          duration: "6 min",
          type: "quiz",
        },
        {
          id: 5,
          title: "Closing Script Submission",
          duration: "Project",
          type: "project",
        },
      ];
    }

    if (isAI) {
      return [
        {
          id: 1,
          title: "Transformer & Attention Basics",
          duration: "15 min",
          type: "video",
          completed: true,
        },
        {
          id: 2,
          title: "Prompt & Weight Sandbox",
          duration: "Interactive",
          type: "lab",
        },
        {
          id: 3,
          title: "Fine-tuning & Evaluation",
          duration: "18 min",
          type: "video",
        },
        {
          id: 4,
          title: "Prompt Engineering Assessment",
          duration: "9 min",
          type: "quiz",
        },
        {
          id: 5,
          title: "AI Workflow Build Project",
          duration: "Project",
          type: "project",
        },
      ];
    }

    return [
      {
        id: 1,
        title: "System Architecture Overview",
        duration: "11 min",
        type: "video",
        completed: true,
      },
      {
        id: 2,
        title: "Interactive Code Implementation",
        duration: "Interactive",
        type: "lab",
      },
      {
        id: 3,
        title: "Debugging & Performance Thinking",
        duration: "13 min",
        type: "video",
      },
      {
        id: 4,
        title: "Engineering Knowledge Check",
        duration: "7 min",
        type: "quiz",
      },
      {
        id: 5,
        title: "Mini Production Build",
        duration: "Project",
        type: "project",
      },
    ];
  }, [isAI, isCrypto, isSales]);

  const currentStep = steps.find((s) => s.id === activeStep) || steps[0];

  const resources: Resource[] = useMemo(() => {
    if (isCrypto) {
      return [
        { title: "Bitcoin Whitepaper Summary", type: "PDF" },
        { title: "Cycle Analysis Cheatsheet", type: "Notes" },
        { title: "Risk Management Template", type: "Worksheet" },
      ];
    }
    if (isSales) {
      return [
        { title: "Closing Script Framework", type: "PDF" },
        { title: "Objection Handling Prompts", type: "Notes" },
        { title: "Call Review Worksheet", type: "Worksheet" },
      ];
    }
    if (isAI) {
      return [
        { title: "Prompt Engineering Cheatsheet", type: "PDF" },
        { title: "LLM Evaluation Framework", type: "Notes" },
        { title: "AI Workflow Build Guide", type: "Worksheet" },
      ];
    }
    return [
      { title: "System Design Notes", type: "PDF" },
      { title: "Code Review Checklist", type: "Notes" },
      { title: "Mini Project Brief", type: "Worksheet" },
    ];
  }, [isAI, isCrypto, isSales]);

  const outcomes: Outcome[] = useMemo(() => {
    if (isCrypto) {
      return [
        { title: "Understand Bitcoin market structure" },
        { title: "Read price behavior with more confidence" },
        { title: "Build a rational long-term strategy" },
      ];
    }
    if (isSales) {
      return [
        { title: "Write stronger offers and sales scripts" },
        { title: "Handle objections with structure" },
        { title: "Close with more confidence and clarity" },
      ];
    }
    if (isAI) {
      return [
        { title: "Understand practical LLM workflows" },
        { title: "Design better prompts and AI systems" },
        { title: "Ship AI-powered tools with purpose" },
      ];
    }
    return [
      { title: "Think like a systems engineer" },
      { title: "Build cleaner and more scalable code" },
      { title: "Deliver production-ready solutions" },
    ];
  }, [isAI, isCrypto, isSales]);

  const recommendations: Recommendation[] = useMemo(() => {
    if (isCrypto) {
      return [
        { title: "Trading Psychology", tag: "Recommended", icon: <Brain size={16} /> },
        { title: "Personal Finance Systems", tag: "Money", icon: <WalletCards size={16} /> },
        { title: "Macro Economics Basics", tag: "Finance", icon: <BarChart3 size={16} /> },
      ];
    }
    if (isSales) {
      return [
        { title: "Personal Branding", tag: "Growth", icon: <Users size={16} /> },
        { title: "Offer Creation", tag: "Business", icon: <BriefcaseBusiness size={16} /> },
        { title: "Freelance Client Acquisition", tag: "Income", icon: <Target size={16} /> },
      ];
    }
    if (isAI) {
      return [
        { title: "Automation Systems", tag: "High Value", icon: <Cpu size={16} /> },
        { title: "AI Product Design", tag: "Build", icon: <Sparkles size={16} /> },
        { title: "Prompt Engineering Mastery", tag: "Core", icon: <Brain size={16} /> },
      ];
    }
    return [
      { title: "Next.js Fullstack", tag: "Core", icon: <GraduationCap size={16} /> },
      { title: "System Design", tag: "Advanced", icon: <Globe size={16} /> },
      { title: "Backend APIs & Databases", tag: "Career", icon: <ShieldCheck size={16} /> },
    ];
  }, [isAI, isCrypto, isSales]);

  const progressPercent = Math.round((activeStep / steps.length) * 100);

  return (
    <div className="min-h-[calc(100vh-120px)] text-white">
      <div className="grid grid-cols-1 xl:grid-cols-[320px_minmax(0,1fr)_340px] gap-6">
        {/* LEFT SIDEBAR */}
        <aside className="bg-[#0b0817] border border-white/5 rounded-[2rem] overflow-hidden h-fit xl:sticky xl:top-6">
          <div className="p-6 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg">
                <BookOpen size={20} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[3px] text-white/40 font-black">
                  Learning Lab
                </p>
                <p className="text-sm font-black uppercase tracking-tight text-white">
                  Course Sequence
                </p>
              </div>
            </div>

            <h2 className="text-lg font-black leading-tight tracking-tight">
              {courseMeta.title}
            </h2>
            <p className="text-xs text-white/40 mt-2 leading-relaxed">
              {courseMeta.short}
            </p>

            <div className="mt-5">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[2px] font-black text-white/40 mb-2">
                <span>Course Progress</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-400 transition-all duration-700"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              const isDone = !!step.completed || activeStep > step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(step.id);
                    if (step.type === "video") setActiveTab("video");
                    else if (step.type === "project") setActiveTab("project");
                    else if (step.type === "lab") setActiveTab("lab");
                    else setActiveTab("overview");
                  }}
                  className={cn(
                    "w-full p-4 rounded-2xl border transition-all text-left group",
                    isActive
                      ? "bg-white/[0.05] border-white/15 shadow-lg"
                      : "bg-transparent border-transparent hover:bg-white/[0.03]"
                  )}
                >
                  <div className="flex gap-4 items-start">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border mt-0.5",
                        isActive
                          ? "bg-white text-black border-white"
                          : isDone
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : "bg-white/5 text-white/40 border-white/10"
                      )}
                    >
                      {isDone ? (
                        <CheckCircle2 size={15} />
                      ) : (
                        <span className="text-[11px] font-black">{step.id}</span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p
                        className={cn(
                          "text-[11px] font-black uppercase tracking-wide leading-snug",
                          isActive ? "text-white" : "text-white/70"
                        )}
                      >
                        {step.title}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-[9px] uppercase tracking-[2px] text-white/30 font-bold">
                          {step.duration}
                        </span>
                        <span className="text-[9px] uppercase tracking-[2px] text-violet-400 font-bold">
                          {step.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* CENTER CONTENT */}
        <main className="bg-[#050308] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[780px]">
          {/* Header */}
          <div className="border-b border-white/5 bg-white/[0.02] px-6 md:px-8 py-5">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[2px] font-black text-white/50">
                    {courseMeta.category}
                  </span>
                  <span className={cn("text-[10px] uppercase tracking-[3px] font-black", courseMeta.accent)}>
                    {courseMeta.level}
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight">
                  {currentStep.title}
                </h1>
                <p className="text-sm text-white/40 mt-2 max-w-2xl">
                  Learn with guided structure, interactive tools, AI support, and project-based validation.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[2px] font-black text-white/50">
                    Lab Online
                  </span>
                </div>
                <button className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                  <Maximize2 size={16} className="text-white/70" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { key: "overview", label: "Overview", icon: <FileText size={14} /> },
                { key: "lab", label: "Interactive Lab", icon: <TerminalSquare size={14} /> },
                { key: "video", label: "Lesson Video", icon: <Video size={14} /> },
                { key: "notes", label: "Notes", icon: <BookOpen size={14} /> },
                { key: "project", label: "Project", icon: <FolderKanban size={14} /> },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={cn(
                    "px-4 py-2.5 rounded-2xl border text-[11px] uppercase tracking-[2px] font-black transition-all flex items-center gap-2",
                    activeTab === tab.key
                      ? "bg-white text-black border-white"
                      : "bg-white/[0.02] border-white/10 text-white/60 hover:text-white hover:bg-white/[0.05]"
                  )}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main content area */}
          <div className="p-6 md:p-8">
            {/* OVERVIEW */}
            {activeTab === "overview" && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div
                  className={cn(
                    "rounded-[2rem] border bg-gradient-to-br p-7",
                    courseMeta.theme
                  )}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="max-w-2xl">
                      <p className="text-[10px] uppercase tracking-[3px] font-black text-white/40 mb-3">
                        Current Lesson Brief
                      </p>
                      <h3 className="text-2xl font-black uppercase tracking-tight mb-3">
                        Learn deeply. Apply immediately.
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        This lesson is designed to help the learner understand
                        the concept clearly, interact with it practically, and
                        submit something measurable at the end — not just watch
                        and forget.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 min-w-[260px]">
                      <div className="rounded-2xl bg-black/20 border border-white/10 p-4">
                        <p className="text-[10px] uppercase tracking-[2px] text-white/30 font-black">
                          Duration
                        </p>
                        <p className="text-lg font-black mt-2">{courseMeta.duration}</p>
                      </div>
                      <div className="rounded-2xl bg-black/20 border border-white/10 p-4">
                        <p className="text-[10px] uppercase tracking-[2px] text-white/30 font-black">
                          Learners
                        </p>
                        <p className="text-lg font-black mt-2">{courseMeta.students}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <div className="rounded-[2rem] border border-white/5 bg-[#0c0916] p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <Target size={18} className="text-violet-400" />
                      <h3 className="text-lg font-black uppercase tracking-tight">
                        Learning Outcomes
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {outcomes.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                        >
                          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                            <CheckCircle2 size={15} />
                          </div>
                          <p className="text-sm text-white/80 leading-relaxed">
                            {item.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/5 bg-[#0c0916] p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <ClipboardCheck size={18} className="text-orange-400" />
                      <h3 className="text-lg font-black uppercase tracking-tight">
                        Lesson Resources
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {resources.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                        >
                          <div>
                            <p className="text-sm font-bold text-white">{item.title}</p>
                            <p className="text-[10px] uppercase tracking-[2px] text-white/30 font-black mt-1">
                              {item.type}
                            </p>
                          </div>
                          <button className="px-4 py-2 rounded-xl bg-white text-black text-[10px] uppercase tracking-[2px] font-black hover:scale-105 transition-all">
                            Open
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/5 bg-[#0c0916] p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <Lightbulb size={18} className="text-yellow-400" />
                    <h3 className="text-lg font-black uppercase tracking-tight">
                      Recommended Next
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {recommendations.map((item, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all"
                      >
                        <div className="w-10 h-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4">
                          {item.icon}
                        </div>
                        <p className="text-sm font-black uppercase tracking-tight">
                          {item.title}
                        </p>
                        <p className="text-[10px] uppercase tracking-[2px] text-white/30 font-black mt-2">
                          {item.tag}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* LAB */}
            {activeTab === "lab" && (
              <div className="animate-in fade-in duration-500">
                {/* CRYPTO LAB */}
                {isCrypto && (
                  <div className="rounded-[2rem] border border-white/5 bg-[#0c0916] p-8">
                    <div className="text-center mb-10">
                      <p className="text-5xl font-black tracking-tight">
                        ${price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </p>
                      <p className="text-[10px] uppercase tracking-[4px] font-black text-orange-400 mt-3">
                        Simulated Market Pulse
                      </p>
                    </div>

                    <div className="relative h-56 w-full flex items-end gap-2 px-2">
                      {[42, 55, 60, 45, 75, 68, 82, 58, 90, 70, 96, 88, 74, 64, 80, 92].map(
                        (h, i) => (
                          <div
                            key={i}
                            style={{ height: `${h}%` }}
                            className="flex-1 rounded-t-xl bg-gradient-to-t from-orange-500/40 to-orange-300/5 border-t border-orange-400/50"
                          />
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* SALES LAB */}
                {isSales && (
                  <div className="rounded-[2rem] border border-white/5 bg-[#0c0916] p-8 flex flex-col items-center justify-center min-h-[500px]">
                    <div
                      className={cn(
                        "w-52 h-52 rounded-full border-4 flex items-center justify-center transition-all duration-700 relative",
                        isRecording
                          ? "border-pink-500 shadow-[0_0_120px_rgba(236,72,153,0.2)] scale-105"
                          : "border-white/10"
                      )}
                    >
                      {isRecording && (
                        <div className="absolute inset-0 rounded-full border border-pink-500/40 animate-ping" />
                      )}
                      <Mic2
                        size={54}
                        className={isRecording ? "text-pink-500" : "text-white/20"}
                      />
                    </div>

                    <div className="mt-10 text-center max-w-xl">
                      <h3 className="text-2xl font-black uppercase tracking-tight">
                        AI Voice Roleplay
                      </h3>
                      <p className="text-sm text-white/50 mt-3 leading-relaxed">
                        Practice verbal persuasion, confidence, objection handling,
                        and closing tone. Use this mode to simulate real sales calls.
                      </p>
                    </div>
                  </div>
                )}

                {/* AI LAB */}
                {isAI && (
                  <div className="rounded-[2rem] border border-white/5 bg-[#0c0916] p-8 min-h-[500px] flex flex-col items-center justify-center">
                    <div className="flex gap-8 items-center">
                      {[1, 2, 3].map((layer) => (
                        <div key={layer} className="space-y-4">
                          {[1, 2, 3, 4].map((node) => (
                            <div
                              key={node}
                              className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-black text-[11px] animate-pulse"
                            >
                              {Math.floor(Math.random() * 99)}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 text-center">
                      <h3 className="text-xl font-black uppercase tracking-tight">
                        Prompt & Model Thinking Sandbox
                      </h3>
                      <p className="text-[11px] text-blue-400 uppercase tracking-[3px] font-black mt-3">
                        Attention / Context / Output Optimization
                      </p>
                    </div>
                  </div>
                )}

                {/* DEV LAB */}
                {isDev && (
                  <div className="rounded-[2rem] border border-white/5 bg-[#0d0d12] p-8 min-h-[500px] font-mono text-sm relative overflow-hidden">
                    <div className="space-y-3 text-white/70">
                      <p className="text-emerald-400 opacity-60">
                        // System: Initializing production learning environment
                      </p>
                      <p className="text-violet-400">
                        async function <span className="text-blue-400">deployCore</span>() {"{"}
                      </p>
                      <p className="pl-6">
                        const <span className="text-orange-400">status</span> = await{" "}
                        <span className="text-yellow-400">syncCluster</span>();
                      </p>
                      <p className="pl-6">
                        const <span className="text-cyan-400">report</span> = await{" "}
                        <span className="text-green-400">validateBuild</span>();
                      </p>
                      <p className="pl-6 text-emerald-400 italic">
                        return status === "READY" && report.ok ? 200 : 500;
                      </p>
                      <p className="text-violet-400">{"}"}</p>
                      <div className="h-5 w-1 bg-violet-500 animate-pulse inline-block" />
                    </div>

                    <button className="absolute bottom-8 right-8 px-6 py-3 bg-white text-black rounded-2xl font-black text-[11px] uppercase tracking-[2px] hover:scale-105 transition-transform">
                      Run Learning Sandbox
                    </button>
                  </div>
                )}

                <div className="mt-6">
                  {isSales ? (
                    <button
                      onClick={() => setIsRecording(!isRecording)}
                      className={cn(
                        "w-full py-5 rounded-[1.5rem] font-black uppercase tracking-[4px] text-xs transition-all flex items-center justify-center gap-4",
                        isRecording
                          ? "bg-pink-600 text-white shadow-[0_0_30px_rgba(219,39,119,0.25)]"
                          : "bg-white text-black"
                      )}
                    >
                      {isRecording ? "Stop Roleplay Session" : "Start Roleplay Session"}{" "}
                      <Zap size={14} fill="currentColor" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowSubmitModal(true)}
                      className="w-full py-5 bg-white text-black rounded-[1.5rem] font-black uppercase tracking-[4px] text-xs hover:scale-[1.01] transition-all flex items-center justify-center gap-4 shadow-xl"
                    >
                      Open Assignment Submission <Upload size={14} />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* VIDEO */}
            {activeTab === "video" && (
              <div className="animate-in fade-in duration-500">
                <div className="h-[500px] w-full rounded-[2rem] bg-black border border-white/10 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-transparent to-fuchsia-950/20" />
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-105 transition-all">
                    <CirclePlay size={40} className="text-white fill-current" />
                  </div>

                  <div className="absolute bottom-8 left-8">
                    <p className="text-[10px] uppercase tracking-[3px] text-white/40 font-black mb-2">
                      Lesson Video
                    </p>
                    <p className="text-2xl font-black uppercase tracking-tight">
                      {currentStep.title}
                    </p>
                    <p className="text-sm text-white/40 mt-2">
                      Structured lesson video with guided explanation, examples, and action points.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {[
                    { label: "Video Length", value: currentStep.duration, icon: <Clock3 size={16} /> },
                    { label: "Lesson Type", value: currentStep.type.toUpperCase(), icon: <Video size={16} /> },
                    { label: "Completion", value: `${progressPercent}%`, icon: <Award size={16} /> },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/5 bg-[#0c0916] p-5"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4">
                        {item.icon}
                      </div>
                      <p className="text-[10px] uppercase tracking-[2px] text-white/30 font-black">
                        {item.label}
                      </p>
                      <p className="text-lg font-black mt-2">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NOTES */}
            {activeTab === "notes" && (
              <div className="animate-in fade-in duration-500">
                <div className="rounded-[2rem] border border-white/5 bg-[#0c0916] p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <BookOpen size={18} className="text-violet-400" />
                    <h3 className="text-lg font-black uppercase tracking-tight">
                      Personal Learning Notes
                    </h3>
                  </div>

                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Write down important ideas, formulas, project notes, business ideas, or revision points here..."
                    className="w-full min-h-[380px] rounded-[1.5rem] bg-black/20 border border-white/10 p-5 text-sm text-white outline-none resize-none placeholder:text-white/20 focus:border-violet-500/40 transition-all"
                  />

                  <div className="mt-5 flex justify-end">
                    <button className="px-6 py-3 rounded-2xl bg-white text-black text-[11px] uppercase tracking-[2px] font-black hover:scale-105 transition-all">
                      Save Notes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* PROJECT */}
            {activeTab === "project" && (
              <div className="animate-in fade-in duration-500 space-y-6">
                <div className="rounded-[2rem] border border-white/5 bg-[#0c0916] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FolderKanban size={18} className="text-emerald-400" />
                    <h3 className="text-lg font-black uppercase tracking-tight">
                      Practical Project
                    </h3>
                  </div>

                  <p className="text-sm text-white/60 leading-relaxed">
                    Every premium course should end in proof of work. This section
                    helps the learner submit something tangible — a repo, document,
                    recording, portfolio artifact, strategy, or implementation.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    {[
                      "Understand the concept",
                      "Apply it in a practical task",
                      "Submit for validation",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-white/5 bg-white/[0.02] p-5"
                      >
                        <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                          <CheckCircle2 size={16} />
                        </div>
                        <p className="text-sm font-bold text-white">{item}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowSubmitModal(true)}
                    className="mt-6 w-full py-5 bg-white text-black rounded-[1.5rem] font-black uppercase tracking-[4px] text-xs hover:scale-[1.01] transition-all flex items-center justify-center gap-4 shadow-xl"
                  >
                    Submit Project Work <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-6 h-fit xl:sticky xl:top-6">
          {/* AI Mentor */}
          <div className="bg-[#0b0817] border border-white/5 rounded-[2rem] p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <Brain size={20} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[3px] text-white/40 font-black">
                  AI Mentor
                </p>
                <p className="text-sm font-black uppercase tracking-tight text-white">
                  Personalized Guidance
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-violet-500/10 bg-violet-500/5 p-4 text-sm text-white/75 leading-relaxed">
              {courseMeta.mentor}
            </div>

            <div className="space-y-4 pt-6 mt-6 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-[3px] text-white/30 font-black">
                Real-time Diagnostics
              </p>

              {[
                { label: "Comprehension", value: 81, color: "bg-blue-500" },
                { label: "Practical Readiness", value: 73, color: "bg-emerald-500" },
                { label: "Momentum", value: 89, color: "bg-orange-500" },
              ].map((s, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase tracking-[2px] text-white/40 font-black">
                    <span>{s.label}</span>
                    <span>{s.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={cn("h-full transition-all duration-1000", s.color)}
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 relative">
              <input
                value={mentorPrompt}
                onChange={(e) => setMentorPrompt(e.target.value)}
                placeholder="Ask AI mentor a question..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-[11px] font-bold text-white outline-none focus:border-violet-500/50 transition-all placeholder:text-white/20 pr-12"
              />
              <MessageSquare
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20"
                size={16}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="bg-[#0b0817] border border-white/5 rounded-[2rem] p-6">
            <div className="flex items-center gap-3 mb-5">
              <BarChart3 size={18} className="text-emerald-400" />
              <h3 className="text-lg font-black uppercase tracking-tight">
                Learning Stats
              </h3>
            </div>

            <div className="space-y-4">
              {[
                { label: "Current XP Reward", value: "+500 XP", icon: <Trophy size={15} /> },
                { label: "Completion Streak", value: "9 Days", icon: <Star size={15} /> },
                { label: "Lesson Mode", value: "Interactive", icon: <Activity size={15} /> },
                { label: "Career Relevance", value: "High", icon: <BriefcaseBusiness size={15} /> },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      {item.icon}
                    </div>
                    <p className="text-sm font-bold text-white">{item.label}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-[2px] text-white/40 font-black">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Assignment CTA */}
          <div className="bg-gradient-to-br from-violet-600/15 via-fuchsia-600/10 to-orange-500/10 border border-violet-500/20 rounded-[2rem] p-6">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white mb-4">
              <Award size={20} />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight">
              Finish Strong
            </h3>
            <p className="text-sm text-white/60 mt-3 leading-relaxed">
              Complete the lab, submit your project, and unlock rewards, proof-of-skill, and better recommendations.
            </p>
            <button
              onClick={() => setShowSubmitModal(true)}
              className="mt-5 w-full py-4 rounded-2xl bg-white text-black text-[11px] uppercase tracking-[2px] font-black hover:scale-105 transition-all"
            >
              Submit Final Work
            </button>
          </div>
        </aside>
      </div>

      {/* SUBMIT MODAL */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => setShowSubmitModal(false)}
          />
          <div className="relative w-full max-w-2xl bg-[#0f0a1e] border border-white/10 rounded-[2.5rem] p-8 md:p-10 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400" />

            <button
              onClick={() => setShowSubmitModal(false)}
              className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-3xl bg-violet-600/20 flex items-center justify-center text-violet-400 mx-auto mb-5 border border-violet-500/30">
                <Upload size={28} />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-2">
                Project Submission
              </h2>
              <p className="text-sm text-white/40 max-w-xl mx-auto">
                Upload your practical work, notes, GitHub repository, voice recording,
                or final project proof for validation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 border-2 border-dashed border-white/10 rounded-3xl hover:border-violet-500/30 transition-all cursor-pointer group bg-white/[0.02]">
                <p className="text-[11px] font-black text-white/30 uppercase tracking-[3px] text-center group-hover:text-violet-400">
                  Drag & Drop Assignment / Project Files
                </p>
              </div>

              <input
                placeholder="Paste GitHub repo, deployment link, Loom, or document URL..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-sm font-medium text-white outline-none focus:border-violet-500/40 placeholder:text-white/20"
              />

              <textarea
                placeholder="Write a short summary of what you built, learned, or submitted..."
                className="w-full min-h-[140px] bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-sm font-medium text-white outline-none focus:border-violet-500/40 placeholder:text-white/20 resize-none"
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