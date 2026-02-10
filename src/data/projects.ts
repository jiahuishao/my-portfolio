import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers to track sales, inventory, and customer metrics in real-time.",
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
    title: "Travel Companion App",
    description: "Mobile-first web application helping travelers plan trips, discover local gems, and track expenses.",
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
    title: "AI Content Generator",
    description: "SaaS platform leveraging LLMs to help marketers generate blog posts and social media content efficiently.",
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
    title: "Portfolio v1",
    description: "My previous portfolio site built with vanilla JavaScript and SCSS. A testament to how far web tech has come.",
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
    title: "Task Master",
    description: "Productivity application with Kanban boards, time tracking, and team collaboration features.",
    imageUrl: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Kanban%20board%20interface%20with%20colorful%20tags%20drag%20and%20drop%20cards%20collaborative%20avatars&image_size=landscape_16_9",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    projectUrl: "https://example.com/taskmaster",
    sourceCodeUrl: "https://github.com/example/taskmaster",
    isFeatured: false,
    category: "web",
    createdAt: "2022-11-05"
  }
];
