"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Sparkles, Activity } from "lucide-react";

// INTEGRATED COMPONENTS
import AIStrategyCard from "@/components/dashboard/mission-control/AIStrategyCard";
import DailyMissions from "@/components/dashboard/mission-control/DailyMissions";
import HeroSection from "@/components/dashboard/mission-control/HeroSection";
import QuickActions from "@/components/dashboard/mission-control/QuickActions";
import StatsGrid from "@/components/dashboard/mission-control/StatsGrid";
import RecommendedCourses from "@/components/dashboard/mission-control/RecommendedCourses";
import TabButton from "@/components/dashboard/mission-control/TabButton";
import ModelDiagnostics from "@/components/dashboard/mission-control/ModelDiagnostics";
// import ModelDiagnostics from "@/components/dashboard/ModelDiagnostics";

export default function MissionControl() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [serverData, setServerData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showDiagnostics, setShowDiagnostics] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const token = localStorage.getItem("rada_token");
        let userId = localStorage.getItem("rada_user_id");

        // Demo Fallback: If no user, default to the first one
        if (!userId) {
          userId = "550e8400-e29b-41d4-a716-446655440001";
          localStorage.setItem("rada_user_id", userId);
          localStorage.setItem("rada_token", "demo-token");
        }

        const response = await fetch(
          `http://localhost:3001/dashboard/${userId}`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );

        if (!response.ok) throw new Error("Backend synchronization failed");
        
        const data = await response.json();
        setServerData(data);
      } catch (err) {
        console.error("Neural Link Sync Error:", err);
      } finally {
        setLoading(false);
        setMounted(true);
      }
    }
    fetchDashboardData();
  }, [router]);

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-[#050310]">
        <Loader2 className="h-10 w-10 animate-spin text-violet-500" />
        <p className="mono text-[10px] uppercase tracking-[4px] text-white/40 mt-4">
          Synchronizing Neural Link...
        </p>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-[#050310] text-white pb-24 px-4 md:px-8 transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
    >
      {/* 1. Dynamic Hero Section with Top Recommendation */}
      <HeroSection
        mounted={mounted}
        pulseRing={true}
        canvasRef={canvasRef}
        topCourse={serverData?.recommendedCourses?.[0]}
      />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <TabButton label="Overview" active={true} onClick={() => {}} />
          <TabButton
            label="Labs"
            active={false}
            onClick={() => router.push("/courses")}
          />
        </div>

        {/* 2. Model Diagnostics Trigger Button */}
        <button 
          onClick={() => setShowDiagnostics(true)}
          className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-violet-600/10 border border-violet-500/20 hover:bg-violet-600 hover:border-violet-600 transition-all duration-500"
        >
          <Activity size={14} className="text-violet-400 group-hover:text-white" />
          <span className="mono text-[10px] font-black uppercase tracking-[3px] text-violet-100">
            View Inference Diagnostics
          </span>
          <Sparkles size={12} className="text-violet-400 group-hover:text-white animate-pulse" />
        </button>
      </div>

      <QuickActions />

      <StatsGrid xp={serverData?.xp ?? 0} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">
        <div className="xl:col-span-2 space-y-12">
          <RecommendedCourses
            courses={serverData?.recommendedCourses ?? []}
            onCourseClick={(id: string) => router.push(`/courses/${id}`)}
          />

          <DailyMissions missions={serverData?.missions ?? []} />
        </div>

        <div className="space-y-8">
          <AIStrategyCard
            readiness={serverData?.readiness ?? 0}
            completion={serverData?.completion ?? 0}
            streak={serverData?.streak ?? 0}
            aiMove={serverData?.aiStrategy?.move}
          />
        </div>
      </div>

      {/* 3. The Model Diagnostics Modal Overlay */}
      {showDiagnostics && (
        <ModelDiagnostics
          onClose={() => setShowDiagnostics(false)}
          analysisLogs={serverData?.neuralAnalysisLogs ?? []}
          userSkills={serverData?.skills ?? []}
        />
      )}
    </div>
  );
}