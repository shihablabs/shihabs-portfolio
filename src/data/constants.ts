export const APP_CONSTANTS = {
  // Performance
  DEBOUNCE_DELAY: 300,
  API_TIMEOUT: 10000,
  LAZY_LOAD_OFFSET: 100,

  // Animation
  PAGE_TRANSITION_DURATION: 0.3,
  STAGGER_DELAY: 0.1,
  HOVER_TRANSITION: 0.25,

  // UI
  MAX_CONTAINER_WIDTH: "1280px",
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024,

  // Content
  PROJECTS_PER_PAGE: 9,
  TESTIMONIALS_PER_SLIDE: 2,
  SKILLS_VISIBLE_INITIALLY: 6,
} as const;

export const COLOR_THEMES = {
  light: {
    primary: "#3B82F6",
    secondary: "#6366F1",
    accent: "#8B5CF6",
    background: "#FFFFFF",
    foreground: "#0F172A",
  },
  dark: {
    primary: "#60A5FA",
    secondary: "#818CF8",
    accent: "#A78BFA",
    background: "#0F172A",
    foreground: "#F1F5F9",
  },
} as const;

export const GRADIENTS = {
  primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  secondary: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  success: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  warning: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  danger: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
} as const;

export const TECH_STACK = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  styling: ["Tailwind CSS", "SASS/SCSS", "Styled Components", "CSS Modules"],
  animation: ["Framer Motion", "GSAP", "CSS Animations"],
  tools: ["Git", "Figma", "VS Code", "Webpack", "Vite"],
  testing: ["Jest", "React Testing Library", "Cypress"],
  backend: ["Node.js", "Express", "MongoDB", "Firebase"],
} as const;

export const ACHIEVEMENTS = {
  projectsCompleted: 100,
  happyClients: 86,
  yearsExperience: 5,
  countries: 15,
} as const;
