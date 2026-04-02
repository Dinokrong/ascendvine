export type Difficulty = 'Basic' | 'Advanced';

export type QuestionType = 'technical' | 'behavioral';

export type Topic =
  | 'Accounting'
  | 'Background & Fit'
  | 'Career Vision & Future'
  | 'Conflict & Difficult Situations'
  | 'DCF'
  | 'Enterprise & Equity Value'
  | 'Finance Brain Teasers'
  | 'Financial Institutions Group'
  | 'General Banking Knowledge'
  | 'General Brain Teasers'
  | 'Healthcare Group'
  | 'Industrials Group'
  | 'Leveraged Buyouts (LBOs)'
  | 'Market Knowledge'
  | 'Media & Telecom Group'
  | 'Merger Model (M&A)'
  | 'Natural Resources Group'
  | 'Restructuring / Distressed M&A'
  | 'Strengths, Weaknesses & Feedback'
  | 'Team & Leadership'
  | 'Technology Banking'
  | 'Uncategorized'
  | 'Valuation'
  | 'Work Ethic & Commitment';

export interface Question {
  id: number;
  question: string;
  answer: string;
  topic: Topic;
  difficulty: Difficulty;
  type: QuestionType;
  firms?: string[];
}
