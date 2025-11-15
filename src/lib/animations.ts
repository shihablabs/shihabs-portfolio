import type { Variants } from "framer-motion";

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
} satisfies Variants;

export const slideIn = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
} satisfies Variants;

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} satisfies Variants;

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
} satisfies Variants;

export const blurIn = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(10px)" },
} satisfies Variants;

export const heroVariants = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  } satisfies Variants,
  text: {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  } satisfies Variants,
  image: {
    initial: { opacity: 0, scale: 0.8, rotate: -5 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
      },
    },
  } satisfies Variants,
  button: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  } satisfies Variants,
} as const;
