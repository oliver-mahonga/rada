"use client";

import { useEffect, useRef } from "react";
import { Globe, Play, Target, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSection({ mounted, pulseRing, canvasRef, topCourse }: any) {
  const router = useRouter();

  // --- NEURAL NETWORK ANIMATION LOGIC ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: any[] = [];
    const particleCount = 20;

    class Particle {
      x: number; y: number; vx: number; vy: number;
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.strokeStyle = "rgba(139, 92, 246, 0.2)";
      ctx!.lineWidth = 0.5;

      particles.forEach((p, i) => {
        p.update();
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 60) {
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(p2.x, p2.y);
            ctx!.stroke();
          }
        });
        ctx!.fillStyle = "rgba(139, 92, 246, 0.5)";
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx!.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, [canvasRef]);

  return (
    <section className="relative rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 bg-[#0a0520] p-10 md:p-16">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="mono text-[8px] font-bold text-emerald-400 uppercase tracking-widest">Neural Link Active</span>
            </div>
            {topCourse && (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                <Target size={10} className="text-violet-400" />
                <span className="mono text-[8px] font-bold text-violet-400 uppercase tracking-widest">
                  Match: {Math.round(topCourse.matchConfidence * 100)}%
                </span>
              </div>
            )}
          </div>

          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
            {topCourse ? (
              <>Recommended Vector:<br/><span className="text-violet-400">{topCourse.title}</span></>
            ) : (
              "Welcome to Mission Control"
            )}
          </h1>

          <div className="flex gap-4">
            <button 
              onClick={() => topCourse && router.push(`/courses/${topCourse.id}`)}
              className="px-8 py-4 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-[3px] hover:bg-violet-400 transition-all"
            >
              Start Deployment
            </button>
          </div>
        </div>

        <div className="relative flex flex-col items-center gap-4">
          <div className="w-48 h-48 rounded-full bg-black/40 border border-violet-500/30 relative overflow-hidden">
             <canvas ref={canvasRef} width={192} height={192} className="absolute inset-0" />
             <div className="absolute inset-0 flex items-center justify-center">
                <Globe size={32} className="text-violet-500/20" />
             </div>
          </div>
          <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl w-48">
             <div className="flex justify-between items-end">
                <div>
                  <p className="text-2xl font-black">+14%</p>
                  <p className="text-[8px] mono text-emerald-400 uppercase tracking-widest">Momentum</p>
                </div>
                <TrendingUp size={16} className="text-emerald-400 mb-1" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}