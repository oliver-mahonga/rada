"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Navbar } from "@/components/dashboard/navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#050308]">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      {/* Dynamic Margin based on sidebar state */}
      <div className={cn(
        "transition-all duration-300 ease-in-out",
        isCollapsed ? "ml-20" : "ml-72"
      )}>
        <Navbar isCollapsed={isCollapsed} />
        <main className="pt-24 p-6 lg:p-10 max-w-[1600px] mx-auto animate-in fade-in duration-1000">
          {children}
        </main>
      </div>
    </div>
  );
}