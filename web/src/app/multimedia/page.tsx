import type { Metadata } from "next";

import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Vídeos · TFM Penguin Writer",
  description: "Tour del sitio (≤2 min) y vídeo de presentación del grupo (≤6 min).",
};

export default function MultimediaPage() {
  return (
    <TfmPageShell currentPath="/multimedia">
      <article className="space-y-6 text-[15px] leading-relaxed">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Multimedia
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Vídeos requeridos
        </h1>
        <p className="text-muted-foreground">
          Sustituir los huecos siguientes por enlaces a YouTube, Vimeo o enlaces del Campus Virtual
          según indique el profesor. Mantened los límites de duración indicados en las
          instrucciones EAE.
        </p>
        <section className="space-y-3 rounded-xl border border-border bg-muted/20 p-5">
          <h2 className="text-lg font-semibold text-foreground">
            Tour virtual del sitio (máx. ~2 minutos)
          </h2>
          <p className="text-sm text-muted-foreground">
            Navegación en vivo por las secciones principales; narración clara de la arquitectura del
            TFM.
          </p>
          <div className="rounded-lg border border-dashed border-border bg-background p-6 text-center text-sm text-muted-foreground">
            URL del vídeo: <em className="text-foreground">pendiente de publicar</em>
          </div>
        </section>
        <section className="space-y-3 rounded-xl border border-border bg-muted/20 p-5">
          <h2 className="text-lg font-semibold text-foreground">
            Vídeo del grupo (máx. ~6 minutos)
          </h2>
          <p className="text-sm text-muted-foreground">
            Debe incluir el elevator pitch de cada miembro; formato creativo. No se admiten piezas que
            consistan solo en leer texto en pantalla con voz en off.
          </p>
          <div className="rounded-lg border border-dashed border-border bg-background p-6 text-center text-sm text-muted-foreground">
            URL del vídeo: <em className="text-foreground">pendiente de publicar</em>
          </div>
        </section>
        <p className="text-sm text-muted-foreground">
          La entrega oficial de enlaces debe hacerse por el <strong className="text-foreground">Campus Virtual</strong>, tal y como marca la guía de la asignatura.
        </p>
      </article>
    </TfmPageShell>
  );
}
