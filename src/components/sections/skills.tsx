"use client";

import { SkillBadge } from "@/components/blocks/skill-badge";
import { Button } from "@/components/ui/button";
import {
  getSkillsByCategory,
  getTopSkills,
  skillCategories,
  skills,
} from "@/data";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Code, Palette, Server, Users, Wrench, Zap } from "lucide-react";
import { useMemo, useState } from "react";

const categoryIcons = {
  frontend: Code,
  backend: Server,
  tooling: Wrench,
  design: Palette,
  soft: Users,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "featured">("grid");

  const filteredSkills = useMemo(() => {
    if (selectedCategory === "all") return skills;
    return getSkillsByCategory(skills, selectedCategory);
  }, [selectedCategory]);

  const featuredSkills = getTopSkills(skills, 6);

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/20">
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
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I
            use to bring ideas to life.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
            className="rounded-full"
          >
            <Zap className="w-4 h-4 mr-2" />
            All Skills
          </Button>

          {skillCategories.map((category) => {
            const Icon =
              categoryIcons[category.value as keyof typeof categoryIcons];
            return (
              <Button
                key={category.value}
                variant={
                  selectedCategory === category.value ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.value)}
                className="rounded-full"
              >
                {Icon && <Icon className="w-4 h-4 mr-2" />}
                {category.label}
              </Button>
            );
          })}
        </motion.div>

        {/* View Toggle */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="bg-background border rounded-lg p-1 flex">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-md"
            >
              All Skills
            </Button>
            <Button
              variant={viewMode === "featured" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("featured")}
              className="rounded-md"
            >
              Featured
            </Button>
          </div>
        </motion.div>

        {/* Skills Grid */}
        {viewMode === "grid" ? (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filteredSkills.map((skill, index) => (
              <SkillBadge
                key={skill.id}
                skill={skill}
                index={index}
                variant="default"
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {featuredSkills.map((skill, index) => (
              <SkillBadge
                key={skill.id}
                skill={skill}
                index={index}
                variant="featured"
              />
            ))}
          </motion.div>
        )}

        {/* Skills Summary */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">
              {skills.filter((s) => s.level >= 90).length}+
            </div>
            <div className="text-sm text-muted-foreground">Expert Level</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">
              {skills.length}+
            </div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">
              {skills.reduce((acc, skill) => acc + skill.projects, 0)}+
            </div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">
              {Math.max(...skills.map((s) => s.yearsOfExperience))}+
            </div>
            <div className="text-sm text-muted-foreground">
              Years Experience
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <a href="/contact">Ready to Build Something Amazing?</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
