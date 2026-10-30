// Contenu de la page /sejour-en-amoureux/alternative-love-room-vendee/ —
// comparaison honnête avec une "love room" classique (spa/jacuzzi), distincte
// des listes inclus/non-inclus du Boudoir (lib/data/amour-boudoir.ts) pour
// éviter toute duplication de contenu entre les deux pages.

import { boudoirGite } from "@/lib/data/amour-boudoir";

export const loveRoomOffered = [
  "Un gîte entièrement privatisé, rien que pour vous deux",
  `Une option Le Boudoir sur le ${boudoirGite.name} : chambre aménagée, éclairage d'ambiance, linge satiné`,
  "Un cadre calme, à 8 minutes du Puy du Fou, hors saison",
  "Une terrasse privative et le bocage vendéen comme décor",
];

export const loveRoomNotOffered = [
  "Pas de spa, ni de jacuzzi",
  "Pas de hammam, ni de sauna",
  "Pas de soin ou de massage à deux inclus",
  "Pas d'établissement dédié : vous séjournez dans un gîte indépendant, pas dans un complexe bien-être",
];
