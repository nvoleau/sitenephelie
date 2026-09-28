"use client";

import { useEffect, useState } from "react";
import { getStoredConsent, storeConsent, type ConsentValue } from "@/lib/cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getStoredConsent() === null);
  }, []);

  function handleChoice(value: ConsentValue) {
    storeConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Consentement aux cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper px-5 py-5 shadow-float sm:px-10"
    >
      <div className="container-page flex flex-wrap items-center justify-between gap-4 !px-0">
        <p className="max-w-2xl text-body-sm text-ink-500">
          Ce site utilise Google Analytics pour mesurer son audience. Ces cookies ne sont déposés qu&rsquo;avec votre accord. Vous pouvez changer d&rsquo;avis à tout moment en effaçant les cookies de votre navigateur.
        </p>
        <div className="flex shrink-0 gap-3">
          <button type="button" onClick={() => handleChoice("refused")} className="btn-ghost">
            Refuser
          </button>
          <button type="button" onClick={() => handleChoice("accepted")} className="btn-primary">
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
