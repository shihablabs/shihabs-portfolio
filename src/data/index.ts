// Export all data and types
export * from "./constants";
export * from "./filter-data";
export * from "./portfolio-data";
export * from "./site-data";
export * from "./utils";

// Pre-computed data exports
import { experiences, projects, skills, testimonials } from "./portfolio-data";
import {
  getFeaturedProjects,
  getTopSkills,
  getVerifiedTestimonials,
} from "./utils";

export const featuredProjects = getFeaturedProjects(projects);
export const topSkills = getTopSkills(skills);
export const verifiedTestimonials = getVerifiedTestimonials(testimonials);
export const currentExperience = experiences.find((exp) => exp.current);

// Statistics
export const portfolioStats = {
  totalProjects: projects.length,
  featuredProjects: featuredProjects.length,
  totalSkills: skills.length,
  yearsOfExperience: 5,
  clientSatisfaction: 98,
  projectSuccessRate: 95,
};
