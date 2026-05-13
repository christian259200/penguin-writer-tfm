import Link from "next/link";

import { TFM } from "@/lib/tfm-palette";
import { cn } from "@/lib/utils";

export function TfmSiteFooter({ presentationMode = false }: { presentationMode?: boolean }) {
  return (
    <footer
      className={cn(
        "mt-auto border-t",
        presentationMode
          ? "border-slate-200/90 bg-transparent py-8"
          : "mt-16",
      )}
      style={
        presentationMode
          ? undefined
          : { borderColor: TFM.border, backgroundColor: TFM.surfaceMuted }
      }
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 text-sm",
          presentationMode ? "py-6" : "py-10",
        )}
        style={{ color: `${TFM.navy}b3` }}
      >
        <p className="font-semibold" style={{ color: TFM.navy }}>
          Trabajo Fin de Máster · EAE Business School Madrid
        </p>
        <p className="mt-2 max-w-2xl">
          Sitio académico para la presentación y defensa del TFM (2.ª entrega). El proyecto
          emprendedor analizado es <strong style={{ color: TFM.navy }}>Penguin Writer</strong>;
          esta web documenta el trabajo académico, no sustituye el producto comercial.
        </p>
        <p className="mt-4">
          <Link href="/" className="underline-offset-4 hover:underline" style={{ color: TFM.brandBlue }}>
            Volver al inicio
          </Link>
          {" · "}
          <Link href="/explorar-tfm" className="underline-offset-4 hover:underline" style={{ color: TFM.brandBlue }}>
            Explorar el TFM
          </Link>
          {" · "}
          <Link href="/demo" className="underline-offset-4 hover:underline" style={{ color: TFM.brandBlue }}>
            Referencia visual (demo)
          </Link>
        </p>
      </div>
    </footer>
  );
}
