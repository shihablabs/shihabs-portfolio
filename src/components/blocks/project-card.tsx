"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Project } from "@/data/portfolio-data";
import { fadeIn, scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  className?: string;
  index?: number;
}

export function ProjectCard({
  project,
  className,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn("group", className)}
    >
      <Card className="h-full overflow-hidden border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:bg-card/80 group-hover:scale-[1.02]">
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <Badge
              variant={
                project.status === "completed"
                  ? "default"
                  : project.status === "in-progress"
                  ? "secondary"
                  : "outline"
              }
              className="backdrop-blur-sm"
            >
              {project.status === "completed"
                ? "✅ Completed"
                : project.status === "in-progress"
                ? "🔄 In Progress"
                : "📦 Archived"}
            </Badge>
          </div>

          {/* Hover Actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <motion.div
              variants={scaleIn}
              initial="initial"
              whileHover="animate"
            >
              <Button asChild size="sm" className="rounded-full">
                <Link href={project.liveUrl} target="_blank">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
            </motion.div>

            {project.githubUrl && (
              <motion.div
                variants={scaleIn}
                initial="initial"
                whileHover="animate"
                transition={{ delay: 0.1 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Link>
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Content */}
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1 flex-1">
              <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all group-hover:scale-110 flex-shrink-0 mt-1" />
          </div>
        </CardHeader>

        <CardContent className="pb-4">
          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-secondary/50 backdrop-blur-sm"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          {/* Client & Date */}
          <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
            <span>{project.client || "Personal Project"}</span>
            <span>{new Date(project.startDate).getFullYear()}</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
