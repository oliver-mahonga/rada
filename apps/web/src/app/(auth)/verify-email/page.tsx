"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  RefreshCw,
  ExternalLink,
  ArrowLeft,
  Clock,
  Sparkles,
  Loader2,
  ShieldCheck,
} from "lucide-react";

export default function EmailVerificationPage() {
  const router = useRouter();
  const [resent, setResent] = useState(false);
  const [resending, setResending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [userEmail, setUserEmail] = useState("your email");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const savedEmail = localStorage.getItem("rada_user_email");
    const savedId = localStorage.getItem("rada_user_id");

    if (savedEmail) setUserEmail(savedEmail);
    if (savedId) setUserId(savedId);
  }, []);

  const checkVerificationStatus = async () => {
    const currentId = userId || localStorage.getItem("rada_user_id");

    if (!currentId) {
      alert("Session Error: Please try signing up again.");
      return;
    }

    setVerifying(true);

    try {
      // IMPORTANT: Using the /api prefix as shown in your Swagger
      const response = await fetch(
        `http://localhost:3001/auth/verify/${currentId}`,
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Verification check failed");
      }

      const data = await response.json();

      if (data.verified) {
        console.log("Access Granted. Redirecting to Onboarding...");
        router.push("/onboarding");
      } else {
        alert(
          "Verification Pending: Please confirm the link in your email first.",
        );
      }
    } catch (error: any) {
      console.error("Verification Error:", error);
      alert(error.message || "Connection failed. Is the backend running?");
    } finally {
      setVerifying(false);
    }
  };

  const handleResend = () => {
    setResending(true);
    setTimeout(() => {
      setResending(false);
      setResent(true);
      setTimeout(() => setResent(false), 4000);
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#07050f] flex items-center justify-center px-4 relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px] animate-pulse pointer-events-none" />

      <div className="relative w-full max-w-lg">
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-[2.5rem] blur opacity-20"></div>

        <div className="relative bg-[#0f0a1e]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="h-1.5 w-full bg-white/5 relative">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-violet-500 to-pink-500 animate-shimmer shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
          </div>

          <div className="px-8 py-12 flex flex-col items-center text-center">
            <div className="mb-10 flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg transform rotate-3">
                <span className="font-black text-xl text-white">R</span>
              </div>
              <span className="text-[10px] font-black tracking-[4px] uppercase text-violet-400/80">
                Rada University
              </span>
            </div>

            <div className="relative mb-10 group">
              <div className="absolute inset-0 rounded-full bg-violet-500/20 animate-ping opacity-20" />
              <div className="relative w-32 h-32 rounded-full bg-[#16102b] border-2 border-violet-500/30 flex items-center justify-center shadow-inner">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center border border-white/10">
                  <Mail size={40} className="text-white" strokeWidth={1.5} />
                </div>
                <Sparkles
                  className="absolute -top-2 -right-2 text-yellow-400 animate-pulse"
                  size={20}
                />
              </div>
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white mb-3">
              Check Your Inbox
            </h1>
            <p className="text-[#9d96be] text-sm font-medium max-w-xs leading-relaxed">
              An invitation to join the elite network was sent to:
            </p>

            <div className="mt-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 inline-block mb-8">
              <span className="text-sm text-violet-300 font-bold">
                {userEmail}
              </span>
            </div>

            <div className="w-full space-y-4">
              <button
                onClick={checkVerificationStatus}
                disabled={verifying}
                className="w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-black tracking-[2px] uppercase rounded-xl hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                {verifying ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  <ShieldCheck size={16} />
                )}
                Verify My Access
              </button>

              <a
                href="mailto:"
                className="group w-full py-4 bg-white text-[#07050f] text-xs font-black tracking-[2px] uppercase rounded-xl hover:bg-violet-100 transition-all flex items-center justify-center gap-3"
              >
                <ExternalLink size={16} />
                Launch Email App
              </a>

              <button
                onClick={handleResend}
                disabled={resending || resent}
                className="w-full py-4 bg-transparent border border-white/10 rounded-xl text-xs font-bold text-white/70 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-3"
              >
                {resending ? (
                  <RefreshCw
                    size={16}
                    className="animate-spin text-violet-400"
                  />
                ) : resent ? (
                  <span className="text-green-400">Protocol Resent ✓</span>
                ) : (
                  <>
                    <RefreshCw size={16} /> Resend Verification Key
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#6b6490] uppercase tracking-widest">
                <Clock size={12} />
                <span>Expires in 24 hours</span>
              </div>
              <Link
                href="/signup"
                className="flex items-center gap-2 text-xs font-bold text-violet-500 hover:text-pink-400 transition-all group"
              >
                <ArrowLeft
                  size={14}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Incorrect email address?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
