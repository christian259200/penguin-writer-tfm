import Link from "next/link";

import { tfmMainNav } from "@/lib/tfm-nav";
import { cn } from "@/lib/utils";

export function TfmSiteHeader({ currentPath }: { currentPath?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground hover:opacity-80"
        >
          TFM · Penguin Writer
        </Link>
        <nav
          className="-mx-1 flex flex-wrap gap-x-1 gap-y-2 overflow-x-auto pb-1 sm:justify-end sm:pb-0"
          aria-label="Seciones del TFM"
        >
          {tfmMainNav.map((item) => {
            const active = currentPath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-2 py-1 text-xs whitespace-nowrap transition-colors sm:text-[13px]",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
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
