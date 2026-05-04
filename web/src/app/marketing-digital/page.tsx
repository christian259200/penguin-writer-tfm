import type { Metadata } from "next";

import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Marketing digital del sitio · TFM Penguin Writer",
  description: "Plan de visibilidad del sitio web del TFM: SEO, redes, email.",
};

export default function MarketingDigitalPage() {
  return (
    <TfmPageShell currentPath="/marketing-digital">
      <article className="space-y-6 text-[15px] leading-relaxed">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Marketing digital (sitio del TFM)
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Dar visibilidad a la web académica
        </h1>
        <p className="text-muted-foreground">
          Este apartado cumple la rúbrica EAE: describe cómo difundir el{" "}
          <em>sitio del TFM</em>, no el plan comercial integral de Penguin Writer como startup
          (ello va en la memoria y otros entregables).
        </p>
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Objetivos</h2>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            <li>
              Que tutores y tribunal accedan por URL pública o enlace del Campus Virtual sin
              fricción.
            </li>
            <li>
              Reforzar posicionamiento básico sobre la marca del proyecto académico (“Penguin Writer
              TFM EAE”) para búsquedas deliberadas.
            </li>
            <li>
              Generar una muestra de engagement mínima (visitas, tiempo en página de arquitectura y
              mapa) durante la campaña corta de defensa.
            </li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Estrategias</h2>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">SEO on-page:</strong> títulos y descripciones por
              ruta (metadata), encabezados jerárquicos, texto enlazado interno coherente con el
              sitemap.
            </li>
            <li>
              <strong className="text-foreground">Redes sociales:</strong> publicación única o
              serie corta (LinkedIn) enlazando inicio + secciones clave (justificación, IA,
              multimedia) con UTMs opcionales.
            </li>
            <li>
              <strong className="text-foreground">Email:</strong> correo al tutor / grupo con URL
              definitiva y lista de rutas; recordatorio 48 h antes de la defensa.
            </li>
          </ul>
        </section>
        <section className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-4 py-3 font-medium">Acción</th>
                <th className="px-4 py-3 font-medium">Canal</th>
                <th className="px-4 py-3 font-medium">Indicador</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border">
                <td className="px-4 py-3">Publicar enlace + hashtags #TFM #EAE</td>
                <td className="px-4 py-3">LinkedIn</td>
                <td className="px-4 py-3">Clics / comentarios</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">Enviar URL y mapa de rutas</td>
                <td className="px-4 py-3">Email</td>
                <td className="px-4 py-3">Confirmación de recepción</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Revisión Lighthouse accesibilidad básica</td>
                <td className="px-4 py-3">Técnico</td>
                <td className="px-4 py-3">Puntuación / issues críticos</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </TfmPageShell>
  );
}
