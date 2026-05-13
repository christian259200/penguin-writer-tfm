"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

const BLUE = "#2563eb";
const BLUE_LIGHT = "#3b82f6";
const BLUE_PALE = "#dbeafe";
const NAVY = "#0b1d2e";

type TreeNode = {
  id: string;
  label: string;
  href?: string;
  children?: TreeNode[];
};

const tfmTree: TreeNode = {
  id: "root",
  label: "TFM Penguin Writer",
  href: "/",
  children: [
    {
      id: "justificacion",
      label: "Justificación y objetivos",
      href: "/justificacion",
      children: [
        { id: "just-1", label: "Problema identificado" },
        { id: "just-2", label: "Objetivos generales" },
        { id: "just-3", label: "Objetivos específicos" },
      ],
    },
    {
      id: "contenidos",
      label: "Mapa de contenidos",
      href: "/mapa-contenidos",
      children: [
        { id: "cont-1", label: "Estructura del sitio" },
        { id: "cont-2", label: "Jerarquía de páginas" },
      ],
    },
    {
      id: "arquitectura",
      label: "Arquitectura y sitemap",
      href: "/arquitectura",
      children: [
        { id: "arq-1", label: "Diagrama técnico" },
        { id: "arq-2", label: "Stack tecnológico" },
        { id: "arq-3", label: "Flujo de datos" },
      ],
    },
    {
      id: "mercado",
      label: "Estudio de mercado",
      href: "/estudio-de-mercado",
      children: [
        { id: "merc-1", label: "Análisis competencia" },
        { id: "merc-2", label: "Público objetivo" },
        { id: "merc-3", label: "Tendencias" },
      ],
    },
    {
      id: "producto",
      label: "Producto (TFM)",
      href: "/producto",
      children: [
        { id: "prod-1", label: "Funcionalidades" },
        { id: "prod-2", label: "Propuesta de valor" },
        { id: "prod-3", label: "Roadmap" },
      ],
    },
    {
      id: "desarrollo",
      label: "Desarrollo web",
      href: "/desarrollo-web",
      children: [
        { id: "dev-1", label: "Frontend" },
        { id: "dev-2", label: "Backend" },
        { id: "dev-3", label: "Base de datos" },
      ],
    },
    {
      id: "marketing",
      label: "Marketing digital",
      href: "/marketing-digital",
      children: [
        { id: "mkt-1", label: "SEO" },
        { id: "mkt-2", label: "Redes sociales" },
        { id: "mkt-3", label: "Email marketing" },
      ],
    },
    {
      id: "ia",
      label: "Uso de IA",
      href: "/inteligencia-artificial",
      children: [
        { id: "ia-1", label: "Herramientas usadas" },
        { id: "ia-2", label: "Prompts y flujos" },
      ],
    },
    {
      id: "equipo",
      label: "Equipo",
      href: "/equipo",
      children: [
        { id: "eq-1", label: "Miembros" },
        { id: "eq-2", label: "Roles" },
      ],
    },
    {
      id: "multimedia",
      label: "Vídeos",
      href: "/multimedia",
      children: [
        { id: "vid-1", label: "Demo del producto" },
        { id: "vid-2", label: "Presentación" },
      ],
    },
  ],
};

