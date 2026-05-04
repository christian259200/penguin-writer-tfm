import Link from "next/link";

import { TfmHiflyHome } from "@/components/tfm/tfm-hifly-home";
import { TfmSiteFooter } from "@/components/tfm/tfm-site-footer";
import { tfmMainNav } from "@/lib/tfm-nav";

export default function Home() {
  return (
    <>
      <TfmHiflyHome />
      <section
        id="accesos"
        className="border-t border-[#0b1d2e]/10 bg-[#f4f9fc] px-4 py-14 sm:py-20"
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            className="text-2xl font-normal tracking-tight text-[#0b1d2e] sm:text-3xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Segunda entrega · accesos rápidos
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#0b1d2e]/85">
            Objetivos, justificación, arquitectura, contenidos, desarrollo, plan de marketing del
            sitio y transparencia en el uso de IA — integrados en la navegación, como pide EAE.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tfmMainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl border border-[#0b1d2e]/12 bg-white p-4 text-[#0b1d2e] shadow-sm transition hover:border-[#2E75B6]/45 hover:shadow-md"
                >
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <TfmSiteFooter />
    </>
  );
}
