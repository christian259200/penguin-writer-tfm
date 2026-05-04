import type { Metadata } from "next";

import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Uso de IA · TFM Penguin Writer",
  description: "Declaración de herramientas de IA, fines y prompts (requisito EAE).",
};

export default function InteligenciaArtificialPage() {
  return (
    <TfmPageShell currentPath="/inteligencia-artificial">
      <article className="space-y-6 text-[15px] leading-relaxed">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Transparencia
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Herramientas de inteligencia artificial
        </h1>
        <p className="text-muted-foreground">
          <strong className="text-foreground">Importante (EAE):</strong> si se utilizan
          herramientas de IA en la elaboración del TFM o del sitio, debe detallarse cuáles, para
          qué fines y con qué prompts representativos. Completad y ajustad esta tabla antes de la
          entrega final; el ejemplo siguiente es plantilla verificable.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-4 py-3 font-medium">Herramienta</th>
                <th className="px-4 py-3 font-medium">Propósito</th>
                <th className="px-4 py-3 font-medium">Prompts / notas</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border">
                <td className="px-4 py-3 align-top text-foreground">Cursor (modelo asistido)</td>
                <td className="px-4 py-3 align-top">
                  Generación de estructura de rutas, componentes React y textos base en español para
                  el sitio del TFM.
                </td>
                <td className="px-4 py-3 align-top font-mono text-xs">
                  p. ej. “Aplica a la web Next.js existente la estructura académica EAE: justificación,
                  mapa, sitemap clicable, marketing del sitio, IA, equipo, vídeos.”
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 align-top text-foreground">(A completar)</td>
                <td className="px-4 py-3 align-top">Redacción o revisión de la memoria Word.</td>
                <td className="px-4 py-3 align-top font-mono text-xs">—</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top text-foreground">(A completar)</td>
                <td className="px-4 py-3 align-top">Imágenes, iconografía o borradores de guion.</td>
                <td className="px-4 py-3 align-top font-mono text-xs">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground">
          Los integrantes del grupo son responsables de revisar la exactitud académica de todo
          contenido asistido por IA y de asegurar que la declaración es veraz.
        </p>
      </article>
    </TfmPageShell>
  );
}
