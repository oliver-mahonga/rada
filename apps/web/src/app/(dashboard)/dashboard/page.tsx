"use client";

import AIStrategyCard from "@/components/dashboard/mission-control/AIStrategyCard";
import DailyMissions from "@/components/dashboard/mission-control/DailyMissions";
import HeroSection from "@/components/dashboard/mission-control/HeroSection";
import IncomeTracks from "@/components/dashboard/mission-control/IncomeTracks";
import Leaderboard from "@/components/dashboard/mission-control/Leaderboard";
import MarketOpportunities from "@/components/dashboard/mission-control/MarketOpportunities";
import QuickActions from "@/components/dashboard/mission-control/QuickActions";
import RecentActivity from "@/components/dashboard/mission-control/RecentActivity";
import RecommendedCourses from "@/components/dashboard/mission-control/RecommendedCourses";
import StatsGrid from "@/components/dashboard/mission-control/StatsGrid";
import SummaryBar from "@/components/dashboard/mission-control/SummaryBar";
import TabButton from "@/components/dashboard/mission-control/TabButton";
import { useEffect, useRef, useState } from "react";
// import HeroSection from "./HeroSection";
// import QuickActions from "./QuickActions";
// import StatsGrid from "./StatsGrid";
// import RecommendedCourses from "./RecommendedCourses";
// import MarketOpportunities from "./MarketOpportunities";
// import DailyMissions from "./DailyMissions";
// import AIStrategyCard from "./AIStrategyCard";
// import IncomeTracks from "./IncomeTracks";
// import RecentActivity from "./RecentActivity";
// import Leaderboard from "./Leaderboard";
// import SummaryBar from "./SummaryBar";
// import TabButton from "./TabButton";

function useCounter(end: number, duration = 1800, start = 0) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (end - start) + start));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);

  return count;
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

type Tab =
  | "overview"
  | "courses"
  | "opportunities"
  | "earnings"
  | "community"
  | "ai-mentor";

export default function MissionControl() {
  const [mounted, setMounted] = useState(false);
  const [pulseRing, setPulseRing] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  const xp = useCounter(12800, 2200);
  const streak = useCounter(9, 1800);
  const completion = useCounter(74, 1800);
  const readiness = useCounter(87, 1800);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setPulseRing(true), 600);
    return () => clearTimeout(t);
  }, []);

  /* radar canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let angle = 0;
    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const r = cx - 8;

      [0.25, 0.5, 0.75, 1].forEach((scale) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r * scale, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(139,92,246,0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      ctx.strokeStyle = "rgba(139,92,246,0.1)";
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, canvas.height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(canvas.width, cy);
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      const cone = ctx.createLinearGradient(0, 0, r, 0);
      cone.addColorStop(0, "rgba(139,92,246,0.5)");
      cone.addColorStop(1, "rgba(139,92,246,0.0)");
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, r, -0.6, 0);
      ctx.closePath();
      ctx.fillStyle = cone;
      ctx.fill();
      ctx.restore();

      const bx = cx + r * 0.55 * Math.cos(angle - 0.2);
      const by = cy + r * 0.55 * Math.sin(angle - 0.2);
      ctx.beginPath();
      ctx.arc(bx, by, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#10b981";
      ctx.shadowColor = "#10b981";
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;

      angle += 0.015;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, [mounted]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;700&display=swap');

        * { font-family: 'Syne', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes float {
          from { transform: translateY(0px) translateX(0px); }
          to   { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes drawLine {
          from { stroke-dashoffset: 600; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(139,92,246,0.3); }
          50%       { border-color: rgba(236,72,153,0.5); }
        }
        @keyframes gridScroll {
          from { background-position: 0 0; }
          to   { background-position: 0 60px; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .card-glow:hover { box-shadow: 0 0 40px rgba(139,92,246,0.15); }
        .progress-bar { transition: width 1.5s cubic-bezier(0.16,1,0.3,1); }
        .hero-bg {
          background:
            radial-gradient(ellipse 80% 60% at 70% 20%, rgba(124,58,237,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 20% 80%, rgba(236,72,153,0.08) 0%, transparent 55%),
            #050310;
        }
        .grid-bg {
          background-image:
            linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: gridScroll 8s linear infinite;
        }
        .stat-num { font-variant-numeric: tabular-nums; }
      `}</style>

      <div
        className={cn(
          "min-h-screen bg-[#050310] text-white pb-24 px-4 md:px-8 transition-all duration-700",
          mounted ? "opacity-100" : "opacity-0"
        )}
      >
        <HeroSection
          mounted={mounted}
          pulseRing={pulseRing}
          canvasRef={canvasRef}
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          <TabButton
            label="Overview"
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          />
          <TabButton
            label="Courses"
            active={activeTab === "courses"}
            onClick={() => setActiveTab("courses")}
          />
          <TabButton
            label="Opportunities"
            active={activeTab === "opportunities"}
            onClick={() => setActiveTab("opportunities")}
          />
          <TabButton
            label="Earnings"
            active={activeTab === "earnings"}
            onClick={() => setActiveTab("earnings")}
          />
          <TabButton
            label="Community"
            active={activeTab === "community"}
            onClick={() => setActiveTab("community")}
          />
          <TabButton
            label="AI Mentor"
            active={activeTab === "ai-mentor"}
            onClick={() => setActiveTab("ai-mentor")}
          />
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <>
            <QuickActions />
            <StatsGrid xp={xp} />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
              <div className="xl:col-span-2 space-y-8">
                <RecommendedCourses mounted={mounted} />
                <MarketOpportunities />
                <DailyMissions />
              </div>

              <div className="space-y-8">
                <AIStrategyCard
                  readiness={readiness}
                  completion={completion}
                  streak={streak}
                />
                <IncomeTracks />
                <RecentActivity />
                <Leaderboard />
              </div>
            </div>

            <SummaryBar
              streak={streak}
              completion={completion}
              readiness={readiness}
            />
          </>
        )}

        {/* Courses */}
        {activeTab === "courses" && (
          <div className="space-y-8">
            <StatsGrid xp={xp} />
            <RecommendedCourses mounted={mounted} />
            <DailyMissions />
          </div>
        )}

        {/* Opportunities */}
        {activeTab === "opportunities" && (
          <div className="space-y-8">
            <MarketOpportunities />
            <AIStrategyCard
              readiness={readiness}
              completion={completion}
              streak={streak}
            />
          </div>
        )}

        {/* Earnings */}
        {activeTab === "earnings" && (
          <div className="space-y-8">
            <IncomeTracks />
            <MarketOpportunities />
            <SummaryBar
              streak={streak}
              completion={completion}
              readiness={readiness}
            />
          </div>
        )}

        {/* Community */}
        {activeTab === "community" && (
          <div className="space-y-8">
            <Leaderboard />
            <RecentActivity />
          </div>
        )}

        {/* AI Mentor */}
        {activeTab === "ai-mentor" && (
          <div className="space-y-8">
            <AIStrategyCard
              readiness={readiness}
              completion={completion}
              streak={streak}
            />
            <QuickActions />
          </div>
        )}
      </div>
    </>
  );
}