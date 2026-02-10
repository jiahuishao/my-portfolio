export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;
  sourceCodeUrl?: string;
  isFeatured: boolean;
  category: 'web' | 'mobile' | 'design' | 'other';
  createdAt: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Icon name from lucide-react
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  socials: SocialLink[];
}

export interface Hobby {
  name: string;
  description: string;
  icon: string;
}