function TreeNodeComponent({
  node,
  level = 0,
  isLast = false,
  parentExpanded = true,
}: {
  node: TreeNode;
  level?: number;
  isLast?: boolean;
  parentExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(level === 0);
  const hasChildren = node.children && node.children.length > 0;
  const isRoot = level === 0;

  const nodeContent = (
    <div
      className={cn(
        "relative flex items-center gap-3",
        level > 0 && "ml-8 sm:ml-12"
      )}
    >
      {/* Línea vertical desde el padre */}
      {level > 0 && (
        <div
          className="absolute -left-8 sm:-left-12 top-0 bottom-0 w-px"
          style={{ backgroundColor: BLUE_LIGHT }}
        />
      )}

      {/* Línea horizontal hacia el nodo */}
      {level > 0 && (
        <div
          className="absolute -left-8 sm:-left-12 top-1/2 w-8 sm:w-12 h-px"
          style={{ backgroundColor: BLUE_LIGHT }}
        />
      )}

      {/* Círculo del nodo */}
      <motion.div
        className={cn(
          "relative z-10 flex items-center justify-center rounded-full border-2 cursor-pointer transition-all duration-200",
          isRoot
            ? "h-20 w-20 sm:h-24 sm:w-24"
            : level === 1
            ? "h-14 w-14 sm:h-16 sm:w-16"
            : "h-10 w-10 sm:h-12 sm:w-12"
        )}
        style={{
          borderColor: BLUE,
          backgroundColor: expanded && hasChildren ? BLUE : "white",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {isRoot ? (
          <Image
            src="/images/penguin-logo.png"
            alt="TFM"
            width={48}
            height={48}
            className="h-12 w-12 sm:h-14 sm:w-14"
          />
        ) : (
          <span
            className={cn(
              "text-xs sm:text-sm font-bold",
              expanded && hasChildren ? "text-white" : ""
            )}
            style={{ color: expanded && hasChildren ? "white" : BLUE }}
          >
            {node.label.charAt(0)}
          </span>
        )}

        {/* Indicador de expandir */}
        {hasChildren && !isRoot && (
          <motion.div
            className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white border-2"
            style={{ borderColor: BLUE }}
            animate={{ rotate: expanded ? 180 : 0 }}
          >
            <ChevronDown
              className="h-3 w-3"
              style={{ color: BLUE }}
            />
          </motion.div>
        )}
      </motion.div>

      {/* Etiqueta del nodo */}
      <div className="flex flex-col">
        {node.href ? (
          <Link
            href={node.href}
            className={cn(
              "font-semibold transition-colors hover:underline underline-offset-4",
              isRoot ? "text-lg sm:text-xl" : level === 1 ? "text-base sm:text-lg" : "text-sm"
            )}
            style={{ color: NAVY }}
          >
            {node.label}
          </Link>
        ) : (
          <span
            className={cn(
              "font-medium",
              level === 2 ? "text-sm" : "text-base"
            )}
            style={{ color: NAVY }}
          >
            {node.label}
          </span>
        )}
        {isRoot && (
          <span className="text-xs sm:text-sm mt-1" style={{ color: `${NAVY}99` }}>
            EAE Business School · Segunda entrega
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className={cn("relative", level > 0 && "pt-4")}>
      {nodeContent}

      {/* Hijos */}
      <AnimatePresence>
        {expanded && hasChildren && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={cn("relative", level === 0 ? "ml-10 sm:ml-12 mt-2" : "mt-1")}>
              {/* Línea vertical que conecta los hijos */}
              {level === 0 && (
                <div
                  className="absolute left-0 top-0 bottom-4 w-px"
                  style={{ backgroundColor: BLUE_LIGHT }}
                />
              )}
              
              {node.children?.map((child, idx) => (
                <TreeNodeComponent
                  key={child.id}
                  node={child}
                  level={level + 1}
                  isLast={idx === (node.children?.length ?? 0) - 1}
                  parentExpanded={expanded}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TfmTreeMap() {
  return (
    <section className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm px-6 py-4 sm:px-10">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/penguin-logo.png"
              alt="Penguin Writer"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-semibold text-sm" style={{ color: NAVY }}>
              Penguin Writer · TFM
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium transition hover:opacity-70"
            style={{ color: BLUE }}
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Volver al inicio</span>
          </Link>
        </div>
      </header>

      {/* Título */}
      <div className="px-6 pt-10 pb-6 sm:px-10 max-w-5xl mx-auto">
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-3"
          style={{ color: BLUE }}
        >
          Segunda entrega · EAE Business School
        </p>
        <h1
          className="text-[clamp(2rem,6vw,4rem)] font-normal leading-[0.9] tracking-[0.01em] uppercase"
          style={{
            fontFamily: "var(--font-bebas), Impact, sans-serif",
            color: NAVY,
          }}
        >
          Mapa del TFM
        </h1>
        <p className="mt-4 text-sm sm:text-base max-w-xl" style={{ color: `${NAVY}aa` }}>
          Haz click en los nodos para expandir y ver los subtemas. Cada sección principal
          te lleva a su página correspondiente.
        </p>
      </div>

      {/* Árbol */}
      <div className="px-6 pb-20 sm:px-10 max-w-5xl mx-auto">
        <div
          className="rounded-2xl border-2 p-6 sm:p-10"
          style={{ borderColor: BLUE_PALE }}
        >
          <TreeNodeComponent node={tfmTree} />
        </div>
      </div>

      {/* Leyenda */}
      <div className="fixed bottom-6 right-6 z-40">
        <div
          className="rounded-xl border bg-white px-4 py-3 shadow-lg text-xs"
          style={{ borderColor: BLUE_PALE }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className="h-4 w-4 rounded-full border-2"
              style={{ borderColor: BLUE, backgroundColor: "white" }}
            />
            <span style={{ color: NAVY }}>Click para expandir</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-4 w-4 rounded-full"
              style={{ backgroundColor: BLUE }}
            />
            <span style={{ color: NAVY }}>Expandido</span>
          </div>
        </div>
      </div>
    </section>
  );
}
