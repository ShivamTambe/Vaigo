// src/components/AnimatedCounter.tsx
import { useState, useEffect, useRef } from "react";
import { animate, useMotionValue, useMotionValueEvent, useInView } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 1.4,
  suffix = "",
}: AnimatedCounterProps) {
  const [value, setValue] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(from);

  // Every time motionValue updates → update UI number
  useMotionValueEvent(motionValue, "change", (latest) => {
    setValue(Math.floor(latest)); // convert to plain number
  });

  useEffect(() => {
    if (isInView) {
      // animate() is the correct function in framer-motion v10+
      animate(motionValue, to, {
        duration,
        ease: "easeOut",
      });
    }
  }, [isInView]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
