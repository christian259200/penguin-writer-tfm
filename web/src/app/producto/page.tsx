import type { Metadata } from "next";

import { TfmProductSlide } from "@/components/tfm/tfm-product-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Producto · TFM Penguin Writer",
  description: "Penguin Writer: propuesta de valor, pricing y customer journey.",
};

export default function ProductoPage() {
  return (
    <TfmPageShell currentPath="/producto">
      <TfmProductSlide />
    </TfmPageShell>
  );
}
