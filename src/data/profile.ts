import { PersonalInfo, Skill, Experience } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Alex Morgan",
  title: "Full Stack Developer & UI Designer",
  bio: "I craft digital experiences that merge functionality with aesthetics. With over 5 years of experience in web development, I specialize in building modern, responsive, and user-centric applications.",
  email: "alex.morgan@example.com",
  location: "San Francisco, CA",
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com",
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com",
      icon: "Linkedin"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com",
      icon: "Twitter"
    }
  ]
};

export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "Figma", level: 85, category: "design" },
  { name: "Git", level: 90, category: "tools" }
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Senior Frontend Engineer",
    company: "TechFlow Solutions",
    period: "2021 - Present",
    description: "Leading the frontend team in rebuilding the core product dashboard. Improved performance by 40% and established a new design system.",
    type: "work"
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Creative Pulse Agency",
    period: "2019 - 2021",
    description: "Developed custom websites and e-commerce solutions for diverse clients using React, Node.js, and Shopify.",
    type: "work"
  },
  {
    id: "3",
    role: "Computer Science BS",
    company: "University of Technology",
    period: "2015 - 2019",
    description: "Major in Software Engineering. Graduated with honors.",
    type: "education"
  }
];
