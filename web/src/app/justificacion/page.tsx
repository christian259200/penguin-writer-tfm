import type { Metadata } from "next";

import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Justificación y objetivos · TFM Penguin Writer",
  description: "Objetivos del TFM y justificación del formato web, EAE Business School.",
};

export default function JustificacionPage() {
  return (
    <TfmPageShell currentPath="/justificacion">
      <article className="space-y-6 text-[15px] leading-relaxed">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Justificación y objetivos
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Por qué este TFM y por qué en formato web
        </h1>
        <p className="text-muted-foreground">
          <strong className="text-foreground">Objetivo general.</strong> Documentar de forma
          integrada el Trabajo Fin de Máster sobre el proyecto empresarial{" "}
          <strong className="text-foreground">Penguin Writer</strong>, un SaaS orientado a
          consultores, coaches y profesionales del marketing en Estados Unidos que publican con
          frecuencia y necesitan mantener una voz propia sin caer en textos genéricos.
        </p>
        <p className="text-muted-foreground">
          <strong className="text-foreground">Objetivos académicos del sitio.</strong>
        </p>
        <ul className="list-inside list-disc space-y-2 text-muted-foreground">
          <li>
            Presentar en un solo entorno navegable la justificación, el estudio de mercado, la
            descripción del producto y los requisitos de desarrollo pedidos por la escuela.
          </li>
          <li>
            Demostrar arquitectura de información clara (sitemap, plantillas, niveles de contenido).
          </li>
          <li>
            Facilitar la defensa presencial con navegación en tiempo real (máx. 15 minutos por
            grupo), sin depender solo de archivos sueltos.
          </li>
          <li>
            Incluir el plan de visibilidad del <em>sitio del TFM</em> (no confundir con el plan
            comercial completo del negocio, que se desarrolla en la memoria escrita).
          </li>
        </ul>
        <p className="text-muted-foreground">
          <strong className="text-foreground">Justificación del formato.</strong> La web permite
          enlazar objetivos, mapa de contenidos, usabilidad e hipertexto de forma coherente con las
          instrucciones EAE: el TFM se expone como proyecto digital, con secciones accesibles desde
          el menú global y alineadas al diagrama de arquitectura.
        </p>
      </article>
    </TfmPageShell>
  );
}
