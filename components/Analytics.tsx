"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CONSENT_EVENT, type ConsentValue, getStoredConsent } from "@/lib/cookie-consent";

const GA_MEASUREMENT_ID = "G-KMEDEW3FSM";

// gtag.js ne doit se charger qu'après consentement explicite (CNIL — voir
// CookieConsent.tsx). Ce composant écoute le choix stocké par le bandeau et
// ne monte <GoogleAnalytics> qu'en cas d'acceptation, sans rechargement de page.
export default function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(getStoredConsent() === "accepted");

    function handleConsentChange(event: Event) {
      const value = (event as CustomEvent<ConsentValue>).detail;
      setEnabled(value === "accepted");
    }

    window.addEventListener(CONSENT_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleConsentChange);
  }, []);

  if (!enabled) return null;
  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
