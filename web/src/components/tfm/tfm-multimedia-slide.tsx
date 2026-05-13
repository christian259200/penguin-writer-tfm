"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Monitor, Play, Smartphone, Users, Video } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

const videos = [
  {
    id: "tour",
    title: "Tour del sitio",
    duration: "~2 min",
    description: "Navegación por las secciones principales del TFM",
    icon: Monitor,
    color: "#3b82f6",
    status: "pending" as const,
  },
  {
    id: "pitch",
    title: "Vídeo del grupo",
    duration: "~6 min",
    description: "Elevator pitch de cada miembro del equipo",
    icon: Users,
    color: "#8b5cf6",
    status: "pending" as const,
  },
];

const mockups = [
  {
    id: "desktop",
    title: "Dashboard",
    src: "/images/slides/presentacion/10.jpg",
    alt: "Mockup del dashboard de Penguin Writer",
  },
  {
    id: "mobile",
    title: "App móvil",
    src: "/images/slides/presentacion/11.jpg",
    alt: "Mockup de la aplicación móvil",
  },
];

export function TfmMultimediaSlide() {
  const reduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      {/* Header */}
      <motion.header
        className="shrink-0 border-b border-slate-200/80 pb-3"
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: TEAL }}
        >
          Multimedia
        </p>
        <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Vídeos y mockups
        </h1>
      </motion.header>

      {/* Content */}
      <div className="mt-4 flex min-h-0 flex-1 flex-col gap-4 overflow-hidden lg:flex-row lg:gap-6">
        {/* Videos - izquierda */}
        <motion.div
          className="flex min-h-0 flex-1 flex-col gap-3"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <div className="mb-1 flex items-center gap-2">
            <Video className="h-4 w-4 text-slate-400" />
            <h2 className="text-sm font-semibold text-slate-900">Vídeos requeridos (EAE)</h2>
          </div>

          {videos.map((video, i) => {
            const Icon = video.icon;
            return (
              <motion.div
                key={video.id}
                className="flex flex-1 flex-col rounded-xl border border-slate-200 bg-white p-4"
                initial={reduceMotion ? {} : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: reduceMotion ? 0 : i * 0.1 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${video.color}15` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: video.color }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{video.title}</p>
                      <p className="text-xs text-slate-500">{video.duration}</p>
                    </div>
                  </div>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                      video.status === "pending"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-emerald-100 text-emerald-700"
                    )}
                  >
                    {video.status === "pending" ? "Pendiente" : "Publicado"}
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-500">{video.description}</p>

                <div className="mt-auto pt-3">
                  {video.status === "pending" ? (
                    <div className="flex items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 py-4">
                      <p className="text-xs text-slate-400">Enlace pendiente de publicar</p>
                    </div>
                  ) : (
                    <button
                      type="button"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800"
                    >
                      <Play className="h-3.5 w-3.5" />
                      Ver vídeo
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mockups - derecha */}
        <motion.div
          className="flex min-h-0 flex-1 flex-col gap-3"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <div className="mb-1 flex items-center gap-2">
            <Smartphone className="h-4 w-4 text-slate-400" />
            <h2 className="text-sm font-semibold text-slate-900">Mockups del producto</h2>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-2 gap-3">
            {mockups.map((mockup, i) => (
              <motion.div
                key={mockup.id}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
                initial={reduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={mockup.src}
                  alt={mockup.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-xs font-semibold text-white">{mockup.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Demo CTA */}
          <motion.div
            className="rounded-xl border border-cyan-200/80 bg-cyan-50/50 p-3"
            initial={reduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-center text-xs text-cyan-800">
              <strong>Demo interactiva:</strong> Disponible en la presentación del TFM
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
