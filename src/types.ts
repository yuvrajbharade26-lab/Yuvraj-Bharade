export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  highlights?: { label: string; text: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  impact: string;
  tech: string[];
  category: "ai" | "fullstack" | "cloud";
}

export interface AchievementItem {
  id: string;
  type: "patent" | "publication";
  title: string;
  sub: string;
  details: string;
}
