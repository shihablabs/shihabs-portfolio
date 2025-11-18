export const siteConfig = {
  name: "ShihabLabs",
  description:
    "Creative Frontend Architect - Building exceptional digital experiences with modern technologies",
  url: "https://shihablabs.vercel.app",
  ogImage: "https://shihablabs.vercel.app/og.jpg",
  links: {
    twitter: "https://twitter.com/makershihab",
    github: "https://github.com/shihablabs",
    linkedin: "https://linkedin.com/in/shihablabs",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Skills",
      href: "/#skills",
    },
    {
      title: "Experience",
      href: "/#experience",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ],
} as const;
