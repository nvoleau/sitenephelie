/**
 * JSON-LD de /sejour-en-amoureux/escapade-pres-de-nantes-angers/ — page
 * d'atterrissage publicitaire, volontairement sans FAQPage ni Offer
 * (mêmes raisons que /sejour-en-amoureux/saint-valentin/).
 */

import { SITE_URL, buildGraph } from "./business";

const breadcrumb = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Séjour en amoureux", item: `${SITE_URL}/sejour-en-amoureux/` },
    { "@type": "ListItem", position: 3, name: "Escapade depuis Nantes et Angers" },
  ],
} as const;

export const amourEscapadeJsonLd = buildGraph(breadcrumb);
