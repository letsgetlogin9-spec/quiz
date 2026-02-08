
import React, { useState } from 'react';

interface UserFormProps {
  onStart: (username: string) => void;
  onShowLeaderboard: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ onStart, onShowLeaderboard }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onStart(username.trim());
    }
  };

  return (
    <div className="glass rounded-[3rem] p-10 md:p-12 shadow-2xl border border-white/10 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-black text-white mb-4 tracking-tight">Forge Your Legacy</h2>
        <p className="text-slate-400 font-medium leading-relaxed max-w-sm mx-auto">
          20 Elite challenges testing your mastery of semantic <span className="text-blue-400 font-bold">HTML</span> and structural <span className="text-indigo-400 font-bold">CSS</span>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="group">
          <label htmlFor="username" className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3 ml-2 group-focus-within:text-blue-400 transition-colors">
            Identity Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 px-6 py-5 rounded-2xl text-white placeholder-slate-600 font-bold text-lg focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
              placeholder="e.g. FlexboxMaster"
              required
              autoFocus
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
               </svg>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="group relative w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 px-8 rounded-2xl shadow-xl shadow-blue-900/40 transition-all transform active:scale-[0.98] overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
            Initialize Assessment
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        <div className="flex items-center gap-4 py-2">
          <div className="flex-grow border-t border-white/5"></div>
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">or analyze scouts</span>
          <div className="flex-grow border-t border-white/5"></div>
        </div>

        <button
          type="button"
          onClick={onShowLeaderboard}
          className="w-full bg-white/5 hover:bg-white/10 text-slate-300 font-bold py-4 px-6 rounded-2xl border border-white/5 transition-all flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Global Hall of Fame
        </button>
      </form>
    </div>
  );
};

export default UserForm;
