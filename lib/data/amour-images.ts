// Emplacements d'images prévus pour la rubrique "Séjour en amoureux" — aucune
// photo fournie pour l'instant. Nicolas doit déposer les fichiers réels à ces
// chemins dans public/images/amour/. Tant que ce n'est pas fait, ces images
// 404 sans casser le build (même tolérance que l'ogImage manquant du Guide,
// voir CLAUDE.md "Comment ajouter un article", point 4).

export type AmourImage = { src: string; alt: string; width: number; height: number };

export const amourImages = {
  heroAccueil: {
    src: "/images/amour/hero-accueil.jpg",
    alt: "Chambre en tête-à-tête éclairée aux bougies dans un des Gîtes Néphélie, ambiance romantique en soirée",
    width: 1600,
    height: 1000,
  },
  boudoirDetail: {
    src: "/images/amour/boudoir-detail.jpg",
    alt: "Aménagement Le Boudoir dans une chambre de gîte : linge satiné et éclairage d'ambiance",
    width: 1600,
    height: 1000,
  },
  loveRoom: {
    src: "/images/amour/love-room.jpg",
    alt: "Chambre cosy aménagée en alternative à une love room en Vendée, sans spa ni jacuzzi",
    width: 1600,
    height: 1000,
  },
  saintValentin: {
    src: "/images/amour/saint-valentin.jpg",
    alt: "Table dressée pour deux avec bougies pour la Saint-Valentin dans un gîte près du Puy du Fou",
    width: 1600,
    height: 1000,
  },
  escapade: {
    src: "/images/amour/escapade.jpg",
    alt: "Paysage bocager vendéen vu depuis la terrasse d'un gîte, à proximité de Nantes et d'Angers",
    width: 1600,
    height: 1000,
  },
} as const satisfies Record<string, AmourImage>;
