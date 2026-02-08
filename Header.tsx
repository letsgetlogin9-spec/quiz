
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center relative py-4">
      <div className="relative inline-flex items-center justify-center p-4 mb-6 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2rem] shadow-2xl shadow-blue-900/40 animate-bounce transition-all duration-1000">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 hover:opacity-100 transition-opacity rounded-full"></div>
      </div>
      <h1 className="text-5xl font-black text-white tracking-tighter mb-2">
        WebMaster <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Quiz</span>
      </h1>
      <div className="flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">
          Fundamental Series: CSS & HTML
        </p>
      </div>
    </header>
  );
};

export default Header;
