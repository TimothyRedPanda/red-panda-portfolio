"use client"
import { motion } from "framer-motion"
import React from "react";

const variants = {
    hidden: { opacity: 0, y: -200 },
    enter: { opacity: 1, y: 0 },
}

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{ type: "linear" }}
        >
            {children}
        </motion.main>
    )
}