import type { Metadata } from "next";

import { TfmClosingSlide } from "@/components/tfm/tfm-closing-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Cierre · TFM Penguin Writer",
  description: "Agradecimiento y espacio para preguntas — TFM Penguin Writer, EAE Business School.",
};

export default function CierrePage() {
  return (
    <TfmPageShell currentPath="/cierre" variant="bare">
      <TfmClosingSlide />
    </TfmPageShell>
  );
}
