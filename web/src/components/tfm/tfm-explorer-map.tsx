"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Building2,
  Code2,
  FileText,
  Lightbulb,
  Map,
  Megaphone,
  MonitorPlay,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";

import { tfmMainNav } from "@/lib/tfm-nav";
import { cn } from "@/lib/utils";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  "/justificacion": Target,
  "/mapa-contenidos": Map,
  "/arquitectura": Code2,
  "/estudio-de-mercado": Building2,
  "/producto": Lightbulb,
  "/desarrollo-web": FileText,
  "/marketing-digital": Megaphone,
  "/inteligencia-artificial": Sparkles,
  "/equipo": Users,
  "/multimedia": MonitorPlay,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 24,
    },
  },
};

export function TfmExplorerMap() {
  return (
    <section
      className={cn(
        "relative min-h-screen w-full overflow-hidden",
        "[font-family:var(--font-dm-sans),system-ui,sans-serif]"
      )}
    >
      {/* Background gradient mesh - estilo Bethouse */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0052D4] via-[#4364F7] to-[#6FB1FC]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(100,180,255,0.4)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,82,212,0.6)_0%,_transparent_60%)]" />
        {/* Circles decorativos tipo 3D */}
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -left-20 bottom-1/4 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      {/* Noise overlay sutil */}
      <div
        className="noise-overlay pointer-events-none absolute inset-0 z-[1] mix-blend-soft-light opacity-20"
        aria-hidden
      />

      {/* Header */}
      <header className="relative z-10 px-6 pt-10 pb-4 sm:px-10 sm:pt-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/80 transition hover:text-white text-sm font-medium"
        >
          <BookOpen className="h-4 w-4" />
          <span>Penguin Writer · TFM</span>
        </Link>
      </header>

      {/* Título principal - estilo display bold como KRAI */}
      <div className="relative z-10 px-6 sm:px-10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60 mb-4">
            Segunda entrega · EAE Business School
          </p>
          <h1
            className="text-[clamp(4rem,15vw,12rem)] font-normal leading-[0.85] tracking-[0.02em] text-white uppercase"
            style={{ fontFamily: "var(--font-bebas), Impact, sans-serif" }}
          >
            Explorar
            <span className="relative inline-block ml-2 sm:ml-4">
              TFM
              <span className="absolute -top-2 -right-4 sm:-right-6 text-[0.2em] text-white/80">*</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            Mapa interactivo del contenido académico. Selecciona una sección para navegar
            directamente al tema.
          </p>
        </motion.div>
      </div>

      {/* Grid de tarjetas */}
      <motion.div
        className="relative z-10 px-6 pb-16 sm:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tfmMainNav.map((item, idx) => {
            const Icon = iconMap[item.href] || FileText;
            return (
              <motion.div key={item.href} variants={cardVariants}>
                <Link
                  href={item.href}
                  className={cn(
                    "group relative flex flex-col gap-4 rounded-2xl p-5 sm:p-6",
                    "bg-white/10 backdrop-blur-xl",
                    "border border-white/20",
                    "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
                    "transition-all duration-300 ease-out",
                    "hover:bg-white/20 hover:border-white/30",
                    "hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)]",
                    "hover:-translate-y-1",
                    "cursor-pointer"
                  )}
                >
                  {/* Número de sección */}
                  <span className="absolute right-4 top-4 text-[10px] font-bold text-white/30">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Icono en círculo con efecto glow */}
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl",
                      "bg-white/20 backdrop-blur-sm",
                      "border border-white/25",
                      "transition-all duration-300",
                      "group-hover:bg-white/30 group-hover:scale-110",
                      "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                    )}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  {/* Texto */}
                  <div className="flex-1">
                    <h2 className="text-base font-semibold leading-snug text-white sm:text-lg">
                      {item.label}
                    </h2>
                    {item.short && (
                      <p className="mt-1 text-sm text-white/60">{item.short}</p>
                    )}
                  </div>

                  {/* Flecha indicadora */}
                  <div
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full",
                      "bg-white/10 border border-white/20",
                      "transition-all duration-300",
                      "group-hover:bg-white group-hover:text-blue-600",
                      "group-hover:scale-105"
                    )}
                  >
                    <span className="text-white group-hover:text-blue-600 font-medium">→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Footer info */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-6 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            EAE Business School · Máster en Dirección de Empresas Digitales
          </p>
          <Link
            href="/"
            className="text-xs font-medium text-white/70 underline underline-offset-4 hover:text-white transition"
          >
            ← Volver a la presentación
          </Link>
        </div>
      </footer>

      {/* Decorative 3D-like orbs */}
      <div className="pointer-events-none absolute right-[10%] top-[15%] z-0 hidden lg:block">
        <motion.div
          className="h-40 w-40 rounded-full bg-gradient-to-br from-white/20 to-white/5 shadow-2xl"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="pointer-events-none absolute left-[5%] bottom-[20%] z-0 hidden lg:block">
        <motion.div
          className="h-24 w-24 rounded-full bg-gradient-to-tr from-blue-300/30 to-white/10 shadow-xl"
          animate={{
            y: [0, 10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
