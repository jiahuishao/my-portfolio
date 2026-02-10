import { PersonalInfo, Skill, Experience } from '../types';

export const personalInfo: PersonalInfo = {
  name: "亚历克斯·摩根",
  title: "全栈开发工程师 & UI 设计师",
  bio: "我致力于打造融合功能性与美学的数字体验。拥有超过 5 年的 Web 开发经验，我专注于构建现代、响应式且以用户为中心的应用程序。",
  email: "alex.morgan@example.com",
  location: "旧金山, 加利福尼亚",
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
    role: "高级前端工程师",
    company: "TechFlow Solutions",
    period: "2021 - 至今",
    description: "领导前端团队重构核心产品仪表板。将性能提高了 40% 并建立了新的设计系统。",
    type: "work"
  },
  {
    id: "2",
    role: "全栈开发人员",
    company: "Creative Pulse Agency",
    period: "2019 - 2021",
    description: "使用 React、Node.js 和 Shopify 为不同客户开发定制网站和电子商务解决方案。",
    type: "work"
  },
  {
    id: "3",
    role: "计算机科学学士",
    company: "理工大学",
    period: "2015 - 2019",
    description: "主修软件工程。以优异成绩毕业。",
    type: "education"
  }
];
