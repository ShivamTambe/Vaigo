import React from "react";
import { motion } from "framer-motion";


export function HoverCard({ children, className = "" }) {
return (
<motion.div
whileHover={{ scale: 1.03, y: -6 }}
whileTap={{ scale: 0.99 }}
transition={{ type: "spring", stiffness: 300, damping: 20 }}
className={className}
>
{children}
</motion.div>
);
}