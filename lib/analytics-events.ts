import { getStoredUtmParams } from "./analytics-utm";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// GA ne se charge qu'après consentement cookie (voir components/Analytics.tsx)
// — si gtag n'existe pas encore, on n'appelle rien plutôt que de faire
// échouer le clic de l'utilisateur.
export function trackConversion(eventName: string, extraParams?: Record<string, string>): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, { ...getStoredUtmParams(), ...extraParams });
}
