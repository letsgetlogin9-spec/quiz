
import { QuizAttempt } from '../types';
import { STORAGE_KEY } from '../constants';

export const getAttempts = (): QuizAttempt[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveAttempt = (attempt: QuizAttempt): void => {
  const attempts = getAttempts();
  attempts.push(attempt);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts));
};

export const hasUserTakenQuiz = (username: string): boolean => {
  const attempts = getAttempts();
  return attempts.some(a => a.username.toLowerCase() === username.toLowerCase());
};

export const getLeaderboard = (): QuizAttempt[] => {
  return getAttempts().sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.timeSpent - b.timeSpent; // Faster time wins on tie
  });
};
