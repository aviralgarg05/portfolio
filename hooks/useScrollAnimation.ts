import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ScrollOffsetPair = [`${number} ${number}`, `${number} ${number}`];

export function useScrollAnimation(offset: ScrollOffsetPair = ["0 1", "1.33 1"]) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset
  });

  // Fade sections to full opacity as soon as they enter the viewport so colors stay consistent.
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [32, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [0.98, 1, 1]);

  return { ref, opacity, y, scale };
}

// Enhanced staggered animation hook with better timing
export function useStaggeredScrollAnimation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
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
        duration: 0.6
      }
    }
  };

  return { containerVariants, itemVariants };
}

// Hook for stats/numbers with scale animation
export function useStatsAnimation() {
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
        duration: 0.8
      }
    }
  };

  return variants;
}
