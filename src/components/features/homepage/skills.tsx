"use client";

import { Button } from "@/components/ui/button";
import { skillCategories, skills } from "@/data";
import { fadeIn } from "@/lib/animations";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Rocket,
  Server,
  Terminal,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categoryIcons = {
  frontend: Code,
  backend: Server,
  tooling: Wrench,
  design: Palette,
  soft: Users,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills = skills.filter((skill) => {
    if (selectedCategory === "all") return true;
    return skill.category === selectedCategory;
  });

  // Stats removed in compact spec

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Terminal className="w-4 h-4" />
            <span>Technical Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive arsenal of modern technologies and tools I use to
            build exceptional digital experiences. From frontend frameworks to
            design tools, every skill is backed by real-world projects and
            continuous learning.
          </motion.p>
        </motion.div>

        {/* Stats removed per new compact spec */}

        {/* Category Filters - Developer Style */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="rounded-full bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 border-primary/20 hover:border-primary/50 hover:bg-gradient-to-r hover:from-red-500/20 hover:via-purple-500/20 hover:to-blue-500/20"
            >
              <Zap className="w-4 h-4 mr-2" />
              All Skills
            </Button>
          </motion.div>

          {skillCategories
            .filter((category) => category.value !== "all")
            .map((category, idx) => {
              const Icon =
                categoryIcons[category.value as keyof typeof categoryIcons];
              return (
                <motion.div
                  key={category.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Button
                    variant={
                      selectedCategory === category.value
                        ? "default"
                        : "outline"
                    }
                    onClick={() => setSelectedCategory(category.value)}
                    className="rounded-full"
                  >
                    {Icon && <Icon className="w-4 h-4 mr-2" />}
                    {category.label}
                  </Button>
                </motion.div>
              );
            })}
        </motion.div>

        {/* Skills list - centered rows using flex wrap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border/50 bg-background/70 backdrop-blur-[2px] hover:bg-gradient-to-r hover:from-red-500/10 hover:via-purple-500/10 hover:to-blue-500/10 hover:border-primary/40 transition-all duration-200"
            >
              <span className="relative flex items-center justify-center w-7 h-7 rounded-md border border-border/60 bg-card/80">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </span>
              <span className="text-xs sm:text-sm font-medium leading-none">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white hover:from-red-600 hover:via-purple-600 hover:to-blue-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">
                <Rocket className="w-5 h-5 mr-2" />
                Ready to Build Something Amazing?
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
