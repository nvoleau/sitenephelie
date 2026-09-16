"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";

// Web Share API quand disponible (mobile principalement), sinon copie du lien
// dans le presse-papier avec confirmation visuelle. Pas de bouton "favori" :
// le site n'a ni compte ni persistance, ce serait une fonctionnalité factice
// (décision validée avec Nicolas le 16/09/2026).
export default function ShareButton({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // Annulé par l'utilisateur ou indisponible — on retombe sur la copie.
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleShare}
        aria-label="Partager cette page"
        className="flex h-11 w-11 items-center justify-center rounded border border-line bg-white text-ink-700 transition-colors duration-120 ease-standard hover:border-bocage-700 hover:text-bocage-700"
      >
        <Share2 aria-hidden="true" size={18} />
      </button>
      {copied && (
        <span role="status" className="caption absolute right-0 top-full mt-2 whitespace-nowrap rounded bg-bocage-900 px-2 py-1 text-paper">
          Lien copié
        </span>
      )}
    </div>
  );
}
