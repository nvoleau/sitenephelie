// Source unique des coordonnées (NAP) — adresse confirmée par Nicolas le 09/09/2026 :
// "5 Rte de Saint-Michel Mont Mercure" (au lieu de la version "3 route..." trouvée
// sur l'ancien site, désormais obsolète). Ne pas dupliquer cette valeur ailleurs.
export const siteConfig = {
  name: "Les Gîtes Néphélie",
  url: "https://gites-nephelie.fr",
  description:
    "4 gîtes de 2 à 8 personnes à 2 minutes du Puy du Fou, aux Epesses en Vendée. Séjour 100% autonome, confort haut de gamme, livraison de produits locaux.",
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
  facebookHref: "https://www.facebook.com/",
  reviews: {
    count: 47,
    source: "Booking.com",
    label: "Excellent",
    // Pas de note moyenne chiffrée disponible pour l'instant (voir échange du
    // 09/09/2026 avec Nicolas) — ne pas inventer de ratingValue en schema.org
    // tant que le chiffre exact n'est pas fourni.
  },
} as const;

export const addressLine = `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`;
