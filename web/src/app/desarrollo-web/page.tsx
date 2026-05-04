import type { Metadata } from "next";

import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Desarrollo de la web · TFM Penguin Writer",
  description: "Plantillas, estructura, navegación y usabilidad del sitio del TFM.",
};

export default function DesarrolloWebPage() {
  return (
    <TfmPageShell currentPath="/desarrollo-web">
      <article className="space-y-6 text-[15px] leading-relaxed">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Desarrollo del sitio
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Plantillas, estructura y usabilidad
        </h1>
        <p className="text-muted-foreground">
          El sitio se desarrolla con <strong className="text-foreground">Next.js</strong> (React) y
          estilos con <strong className="text-foreground">Tailwind CSS</strong>, siguiendo
          componentes reutilizables para cabecera, pie y cuerpo de sección.
        </p>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Tipos de plantilla</h2>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">Home del TFM:</strong> hero de marca + bloque de
              accesos rápidos al resto de rutas.
            </li>
            <li>
              <strong className="text-foreground">Página sección:</strong> shell con menú global
              fijo, título, metadatos SEO y artículo principal.
            </li>
            <li>
              <strong className="text-foreground">Pie común:</strong> contexto EAE y enlace de
              vuelta al inicio.
            </li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Navegación</h2>
          <p className="text-muted-foreground">
            Los enlaces entre secciones reproducen el sitemap definido en{" "}
            <strong className="text-foreground">/arquitectura</strong>. La prueba principal de
            usabilidad para la entrega es recorrer en vivo todas las páginas desde el menú en menos
            de tres minutos (útil para el tour en vídeo).
          </p>
        </section>
        <section className="rounded-xl border border-border bg-muted/20 p-4 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Carga de contenido inicial:</strong> texto propio
            del TFM integrado en estas rutas; las ampliaciones extensas (PESTEL completo, anexos
            legales, etc.) permanecen en la memoria formal. Este sitio es la capa de presentación
            académica.
          </p>
        </section>
      </article>
    </TfmPageShell>
  );
}
