
import React, { useState, useEffect, useCallback } from 'react';
import { AppState, QuizAttempt } from './types';
import { QUESTIONS } from './constants';
import { saveAttempt, hasUserTakenQuiz, getLeaderboard } from './services/storage';

// Component definitions outside App to prevent re-rendering issues
import Header from './components/Header';
import UserForm from './components/UserForm';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Leaderboard from './components/Leaderboard';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>({
    view: 'welcome',
    currentUser: null,
    currentQuestionIndex: 0,
    answers: [],
    startTime: null,
    endTime: null,
  });

  const handleStartQuiz = (username: string) => {
    if (hasUserTakenQuiz(username)) {
      alert("You have already taken this quiz! Only one attempt is allowed.");
      return;
    }
    setState(prev => ({
      ...prev,
      view: 'quiz',
      currentUser: username,
      startTime: Date.now(),
      currentQuestionIndex: 0,
      answers: [],
    }));
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...state.answers, optionIndex];
    if (state.currentQuestionIndex < QUESTIONS.length - 1) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        answers: newAnswers,
      }));
    } else {
      const finishTime = Date.now();
      const timeSpent = Math.round((finishTime - (state.startTime || 0)) / 1000);
      
      let finalScore = 0;
      QUESTIONS.forEach((q, idx) => {
        if (newAnswers[idx] === q.correctAnswer) finalScore++;
      });

      const attempt: QuizAttempt = {
        username: state.currentUser || 'Anonymous',
        score: finalScore,
        timeSpent,
        timestamp: finishTime,
      };

      saveAttempt(attempt);

      setState(prev => ({
        ...prev,
        view: 'result',
        answers: newAnswers,
        endTime: finishTime,
      }));
    }
  };

  const goToLeaderboard = () => {
    setState(prev => ({ ...prev, view: 'leaderboard' }));
  };

  const goToWelcome = () => {
    setState({
      view: 'welcome',
      currentUser: null,
      currentQuestionIndex: 0,
      answers: [],
      startTime: null,
      endTime: null,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4">
      <Header />
      
      <main className="w-full max-w-2xl mt-8">
        {state.view === 'welcome' && (
          <UserForm onStart={handleStartQuiz} onShowLeaderboard={goToLeaderboard} />
        )}

        {state.view === 'quiz' && (
          <Quiz 
            question={QUESTIONS[state.currentQuestionIndex]} 
            index={state.currentQuestionIndex} 
            total={QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        )}

        {state.view === 'result' && state.startTime && state.endTime && (
          <Result 
            score={state.answers.reduce((acc, curr, idx) => curr === QUESTIONS[idx].correctAnswer ? acc + 1 : acc, 0)}
            total={QUESTIONS.length}
            timeSpent={Math.round((state.endTime - state.startTime) / 1000)}
            onViewLeaderboard={goToLeaderboard}
          />
        )}

        {state.view === 'leaderboard' && (
          <Leaderboard 
            attempts={getLeaderboard()} 
            onBack={goToWelcome}
          />
        )}
      </main>

      <footer className="mt-auto pt-12 text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} WebMaster Education - Fundamentals Series
      </footer>
    </div>
  );
};

export default App;
