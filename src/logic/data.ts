export interface QuestionList {
  init: string;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  answers: Answer[];
}

export interface Answer {
  answer: string;
  jump: string;
}

export const initAnswers = [
  {
    answer: "Let's Start!",
    jump: 'init'
  }
] as Answer[];
