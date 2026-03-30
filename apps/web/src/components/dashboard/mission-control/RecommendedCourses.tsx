"use client";
import { GraduationCap, Cpu, Terminal, Sparkles, Activity } from "lucide-react";

export default function RecommendedCourses({ courses, onCourseClick }: { courses: any[], onCourseClick: (id: string) => void }) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-violet-500/10 border border-violet-500/20 rounded-lg">
            <Activity size={18} className="text-violet-400" />
          </div>
          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter">Predictive Learning Labs</h2>
            <p className="text-[9px] mono text-white/30 uppercase tracking-[2px]">Algorithm: Jaccard Similarity Coefficient v2.1</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="group relative rounded-[2.5rem] p-8 border border-white/5 bg-[#0a0520]/40 backdrop-blur-2xl transition-all hover:border-violet-500/50"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-violet-400">
                {course.category?.toLowerCase() === 'ai' ? <Cpu size={24} /> : <Terminal size={24} />}
              </div>
              
              <div className="text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-2">
                  <Sparkles size={10} className="animate-pulse" />
                  <span className="mono text-[10px] font-black tracking-tight">
                    {Math.round((course.matchConfidence || 0) * 100)}% P(Match)
                  </span>
                </div>
                <p className="mono text-[8px] text-white/20 uppercase tracking-[2px]">Confidence Interval: High</p>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <span className="text-[10px] font-bold text-violet-500 uppercase tracking-[4px]">{course.category}</span>
              <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-violet-100 transition-colors">{course.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {course.tools?.map((tool: string) => (
                <span key={tool} className="text-[9px] mono uppercase px-3 py-1 bg-white/5 rounded-md text-white/40 border border-white/5 group-hover:border-violet-500/20">
                  {tool}
                </span>
              ))}
            </div>

            <button 
              onClick={() => onCourseClick(course.id)}
              className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all font-black text-[10px] uppercase tracking-[4px]"
            >
              Execute Deployment
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}