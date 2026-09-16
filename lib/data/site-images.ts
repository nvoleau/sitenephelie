// Vraies photos récupérées le 09/09/2026 depuis le site en production
// (https://gites-nephelie.fr/), à la demande de Nicolas — remplacent les
// espaces réservés. La plupart sont des photos génériques (terrasses,
// extérieurs) que l'ancien site ne associe pas non plus à un gîte précis
// (galerie commune sur l'accueil et sur /nos-gites/) : on évite d'affirmer
// dans l'alt qu'une telle photo montre spécifiquement "le Gîte A", etc.
//
// Exception constatée le 15/09/2026 (session /impeccable clarify) : gite-07.jpg
// et gite-02.jpg montrent chacune une enseigne lettrée ("A" et "D") sur la
// façade du bâtiment photographié — preuve visuelle directe, pas une
// supposition. On les utilise donc pour les fiches Gîte A et Gîte D
// ci-dessous. À confirmer par Nicolas que ces lettres correspondent bien aux
// fiches A/D telles que nommées sur le site (et pas, p.ex., une numérotation
// interne différente) avant de considérer ce point définitivement tranché.

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

// Une photo par fiche gîte (A, B, C, D) pour varier visuellement les 4 pages.
// Gîte A et Gîte D utilisent la photo qui montre leur enseigne lettrée réelle
// (voir commentaire ci-dessus) ; Gîte B et Gîte C restent une attribution
// arbitraire parmi les photos génériques, ne pas les présenter comme "la"
// photo officielle de ce gîte précis tant que Nicolas n'a pas fourni de
// photos identifiées pour ces deux-là.
export const giteCardImage: Record<string, SiteImage> = {
  "gite-a": {
    src: "/images/site/gite-07.jpg",
    width: 2048,
    height: 1536,
    alt: "Façade du Gîte A avec son enseigne et son parking privatif",
  },
  "gite-b": galleryPhotos[1],
  "gite-c": {
    src: "/images/site/nos-gites-illustration.png",
    width: 1024,
    height: 768,
    alt: "Grande table extérieure pouvant accueillir 8 personnes dans un gîte Néphélie",
  },
  "gite-d": {
    src: "/images/site/gite-02.jpg",
    width: 650,
    height: 430,
    alt: "Entrée du Gîte D avec son enseigne et sa terrasse en gazon synthétique",
  },
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

// Logo nettoyé le 16/09/2026 (voir CLAUDE.md, décisions du 16/09/2026) : le SVG
// d'origine contenait un rectangle de fond plein (viewBox 0 0 2000 2000) qui
// noyait le tracé dans un grand carré vide ; le viewBox est désormais recadré
// sur le lettrage réel (790 805 420 390), d'où les nouvelles dimensions.
export const logo: SiteImage = {
  src: "/images/site/logo.svg",
  width: 420,
  height: 390,
  alt: "Les Gîtes Néphélie",
};
