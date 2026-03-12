"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Navbar } from "@/components/dashboard/navbar";
import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#050308] overflow-hidden">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      {/* Dynamic Margin based on sidebar state */}
      <div className={cn(
        "flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out",
        isCollapsed ? "ml-20" : "ml-72"
      )}>
        <Navbar isCollapsed={isCollapsed} />
        
        {/* ── THE FIX: h-screen - 80px (navbar height) ── */}
        <main className="flex-1 overflow-y-auto mt-20 p-6 lg:p-10">
          <div className="max-w-[1600px] mx-auto animate-in fade-in duration-1000">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}