
import React from 'react';
import { QuizAttempt } from '../types';

interface LeaderboardProps {
  attempts: QuizAttempt[];
  onBack: () => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ attempts, onBack }) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  };

  return (
    <div className="glass rounded-[3rem] p-6 md:p-10 shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-500">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight">Hall of Fame</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Top Engineering Recruits</p>
        </div>
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-black text-blue-400 hover:text-blue-300 transition-colors bg-blue-400/5 px-4 py-2 rounded-xl border border-blue-400/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Home
        </button>
      </div>

      {attempts.length === 0 ? (
        <div className="text-center py-20 px-6 bg-white/[0.02] rounded-[2rem] border border-dashed border-white/10">
          <div className="text-6xl mb-6">🔭</div>
          <h3 className="text-xl font-bold text-white mb-2">The arena is empty</h3>
          <p className="text-slate-500 font-medium max-w-xs mx-auto mb-8">No one has dared the challenge yet. Be the first pioneer!</p>
          <button
            onClick={onBack}
            className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-lg shadow-blue-900/30 hover:bg-blue-500 transition-all transform active:scale-95"
          >
            Start Mission
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5">
                <th className="pb-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-4">Rank</th>
                <th className="pb-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-4">Recruit</th>
                <th className="pb-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-4 text-center">Score</th>
                <th className="pb-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-4 text-center">Efficiency</th>
                <th className="pb-5 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-4 text-right">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {attempts.slice(0, 10).map((attempt, idx) => (
                <tr key={idx} className="group hover:bg-white/[0.02] transition-all">
                  <td className="py-6 px-4">
                    <div className="flex items-center">
                      {idx < 3 ? (
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black shadow-lg ${
                          idx === 0 ? 'bg-gradient-to-br from-yellow-300 to-yellow-600 text-yellow-950 ring-4 ring-yellow-400/20' : 
                          idx === 1 ? 'bg-gradient-to-br from-slate-200 to-slate-400 text-slate-900 ring-4 ring-slate-400/20' : 
                          'bg-gradient-to-br from-orange-400 to-orange-700 text-orange-950 ring-4 ring-orange-500/20'
                        }`}>
                          {idx + 1}
                        </div>
                      ) : (
                        <span className="w-9 text-center font-black text-slate-600 text-sm">#{idx + 1}</span>
                      )}
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex flex-col">
                        <span className="font-black text-white group-hover:text-blue-400 transition-colors truncate max-w-[140px]">{attempt.username}</span>
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mt-0.5">Verified Attempt</span>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <div className="inline-flex flex-col items-center">
                        <span className="text-xl font-black text-blue-500 leading-none">{attempt.score}</span>
                        <span className="text-[9px] font-black text-slate-700 uppercase tracking-tighter mt-1">out of 20</span>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <span className="text-sm font-bold text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">{formatTime(attempt.timeSpent)}</span>
                  </td>
                  <td className="py-6 px-4 text-right">
                    <span className="text-[11px] font-bold text-slate-500">{formatDate(attempt.timestamp)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-10 p-5 bg-blue-500/5 rounded-2xl border border-blue-500/10 flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
             </div>
             <p className="text-xs font-bold text-slate-400 leading-relaxed">
               Rankings are calculated based on <span className="text-white">Accuracy</span> followed by <span className="text-white">Completion Speed</span>. Ties are broken by the fastest time.
             </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
