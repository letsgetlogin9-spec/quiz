
export type Category = 'html' | 'css';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  category: Category;
}

export interface QuizAttempt {
  username: string;
  score: number;
  timeSpent: number; // in seconds
  timestamp: number;
}

export interface AppState {
  view: 'welcome' | 'quiz' | 'result' | 'leaderboard';
  currentUser: string | null;
  currentQuestionIndex: number;
  answers: number[];
  startTime: number | null;
  endTime: number | null;
}
