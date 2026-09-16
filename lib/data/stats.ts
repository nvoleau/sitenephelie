import { gites } from "./gites";
import { siteConfig } from "@/lib/site-config";

// Chiffres clés de l'accueil / A propos — tous dérivés de données réelles déjà
// confirmées ailleurs dans le dépôt (aucun nouveau fait introduit ici).
// Distance au Puy du Fou : "8 minutes", tranché par Nicolas le 16/09/2026 (voir
// CLAUDE.md) — remplace la valeur historique "2 minutes".
export const statHighlights = [
  { value: String(gites.length), label: "Gîtes indépendants" },
  { value: String(siteConfig.reviews.count), label: `Avis ${siteConfig.reviews.label} (${siteConfig.reviews.source})` },
  { value: "8 min", label: "Du Puy du Fou" },
  {
    value: `${Math.min(...gites.map((g) => g.capacity))}–${Math.max(...gites.map((g) => g.capacity))}`,
    label: "Personnes par séjour",
  },
] as const;
