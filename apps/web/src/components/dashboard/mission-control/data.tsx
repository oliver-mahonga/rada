import {
  Activity,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  CheckCircle2,
  Compass,
  Cpu,
  DollarSign,
  Flame,
  GraduationCap,
  MessageSquare,
  MonitorSmartphone,
  Play,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import {
  ActivityItem,
  Course,
  IncomeTrack,
  Leader,
  MarketOpportunity,
  Mission,
  QuickAction,
  Stat,
} from "./types";

export const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  width: `${Math.random() * 4 + 1}px`,
  height: `${Math.random() * 4 + 1}px`,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  background: ["#7c3aed", "#ec4899", "#f97316", "#10b981"][i % 4],
  opacity: Math.random() * 0.4 + 0.1,
  animation: `float ${Math.random() * 6 + 4}s ease-in-out ${
    Math.random() * 3
  }s infinite alternate`,
}));

export const STATS: Stat[] = [
  {
    label: "Courses Active",
    val: 7,
    suffix: "",
    icon: <BookOpen size={18} />,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    label: "Focus Hours",
    val: 42,
    suffix: "h",
    icon: <Activity size={18} />,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    label: "XP Earned",
    val: 128,
    suffix: "k",
    icon: <Sparkles size={18} />,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    label: "Global Rank",
    val: 2,
    suffix: "%",
    icon: <Target size={18} />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

export const QUICK_ACTIONS: QuickAction[] = [
  {
    title: "Continue Learning",
    desc: "Jump back into your current course.",
    icon: <Play size={18} />,
    color: "from-violet-600 to-fuchsia-600",
  },
  {
    title: "Browse Courses",
    desc: "Find the next high-income skill.",
    icon: <GraduationCap size={18} />,
    color: "from-blue-600 to-cyan-600",
  },
  {
    title: "Launch Business Plan",
    desc: "Start a guided business mission.",
    icon: <Briefcase size={18} />,
    color: "from-emerald-600 to-teal-600",
  },
  {
    title: "Talk to AI Mentor",
    desc: "Get strategic next-step recommendations.",
    icon: <Brain size={18} />,
    color: "from-orange-600 to-rose-600",
  },
];

export const RECOMMENDED_COURSES: Course[] = [
  {
    title: "Frontend Engineering Mastery",
    category: "Software Engineering",
    level: "Intermediate",
    progress: 68,
    students: "12.4k",
    outcome: "Build & ship modern apps",
    icon: <MonitorSmartphone size={18} />,
    accent: "from-blue-600 via-violet-600 to-indigo-700",
  },
  {
    title: "AI Automation for Business",
    category: "AI & Productivity",
    level: "Hot",
    progress: 22,
    students: "9.1k",
    outcome: "Automate work & client delivery",
    icon: <Brain size={18} />,
    accent: "from-fuchsia-600 via-pink-600 to-rose-700",
  },
  {
    title: "Copywriting & Sales Psychology",
    category: "Marketing",
    level: "Elite",
    progress: 45,
    students: "18.2k",
    outcome: "Sell products and services better",
    icon: <MessageSquare size={18} />,
    accent: "from-orange-600 via-rose-600 to-purple-700",
  },
  {
    title: "E-Commerce Growth System",
    category: "Online Business",
    level: "Beginner",
    progress: 12,
    students: "14.8k",
    outcome: "Launch & scale online stores",
    icon: <Wallet size={18} />,
    accent: "from-emerald-600 via-teal-600 to-cyan-700",
  },
];

export const MARKET_OPPORTUNITIES: MarketOpportunity[] = [
  {
    title: "Freelance Web Development",
    demand: "High demand",
    income: "$300 - $2,000 / project",
    trend: "+18%",
    fit: "Best for software & design learners",
    icon: <Rocket size={18} />,
  },
  {
    title: "AI Content Agency",
    demand: "Fast growing",
    income: "$500 - $5,000 / month",
    trend: "+24%",
    fit: "Best for marketing & AI learners",
    icon: <Brain size={18} />,
  },
  {
    title: "Digital Product Selling",
    demand: "Stable market",
    income: "$100 - $10,000+ / month",
    trend: "+14%",
    fit: "Best for creators & niche experts",
    icon: <DollarSign size={18} />,
  },
  {
    title: "Social Media Management",
    demand: "Strong demand",
    income: "$200 - $1,500 / client",
    trend: "+11%",
    fit: "Best for branding & communication",
    icon: <Users size={18} />,
  },
];

export const DAILY_MISSIONS: Mission[] = [
  {
    title: "Finish 1 lesson in Frontend Engineering",
    xp: "+150 XP",
    done: true,
    icon: <CheckCircle2 size={16} />,
  },
  {
    title: "Watch 20 mins of AI Automation module",
    xp: "+120 XP",
    done: false,
    icon: <Activity size={16} />,
  },
  {
    title: "Research one business niche to enter",
    xp: "+180 XP",
    done: false,
    icon: <Compass size={16} />,
  },
  {
    title: "Post or publish one monetizable skill update",
    xp: "+220 XP",
    done: false,
    icon: <TrendingUp size={16} />,
  },
];

export const INCOME_TRACKS: IncomeTrack[] = [
  {
    title: "Software Engineering",
    score: 91,
    subtitle: "High leverage • remote-friendly • scalable",
    icon: <Cpu size={18} />,
  },
  {
    title: "AI Services",
    score: 94,
    subtitle: "Fastest-growing opportunity lane",
    icon: <Brain size={18} />,
  },
  {
    title: "Sales & Copywriting",
    score: 86,
    subtitle: "Excellent for fast monetization",
    icon: <MessageSquare size={18} />,
  },
  {
    title: "E-Commerce",
    score: 83,
    subtitle: "Great for brand & product builders",
    icon: <Wallet size={18} />,
  },
];

export const LEADERS: Leader[] = [
  { name: "Alpha_Arc", xp: "142k", rank: 1, delta: "+18%", seed: "alpha" },
  { name: "Satoshi_V", xp: "128k", rank: 2, delta: "+11%", seed: "satoshi" },
  { name: "Jordan_R", xp: "12.8k", rank: 42, delta: "+12%", seed: "jordan", isUser: true },
];

export const RECENT_ACTIVITY: ActivityItem[] = [
  {
    title: "Completed: React State Management",
    time: "2h ago",
    icon: <CheckCircle2 size={16} className="text-emerald-400" />,
  },
  {
    title: "Unlocked: AI Business Systems",
    time: "Yesterday",
    icon: <Brain size={16} className="text-violet-400" />,
  },
  {
    title: "Recommended: Freelance Web Development",
    time: "Yesterday",
    icon: <Compass size={16} className="text-orange-400" />,
  },
  {
    title: "Mission streak updated to 9 days",
    time: "Today",
    icon: <Flame size={16} className="text-rose-400" />,
  },
];