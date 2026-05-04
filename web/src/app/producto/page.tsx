import type { Metadata } from "next";
import Link from "next/link";

import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Producto (TFM) · Penguin Writer",
  description: "Descripción del SaaS Penguin Writer como objeto de estudio del TFM.",
};

export default function ProductoPage() {
  return (
    <TfmPageShell currentPath="/producto">
      <article className="space-y-6 text-[15px] leading-relaxed">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Objeto de estudio
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Penguin Writer en el TFM
        </h1>
        <p className="text-muted-foreground">
          <strong className="text-foreground">Definición.</strong> Penguin Writer es un SaaS que
          integra, en una sola plataforma, tres bloques funcionales descritos en la memoria:
          investigación de temas con potencial de viralidad, generación asistida con perfiles
          basados en arquetipos de Carl Jung, y gestión del calendario editorial / proyectos.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Análisis",
              body: "Identificación de temas con mayor potencial de interés y difusión para priorizar esfuerzos editoriales.",
            },
            {
              title: "Generación",
              body: "Motor que trabaja con perfiles psicográficos (arquetipos) para sostener una voz coherente.",
            },
            {
              title: "Gestión",
              body: "Planificación del contenido y seguimiento del flujo editorial en un único entorno.",
            },
          ].map((m) => (
            <div
              key={m.title}
              className="rounded-xl border border-border bg-muted/30 p-4 text-sm text-muted-foreground"
            >
              <h2 className="font-semibold text-foreground">{m.title}</h2>
              <p className="mt-2">{m.body}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground">
          <strong className="text-foreground">Público objetivo del negocio (no del TFM):</strong>{" "}
          consultores, coaches y marketing en EE. UU. que publican de forma regular. La propuesta de
          valor del trabajo es publicar con frecuencia{" "}
          <em>sin</em> sacrificar autenticidad.
        </p>
        <p className="text-sm text-muted-foreground">
          Referencia visual adicional del proyecto (hero animado):{" "}
          <Link href="/demo" className="underline-offset-4 hover:underline">
            /demo
          </Link>
          .
        </p>
      </article>
    </TfmPageShell>
  );
}
