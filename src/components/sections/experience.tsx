"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/data";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-background">
      <div className="container">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in frontend development and digital
            craftsmanship.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={fadeIn}
              className="flex gap-6 group"
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                {index !== experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>

              {/* Content */}
              <Card className="flex-1 border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <span className="font-semibold">{exp.company}</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(exp.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}{" "}
                        -{" "}
                        {exp.current
                          ? "Present"
                          : new Date(exp.endDate!).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                            })}
                      </span>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-muted-foreground">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
