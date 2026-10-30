import type { ReactNode } from "react";
import UtmCapture from "@/components/UtmCapture";

// Sous-identité visuelle de la rubrique "Séjour en amoureux" : fond nuit/prune,
// accents dorés (tokens `nuit`/`prune`/`or` ajoutés dans tailwind.config.ts).
// Le Header et le Footer du layout racine (app/layout.tsx) restent en dehors
// de ce wrapper et gardent leur thème clair habituel, inchangé.
export default function SejourEnAmoureuxLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gradient-to-b from-nuit-900 via-nuit-900 to-prune-800 text-paper/90">
      <UtmCapture />
      {children}
    </div>
  );
}
