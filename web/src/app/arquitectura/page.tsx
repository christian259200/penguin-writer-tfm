import type { Metadata } from "next";

import { TfmArchitectureSlide } from "@/components/tfm/tfm-architecture-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Arquitectura · TFM Penguin Writer",
  description: "Stack tecnológico y sitemap del TFM Penguin Writer.",
};

export default function ArquitecturaPage() {
  return (
    <TfmPageShell currentPath="/arquitectura">
      <TfmArchitectureSlide />
    </TfmPageShell>
  );
}
