/**
 * JSON-LD de la page /guide/cinescenie-horaires-ou-dormir/
 *
 * URLs, adresse, téléphone et email dérivés de siteConfig (lib/site-config.ts)
 * plutôt que codés en dur — même approche que lib/seo.ts, et exigée par
 * CLAUDE.md pour l'adresse (source unique, ne jamais la dupliquer).
 *
 * À RENSEIGNER avant mise en ligne :
 *   - geo.latitude / geo.longitude
 *   - petsAllowed
 */

import { siteConfig } from "@/lib/site-config";

const articleUrl = `${siteConfig.url}/guide/cinescenie-horaires-ou-dormir/`;
const businessId = `${siteConfig.url}/#business`;

export const cinescenieJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
      publisher: { "@id": businessId },
      mainEntityOfPage: articleUrl,
    },
    {
      "@type": "LodgingBusiness",
      "@id": businessId,
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      telephone: siteConfig.phoneHref,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        postalCode: siteConfig.address.postalCode,
        addressRegion: "Pays de la Loire",
        addressCountry: siteConfig.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "LAT_A_RENSEIGNER",
        longitude: "LON_A_RENSEIGNER",
      },
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Climatisation",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Terrasse privative",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Barbecue",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Parking privatif gratuit",
          value: true,
        },
      ],
      numberOfRooms: 4,
      petsAllowed: "A_RENSEIGNER",
    },
    {
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
    },
    {
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
    },
  ],
} as const;
