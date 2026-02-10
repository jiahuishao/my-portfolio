import { PersonalInfo, Skill, Experience, Hobby } from '../types';

export const personalInfo: PersonalInfo = {
  name: "邵嘉辉",
  title: "产品经理",
  bio: "拥有丰富TOB、TOG端经验的产品经理。热衷于通过技术创新解决复杂的业务问题。业余时间，我是一名摄影爱好者、徒步旅行者，也是一名利用AI创作的音乐人。",
  email: "contact@example.com",
  location: "中国",
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
  { name: "产品规划", level: 95, category: "design" },
  { name: "数据分析", level: 85, category: "tools" },
  { name: "用户研究", level: 90, category: "design" },
  { name: "Axure/Figma", level: 90, category: "design" },
  { name: "项目管理", level: 85, category: "tools" },
  { name: "TOB业务", level: 95, category: "backend" },
  { name: "TOG业务", level: 90, category: "backend" },
  { name: "AI应用", level: 80, category: "tools" }
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "高级产品经理",
    company: "某知名科技公司",
    period: "2021 - 至今",
    description: "负责TOB端核心产品的规划与迭代，推动产品从0到1的建设。",
    type: "work"
  },
  {
    id: "2",
    role: "产品经理",
    company: "某政务软件公司",
    period: "2019 - 2021",
    description: "参与多个TOG项目的需求分析与产品设计，提升了政务处理效率。",
    type: "work"
  }
];

export const hobbies: Hobby[] = [
  {
    name: "摄影",
    description: "用镜头记录生活的美好瞬间。后期会展示更多个人作品。",
    icon: "Camera"
  },
  {
    name: "徒步",
    description: "在大自然中寻找宁静与灵感。",
    icon: "Mountain"
  },
  {
    name: "音乐创作",
    description: "探索AI音乐创作的无限可能，编写属于自己的旋律。",
    icon: "Music"
  }
];
