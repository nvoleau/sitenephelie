import {
  Bath,
  BedDouble,
  Car,
  Check,
  Flame,
  Sun,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

// Associe une icône Lucide à chaque ligne de `gite.characteristics` (texte
// libre déjà présent dans lib/data/gites.ts) selon un mot-clé — habillage
// visuel uniquement, n'invente aucun fait, ne modifie aucun texte.
const rules: [RegExp, LucideIcon][] = [
  [/cuisine/i, UtensilsCrossed],
  [/terrasse/i, Sun],
  [/barbecue/i, Flame],
  [/douche|bain|wc/i, Bath],
  [/parking/i, Car],
  [/lit|chambre|canapé/i, BedDouble],
];

export function iconForCharacteristic(text: string): LucideIcon {
  const match = rules.find(([pattern]) => pattern.test(text));
  return match ? match[1] : Check;
}
