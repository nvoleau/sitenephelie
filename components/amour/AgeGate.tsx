"use client";

import { useEffect, useState, type ReactNode } from "react";

const AGE_GATE_STORAGE_KEY = "nephelie_boudoir_age_ok";

// Même logique que CookieConsent.tsx (localStorage + useEffect, overlay
// visible par défaut tant que le vérificatif côté client n'a pas pu
// s'exécuter). Le contenu passé en `children` reste toujours dans le DOM —
// jamais retiré conditionnellement — donc indexable par Google ; seul
// `inert` l'empêche d'être atteint au clavier/lecteur d'écran tant que
// l'overlay est affiché.
export default function AgeGate({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    setVerified(window.localStorage.getItem(AGE_GATE_STORAGE_KEY) === "1");
    setMounted(true);
  }, []);

  function handleConfirm() {
    window.localStorage.setItem(AGE_GATE_STORAGE_KEY, "1");
    setVerified(true);
  }

  const showOverlay = !mounted || !verified;

  return (
    <>
      <div inert={showOverlay}>{children}</div>
      {showOverlay && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="age-gate-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-nuit-900/95 px-5 backdrop-blur-sm"
        >
          <div className="max-w-sm rounded-lg border border-or-500/30 bg-nuit-800 p-8 text-center">
            <p id="age-gate-title" className="h3 text-paper">
              Contenu réservé aux adultes
            </p>
            <p className="body-sm mt-3 text-paper/75">
              Cette page détaille l&rsquo;option Le Boudoir, réservée à deux adultes majeurs.
            </p>
            <button
              type="button"
              onClick={handleConfirm}
              className="btn mt-6 w-full bg-or-500 text-nuit-900 hover:bg-or-300"
            >
              J&rsquo;ai 18 ans ou plus
            </button>
          </div>
        </div>
      )}
    </>
  );
}
