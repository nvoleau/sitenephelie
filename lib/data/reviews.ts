// Avis réels relevés sur le widget Booking.com de l'ancien site (CONTENU-SITE-ACTUEL.md).
// Sur l'ancien site ces avis sont injectés en JS pur, donc invisibles pour Google —
// c'est le point d'audit à corriger : ils sont ici rendus côté serveur (SSG).
//
// IMPORTANT : aucune note chiffrée (ratingValue) n'est disponible pour l'instant —
// Nicolas n'a pas le détail exact par avis ni la moyenne Booking.com sous la main
// (échange du 09/09/2026). Ne pas inventer de note : le schema.org Review ci-dessous
// omet volontairement reviewRating tant que ces chiffres ne sont pas fournis. Cela
// prive le site de l'étoile "rich snippet" pour l'instant, mais rend déjà le texte
// des avis indexable, ce qui est le principal gain de l'audit.

export type Review = {
  author: string;
  date: string; // format source: JJ/MM/AAAA
  text: string | null; // null = note seule, sans commentaire sur le site actuel
};

export const reviews: Review[] = [
  { author: "Sylvie", date: "13/07/2026", text: "Parfait" },
  { author: "Brigitte", date: "11/07/2026", text: null },
  {
    author: "Cindy",
    date: "08/07/2026",
    text: "Parfait si vous voulez être à 5 minutes du Puy Du Fou — climatisation au top, jeux extérieurs (ping-pong, panier de basket, ballons, skate, trottinette). Un parasol/transat sur la terrasse serait un plus.",
  },
  { author: "Maud", date: "06/07/2026", text: null },
  {
    author: "Hanquez",
    date: "01/07/2026",
    text: "Très bon séjour dans un cadre correspondant à notre attente — propreté, climatisation, équipement ménager, proximité du Puy du Fou.",
  },
  { author: "Roland", date: "28/06/2026", text: null },
  {
    author: "Franck",
    date: "25/06/2026",
    text: "Super séjour — emplacement, propreté, climatisation en pleine canicule, propriétaire agréable.",
  },
  {
    author: "Elise",
    date: "24/06/2026",
    text: "Bien optimisé, confortable malgré la canicule, literie parfaite.",
  },
  {
    author: "Christelle",
    date: "24/06/2026",
    text: "Appartement neuf, bien isolé, bonne literie, bien équipé, très calme.",
  },
];

export const reviewsWithText = reviews.filter((r) => r.text !== null);
