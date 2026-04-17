export interface Project {
  id: number;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  impact: string;
}

export interface AchievementCard {
  icon: string;
  title: string;
  metric: string;
  description: string;
}

export interface Experience {
  id: number;
  company: string;
  title: string;
  date: string;
  client?: string;
  location?: string;
  summary?: string;
  achievements: string[];
  achievementCards?: AchievementCard[];
  techStack: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  link: string;
  image: string; // Filename for local image
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  id: number;
  school: string;
  degree: string;
  location: string;
  date: string;
  logo?: string; // Optional filename for university logo
  grade?: string; // Optional grade/CGPA
}
