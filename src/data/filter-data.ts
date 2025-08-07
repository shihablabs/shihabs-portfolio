export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface SortOption {
  value: string;
  label: string;
  field: string;
  order: "asc" | "desc";
}

export const projectCategories: FilterOption[] = [
  { value: "all", label: "All Projects", count: 12 },
  { value: "react", label: "React Projects", count: 6 },
  { value: "static", label: "Static Websites", count: 4 },
  { value: "dynamic", label: "Dynamic Apps", count: 2 },
  { value: "fullstack", label: "Full Stack", count: 3 },
];

export const projectTechnologies: FilterOption[] = [
  { value: "react", label: "React", count: 8 },
  { value: "nextjs", label: "Next.js", count: 5 },
  { value: "typescript", label: "TypeScript", count: 6 },
  { value: "tailwind", label: "Tailwind CSS", count: 10 },
  { value: "javascript", label: "JavaScript", count: 12 },
  { value: "framer-motion", label: "Framer Motion", count: 4 },
];

export const projectSortOptions: SortOption[] = [
  { value: "newest", label: "Newest First", field: "startDate", order: "desc" },
  { value: "oldest", label: "Oldest First", field: "startDate", order: "asc" },
  { value: "name-asc", label: "Name A-Z", field: "title", order: "asc" },
  { value: "name-desc", label: "Name Z-A", field: "title", order: "desc" },
  {
    value: "featured",
    label: "Featured First",
    field: "featured",
    order: "desc",
  },
];

export const skillCategories: FilterOption[] = [
  { value: "all", label: "All Skills" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "tooling", label: "Tools & DevOps" },
  { value: "design", label: "Design" },
  { value: "soft", label: "Soft Skills" },
];

export const experienceTypes: FilterOption[] = [
  { value: "all", label: "All Experience" },
  { value: "full-time", label: "Full Time" },
  { value: "part-time", label: "Part Time" },
  { value: "contract", label: "Contract" },
  { value: "freelance", label: "Freelance" },
];
