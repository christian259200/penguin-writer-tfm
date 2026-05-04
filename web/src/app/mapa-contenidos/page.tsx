import type { Metadata } from "next";

import { TfmPageShell } from "@/components/tfm/tfm-page-shell";
import { tfmMainNav } from "@/lib/tfm-nav";

export const metadata: Metadata = {
  title: "Mapa de contenidos · TFM Penguin Writer",
  description: "Clasificación de contenidos e interactividad del sitio del TFM.",
};

export default function MapaContenidosPage() {
  return (
    <TfmPageShell currentPath="/mapa-contenidos">
      <article className="space-y-8 text-[15px] leading-relaxed">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Mapa de contenidos e interactividad
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Qué incluye cada sección y cómo interactúa el usuario
        </h1>
        <p className="text-muted-foreground">
          Tabla de correspondencia entre rutas del sitio, tipo de contenido (propio del TFM) y
          elementos interactivos previstos. El contenido textual se amplía con la memoria Word/PDF
          oficial; aquí se fija la estructura académica.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="border-b border-border bg-muted/50 text-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Ruta / sección</th>
                <th className="px-4 py-3 font-medium">Contenido</th>
                <th className="px-4 py-3 font-medium">Interactividad</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                {
                  path: "/",
                  content: "Presentación del TFM, accesos rápidos, hero de proyecto.",
                  ux: "Navegación hero + tarjetas a secciones; scroll a #accesos.",
                },
                {
                  path: "/justificacion",
                  content: "Objetivos y justificación del TFM y del formato web.",
                  ux: "Enlaces internos en cabecera global; lectura lineal.",
                },
                {
                  path: "/mapa-contenidos",
                  content: "Inventario y clasificación (esta página).",
                  ux: "Tabla responsive; referencias a otras rutas.",
                },
                {
                  path: "/arquitectura",
                  content: "Sitemap gráfico y niveles de información.",
                  ux: "Diagrama clicable hacia cada sección.",
                },
                {
                  path: "/estudio-de-mercado",
                  content: "Resumen del entorno (p. ej. PESTEL) desde la memoria.",
                  ux: "Anclas internas / apartados; ampliación en documento entregado.",
                },
                {
                  path: "/producto",
                  content: "Módulos del SaaS como objeto de estudio del TFM.",
                  ux: "Listas y definiciones; enlaces a demo visual si aplica.",
                },
                {
                  path: "/desarrollo-web",
                  content: "Plantillas, estructura, usabilidad en vivo.",
                  ux: "Navegación real entre páginas = prueba de usabilidad.",
                },
                {
                  path: "/marketing-digital",
                  content: "Plan de visibilidad del sitio del TFM.",
                  ux: "Lectura + checklist de acciones (SEO, social, email).",
                },
                {
                  path: "/inteligencia-artificial",
                  content: "Declaración de herramientas IA, fines y prompts.",
                  ux: "Tabla editable por el grupo (completar antes de entrega).",
                },
                {
                  path: "/equipo",
                  content: "Integrantes y roles del grupo TFM.",
                  ux: "Enlaces mailto opcionales (si se publica).",
                },
                {
                  path: "/multimedia",
                  content: "Tour del sitio (≤2 min) y vídeo de grupo (≤6 min).",
                  ux: "Enlaces embebidos o a Campus Virtual según política de publicación.",
                },
              ].map((row) => (
                <tr key={row.path} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-mono text-xs text-foreground">{row.path}</td>
                  <td className="px-4 py-3">{row.content}</td>
                  <td className="px-4 py-3">{row.ux}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <section className="rounded-xl border border-dashed border-border bg-muted/20 p-4">
          <h2 className="font-semibold text-foreground">Clasificación</h2>
          <ul className="mt-3 list-inside list-disc space-y-1 text-muted-foreground">
            <li>
              <strong className="text-foreground">Informativo:</strong> justificación, equipo,
              extractos de mercado.
            </li>
            <li>
              <strong className="text-foreground">Estructural:</strong> arquitectura, mapa,
              desarrollo (plantillas y navegación).
            </li>
            <li>
              <strong className="text-foreground">Cumplimiento EAE:</strong> marketing del sitio,
              IA, multimedia.
            </li>
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            Lista canónica de rutas:{" "}
            {tfmMainNav.map((n) => n.href).join(", ")}.
          </p>
        </section>
      </article>
    </TfmPageShell>
  );
}
