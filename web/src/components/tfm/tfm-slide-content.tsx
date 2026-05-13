"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Wrapper de animación de entrada para el contenido de cada diapositiva.
 */
export function TfmSlideContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduceMotion ? { duration: 0 } : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }
      }
      className={cn("flex flex-1 flex-col", className)}
    >
      {children}
    </motion.div>
  );
}
