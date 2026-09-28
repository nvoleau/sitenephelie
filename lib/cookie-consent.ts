export const CONSENT_COOKIE_NAME = "nephelie_cookie_consent";
export const CONSENT_EVENT = "nephelie-cookie-consent-changed";

export type ConsentValue = "accepted" | "refused";

const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180; // 180 jours

export function getStoredConsent(): ConsentValue | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE_NAME}=([^;]*)`));
  const value = match ? decodeURIComponent(match[1]) : null;
  return value === "accepted" || value === "refused" ? value : null;
}

export function storeConsent(value: ConsentValue): void {
  document.cookie = `${CONSENT_COOKIE_NAME}=${value}; path=/; max-age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent<ConsentValue>(CONSENT_EVENT, { detail: value }));
}
