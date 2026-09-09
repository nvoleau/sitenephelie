// Contenu réel relevé sur l'ancien site (CONTENU-SITE-ACTUEL.md, page "Nos Gîtes"
// et widget de réservation). Les gîtes A, B et D partagent la même description sur
// le site actuel (typologie "6 personnes") — ce n'est pas un contenu dupliqué par
// erreur, c'est la réalité du contenu existant. Gîte C est la seule fiche 8 personnes.
// Chaque gîte a désormais sa propre URL (décision Nicolas du 09/09/2026, cf. la
// recommandation SEO du fichier de contenu).

export type Gite = {
  slug: string;
  name: string;
  capacity: number;
  idealFor: string;
  characteristics: string[];
  quote: string;
};

const sixPersonnes = {
  capacity: 6,
  idealFor: "Un couple avec enfants",
  characteristics: [
    "2 chambres (1 lit double + 2 lits simples)",
    "1 canapé lit dans le salon",
    "Salon avec cuisine ouverte",
    "Salle de bain avec douche à l'italienne",
    "Terrasse privative avec barbecue",
    "Parking juste devant le gîte",
  ],
  quote: "Le bon équilibre entre confort, intimité et praticité.",
};

export const gites: Gite[] = [
  { slug: "gite-a", name: "Gîte A", ...sixPersonnes },
  { slug: "gite-b", name: "Gîte B", ...sixPersonnes },
  {
    slug: "gite-c",
    name: "Gîte C",
    capacity: 8,
    idealFor: "Les familles nombreuses ou deux couples",
    characteristics: [
      "2 chambres (2 lits doubles + 2 lits simples)",
      "1 canapé lit",
      "Salon lumineux avec accès terrasse",
      "Cuisine moderne toute équipée",
      "Salle de bain et WC séparés",
      "Terrasse avec mobilier extérieur & barbecue",
    ],
    quote: "Parfait pour ceux qui veulent de l'espace sans compromis.",
  },
  { slug: "gite-d", name: "Gîte D", ...sixPersonnes },
];

export const servicesInclusTousLesGites = [
  "Wi-Fi haut débit",
  "Barbecue privatif",
  "Jeux de société",
  "Linge de lit & serviettes (en option)",
  "Livraison de produits locaux à domicile",
];

export function getGiteBySlug(slug: string): Gite | undefined {
  return gites.find((g) => g.slug === slug);
}
