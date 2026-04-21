"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.section
      className={cn(className)}
      id={id}
      initial={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.section>
  );
}
