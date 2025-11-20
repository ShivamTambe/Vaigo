import React from "react";
import { motion } from "framer-motion";


export function AnimatedItem({ children, className = "", duration = 0.55, direction = "up", delay = 0 }) {
const itemVariant = {
hidden: {
opacity: 0,
y: direction === "up" ? 18 : 0,
x: direction === "left" ? -18 : direction === "right" ? 18 : 0,
scale: 0.995
},
visible: {
opacity: 1,
y: 0,
x: 0,
scale: 1,
transition: { duration, delay }
}
};


return (
<motion.div variants={itemVariant} className={className}>
{children}
</motion.div>
);
}