// Vraies photos récupérées le 09/09/2026 depuis le site en production
// (https://gites-nephelie.fr/), à la demande de Nicolas — remplacent les
// espaces réservés. Ce sont des photos génériques des gîtes (terrasses,
// extérieurs), pas des photos identifiées par lettre de gîte : l'ancien site
// ne les associe pas non plus à un gîte précis (galerie commune sur l'accueil
// et sur /nos-gites/). On évite donc d'affirmer dans l'alt qu'une photo montre
// spécifiquement "le Gîte A" par exemple — voir CLAUDE.md, ne pas déformer les faits.

export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const galleryPhotos: SiteImage[] = [
  { src: "/images/site/gite-01.jpg", width: 2048, height: 1536, alt: "Terrasse extérieure d'un gîte Néphélie avec voile d'ombrage" },
  { src: "/images/site/gite-05.jpg", width: 2048, height: 1536, alt: "Extérieur d'un gîte Néphélie" },
  { src: "/images/site/gite-07.jpg", width: 2048, height: 1536, alt: "Extérieur d'un gîte Néphélie" },
  { src: "/images/site/gite-06.jpg", width: 1536, height: 1152, alt: "Terrasse d'un gîte Néphélie" },
  { src: "/images/site/gite-04.jpg", width: 1536, height: 1024, alt: "Extérieur d'un gîte Néphélie" },
  { src: "/images/site/gite-02.jpg", width: 650, height: 430, alt: "Extérieur d'un gîte Néphélie" },
  { src: "/images/site/gite-03.jpg", width: 650, height: 430, alt: "Extérieur d'un gîte Néphélie" },
];

// Une photo par fiche gîte (A, B, C, D) pour varier visuellement les 4 pages —
// attribution arbitraire, ne pas présenter comme "la" photo officielle de ce
// gîte précis tant que Nicolas n'a pas fourni de photos identifiées.
export const giteCardImage: Record<string, SiteImage> = {
  "gite-a": galleryPhotos[0],
  "gite-b": galleryPhotos[1],
  "gite-c": {
    src: "/images/site/nos-gites-illustration.png",
    width: 1024,
    height: 768,
    alt: "Grande table extérieure pouvant accueillir 8 personnes dans un gîte Néphélie",
  },
  "gite-d": galleryPhotos[3],
};

export const nosGitesBanner: SiteImage = {
  src: "/images/site/nos-gites-banner.jpg",
  width: 1536,
  height: 922,
  alt: "Les Gîtes Néphélie",
};

export const aProposBanner: SiteImage = {
  src: "/images/site/a-propos-banner.jpg",
  width: 1536,
  height: 1152,
  alt: "Les Gîtes Néphélie",
};

export const aProposPhoto: SiteImage = {
  src: "/images/site/a-propos-photo.jpg",
  width: 1536,
  height: 1152,
  alt: "Intérieur d'un gîte Néphélie",
};

export const logo: SiteImage = {
  src: "/images/site/logo.svg",
  width: 2000,
  height: 2000,
  alt: "Les Gîtes Néphélie",
};
