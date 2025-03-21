export interface QuestionList {
  init: string;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  description?: string;
  answers: Answer[];
}

export interface Answer {
  answer: string;
  jump: string;
  id: string;
}

export const initAnswers = [
  {
    answer: "Let's Start!",
    jump: 'init'
  }
] as Answer[];
