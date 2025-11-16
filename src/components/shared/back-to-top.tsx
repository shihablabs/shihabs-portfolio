"use client";

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const controls = useAnimation();
  const { scrollY, scrollYProgress } = useScroll();

  // Scroll detection with debounce
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setVisible(y > 200);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Enhanced smooth transforms with water-like fluidity (no rotation)
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.8]);
  // Circular progress ring (no percentage text)
  const progressDeg = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const progressBg = useTransform(progressDeg, (deg) => {
    return `conic-gradient(hsl(var(--primary)) ${deg}deg, transparent ${deg}deg)`;
  });

  // Water wave effect for scrolling
  const waveScale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [1, 1.02, 0.98, 1.01, 0.99, 1.02, 0.98, 1.01, 0.99, 1.02, 1]
  );

  const handleClick = async () => {
    // Smooth scroll to top only (no spin)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
        y: visible ? 0 : 100,
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15,
          mass: 0.8,
        },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        opacity: { duration: 0.4, ease: "easeOut" },
      }}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 group cursor-pointer"
    >
      {/* Water ripple effect - only on hover */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.3 : 1,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-md" />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-300/30"
          animate={{
            scale: isHovered ? [1, 1.4] : 1,
            opacity: isHovered ? [0.5, 0] : 0,
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeOut",
          }}
        />
      </motion.div>

      {/* Floating particles - only on hover */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isHovered ? [0, 1, 0] : 0,
              scale: isHovered ? [0, 1, 0] : 0,
              x: isHovered
                ? [
                    0,
                    Math.cos((i * 60 * Math.PI) / 180) * 25,
                    Math.cos((i * 60 * Math.PI) / 180) * 15,
                  ]
                : 0,
              y: isHovered
                ? [
                    0,
                    Math.sin((i * 60 * Math.PI) / 180) * 25,
                    Math.sin((i * 60 * Math.PI) / 180) * 15,
                  ]
                : 0,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      {/* Main button with water-like scrolling effect */}
      <motion.div
        animate={controls}
        style={{
          scale: isScrolling ? waveScale : 1,
        }}
        className="relative w-14 h-14 rounded-full"
      >
        {/* Dynamic gradient border - changes with scroll */}
        <motion.div
          style={{
            background: useTransform(() =>
              isScrolling
                ? `conic-gradient(from ${progressDeg.get()}deg, #60a5fa, #a78bfa, #f472b6, #60a5fa)`
                : "conic-gradient(from 0deg, rgba(255,255,255,0.3), transparent, rgba(255,255,255,0.3))"
            ),
          }}
          className="absolute inset-0 rounded-full p-[2px]"
        >
          <div className="w-full h-full rounded-full bg-background/90 backdrop-blur-md">
            {/* Water-like wave layer */}
            <motion.div
              animate={{
                opacity: isScrolling ? 0.6 : 0.3,
                scale: isScrolling ? 1.02 : 1,
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.4),transparent_70%)]"
            />

            {/* Main rotating wheel */}
            <motion.div
              style={{
                scale: isScrolling ? scale : 1,
              }}
              className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(59,130,246,0.3)_0deg,transparent_60deg,rgba(168,85,247,0.3)_120deg,transparent_180deg,rgba(236,72,153,0.3)_240deg,transparent_300deg)]"
            />

            {/* Progress ring (scroll position) */}
            <motion.div
              style={{ background: progressBg }}
              className="absolute inset-0 rounded-full"
              animate={{ opacity: visible ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Subtle glow effect */}
            <motion.div
              style={{ opacity: glowOpacity }}
              className="absolute inset-0 rounded-full bg-blue-500/10 blur-sm"
              animate={{
                background: isHovered
                  ? [
                      "rgba(59,130,246,0.15)",
                      "rgba(168,85,247,0.15)",
                      "rgba(236,72,153,0.15)",
                    ]
                  : "rgba(59,130,246,0.08)",
              }}
              transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
            />

            {/* Glass morphism inner plate */}
            <div className="absolute inset-[4px] rounded-full bg-gradient-to-br from-card/90 to-card/70 border border-white/10 shadow-lg backdrop-blur-xl" />

            {/* Sparkle icon - only on hover */}
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0,
                rotate: isHovered ? 180 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute -top-1 -right-1"
            >
              <Sparkles className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            </motion.div>

            {/* Developer icon with gentle float (replaces arrow) */}
            <motion.div
              animate={{
                y: isHovered
                  ? [-1, 0, -1]
                  : isScrolling
                  ? [-0.5, 0.5, -0.5]
                  : 0,
              }}
              transition={{
                duration: isHovered ? 1.5 : 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex items-center justify-center w-full h-full"
            >
              <Terminal className="w-5 h-5 text-foreground/85 drop-shadow-sm" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Tooltip - only on hover */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-foreground text-background text-sm rounded-md whitespace-nowrap"
      >
        Back to Top
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-foreground" />
      </motion.div>
    </motion.button>
  );
}
