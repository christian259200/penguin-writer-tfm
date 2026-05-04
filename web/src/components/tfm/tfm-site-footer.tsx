import Link from "next/link";

export function TfmSiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">
          Trabajo Fin de Máster · EAE Business School Madrid
        </p>
        <p className="mt-2 max-w-2xl">
          Sitio académico para la presentación y defensa del TFM (2.ª entrega). El proyecto
          emprendedor analizado es <strong className="text-foreground">Penguin Writer</strong>;
          esta web documenta el trabajo académico, no sustituye el producto comercial.
        </p>
        <p className="mt-4">
          <Link href="/" className="underline-offset-4 hover:underline">
            Volver al inicio
          </Link>
          {" · "}
          <Link href="/demo" className="underline-offset-4 hover:underline">
            Referencia visual (demo)
          </Link>
        </p>
      </div>
    </footer>
  );
}
