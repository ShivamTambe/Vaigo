// components/animations/Reveal.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Reveal wrapper - scroll-triggered animations with optimized timing
 * Props:
 *  - children
 *  - delay (seconds) -> small numbers like 0, 0.04, 0.08
 *  - y (px) -> vertical offset for slide-up effect (default 20)
 *  - x (px) -> horizontal offset (default 0)
 *  - scale (number) -> for soft zoom (default 1)
 *  - type -> "fade" | "slide" | "zoom" (controls initial variant)
 *  - threshold -> how much visible to trigger (default 0.05 -> fast)
 */
export default function Reveal({
  children,
  delay = 0,
  y = 20,
  x = 0,
  scale = 1,
  type = "slide",
  threshold = 0.05,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // tuned durations & easing for premium feel
  const transition = { duration: type === "zoom" ? 0.45 : 0.34, ease: "easeOut", delay };

  let hidden;
  if (type === "zoom") {
    hidden = { opacity: 0, scale: 0.985 };
  } else if (type === "fade") {
    hidden = { opacity: 0 };
  } else {
    // slide
    hidden = { opacity: 0, y, x, scale: 0.995 };
  }

  const variants = {
    hidden,
    visible: { opacity: 1, y: 0, x: 0, scale, transition },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  );
}
