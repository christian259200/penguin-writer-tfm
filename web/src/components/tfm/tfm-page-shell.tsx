import type { ReactNode } from "react";

import { TfmSiteFooter } from "@/components/tfm/tfm-site-footer";
import { TfmSiteHeader } from "@/components/tfm/tfm-site-header";

export function TfmPageShell({
  children,
  currentPath,
}: {
  children: ReactNode;
  currentPath: string;
}) {
  return (
    <>
      <TfmSiteHeader currentPath={currentPath} />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:py-14">{children}</main>
      <TfmSiteFooter />
    </>
  );
}
