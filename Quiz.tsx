
import React, { useState, useEffect } from 'react';
import { Question } from '../types';

interface QuizProps {
  question: Question;
  index: number;
  total: number;
  onAnswer: (optionIndex: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ question, index, total, onAnswer }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);
  const progress = ((index) / total) * 100;

  useEffect(() => {
    setSelected(null);
    setIsRevealing(false);
  }, [question]);

  const handleSelect = (idx: number) => {
    if (isRevealing) return;
    setSelected(idx);
    setIsRevealing(true);
    
    // Brief pause to show correct/incorrect answer
    setTimeout(() => {
      onAnswer(idx);
    }, 1200);
  };

  return (
    <div className="glass rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-500">
      {/* Progress Section */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-3">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-1">
              Current Module
            </span>
            <span className="text-sm font-bold text-white">
              {question.category === 'html' ? 'HTML Structural Semantics' : 'CSS Visual Formatting'}
            </span>
          </div>
          <span className="text-xs font-mono font-bold text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
            {index + 1} <span className="text-slate-600 mx-1">/</span> {total}
          </span>
        </div>
        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-[1.3] tracking-tight">
          {question.text}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option, idx) => {
          let stateClass = "border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20";
          let icon = String.fromCharCode(65 + idx);
          
          if (isRevealing) {
            if (idx === question.correctAnswer) {
              stateClass = "border-emerald-500/50 bg-emerald-500/10 text-emerald-400 ring-4 ring-emerald-500/10 scale-[1.02]";
              icon = "✓";
            } else if (selected === idx && idx !== question.correctAnswer) {
              stateClass = "border-rose-500/50 bg-rose-500/10 text-rose-400 scale-[0.98]";
              icon = "✕";
            } else {
              stateClass = "border-white/5 opacity-40";
            }
          } else if (selected === idx) {
            stateClass = "border-blue-500 bg-blue-500/20 text-blue-100 ring-4 ring-blue-500/10";
          }

          return (
            <button
              key={idx}
              disabled={isRevealing}
              onClick={() => handleSelect(idx)}
              className={`option-btn group w-full text-left px-6 py-5 rounded-2xl border-2 transition-all flex items-center ${stateClass}`}
            >
              <span className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl mr-5 text-sm font-black border-2 transition-all ${
                isRevealing && idx === question.correctAnswer 
                  ? 'bg-emerald-500 border-emerald-500 text-white' 
                  : isRevealing && selected === idx 
                    ? 'bg-rose-500 border-rose-500 text-white'
                    : selected === idx 
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'bg-white/5 border-white/5 text-slate-400 group-hover:border-white/20 group-hover:text-white'
              }`}>
                {icon}
              </span>
              <span className="font-semibold text-lg">{option}</span>
            </button>
          );
        })}
      </div>
      
      {isRevealing && (
        <div className="mt-8 text-center animate-bounce">
          <span className="text-slate-400 text-sm font-medium italic">Analyzing response...</span>
        </div>
      )}
    </div>
  );
};

export default Quiz;
