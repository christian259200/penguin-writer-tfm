import Link from "next/link";

import { tfmMainNav } from "@/lib/tfm-nav";

function Node({ children, href }: { children: React.ReactNode; href?: string }) {
  const className =
    "rounded-lg border border-border bg-card px-3 py-2 text-center text-sm font-medium text-card-foreground shadow-sm";
  if (href) {
    return (
      <Link href={href} className={`${className} transition-colors hover:bg-muted`}>
        {children}
      </Link>
    );
  }
  return <div className={className}>{children}</div>;
}

function ArrowDown() {
  return (
    <div className="flex justify-center py-1" aria-hidden>
      <span className="text-muted-foreground text-xs">↓</span>
    </div>
  );
}

export function TfmSitemapDiagram() {
  return (
    <div className="my-8 rounded-xl border border-border bg-muted/20 p-4 sm:p-6">
      <p className="mb-4 text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
        Sitemap · navegación del sitio del TFM
      </p>
      <div className="mx-auto flex max-w-xl flex-col items-stretch">
        <Node href="/">Inicio (presentación del TFM)</Node>
        <ArrowDown />
        <Node href="/explorar-tfm">Grupo · presentación del equipo</Node>
        <ArrowDown />
        <div className="grid gap-2 sm:grid-cols-2">
          {tfmMainNav.map((item) => (
            <Node key={item.href} href={item.href}>
              {item.label}
            </Node>
          ))}
        </div>
      </div>
    </div>
  );
}
