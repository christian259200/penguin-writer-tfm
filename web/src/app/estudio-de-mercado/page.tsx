import type { Metadata } from "next";

import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Estudio de mercado · TFM Penguin Writer",
  description: "Resumen del estudio de mercado del TFM (entorno EE. UU., PESTEL).",
};

export default function EstudioMercadoPage() {
  return (
    <TfmPageShell currentPath="/estudio-de-mercado">
      <article className="space-y-6 text-[15px] leading-relaxed">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Estudio de mercado
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Entorno y mercado objetivo
        </h1>
        <p className="text-muted-foreground">
          Resumen alineado con la <strong className="text-foreground">2.ª entrega</strong> de la
          memoria: Penguin Writer se plantea como proyecto lanzado desde España hacia Estados
          Unidos, un mercado maduro de software y creadores profesionales.
        </p>
        <section className="space-y-3 rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm">
          <h2 className="text-lg font-semibold">Problema y oportunidad</h2>
          <p className="text-muted-foreground">
            Los creadores de contenido profesional necesitan publicar a menudo sin perder
            autenticidad. Muchas herramientas de IA homogeneizan el estilo; el dolor no es solo
            “escribir”, sino idear, redactar y coherencia de marca en un mercado saturado.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Marco PESTEL (síntesis)</h2>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">Político / legal:</strong> transferencia de datos
              UE–EE. UU., CCPA, evolución normativa en IA y privacidad; relevancia para perfiles
              psicográficos almacenados.
            </li>
            <li>
              <strong className="text-foreground">Económico:</strong> gasto en software y servicios
              digitales; fatiga de suscripciones; oportunidad de consolidar varias funciones en un
              solo SaaS.
            </li>
            <li>
              <strong className="text-foreground">Social:</strong> demanda de voz genuina,
              rechazo al contenido “robot”; arquetipos como capa de diferenciación.
            </li>
            <li>
              <strong className="text-foreground">Tecnológico:</strong> IA agéntica, stacks cloud
              (p. ej. automatización, edge), dependencia de APIs de terceros.
            </li>
            <li>
              <strong className="text-foreground">Ecológico:</strong> eficiencia y proveedores
              cloud con criterios de sostenibilidad (síntesis para compradores exigentes).
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            El desarrollo completo con fuentes y datos figura en el documento Word/PDF del TFM; esta
            sección sirve de puerta de entrada y apoyo en la defensa oral.
          </p>
        </section>
      </article>
    </TfmPageShell>
  );
}
