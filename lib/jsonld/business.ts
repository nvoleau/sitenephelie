/**
 * Entité LodgingBusiness partagée par toutes les pages du site.
 *
 * Emplacement conseillé : lib/jsonld/business.ts
 *
 * Règle importante : cet objet ne doit être défini QU'UNE SEULE FOIS.
 * Les articles du guide le référencent par { "@id": BUSINESS_ID } et ne
 * redéfinissent jamais ses propriétés, sinon Google voit plusieurs entités
 * concurrentes pour le même établissement.
 *
 * Nom, adresse, téléphone, email et URL dérivés de siteConfig
 * (lib/site-config.ts) — jamais codés en dur ici, sinon on retombe dans le
 * même problème (deux sources pour la même donnée, ex. l'adresse a dérivé
 * en "route" ici vs "Rte" dans siteConfig avant ce correctif du 18/09/2026).
 *
 * À RENSEIGNER avant mise en ligne :
 *   - geo.latitude / geo.longitude
 *   - petsAllowed
 */

import { siteConfig } from "@/lib/site-config";

export const SITE_URL = siteConfig.url;

export const BUSINESS_ID = `${SITE_URL}/#business`;

export const lodgingBusiness = {
  "@type": "LodgingBusiness",
  "@id": BUSINESS_ID,
  name: siteConfig.name,
  url: `${SITE_URL}/`,
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
    { "@type": "LocationFeatureSpecification", name: "Barbecue", value: true },
    {
      "@type": "LocationFeatureSpecification",
      name: "Parking privatif gratuit",
      value: true,
    },
  ],
  numberOfRooms: 4,
  petsAllowed: "A_RENSEIGNER",
} as const;

/** Petit helper pour assembler le @graph d'une page. */
export function buildGraph(...nodes: readonly unknown[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [lodgingBusiness, ...nodes],
  };
}
