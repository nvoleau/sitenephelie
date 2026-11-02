// Contenu de l'option "Le Boudoir" — décrit directement par Nicolas (brief du
// 30/10/2026), pas de fait inventé ici. Indépendant de lib/pricing.ts
// (showPrices=false ne concerne que les tarifs de nuitée des gîtes, non
// confirmés ; le prix du Boudoir, lui, est donné explicitement).

import { getGiteBySlug } from "@/lib/data/gites";

// Confirmé par Nicolas le 30/10/2026 : l'option n'est installée que dans ce
// gîte, jamais dans les 3 autres. Source unique pour toutes les pages de la
// rubrique — ne jamais réécrire "Gîte A" en dur ailleurs.
export const boudoirGite = getGiteBySlug("gite-a")!;

export const boudoirPrice = {
  amount: 250,
  currency: "EUR",
  // Toujours afficher ce complément à côté du montant : l'option est vendue
  // au séjour, jamais à la nuitée.
  unitLabel: "par séjour, quelle que soit la durée",
} as const;

export const boudoirIncluded = [
  `Une chambre du ${boudoirGite.name} transformée en boudoir pour toute la durée du séjour`,
  "Éclairage d'ambiance",
  "Linge satiné",
  "Mobilier dédié : sofa tantra, sex swing (balançoire érotique sur structure autoportante) et banc",
  "Installation et remise en place du mobilier assurées par nos soins",
  "Ménage renforcé inclus",
];

export const boudoirNotIncluded = [
  "Pas de spa, ni de jacuzzi : Le Boudoir aménage une chambre, ce n'est pas un espace bien-être",
  "Pas de soin ni de massage à deux : vous profitez du lieu en toute autonomie",
  "Pas de supplément par nuit : le tarif est fixe pour l'ensemble du séjour, quelle que soit sa durée",
];

export const boudoirConditions = [
  `Disponible uniquement sur le ${boudoirGite.name} — votre réservation doit porter sur ce gîte`,
  "Réservé à deux adultes majeurs",
  "Le gîte est entièrement privatisé pour la durée du séjour",
  "Sex swing sur structure autoportante : charge maximale de 110 kg",
  "Mobilier conçu pour un usage à deux, dans le respect des consignes rappelées sur place, dans le livret d'accueil du gîte",
  "Vous êtes responsable du mobilier pendant votre séjour, comme pour le reste de l'équipement du gîte",
  "L'option apparaît sous un libellé discret sur votre facture",
];
