import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "1",
    title: "电子商务仪表板",
    description: "一个全面的分析仪表板，供在线零售商实时跟踪销售、库存和客户指标。",
    imageUrl: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20dashboard%20interface%20displaying%20charts%20graphs%20and%20data%20tables%20dark%20mode%20sleek%20design%20blue%20accents&image_size=landscape_16_9",
    technologies: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    projectUrl: "https://example.com/dashboard",
    sourceCodeUrl: "https://github.com/example/dashboard",
    isFeatured: true,
    category: "web",
    createdAt: "2023-11-15"
  },
  {
    id: "2",
    title: "旅行伴侣应用",
    description: "移动优先的 Web 应用程序，帮助旅行者规划行程、发现当地景点并跟踪费用。",
    imageUrl: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Mobile%20app%20interface%20showing%20travel%20itinerary%20map%20markers%20and%20scenic%20photos%20clean%20minimalist%20design&image_size=landscape_16_9",
    technologies: ["React", "Vite", "Google Maps API", "Framer Motion"],
    projectUrl: "https://example.com/travel",
    sourceCodeUrl: "https://github.com/example/travel",
    isFeatured: true,
    category: "web",
    createdAt: "2023-08-20"
  },
  {
    id: "3",
    title: "AI 内容生成器",
    description: "利用 LLM 帮助营销人员高效生成博客文章和社交媒体内容的 SaaS 平台。",
    imageUrl: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=AI%20interface%20with%20chat%20bubbles%20and%20content%20editor%20futuristic%20glow%20purple%20and%20cyan%20color%20scheme&image_size=landscape_16_9",
    technologies: ["Next.js", "OpenAI API", "Stripe", "PostgreSQL"],
    projectUrl: "https://example.com/ai-gen",
    sourceCodeUrl: "https://github.com/example/ai-gen",
    isFeatured: true,
    category: "web",
    createdAt: "2023-05-10"
  },
  {
    id: "4",
    title: "个人作品集 v1",
    description: "我以前的作品集网站，使用原生 JavaScript 和 SCSS 构建。见证了 Web 技术的发展。",
    imageUrl: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Minimalist%20portfolio%20website%20design%20monochrome%20typography%20focus%20clean%20lines&image_size=landscape_16_9",
    technologies: ["HTML", "SCSS", "JavaScript"],
    projectUrl: "https://example.com/v1",
    sourceCodeUrl: "https://github.com/example/v1",
    isFeatured: false,
    category: "design",
    createdAt: "2022-01-15"
  },
  {
    id: "5",
    title: "任务大师",
    description: "具有看板、时间跟踪和团队协作功能的生产力应用程序。",
    imageUrl: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Kanban%20board%20interface%20with%20colorful%20tags%20drag%20and%20drop%20cards%20collaborative%20avatars&image_size=landscape_16_9",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    projectUrl: "https://example.com/taskmaster",
    sourceCodeUrl: "https://github.com/example/taskmaster",
    isFeatured: false,
    category: "web",
    createdAt: "2022-11-05"
  }
];
