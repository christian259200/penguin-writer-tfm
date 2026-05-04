import type { Metadata } from "next";

import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Equipo · TFM Penguin Writer",
  description: "Integrantes del grupo TFM Penguin Writer, EAE Business School.",
};

const members = [
  "Bianka Monge",
  "Christian Monge",
  "Maria Meya",
  "Maite Pedraza",
  "Carmen Salcedo",
];

export default function EquipoPage() {
  return (
    <TfmPageShell currentPath="/equipo">
      <article className="space-y-6 text-[15px] leading-relaxed">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Equipo</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Grupo TFM · Penguin Writer
        </h1>
        <p className="text-muted-foreground">
          Trabajo Fin de Máster en grupo, según requisitos de la asignatura. La evaluación del
          desempeño individual considera la participación observada a lo largo de la tarea y la
          asistencia presencial a la sesión de defensa.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {members.map((name) => (
            <li
              key={name}
              className="rounded-xl border border-border bg-card px-4 py-3 font-medium text-card-foreground shadow-sm"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          Añadir aquí roles (investigación, desarrollo web, vídeo, memoria) si lo exige la tutoría.
        </p>
      </article>
    </TfmPageShell>
  );
}
