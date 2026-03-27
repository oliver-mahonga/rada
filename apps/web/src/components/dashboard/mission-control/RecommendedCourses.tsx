import { ChevronRight, GraduationCap } from "lucide-react";
import { RECOMMENDED_COURSES } from "./data";
import { Course } from "./types";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  mounted: boolean;
};

export default function RecommendedCourses({ mounted }: Props) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <GraduationCap size={16} className="text-violet-400" />
          <h2 className="text-xl font-extrabold uppercase tracking-tight">
            Recommended Courses
          </h2>
          <div className="h-px w-16 bg-white/10" />
        </div>
        <button className="group flex items-center gap-1.5 mono text-[9px] font-bold uppercase tracking-[3px] text-violet-400 hover:text-white transition-all">
          All Courses{" "}
          <ChevronRight
            size={11}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {RECOMMENDED_COURSES.map((course: Course, i) => (
          <div
            key={i}
            className="group relative rounded-[2rem] overflow-hidden border border-white/5 card-glow transition-all duration-300 bg-[#0a0520]"
            style={{
              animation: `fadeUp 0.7s ease-out ${0.2 + i * 0.1}s both`,
            }}
          >
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-20",
                course.accent
              )}
            />
            <div className="relative z-10 p-6">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-300">
                  {course.icon}
                </div>
                <span className="mono text-[9px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 uppercase tracking-[3px]">
                  {course.level}
                </span>
              </div>

              <p className="mono text-[9px] uppercase tracking-[3px] text-violet-400 mb-2">
                {course.category}
              </p>
              <h3 className="text-lg font-extrabold uppercase tracking-tight mb-3">
                {course.title}
              </h3>
              <p className="mono text-[10px] text-white/45 mb-5">
                {course.outcome}
              </p>

              <div className="space-y-2 mb-5">
                <div className="flex justify-between mono text-[9px] uppercase tracking-widest">
                  <span className="text-white/30">Progress</span>
                  <span className="text-white">{course.progress}%</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full bg-gradient-to-r progress-bar",
                      course.accent
                    )}
                    style={{ width: mounted ? `${course.progress}%` : "0%" }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="mono text-[9px] uppercase tracking-[3px] text-white/35">
                  {course.students} learners
                </p>
                <button className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white hover:text-black transition-all text-[10px] uppercase font-bold tracking-[3px]">
                  Open
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}