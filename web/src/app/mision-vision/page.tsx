import type { Metadata } from "next";

import { MisionVisionContent } from "./mision-vision-content";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Misión y visión · TFM Penguin Writer",
  description: "Misión y visión del proyecto Penguin Writer, EAE Business School.",
};

export default function MisionVisionPage() {
  return (
    <TfmPageShell currentPath="/mision-vision">
      <article>
        <MisionVisionContent />
      </article>
    </TfmPageShell>
  );
}
