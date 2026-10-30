/**
 * JSON-LD de /sejour-en-amoureux/saint-valentin/ — page saisonnière publicitaire,
 * volontairement sans FAQPage (voir CLAUDE.md du brief : rich snippet FAQ peu
 * pertinent sur une page d'atterrissage pub) ni Offer (déjà porté par
 * /sejour-en-amoureux/le-boudoir/, pas de redéfinition ici).
 */

import { SITE_URL, buildGraph } from "./business";

const breadcrumb = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Séjour en amoureux", item: `${SITE_URL}/sejour-en-amoureux/` },
    { "@type": "ListItem", position: 3, name: "Saint-Valentin" },
  ],
} as const;

export const amourSaintValentinJsonLd = buildGraph(breadcrumb);
