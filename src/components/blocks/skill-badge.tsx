"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Skill } from "@/data/portfolio-data";
import { fadeIn, scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: Skill;
  className?: string;
  index?: number;
  showProgress?: boolean;
  variant?: "default" | "compact" | "featured";
}

export function SkillBadge({
  skill,
  className,
  index = 0,
  showProgress = true,
  variant = "default",
}: SkillBadgeProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "compact":
        return "p-3 hover:scale-105";
      case "featured":
        return "p-6 border-2 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-card to-card/50";
      default:
        return "p-4 hover:scale-105";
    }
  };

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-500";
  };

  const getSkillLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover="hover"
      transition={{ delay: index * 0.1 }}
      className={cn("group", className)}
    >
      <Card
        className={cn(
          "h-full transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:bg-card/80",
          getVariantStyles()
        )}
      >
        <CardContent className="p-0 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div variants={scaleIn} className="text-2xl">
                {skill.icon}
              </motion.div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate">
                  {skill.name}
                </h3>
                {variant !== "compact" && (
                  <p className="text-xs text-muted-foreground">
                    {skill.yearsOfExperience} year
                    {skill.yearsOfExperience !== 1 ? "s" : ""} experience
                  </p>
                )}
              </div>
            </div>

            {variant !== "compact" && (
              <Badge
                variant="secondary"
                className={cn(
                  "text-xs font-medium",
                  skill.level >= 90 &&
                    "bg-green-500/20 text-green-700 dark:text-green-300",
                  skill.level >= 80 &&
                    skill.level < 90 &&
                    "bg-blue-500/20 text-blue-700 dark:text-blue-300",
                  skill.level >= 70 &&
                    skill.level < 80 &&
                    "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300"
                )}
              >
                {skill.level}%
              </Badge>
            )}
          </div>

          {/* Progress Bar */}
          {showProgress && variant !== "compact" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  {getSkillLevelText(skill.level)}
                </span>
                <span className="font-medium">{skill.level}%</span>
              </div>
              <Progress
                value={skill.level}
                className={cn(
                  "h-2 transition-all duration-1000 ease-out",
                  getSkillLevelColor(skill.level)
                )}
              />
            </div>
          )}

          {/* Description */}
          {variant === "featured" && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="text-sm text-muted-foreground leading-relaxed"
            >
              {skill.description}
            </motion.p>
          )}

          {/* Stats */}
          {variant !== "compact" && (
            <div className="flex items-center justify-between pt-2 border-t border-border/50">
              <div className="text-xs text-muted-foreground">
                {skill.projects} project{skill.projects !== 1 ? "s" : ""}
              </div>
              <Badge variant="outline" className="text-xs">
                {skill.category}
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
