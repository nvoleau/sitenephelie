// PMS retenu par Nicolas le 09/09/2026 : Superhote (voir CLAUDE.md, question
// "Quel PMS/channel manager sera intégré" — désormais tranchée).
// Identifiant du widget Superhote (partagé par les deux iframes) — source unique
// pour éviter de dupliquer l'UUID dans plusieurs fichiers.
const SUPERHOTE_WIDGET_ID = "bb30c0b9-dfc2-42a7-aa1b-99314a0c3b79";

export const superhoteConfig = {
  rentalsListUrl: `https://connect.superhote.com/integrations/iframes/${SUPERHOTE_WIDGET_ID}/rentals`,
  rentalsSearchUrl: `https://connect.superhote.com/integrations/iframes/${SUPERHOTE_WIDGET_ID}/rentals-search`,
} as const;
