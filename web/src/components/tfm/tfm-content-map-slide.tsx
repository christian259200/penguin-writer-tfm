"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  FileText,
  Flag,
  Home,
  LayoutDashboard,
  ListOrdered,
  Mail,
  Map,
  Megaphone,
  MessageCircleQuestion,
  Milestone,
  PieChart,
  ShieldAlert,
  UsersRound,
  Wallet,
} from "lucide-react";
import Link from "next/link";

const TEAL = "#0891b2";

const groups = [
  {
    type: "Informativo",
    color: "#10b981",
    sections: [
      { path: "/explorar-tfm", label: "Grupo", icon: UsersRound, content: "Presentación del equipo" },
      { path: "/justificacion", label: "Justificación", icon: FileText, content: "Objetivos y justificación" },
      { path: "/estudio-de-mercado", label: "Mercado", icon: BarChart3, content: "TAM/SAM/SOM, competencia" },
      { path: "/producto", label: "Journey", icon: BookOpen, content: "Customer journey, pricing" },
    ],
  },
  {
    type: "Estructural y difusión",
    color: "#3b82f6",
    sections: [
      { path: "/mapa-contenidos", label: "Mapa", icon: Map, content: "Inventario y clasificación" },
      {
        path: "/objetivos-marketing",
        label: "Objetivos",
        icon: ListOrdered,
        content: "Objetivos generales y KPIs a 12 meses",
      },
      { path: "/marketing-digital", label: "Marketing", icon: Megaphone, content: "Plan de presupuesto por fases" },
      {
        path: "/marketing-estrategia",
        label: "Estrategia",
        icon: Milestone,
        content: "Fases del embudo y canales",
      },
      {
        path: "/marketing-embudo",
        label: "Embudo",
        icon: PieChart,
        content: "Proyección y KPIs del funnel",
      },
      {
        path: "/email-marketing",
        label: "Email",
        icon: Mail,
        content: "Secuencias y automatización",
      },
    ],
  },
  {
    type: "Viabilidad y cierre",
    color: "#0d9488",
    sections: [
      {
        path: "/kpis-marketing",
        label: "KPIs",
        icon: LayoutDashboard,
        content: "Cuadro de mando por fase",
      },
      {
        path: "/plan-financiero",
        label: "Finanzas",
        icon: Wallet,
        content: "Proyección a 3 años",
      },
      {
        path: "/plan-contingencias",
        label: "Riesgos",
        icon: ShieldAlert,
        content: "Plan de contingencias",
      },
      {
        path: "/conclusiones",
        label: "Conclusiones",
        icon: Flag,
        content: "Síntesis del TFM",
      },
      {
        path: "/cierre",
        label: "Cierre",
        icon: MessageCircleQuestion,
        content: "Preguntas del jurado",
      },
    ],
  },
];

export function TfmContentMapSlide() {
  const reduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: reduceMotion
        ? { staggerChildren: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.15 },
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
          Mapa de contenidos
        </p>
        <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Estructura del TFM
        </h1>
      </motion.header>

      {/* Sitemap tree */}
      <motion.div
        className="mt-3 flex min-h-0 flex-1 flex-col overflow-hidden"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        {/* ── Nodo raíz: Home ── */}
        <motion.div variants={fadeIn} className="flex shrink-0 justify-center">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-xl border-2 border-cyan-400 bg-cyan-500 px-6 py-2.5 shadow-lg shadow-cyan-200/50 transition-opacity hover:opacity-90"
          >
            <Home className="h-4 w-4 text-white" />
            <span className="text-sm font-bold text-white tracking-wide">
              Penguin Writer · Home
            </span>
          </Link>
        </motion.div>

        {/* Tronco vertical */}
        <div className="flex shrink-0 justify-center">
          <div className="h-5 w-px bg-slate-300" />
        </div>

        {/* Ramas: línea horizontal + 2 columnas */}
        <motion.div
          className="relative min-h-0 flex-1 grid grid-cols-1 gap-4 md:grid-cols-3"
          variants={stagger}
        >
          {/* Línea horizontal conectora */}
          <div
            className="pointer-events-none absolute top-0 hidden h-px bg-slate-300 sm:block"
            style={{ left: "8%", right: "8%" }}
          />

          {groups.map((group) => (
            <motion.div
              key={group.type}
              variants={fadeIn}
              className="flex flex-col items-center gap-2 min-h-0"
            >
              {/* Stub vertical desde la línea horizontal */}
              <div
                className="shrink-0 h-5 w-px"
                style={{ backgroundColor: group.color + "99" }}
              />

              {/* Badge de categoría */}
              <div
                className="shrink-0 w-full rounded-lg py-1.5 text-center border"
                style={{
                  backgroundColor: group.color + "18",
                  borderColor: group.color + "50",
                }}
              >
                <span
                  className="text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: group.color }}
                >
                  {group.type}
                </span>
              </div>

              {/* Páginas */}
              <div className="flex w-full min-h-0 flex-col gap-1.5 overflow-y-auto">
                {group.sections.map(({ path, label, icon: Icon, content }) => (
                  <Link
                    key={path}
                    href={path}
                    className="group flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                  >
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                      style={{ backgroundColor: group.color + "18" }}
                    >
                      <Icon className="h-3.5 w-3.5" style={{ color: group.color }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[12px] font-semibold text-slate-800 group-hover:text-cyan-700 leading-tight">
                        {label}
                      </p>
                      <p className="truncate text-[10px] text-slate-400 leading-tight mt-0.5">
                        {content}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
