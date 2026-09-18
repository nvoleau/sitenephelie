/**
 * JSON-LD de la page /guide/cinescenie-horaires-ou-dormir/
 *
 * L'entité LodgingBusiness vient de lib/jsonld/business.ts (source unique,
 * référencée par @id) — ne pas la redéfinir ici. Migré le 18/09/2026 depuis
 * un objet LodgingBusiness dupliqué à la main, même pattern que
 * lib/jsonld/gite-climatise.ts.
 */

import { siteConfig } from "@/lib/site-config";
import { BUSINESS_ID, buildGraph } from "./business";

const articleUrl = `${siteConfig.url}/guide/cinescenie-horaires-ou-dormir/`;

const article = {
  "@type": "Article",
  "@id": `${articleUrl}#article`,
  headline:
    "Cinéscénie du Puy du Fou : horaires, fin du spectacle et où dormir juste à côté",
  description:
    "Horaires réels de la Cinéscénie, temps de sortie du parking et options d'hébergement à moins de 15 minutes du Puy du Fou.",
  datePublished: "2026-10-01",
  dateModified: "2026-10-01",
  inLanguage: "fr-FR",
  author: { "@type": "Organization", name: siteConfig.name },
  publisher: { "@id": BUSINESS_ID },
  mainEntityOfPage: articleUrl,
  about: { "@id": BUSINESS_ID },
} as const;

const faq = {
  "@type": "FAQPage",
  "@id": `${articleUrl}#faq`,
  mainEntity: [
        {
          "@type": "Question",
          name: "À quelle heure se termine la Cinéscénie ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le spectacle dure 1h30. Débutant à 22h30 en juin-juillet, il se termine vers minuit ; débutant à 22h en août-septembre, il se termine vers 23h30. Prévoyez 20 à 40 minutes supplémentaires pour la sortie des tribunes et du parking.",
          },
        },
        {
          "@type": "Question",
          name: "La Cinéscénie a-t-elle lieu tous les soirs ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non. Elle se joue uniquement les vendredis et samedis soirs, de début juin à mi-septembre, pour un nombre limité de représentations dans la saison.",
          },
        },
        {
          "@type": "Question",
          name: "Faut-il un billet pour le Grand Parc en plus ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non, la Cinéscénie se réserve séparément et peut être vue seule. Des formules combinées Parc + Cinéscénie existent également.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on emmener de jeunes enfants à la Cinéscénie ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "C'est possible, mais l'horaire est exigeant : le spectacle commence à l'heure où les petits dorment habituellement, et il fait frais en fin de soirée même en été. Prévoyez des vêtements chauds et un hébergement proche pour raccourcir le retour.",
          },
        },
        {
          "@type": "Question",
          name: "Quand réserver ses billets pour la Cinéscénie ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dès l'ouverture de la billetterie, à l'automne précédant la saison. Les dates de juillet et août sont les premières à afficher complet.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de temps faut-il pour rejoindre un hébergement après le spectacle ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depuis Les Epesses, comptez une dizaine de minutes une fois sorti du parking. Plus vous vous éloignez, plus l'écart se creuse avec le temps annoncé par le GPS, à cause du flux de sortie simultané de 13 000 spectateurs.",
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
      item: `${siteConfig.url}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guide du séjour",
      item: `${siteConfig.url}/guide/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cinéscénie : horaires et où dormir",
    },
  ],
} as const;

export const cinescenieJsonLd = buildGraph(article, faq, breadcrumb);
