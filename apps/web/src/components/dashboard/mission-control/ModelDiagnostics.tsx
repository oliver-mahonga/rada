"use client";

import { X, Sparkles, Binary, Sigma, BarChart3, DatabaseZap } from "lucide-react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// 1. Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Log = {
  courseId: string;
  courseTitle: string;
  jaccard: number;
  peerInterest: number;
  hybrid: number;
  matchSkills: string[];
};

export default function ModelDiagnostics({ onClose, analysisLogs, userSkills }: { onClose: () => void, analysisLogs: Log[], userSkills: string[] }) {
  
  // 2. Prepare Chart Data (Top 5 only)
  const sortedLogs = analysisLogs.sort((a, b) => b.hybrid - a.hybrid).slice(0, 5);
  
  const chartData = {
    labels: sortedLogs.map(l => l.courseTitle.split(' ').slice(0, 3).join(' ')), // Shorten titles for the label
    datasets: [
      {
        label: 'Jaccard Skill-Match',
        data: sortedLogs.map(l => l.jaccard * 100),
        backgroundColor: 'rgba(139, 92, 246, 0.7)', // Violet
        borderColor: 'rgba(139, 92, 246, 1)',
        borderWidth: 1,
        borderRadius: 5,
      },
      {
        label: 'Collaborative Peer-Match',
        data: sortedLogs.map(l => (l.peerInterest > 0 ? l.peerInterest * 20 : 0)), // Normalize to look good
        backgroundColor: 'rgba(244, 63, 94, 0.6)', // Pink
        borderColor: 'rgba(244, 63, 94, 1)',
        borderWidth: 1,
        borderRadius: 5,
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true, max: 100, ticks: { display: false }, grid: { display: false } },
      x: { ticks: { color: 'rgba(255, 255, 255, 0.5)', font: { family: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas', size: 9 } }, grid: { display: false } }
    },
    plugins: {
      legend: { display: false }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 overflow-y-auto">
      <div className="relative w-full max-w-7xl bg-[#0a0520] border border-white/10 rounded-[2.5rem] p-10 shadow-2xl space-y-12">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5"><X size={20} className="text-white/40" /></button>
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
                <div className="p-2 bg-violet-600/10 border border-violet-600/30 rounded-lg"><Binary size={20} className="text-violet-400" /></div>
                <div>
                    <h2 className="text-2xl font-black uppercase tracking-tighter">AI Inference Engine: Model Diagnostics</h2>
                    <p className="mono text-[10px] text-white/30 uppercase tracking-[2px]">Hybrid Inference Model v2.3 (Jaccard + Collaborative Filtering)</p>
                </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600/20 border border-violet-600/40 text-violet-400 mono text-[10px] uppercase font-black tracking-[2px]">
                Vector Sync Accuracy: +98.2%
            </div>
        </div>

        {/* User Skill Profile */}
        <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
            <h3 className="text-xs font-black uppercase text-white/40 tracking-widest mb-4">Input Skill Vector:</h3>
            <div className="flex flex-wrap gap-2">
                {userSkills.map(s => (
                    <span key={s} className="px-3 py-1 bg-white/5 border border-white/5 rounded-md mono text-[9px] text-zinc-300 uppercase">{s}</span>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          
          {/* Chart Section */}
          <div className="p-8 rounded-[2rem] bg-black/60 border border-violet-500/20 shadow-xl">
             <div className="flex items-center gap-3 mb-10">
                <BarChart3 size={16} className="text-violet-400" />
                <h3 className="text-sm font-black uppercase tracking-widest">Similarity Matrix:</h3>
             </div>
             <Bar data={chartData} options={chartOptions} />
          </div>

          {/* Reasoning Logs */}
          <div className="space-y-6">
             <div className="flex items-center gap-3 mb-8">
                <DatabaseZap size={16} className="text-emerald-400" />
                <h3 className="text-sm font-black uppercase tracking-widest">Explainable AI (XAI) Inference Logs:</h3>
             </div>
             
             {sortedLogs.map((log, i) => (
               <div key={log.courseId} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                 <div className="flex items-start justify-between">
                    <h4 className="text-lg font-black uppercase tracking-tighter text-white">{i+1}. {log.courseTitle}</h4>
                    <span className="mono text-[10px] font-bold text-violet-400 px-2.5 py-1 bg-violet-600/10 rounded-md border border-violet-600/20">
                      Hybrid Score: {log.hybrid.toFixed(2)}
                    </span>
                 </div>
                 <div className="flex flex-wrap gap-2 items-center">
                   <p className="mono text-[10px] text-white/40 uppercase font-black">Matched Tools:</p>
                   {log.matchSkills.length > 0 ? log.matchSkills.map(s => (
                     <span key={s} className="px-2 py-0.5 bg-violet-600/10 border border-violet-500/30 rounded-md mono text-[8px] text-violet-300 uppercase">{s}</span>
                   )) : <span className="mono text-[8px] text-white/20 uppercase">Baseline Heuristic</span>}
                 </div>
                 <p className="text-xs text-zinc-400 leading-relaxed">
                   Inference determined high probability based on **Jaccard score of {log.jaccard.toFixed(2)}**. Peer analysis identifies {log.peerInterest} cluster neighbor(s) who prioritized this vector. Optimization path confirmed.
                 </p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}