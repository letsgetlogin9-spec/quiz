
import React, { useEffect } from 'react';

interface ResultProps {
  score: number;
  total: number;
  timeSpent: number;
  onViewLeaderboard: () => void;
}

const Result: React.FC<ResultProps> = ({ score, total, timeSpent, onViewLeaderboard }) => {
  const percentage = (score / total) * 100;
  
  useEffect(() => {
    if (percentage >= 80) {
      // @ts-ignore
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#8b5cf6', '#10b981']
      });
    }
  }, [percentage]);

  const getBadge = () => {
    if (percentage === 100) return { label: 'Grand Master', color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20', icon: '👑' };
    if (percentage >= 80) return { label: 'Web Expert', color: 'text-blue-400 bg-blue-400/10 border-blue-400/20', icon: '🚀' };
    if (percentage >= 50) return { label: 'Web Practitioner', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20', icon: '⚡' };
    return { label: 'Novice Builder', color: 'text-slate-400 bg-slate-400/10 border-slate-400/20', icon: '🌱' };
  };

  const badge = getBadge();
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="glass rounded-[3rem] p-10 shadow-2xl border border-white/10 text-center animate-in zoom-in slide-in-from-bottom-10 duration-700">
      <div className="mb-8 relative inline-block">
        <div className="text-7xl mb-4 relative z-10">{badge.icon}</div>
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
      </div>
      
      <h2 className="text-4xl font-black text-white mb-3 tracking-tight">Assessment Complete</h2>
      <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-10 border ${badge.color}`}>
        {badge.label}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="bg-white/[0.03] border border-white/5 p-8 rounded-[2rem] hover:bg-white/[0.05] transition-colors">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Final Accuracy</p>
          <div className="flex items-baseline justify-center gap-1">
            <p className="text-5xl font-black text-blue-500">{score}</p>
            <p className="text-xl font-bold text-slate-600">/ {total}</p>
          </div>
        </div>
        <div className="bg-white/[0.03] border border-white/5 p-8 rounded-[2rem] hover:bg-white/[0.05] transition-colors">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Completion Time</p>
          <p className="text-4xl font-black text-white">{formatTime(timeSpent)}</p>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex justify-between items-center mb-3 px-2">
            <span className="text-sm font-bold text-slate-400">Mastery Progress</span>
            <span className="text-sm font-black text-white">{percentage}%</span>
        </div>
        <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <button
        onClick={onViewLeaderboard}
        className="group relative w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 px-8 rounded-2xl shadow-xl shadow-blue-900/40 transition-all transform active:scale-[0.98] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <span className="relative flex items-center justify-center gap-3 text-lg">
          Claim Your Rank on Leaderboard
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Result;
