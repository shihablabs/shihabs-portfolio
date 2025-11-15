"use client";

import { ProjectCard } from "@/components/blocks/project-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { projectCategories, projects, projectTechnologies } from "@/data";
import {
  getProjectsByCategory,
  getProjectsByTechnology,
  sortProjects,
} from "@/data/utils";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Filter, Grid3X3, List, Search, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type ViewMode = "grid" | "list";
type SortBy = "newest" | "oldest" | "name-asc" | "name-desc" | "featured";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [sortBy, setSortBy] = useState<SortBy>("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = getProjectsByCategory(filtered, selectedCategory);
    }

    // Apply technology filter
    if (selectedTechnology !== "all") {
      filtered = getProjectsByTechnology(filtered, selectedTechnology);
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Apply sorting
    filtered = sortProjects(filtered, sortBy);

    return filtered;
  }, [selectedCategory, selectedTechnology, sortBy, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedTechnology("all");
    setSearchQuery("");
    setSortBy("newest");
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedTechnology !== "all" ||
    searchQuery ||
    sortBy !== "newest";

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of modern web applications, from e-commerce
            platforms to dynamic web experiences.
          </p>
        </motion.div>

        {/* Filters Bar */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12 space-y-4"
        >
          {/* Mobile Filter Toggle */}
          <div className="flex items-center justify-between lg:hidden">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-primary rounded-full" />
              )}
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div
            className={cn(
              "space-y-4 lg:space-y-0 lg:flex lg:items-center lg:gap-4",
              showFilters ? "block" : "hidden lg:flex"
            )}
          >
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {projectCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label} {category.count && `(${category.count})`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Technology Filter */}
            <Select
              value={selectedTechnology}
              onValueChange={setSelectedTechnology}
            >
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Technology" />
              </SelectTrigger>
              <SelectContent>
                {projectTechnologies.map((tech) => (
                  <SelectItem key={tech.value} value={tech.value}>
                    {tech.label} {tech.count && `(${tech.count})`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select
              value={sortBy}
              onValueChange={(value: SortBy) => setSortBy(value)}
            >
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="name-asc">Name A-Z</SelectItem>
                <SelectItem value="name-desc">Name Z-A</SelectItem>
                <SelectItem value="featured">Featured First</SelectItem>
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Clear
              </Button>
            )}

            {/* View Toggle - Desktop */}
            <div className="hidden lg:flex items-center gap-2 border rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="h-8 w-8"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
                className="h-8 w-8"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={cn(
            "grid gap-6",
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          )}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              className={viewMode === "list" ? "max-w-4xl mx-auto" : ""}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or search terms.
            </p>
            <Button onClick={clearFilters}>Clear all filters</Button>
          </motion.div>
        )}

        {/* View All Button */}
        {filteredProjects.length > 0 && (
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// Add missing cn import helper
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
