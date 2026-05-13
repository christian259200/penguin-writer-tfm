import Link from "next/link";

import { TFM } from "@/lib/tfm-palette";
import { tfmMainNav } from "@/lib/tfm-nav";
import { cn } from "@/lib/utils";

export function TfmSiteHeader({
  currentPath,
  presentationMode = false,
}: {
  currentPath?: string;
  presentationMode?: boolean;
}) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-sm supports-[backdrop-filter]:bg-white/90",
        presentationMode ? "border-cyan-200/70 bg-white/92" : "bg-white/95",
      )}
      style={presentationMode ? undefined : { borderColor: TFM.border }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-3">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Link
            href="/"
            className="text-sm font-bold tracking-tight transition hover:opacity-85"
            style={{ color: TFM.navy }}
          >
            TFM · Penguin Writer
          </Link>
          {presentationMode ? (
            <span className="rounded-full border border-cyan-200 bg-cyan-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-900">
              Presentación
            </span>
          ) : null}
        </div>
        <nav
          className="-mx-1 flex flex-wrap gap-x-1 gap-y-2 overflow-x-auto pb-1 sm:justify-end sm:pb-0"
          aria-label="Seciones del TFM"
        >
          <Link
            href="/explorar-tfm"
            className={cn(
              "rounded-md px-2 py-1 text-xs whitespace-nowrap transition-colors sm:text-[13px]",
              currentPath === "/explorar-tfm"
                ? "font-semibold"
                : "opacity-85 hover:opacity-100",
            )}
            style={
              currentPath === "/explorar-tfm"
                ? { backgroundColor: `${TFM.teal}22`, color: TFM.navy }
                : { color: `${TFM.navy}cc` }
            }
          >
            Explorar
          </Link>
          {tfmMainNav.map((item) => {
            const active = currentPath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-2 py-1 text-xs whitespace-nowrap transition-colors sm:text-[13px]",
                  active ? "font-semibold" : "opacity-85 hover:opacity-100",
                )}
                style={
                  active
                    ? { backgroundColor: `${TFM.teal}22`, color: TFM.navy }
                    : { color: `${TFM.navy}cc` }
                }
              >
                {item.short ?? item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
