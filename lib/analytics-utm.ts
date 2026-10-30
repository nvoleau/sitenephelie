// Capture des paramètres utm_* au premier chargement d'une page de la
// rubrique "Séjour en amoureux", pour les faire survivre jusqu'au clic sur un
// CTA Réserver/WhatsApp même après navigation (voir components/TrackedCta.tsx
// et components/UtmCapture.tsx).

const UTM_STORAGE_KEY = "nephelie_utm";
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export type UtmParams = Partial<Record<(typeof UTM_PARAMS)[number], string>>;

export function captureUtmParams(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const found: UtmParams = {};
  for (const key of UTM_PARAMS) {
    const value = params.get(key);
    if (value) found[key] = value;
  }
  if (Object.keys(found).length > 0) {
    window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(found));
  }
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}
