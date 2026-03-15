export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  details: string[];
};

export type EducationItem = {
  institution: string;
  duration: string;
  details: string[];
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  explanation: string;
  correctOption: number;
  category: string;
};

export type PublicQuizQuestion = Omit<QuizQuestion, "correctOption">;

export type LeaderboardEntry = {
  id: string;
  nickname: string;
  score: number;
  total: number;
  percentage: number;
  createdAt: string;
};
