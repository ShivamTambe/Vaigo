import React from "react";
import { motion } from "framer-motion";


// AnimatedSection: wraps a section and applies a reveal animation + optional stagger for children
export function AnimatedSection({
children,
stagger = 0.12,
className = "",
offset = 0.3,
direction = "up", // up | left | right | none
duration = 0.55,
delay = 0
}) {
const variants = {
hidden: {
opacity: 0,
y: direction === "up" ? 24 : 0,
x: direction === "left" ? -24 : direction === "right" ? 24 : 0,
scale: 0.995
},
visible: {
opacity: 1,
y: 0,
x: 0,
scale: 1,
transition: {
when: "beforeChildren",
staggerChildren: stagger,
duration: duration,
delay: delay
}
}
};


return (
<motion.section
className={className}
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: offset }}
variants={variants}
>
{children}
</motion.section>
);
}