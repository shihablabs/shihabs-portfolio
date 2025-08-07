import { projectSortOptions } from "./filter-data";
import { Experience, Project, Skill, Testimonial } from "./portfolio-data";

// Project utilities
export const getFeaturedProjects = (projects: Project[]): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (
  projects: Project[],
  category: string
): Project[] => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};

export const getProjectsByTechnology = (
  projects: Project[],
  technology: string
): Project[] => {
  if (technology === "all") return projects;
  return projects.filter((project) =>
    project.technologies.some((tech) =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const sortProjects = (
  projects: Project[],
  sortBy: string
): Project[] => {
  const sortOption = projectSortOptions.find(
    (option) => option.value === sortBy
  );
  if (!sortOption) return projects;

  return [...projects].sort((a, b) => {
    const aValue = a[sortOption.field as keyof Project];
    const bValue = b[sortOption.field as keyof Project];

    if (aValue === undefined && bValue === undefined) return 0;
    if (aValue === undefined) return sortOption.order === "asc" ? -1 : 1;
    if (bValue === undefined) return sortOption.order === "asc" ? 1 : -1;

    if (sortOption.order === "asc") {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });
};

// Skill utilities
export const getSkillsByCategory = (
  skills: Skill[],
  category: string
): Skill[] => {
  if (category === "all") return skills;
  return skills.filter((skill) => skill.category === category);
};

export const getFeaturedSkills = (skills: Skill[]): Skill[] => {
  return skills.filter((skill) => skill.featured);
};

export const getTopSkills = (skills: Skill[], limit: number = 8): Skill[] => {
  return skills.sort((a, b) => b.level - a.level).slice(0, limit);
};

// Experience utilities
export const getCurrentExperience = (
  experiences: Experience[]
): Experience | undefined => {
  return experiences.find((exp) => exp.current);
};

export const getExperienceByType = (
  experiences: Experience[],
  type: string
): Experience[] => {
  if (type === "all") return experiences;
  return experiences.filter((exp) => exp.type === type);
};

// Testimonial utilities
export const getVerifiedTestimonials = (
  testimonials: Testimonial[]
): Testimonial[] => {
  return testimonials.filter((testimonial) => testimonial.verified);
};

export const getTestimonialsByRating = (
  testimonials: Testimonial[],
  minRating: number = 4
): Testimonial[] => {
  return testimonials.filter((testimonial) => testimonial.rating >= minRating);
};

// Analytics utilities
export const calculateSuccessRate = (testimonials: Testimonial[]): number => {
  const total = testimonials.length;
  const fiveStar = testimonials.filter((t) => t.rating === 5).length;
  return total > 0 ? Math.round((fiveStar / total) * 100) : 100;
};

export const getTechnologiesCount = (
  projects: Project[]
): Map<string, number> => {
  const techCount = new Map<string, number>();

  projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      techCount.set(tech, (techCount.get(tech) || 0) + 1);
    });
  });

  return techCount;
};

// Date utilities
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
};

export const calculateDuration = (
  startDate: string,
  endDate?: string
): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`;
  } else if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? "s" : ""}`;
  } else {
    return `${years} year${years !== 1 ? "s" : ""} ${remainingMonths} month${
      remainingMonths !== 1 ? "s" : ""
    }`;
  }
};
