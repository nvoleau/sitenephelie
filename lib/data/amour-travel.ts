// Temps de trajet jusqu'aux Epesses — ESTIMATIONS basées sur les distances
// routières usuelles (non confirmées par Nicolas, contrairement au "8 minutes
// du Puy du Fou" qui lui est une valeur tranchée). À vérifier/ajuster avant
// mise en ligne si Nicolas a des temps plus précis.

export type TravelOrigin = { city: string; distanceKm: string; duration: string };

export const amourTravelOrigins: TravelOrigin[] = [
  { city: "Cholet", distanceKm: "environ 30 km", duration: "environ 35 minutes" },
  { city: "La Roche-sur-Yon", distanceKm: "environ 45 km", duration: "environ 50 minutes" },
  { city: "Nantes", distanceKm: "environ 70 km", duration: "environ 1 heure" },
  { city: "Angers", distanceKm: "environ 90 km", duration: "environ 1 heure 20" },
];
