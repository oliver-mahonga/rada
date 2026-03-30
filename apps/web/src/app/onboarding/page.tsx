"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Camera,
  ArrowRight,
  CheckCircle2,
  User,
  Sparkles,
  Code,
  Brain,
  Coins,
  PenTool,
  BarChart3,
  Globe,
  Loader2,
  Quote,
  Target,
  Zap,
} from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const [profile, setProfile] = useState({
    avatar: null as string | null,
    bio: "",
    interests: [] as string[],
    experienceLevel: "beginner",
    primaryGoal: "",
  });

  // 1. Get User ID from localStorage on mount
  useEffect(() => {
    const savedId = localStorage.getItem("rada_user_id");
    if (!savedId) {
      // If no ID, they shouldn't be here
      router.push("/signup");
    } else {
      setUserId(savedId);
    }
  }, [router]);

  const skillOptions = [
    {
      id: "ai",
      label: "Artificial Intelligence",
      icon: <Brain size={16} />,
      color: "text-blue-400",
    },
    {
      id: "coding",
      label: "Software Engineering",
      icon: <Code size={16} />,
      color: "text-green-400",
    },
    {
      id: "crypto",
      label: "Bitcoin & Web3",
      icon: <Coins size={16} />,
      color: "text-orange-400",
    },
    {
      id: "copy",
      label: "Copywriting & Sales",
      icon: <PenTool size={16} />,
      color: "text-pink-400",
    },
    {
      id: "trading",
      label: "Financial Markets",
      icon: <BarChart3 size={16} />,
      color: "text-yellow-400",
    },
    {
      id: "marketing",
      label: "Digital Marketing",
      icon: <Globe size={16} />,
      color: "text-purple-400",
    },
  ];

  const handleInterestToggle = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter((i) => i !== id)
        : [...prev.interests, id],
    }));
  };

  // 2. Integrated API Sync Logic
  const syncProfileToBackend = async () => {
    if (!userId) return;
    setLoading(true);

    try {
      // Find this line inside syncProfileToBackend:
      const response = await fetch(
        `http://localhost:3001/onboarding/${userId}`,
        {
          // Removed /auth
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            bio: profile.bio,
            interests: profile.interests,
          }),
        },
      );

      if (!response.ok) throw new Error("Calibration failed");

      // Move to next UI step on success
      setStep((s) => s + 1);
    } catch (error) {
      alert("Failed to sync profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleNextStep = () => {
    if (step === 1 || step === 2) {
      syncProfileToBackend();
    } else {
      setStep((s) => s + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#07050f] text-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* BACKGROUND VISUALS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,10,41,1)_0%,_rgba(7,5,15,1)_100%)]" />
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full animate-pulse pointer-events-none" />

      <div className="w-full max-w-2xl relative z-10">
        {/* PROGRESS STATUS */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/5 border border-violet-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-ping" />
            <span className="text-[10px] font-black tracking-[4px] uppercase text-violet-400">
              Network Calibration: Step {step} of 3
            </span>
          </div>
          <div className="flex justify-center gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1.5 w-16 rounded-full transition-all duration-700 ${step >= i ? "bg-gradient-to-r from-violet-500 to-pink-500 shadow-[0_0_15px_rgba(139,92,246,0.6)]" : "bg-white/5"}`}
              />
            ))}
          </div>
        </div>

        {/* STEP 1: VISUAL & BIO */}
        {step === 1 && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="text-center">
              <h1 className="text-5xl font-black tracking-tighter mb-3">
                Sync Your Presence
              </h1>
              <p className="text-[#9d96be] font-medium max-w-sm mx-auto">
                Define how you are perceived within the Rada Core.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 bg-[#0f0a1e]/50 p-8 rounded-[2.5rem] border border-white/5 backdrop-blur-md">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-tr from-violet-600 to-pink-500 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative w-40 h-40 rounded-full bg-[#07050f] border-2 border-white/10 flex items-center justify-center overflow-hidden">
                  <User size={60} className="text-white/10" />
                  <label className="absolute inset-0 bg-violet-600/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center cursor-pointer">
                    <Camera size={24} />
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>

              <div className="w-full space-y-4">
                <div className="relative">
                  <Quote
                    className="absolute -top-3 -left-3 text-violet-500/20"
                    size={30}
                  />
                  <textarea
                    value={profile.bio}
                    onChange={(e) =>
                      setProfile({ ...profile, bio: e.target.value })
                    }
                    placeholder="Tell us about your drive..."
                    className="w-full bg-transparent border-b border-white/10 py-4 text-lg font-medium placeholder:text-white/20 outline-none focus:border-violet-500 transition-all resize-none h-32"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleNextStep}
              disabled={loading}
              className="w-full py-5 bg-white text-black font-black uppercase tracking-[4px] text-xs rounded-2xl flex items-center justify-center gap-3 active:scale-95"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={16} />
              ) : (
                <>
                  Confirm Profile Details <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>
        )}

        {/* STEP 2: SKILLS */}
        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="text-center">
              <h1 className="text-5xl font-black tracking-tighter mb-3">
                Skill Alignment
              </h1>
              <p className="text-[#9d96be] font-medium">
                Select high-income skills for your Rada path.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillOptions.map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => handleInterestToggle(skill.id)}
                  className={`p-6 rounded-3xl border-2 transition-all flex items-center gap-5 text-left group relative overflow-hidden ${
                    profile.interests.includes(skill.id)
                      ? "bg-violet-600/10 border-violet-500"
                      : "bg-[#0f0a1e] border-white/5"
                  }`}
                >
                  <div className={`p-4 rounded-2xl bg-black/40 ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <p className="text-base font-black tracking-tight">
                    {skill.label}
                  </p>
                </button>
              ))}
            </div>

            <button
              disabled={profile.interests.length === 0 || loading}
              onClick={handleNextStep}
              className="w-full py-5 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-black uppercase tracking-[4px] text-xs rounded-2xl flex items-center justify-center gap-3"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={16} />
              ) : (
                <>
                  Generate Custom Curriculum <Sparkles size={16} />
                </>
              )}
            </button>
          </div>
        )}

        {/* STEP 3: SUCCESS */}
        {step === 3 && (
          <div className="text-center space-y-10 animate-in zoom-in-95 duration-1000">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-violet-600 blur-[120px] opacity-40 animate-pulse" />
              <div className="w-40 h-40 rounded-[2.5rem] bg-gradient-to-br from-violet-600 to-indigo-900 flex items-center justify-center mx-auto border border-white/20 relative shadow-2xl">
                <Zap size={60} className="text-white fill-white" />
              </div>
            </div>
            <h1 className="text-6xl font-black tracking-tighter">
              Access Authorized
            </h1>
            <Link
              href="/dashboard"
              className="block w-full py-6 bg-white text-black font-black uppercase tracking-[5px] text-xs rounded-2xl mt-12"
            >
              Enter The Rada Core →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
