/**
 * JSON-LD de /guide/gite-climatise-puy-du-fou/
 *
 * Emplacement conseillé : lib/jsonld/gite-climatise.ts
 *
 * ATTENTION — question FAQ manquante volontairement :
 * « Faut-il payer un supplément pour la climatisation ? » est présente dans le
 * .mdx mais sa réponse n'est pas encore rédigée. Google exige que chaque
 * question du FAQPage ait une réponse VISIBLE et IDENTIQUE sur la page.
 * Une question sans réponse visible est une violation des règles de
 * données structurées. Elle est donc absente ici : ajoutez-la une fois la
 * réponse écrite dans le .mdx, en recopiant le texte à l'identique.
 */

import { SITE_URL, BUSINESS_ID, buildGraph } from "./business";

const PAGE_URL = `${SITE_URL}/guide/gite-climatise-puy-du-fou/`;

const article = {
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline:
    "Gîte climatisé près du Puy du Fou : pourquoi c'est devenu un critère",
  description:
    "Après l'été le plus chaud jamais mesuré en France, la climatisation n'est plus un confort accessoire. Ce que recouvre vraiment le mot « climatisé » et comment sont équipés nos gîtes aux Epesses.",
  datePublished: "2026-09-18",
  dateModified: "2026-09-18",
  inLanguage: "fr-FR",
  author: { "@type": "Organization", name: "Les Gîtes Néphélie" },
  publisher: { "@id": BUSINESS_ID },
  mainEntityOfPage: PAGE_URL,
  about: { "@id": BUSINESS_ID },
} as const;

const faq = {
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Les gîtes près du Puy du Fou sont-ils climatisés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une minorité seulement. Le parc immobilier local est majoritairement ancien, et la climatisation fixe reste rare dans les locations saisonnières de la région. Vérifiez systématiquement l'équipement dans le descriptif, et demandez quelles pièces sont concernées.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle différence entre climatisation fixe et climatiseur mobile ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La climatisation fixe est une unité murale reliée à un groupe extérieur, silencieuse et pilotée par thermostat. Le climatiseur mobile est un appareil sur roulettes dont la gaine d'évacuation passe par la fenêtre : il refroidit, mais il est bruyant et ne traite qu'une pièce.",
      },
    },
    {
      "@type": "Question",
      name: "Fait-il vraiment chaud au Puy du Fou en été ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'été 2026 a été le plus chaud mesuré en France depuis 1900, avec 53 jours en vague de chaleur. Une journée au parc représente huit à dix heures en extérieur, souvent en tribunes exposées.",
      },
    },
    {
      "@type": "Question",
      name: "Quand réserver un gîte climatisé pour l'été ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre janvier et avril. L'offre climatisée est limitée sur le secteur et se remplit avant le reste du parc locatif.",
      },
    },
  ],
} as const;

const breadcrumb = {
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guide du séjour",
      item: `${SITE_URL}/guide/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Gîte climatisé près du Puy du Fou",
    },
  ],
} as const;

export const giteClimatiseJsonLd = buildGraph(article, faq, breadcrumb);
