"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code, FileText, Palette, PenTool, Video, Users } from "lucide-react";

import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

type TeamMember = {
  name: string;
  role: string;
  icon: typeof Code;
  color: string;
  skills: string[];
};

const teamMembers: TeamMember[] = [
  {
    name: "Bianka Monge",
    role: "Product & Strategy",
    icon: PenTool,
    color: "#8b5cf6",
    skills: ["Investigación de mercado", "Definición de producto", "Presentaciones"],
  },
  {
    name: "Christian Monge",
    role: "Tech Lead",
    icon: Code,
    color: "#3b82f6",
    skills: ["Desarrollo web", "Arquitectura", "Implementación IA"],
  },
  {
    name: "Maria Meya",
    role: "Marketing",
    icon: Palette,
    color: "#ec4899",
    skills: ["Plan de marketing", "Redes sociales", "Branding"],
  },
  {
    name: "Maite Pedraza",
    role: "Content",
    icon: FileText,
    color: "#10b981",
    skills: ["Redacción memoria", "Documentación", "UX Writing"],
  },
  {
    name: "Carmen Salcedo",
    role: "Multimedia",
    icon: Video,
    color: "#f59e0b",
    skills: ["Producción video", "Edición", "Assets visuales"],
  },
];

export function TfmTeamSlide() {
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
          Equipo fundador
        </p>
        <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Grupo TFM · Penguin Writer
        </h1>
      </motion.header>

      {/* Team Grid */}
      <motion.div
        className="mt-4 grid min-h-0 flex-1 grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-3 lg:grid-cols-5 lg:gap-4"
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        {teamMembers.map((member, i) => {
          const Icon = member.icon;
          return (
            <motion.div
              key={member.name}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-3 transition-all hover:shadow-md sm:p-4"
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : i * 0.08 }}
              whileHover={{ scale: 1.02, borderColor: member.color }}
            >
              {/* Avatar placeholder */}
              <div
                className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16"
                style={{ backgroundColor: `${member.color}15` }}
              >
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color: member.color }} />
              </div>

              {/* Info */}
              <div className="text-center">
                <p className="text-sm font-semibold text-slate-900">{member.name}</p>
                <p
                  className="mt-0.5 text-[10px] font-medium uppercase tracking-wider"
                  style={{ color: member.color }}
                >
                  {member.role}
                </p>
              </div>

              {/* Skills */}
              <div className="mt-3 flex flex-1 flex-col justify-end">
                <ul className="space-y-1">
                  {member.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-1.5 text-[10px] text-slate-500"
                    >
                      <span
                        className="h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: member.color }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="mt-4 shrink-0 flex items-center justify-center gap-2 rounded-lg border border-slate-200/80 bg-slate-50/80 px-4 py-3"
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
      >
        <Users className="h-4 w-4 text-slate-400" />
        <p className="text-xs text-slate-600">
          <strong className="text-slate-800">EAE Business School</strong> · Trabajo Fin de Máster 2024-2025
        </p>
      </motion.footer>
    </div>
  );
}
