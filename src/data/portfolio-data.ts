export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  category: "react" | "static" | "dynamic" | "fullstack";
  technologies: string[];
  featured: boolean;
  liveUrl: string;
  githubUrl?: string;
  image: string;
  gallery?: string[];
  status: "completed" | "in-progress" | "archived";
  startDate: string;
  endDate?: string;
  client?: string;
  highlights: string[];
  challenges: string[];
  results?: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tooling" | "design" | "soft";
  level: number; // 1-100
  yearsOfExperience: number;
  featured: boolean;
  description: string;
  icon: string;
  projects: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "freelance";
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  project?: string;
  date: string;
  verified: boolean;
  socialProof?: {
    platform: "fiverr" | "upwork" | "linkedin" | "direct";
    url?: string;
  };
}

export const projects: Project[] = [
  {
    id: "smart-bazaar",
    title: "Smart Bazaar",
    description:
      "Modern e-commerce showcase project built to demonstrate front-end and UI/UX skills",
    detailedDescription:
      "A fully responsive e-commerce platform featuring modern design patterns, shopping cart functionality, and seamless user experience. Built with performance and accessibility in mind.",
    category: "react",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Context API",
      "Framer Motion",
    ],
    featured: true,
    liveUrl: "https://smart-bazzar.netlify.app/",
    githubUrl: "https://github.com/maker-shihab/smart-bazaar",
    image: "/assets/projects/smart-bazaar.jpg",
    gallery: [
      "/assets/projects/smart-bazaar-1.jpg",
      "/assets/projects/smart-bazaar-2.jpg",
      "/assets/projects/smart-bazaar-3.jpg",
    ],
    status: "completed",
    startDate: "2024-01-15",
    endDate: "2024-03-20",
    client: "Personal Project",
    highlights: [
      "Implemented modern cart management system",
      "Optimized for Core Web Vitals (90+ scores)",
      "Mobile-first responsive design",
      "Accessibility compliant (WCAG 2.1)",
    ],
    challenges: [
      "Complex state management for cart and user preferences",
      "Performance optimization for product listings",
      "Cross-browser compatibility testing",
    ],
    results: [
      "95%+ Lighthouse performance score",
      "2.5s average page load time",
      "Successfully deployed and tested across devices",
    ],
  },
  {
    id: "gittu-entertainment",
    title: "Gittu - React Entertainment Platform",
    description:
      "React-based entertainment website focused on performance and responsiveness",
    detailedDescription:
      "A feature-rich entertainment platform built for a Fiverr client, focusing on smooth animations, responsive design, and engaging user interactions.",
    category: "react",
    technologies: ["React", "CSS3", "JavaScript", "Swiper.js", "GSAP"],
    featured: true,
    liveUrl: "https://uk.westminster.global/",
    image: "/assets/projects/gittu.jpg",
    status: "completed",
    startDate: "2024-02-10",
    endDate: "2024-04-05",
    client: "Fiverr Client",
    highlights: [
      "Smooth scroll animations and micro-interactions",
      "Optimized image loading and lazy loading",
      "Cross-platform compatibility",
      "SEO-optimized structure",
    ],
    challenges: [
      "Complex animation sequences",
      "Performance on low-end devices",
      "Client-specific design requirements",
    ],
  },
  {
    id: "athena-website",
    title: "Athena - Brand Website",
    description:
      "Static website built with HTML, CSS, and JavaScript for brand representation",
    detailedDescription:
      "A clean, modern static website showcasing brand identity with smooth animations and responsive design principles.",
    category: "static",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Sass"],
    featured: false,
    liveUrl: "https://athenaa.netlify.app/",
    image: "/assets/projects/athena.jpg",
    status: "completed",
    startDate: "2024-01-05",
    endDate: "2024-02-15",
    client: "Fiverr Client",
    highlights: [
      "Zero-dependency vanilla JavaScript",
      "CSS Grid and Flexbox layouts",
      "Smooth scroll-triggered animations",
      "Optimized for fast loading",
    ],
    challenges: [
      "Complex layout without frameworks",
      "Animation performance optimization",
      "Browser compatibility",
    ],
  },
  {
    id: "polymagic-ai",
    title: "Polymagic.ai - AI Startup",
    description:
      "Modern homepage for AI startup with responsive design and engaging UI",
    detailedDescription:
      "A cutting-edge homepage design for an AI startup, featuring modern gradients, smooth animations, and clear value proposition presentation.",
    category: "static",
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    featured: true,
    liveUrl: "https://polymagic.ai/",
    image: "/assets/projects/polymagic.jpg",
    status: "completed",
    startDate: "2024-03-01",
    endDate: "2024-03-25",
    client: "Polymagic AI",
    highlights: [
      "Modern gradient designs and animations",
      "Clear value proposition presentation",
      "Fast loading times",
      "Mobile-optimized experience",
    ],
    challenges: [
      "Complex gradient animations",
      "Balancing design with performance",
      "Client branding integration",
    ],
  },
];

