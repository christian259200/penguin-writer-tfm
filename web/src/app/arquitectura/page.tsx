import type { Metadata } from "next";

import { TfmPageShell } from "@/components/tfm/tfm-page-shell";
import { TfmSitemapDiagram } from "@/components/tfm/tfm-sitemap-diagram";

export const metadata: Metadata = {
  title: "Arquitectura y sitemap · TFM Penguin Writer",
  description: "Arquitectura del sitio web del TFM y diagrama de sitemap.",
};

export default function ArquitecturaPage() {
  return (
    <TfmPageShell currentPath="/arquitectura">
      <article className="space-y-6 text-[15px] leading-relaxed">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Arquitectura
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Estructura general y sitemap
        </h1>
        <p className="text-muted-foreground">
          La web del TFM sigue una jerarquía plana de primer nivel: todas las secciones principales
          son accesibles desde la cabecera global y desde la página de inicio. No hay más de dos
          niveles de profundidad en esta entrega (home → sección).
        </p>
        <ul className="list-inside list-disc space-y-2 text-muted-foreground">
          <li>
            <strong className="text-foreground">Plantillas:</strong> Home (landing del TFM con
            hero), plantilla de sección estándar (título, metadatos, cuerpo) y pie común con aviso
            académico.
          </li>
          <li>
            <strong className="text-foreground">Niveles de información:</strong> portada (qué es el
            sitio); núcleo académico (justificación, mapa, arquitectura, mercado, producto,
            desarrollo); cumplimiento (marketing, IA, vídeos); meta (equipo).
          </li>
          <li>
            <strong className="text-foreground">Usabilidad:</strong> menú persistente, hit area
            amplia en móvil, etiquetas cortas en el hero y etiquetas largas en tarjetas de inicio.
          </li>
        </ul>
        <TfmSitemapDiagram />
        <p className="text-sm text-muted-foreground">
          El diagrama es interactivo: cada caja enlaza a su ruta. Debe coincidir con lo entregado en
          memoria si incluís una figura exportada (PNG/SVG) como anexo.
        </p>
      </article>
    </TfmPageShell>
  );
}
