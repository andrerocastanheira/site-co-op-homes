import type { MotionProps } from "framer-motion";

/**
 * Returns motion props for a fade-up entrance animation.
 * Uses the direct prop API (initial/whileInView/viewport/transition)
 * to avoid Framer Motion Variants typing constraints.
 */
export function fadeUp(i = 0): Pick<MotionProps, "initial" | "whileInView" | "viewport" | "transition"> {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  };
}

/**
 * Animate props for elements controlled by parent variants (hero entrance).
 */
export function fadeUpAnimate(i = 0): Pick<MotionProps, "initial" | "animate" | "transition"> {
  return {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  };
}