export const skills: Skill[] = [
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    level: 95,
    yearsOfExperience: 4,
    featured: true,
    description:
      "Building dynamic, component-based user interfaces with modern React patterns",
    icon: "⚛️",
    projects: 45,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    level: 90,
    yearsOfExperience: 3,
    featured: true,
    description: "Full-stack React framework for production-grade applications",
    icon: "▲",
    projects: 25,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    level: 88,
    yearsOfExperience: 3,
    featured: true,
    description: "Type-safe JavaScript development for scalable applications",
    icon: "📘",
    projects: 35,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    level: 92,
    yearsOfExperience: 3,
    featured: true,
    description: "Utility-first CSS framework for rapid UI development",
    icon: "🎨",
    projects: 50,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    level: 94,
    yearsOfExperience: 5,
    featured: true,
    description: "Modern ES6+ JavaScript with functional programming patterns",
    icon: "🟨",
    projects: 60,
  },
  {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    level: 98,
    yearsOfExperience: 5,
    featured: false,
    description: "Semantic HTML with accessibility best practices",
    icon: "🌐",
    projects: 80,
  },
  {
    id: "css3",
    name: "CSS3",
    category: "frontend",
    level: 96,
    yearsOfExperience: 5,
    featured: false,
    description: "Modern CSS with Grid, Flexbox, and animations",
    icon: "🎭",
    projects: 75,
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    category: "frontend",
    level: 85,
    yearsOfExperience: 2,
    featured: true,
    description: "Production-ready motion library for React",
    icon: "✨",
    projects: 20,
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "tooling",
    level: 90,
    yearsOfExperience: 4,
    featured: false,
    description: "Version control and collaborative development workflows",
    icon: "📚",
    projects: 70,
  },
  {
    id: "figma",
    name: "Figma",
    category: "design",
    level: 80,
    yearsOfExperience: 3,
    featured: false,
    description: "UI/UX design and prototyping tool",
    icon: "🎯",
    projects: 30,
  },
];

export const experiences: Experience[] = [
  {
    id: "fiverr-freelance",
    company: "Fiverr",
    position: "Senior Frontend Developer",
    location: "Remote",
    type: "freelance",
    startDate: "2020-01-01",
    current: true,
    description:
      "Providing premium frontend development services to international clients, delivering high-quality, responsive web applications and websites.",
    achievements: [
      "Completed 100+ projects with 98% client satisfaction rate",
      "Maintained Top Rated Seller status for 3 consecutive years",
      "Specialized in React, Next.js, and modern CSS solutions",
      "Mentored junior developers and provided code reviews",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GraphQL",
    ],
  },
  {
    id: "upwork-freelance",
    company: "Upwork",
    position: "Frontend Development Specialist",
    location: "Remote",
    type: "freelance",
    startDate: "2020-03-01",
    current: true,
    description:
      "Working with startups and enterprises to build scalable frontend architectures and deliver exceptional user experiences.",
    achievements: [
      "100% job success score across 50+ contracts",
      "Worked with clients from 15+ countries",
      "Delivered projects for industries including SaaS, E-commerce, and FinTech",
      "Implemented complex state management and API integrations",
    ],
    technologies: ["React", "Redux", "JavaScript", "SASS", "REST APIs", "Jest"],
  },
  {
    id: "personal-projects",
    company: "Personal Projects & Open Source",
    position: "Full Stack Developer",
    location: "Remote",
    type: "full-time",
    startDate: "2019-06-01",
    current: true,
    description:
      "Building and maintaining personal projects, contributing to open source, and continuously learning new technologies and best practices.",
    achievements: [
      "Built 50+ personal projects exploring new technologies",
      "Maintained 10+ open source contributions",
      "Published technical articles and tutorials",
      "Developed reusable component libraries",
    ],
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Docker", "AWS"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "reza-ganjavi",
    name: "Réza Ganjavi",
    position: "Guitarist, Singer, Songwriter",
    company: "Independent Artist",
    avatar: "/assets/testimonials/reza-ganjavi.jpg",
    rating: 5,
    content:
      "Maker Shihab is a very competent professional who delivers top quality work. He's careful, efficient, focuses on quality but still works fast. He also has high ethics and I can trust him with my data. I highly recommend him.",
    project: "Personal Website",
    date: "2024-06-15",
    verified: true,
    socialProof: {
      platform: "fiverr",
      url: "https://fiverr.com",
    },
  },
  {
    id: "faizan-yasin",
    name: "Faizan Yasin",
    position: "CEO",
    company: "Nexten Commerce",
    avatar: "/assets/testimonials/faizan-yasin.jpg",
    rating: 5,
    content:
      "Maker Shihab had done wonderful job delivered on time and is very easy to communicate with him. Recommended for complex frontend projects.",
    project: "E-commerce Development",
    date: "2024-05-20",
    verified: true,
    socialProof: {
      platform: "fiverr",
      url: "https://fiverr.com",
    },
  },
  {
    id: "artanidev",
    name: "Artani Dev",
    position: "Project Manager",
    company: "Tech Startup",
    avatar: "/assets/testimonials/artanidev.jpg",
    rating: 5,
    content:
      "I was looking hard to find a seller like this. Cant say to much. good guy, good work, funny, fast delivery. Cant wait to start my next order with you again boos!",
    date: "2024-04-10",
    verified: true,
    socialProof: {
      platform: "fiverr",
      url: "https://fiverr.com",
    },
  },
  {
    id: "brandon-fraser",
    name: "Brandon Fraser",
    position: "CTO",
    company: "SaaS Company",
    avatar: "/assets/testimonials/brandon-fraser.jpg",
    rating: 5,
    content:
      "Great freelancer. I really enjoyed working with him. He's very intelligent, competent, and careful. He does high quality work. He speaks good English so communication was easy. Highly recommended.",
    project: "React Application",
    date: "2024-03-05",
    verified: true,
    socialProof: {
      platform: "upwork",
      url: "https://upwork.com",
    },
  },
];
