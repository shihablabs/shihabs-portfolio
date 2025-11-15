"use client";

import { SocialIcons } from "@/components/social-icons";
import { Button } from "@/components/ui/button";
import { portfolioStats } from "@/data";
import { siteConfig } from "@/data/site-data";
import { fadeIn, heroVariants, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = siteConfig.resume.url;
    link.download = siteConfig.resume.fileName;
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-gradient(to bottom, #f0f0f0, #ffffff)">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column - Content */}
          <motion.div
            variants={heroVariants.container}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              <span>Available for new projects</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={heroVariants.text} className="space-y-4">
              <h4 className="text-xl lg:text-2xl text-muted-foreground font-light">
                Hi, I&apos;m{" "}
                <span className="font-semibold text-foreground">
                  Maker Shihab
                </span>{" "}
                👋
              </h4>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                Creative{" "}
                <span className="bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  Frontend
                </span>
                <br />
                Architect
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={heroVariants.text}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Bringing ideas to life with{" "}
              <span className="text-foreground font-semibold">clean code</span>,{" "}
              <span className="text-foreground font-semibold">
                modern design
              </span>
              , and{" "}
              <span className="text-foreground font-semibold">
                powerful user experiences
              </span>
              .
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={heroVariants.text}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="grid grid-cols-3 gap-6 py-6 max-w-md"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-foreground">
                  {portfolioStats.yearsOfExperience}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-foreground">
                  {portfolioStats.totalProjects}+
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-foreground">
                  {portfolioStats.clientSatisfaction}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={heroVariants.container}
              className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
            >
              <motion.div variants={heroVariants.button}>
                <Button size="lg" className="gap-2 px-8 text-base h-12" asChild>
                  <Link href="/contact">
                    Hire Me
                    <Sparkles className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div variants={heroVariants.button}>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 px-8 text-base h-12"
                  onClick={handleDownloadCV}
                >
                  Download CV
                  <Download className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={heroVariants.text} className="pt-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
                <span>Follow my work</span>
                <SocialIcons variant="minimal" iconSize={18} />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={heroVariants.image}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-border/50 shadow-2xl">
                <Image
                  src="/assets/images/me.jpg"
                  alt="Maker Shihab - Frontend Developer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-gradient(to top, #f0f0f0, #ffffff)" />
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                🚀 Available
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-4 -left-4 bg-card border shadow-lg px-4 py-3 rounded-2xl max-w-[200px]"
              >
                <div className="text-xs text-muted-foreground">
                  Currently working on
                </div>
                <div className="text-sm font-medium">Next.js 14 Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
