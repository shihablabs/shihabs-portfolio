"use client";

import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-muted/20">
      <div className="container">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me and the results we achieved
            together.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn}
              className="group"
            >
              <Card className="h-full border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                    &quot;{testimonial.content}&quot;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position} at {testimonial.company}
                      </div>
                    </div>
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
