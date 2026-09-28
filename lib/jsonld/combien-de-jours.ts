/**
 * JSON-LD de /guide/combien-de-jours-puy-du-fou/
 *
 * Les textes des réponses sont recopiés à l'identique du bloc
 * « Questions fréquentes » du .mdx. Si vous modifiez une réponse dans
 * l'article, reportez la modification ici : Google exige que la réponse
 * balisée soit identique à la réponse visible.
 */

import { SITE_URL, BUSINESS_ID, buildGraph } from "./business";

const PAGE_URL = `${SITE_URL}/guide/combien-de-jours-puy-du-fou/`;

const article = {
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: "Combien de jours pour visiter le Puy du Fou ? La réponse honnête",
  description:
    "Une journée ne suffit pas, et le parc le dit lui-même. Ce que vous verrez en 1, 2 ou 3 jours, et comment organiser votre séjour au Puy du Fou sans courir.",
  datePublished: "2026-09-28",
  dateModified: "2026-09-28",
  inLanguage: "fr-FR",
  author: { "@type": "Organization", name: "Les Gîtes Néphélie" },
  publisher: { "@id": BUSINESS_ID },
  mainEntityOfPage: PAGE_URL,
} as const;

const faq = {
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de jours faut-il pour visiter le Puy du Fou ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le parc recommande deux jours minimum pour voir l'ensemble des spectacles, villages d'époque et animations. Comptez trois jours avec de jeunes enfants, en haute saison, ou si vous ajoutez la Cinéscénie.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on tout voir au Puy du Fou en une journée ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Le parc l'indique lui-même : il n'est pas possible de voir l'intégralité des spectacles en une seule journée. Une journée bien organisée permet d'assister à environ cinq grands spectacles sur les neuf que compte le parc.",
      },
    },
    {
      "@type": "Question",
      name: "Les journées d'un billet deux ou trois jours doivent-elles être consécutives ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, les billets multi-jours s'utilisent sur des journées consécutives et ne peuvent pas être fractionnés. Un hébergement sur place est donc nécessaire.",
      },
    },
    {
      "@type": "Question",
      name: "La Cinéscénie est-elle comprise dans le billet du parc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non, elle se réserve séparément. Elle se joue 28 soirs par an, les vendredis et samedis, après la fermeture du Grand Parc.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps durent les spectacles ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre 7 et 35 minutes selon les spectacles, pour une vingtaine de représentations différentes. Les neuf grands spectacles sont les plus longs et les plus courus.",
      },
    },
    {
      "@type": "Question",
      name: "Comment connaître les horaires des spectacles ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ils changent chaque jour et sont publiés sur l'application mobile du parc, généralement la veille en fin d'après-midi. Il est donc inutile de vouloir planifier sa visite à l'heure près longtemps à l'avance.",
      },
    },
  ],
} as const;

const breadcrumb = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guide du séjour",
      item: `${SITE_URL}/guide/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Combien de jours pour visiter le Puy du Fou",
    },
  ],
} as const;

export const combienDeJoursJsonLd = buildGraph(article, faq, breadcrumb);
