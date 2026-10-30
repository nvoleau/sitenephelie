// Fenêtres hors-saison du Puy du Fou — VALEURS D'EXEMPLE. Nicolas doit les
// remplacer par les vraies dates hors-saison retenues avant mise en ligne
// (voir brief du 30/10/2026 : "à mettre dans un fichier de config, avec des
// valeurs d'exemple que je modifierai").

export type AvailabilityWindow = {
  start: string; // ISO yyyy-mm-dd
  end: string; // ISO yyyy-mm-dd
  label: string; // affiché tel quel sur le site
};

export const boudoirAvailabilityWindows: AvailabilityWindow[] = [
  { start: "2026-11-02", end: "2026-12-18", label: "du 2 novembre au 18 décembre 2026" },
  { start: "2027-01-04", end: "2027-04-02", label: "du 4 janvier au 2 avril 2027" },
];
