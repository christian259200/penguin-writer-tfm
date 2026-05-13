"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Cabecera unificada para páginas del TFM en modo presentación.
 * Sin emojis; motion suave respetando prefers-reduced-motion.
 */
export function TfmPresentationTitle({
  eyebrow,
  title,
  subtitle,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  /** Línea opcional bajo el título (puede incluir marca en línea ligera) */
  subtitle?: ReactNode;
  /** Menos espacio inferior (diapositiva que llena viewport) */
  compact?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className={cn("text-center", compact ? "mb-2 shrink-0 sm:mb-3" : "mb-10 sm:mb-12")}
      initial={reduceMotion ? false : { opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: "easeOut" }}
    >
      <p
        className={cn(
          "font-medium uppercase tracking-[0.2em] text-slate-500",
          compact ? "text-[10px] sm:text-xs" : "text-xs",
        )}
      >
        {eyebrow}
      </p>
      <h1
        className={cn(
          "mx-auto max-w-3xl font-semibold tracking-tight text-slate-900",
          compact
            ? "mt-1.5 text-2xl sm:text-[clamp(1.5rem,3.5vmin,2.75rem)]"
            : "mt-3 text-3xl sm:text-4xl",
        )}
        lang={/^[\x00-\x7F]*$/.test(title) ? "en" : undefined}
      >
        {title}
      </h1>
      <div
        className={cn(
          "mx-auto rounded-full bg-cyan-500/85",
          compact ? "mt-2 h-0.5 w-10 sm:mt-2.5" : "mt-5 h-1 w-12",
        )}
        aria-hidden
      />
      {subtitle ? (
        <p className="mx-auto mt-5 max-w-2xl text-left text-[15px] leading-relaxed text-slate-600 sm:text-center">
          {subtitle}
        </p>
      ) : null}
    </motion.header>
  );
}
