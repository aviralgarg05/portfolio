import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ScrollOffsetPair = [`${number} ${number}`, `${number} ${number}`];

export function useScrollAnimation(offset: ScrollOffsetPair = ["0 1", "1.33 1"]) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset
  });

  // Keep page reveals calm and legible instead of snappy.
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3, 1], [24, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.992, 1, 1]);

  return { ref, opacity, y, scale };
}

// Enhanced staggered animation hook with better timing
export function useStaggeredScrollAnimation() {
  const calmEase = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.16
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.9,
        ease: calmEase
      }
    }
  };

  return { containerVariants, itemVariants };
}

// Hook for stats/numbers with scale animation
export function useStatsAnimation() {
  const calmEase = [0.22, 1, 0.36, 1] as const;

  const variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 1.05,
        ease: calmEase
      }
    }
  };

  return variants;
}
