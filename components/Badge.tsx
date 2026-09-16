import type { ReactNode } from "react";

// Pastille terracotta — accent réservé, à n'utiliser qu'une fois par écran
// (voir README du handoff design). Le positionnement (ex. flottant sur une
// photo) reste à la charge de l'appelant via un wrapper `relative`.
export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-terre-600 px-3 py-1 text-caption font-medium text-paper">
      {children}
    </span>
  );
}
