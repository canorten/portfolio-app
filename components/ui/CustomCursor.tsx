"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-neon-blue rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
            animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-neon-blue rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
    );
}
