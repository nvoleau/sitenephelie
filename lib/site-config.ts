// Source unique des coordonnées (NAP) — adresse confirmée par Nicolas le 09/09/2026 :
// "5 Rte de Saint-Michel Mont Mercure" (au lieu de la version "3 route..." trouvée
// sur l'ancien site, désormais obsolète). Ne pas dupliquer cette valeur ailleurs.
export const siteConfig = {
  name: "Les Gîtes Néphélie",
  url: "https://gites-nephelie.fr",
  description:
    "4 gîtes de 2 à 8 personnes à 8 minutes du Puy du Fou, aux Epesses en Vendée. Séjour 100% autonome, confort haut de gamme, livraison de produits locaux.",
  address: {
    street: "5 Rte de Saint-Michel Mont Mercure",
    postalCode: "85590",
    city: "Les Epesses",
    region: "Vendée",
    country: "FR",
  },
  phone: "06 78 55 24 29",
  phoneHref: "+33678552429",
  email: "contact@gites-nephelie.fr",
  whatsappHref: "https://wa.me/33678552429",
  // URL réelle relevée le 10/09/2026 sur la fiche Google Business Profile
  // (l'ancienne valeur "https://www.facebook.com/" était un placeholder générique).
  facebookHref: "https://www.facebook.com/people/Gites-N%C3%A9ph%C3%A9lie/61578778228599/",
  // Lien stable vers la fiche Google Business Profile (CID relevé le 10/09/2026,
  // fiche validée à 100% par Nicolas). Sert de référence externe (sameAs) et de
  // lien direct vers les avis Google.
  googleBusinessHref: "https://www.google.com/maps?cid=11139057569288891158",
  reviews: {
    count: 47,
    source: "Booking.com",
    label: "Excellent",
    // Pas de note moyenne chiffrée exacte confirmée par Nicolas pour l'instant —
    // ne pas inventer de ratingValue en schema.org tant qu'il ne l'a pas validée
    // (une valeur 8,9/10 sur 83 avis a été repérée sur Booking.com le 10/09/2026,
    // mais ce chiffre est vivant et n'a pas été confirmé par Nicolas comme figeable).
  },
} as const;

export const sameAsLinks = [siteConfig.facebookHref, siteConfig.googleBusinessHref];

export const addressLine = `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`;
