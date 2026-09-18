"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

// Widget tiers (iframe cross-origin) : son contenu n'est pas rendu côté serveur et
// reste invisible pour Google, comme les avis Booking sur l'ancien site (voir
// CLAUDE.md). On ne peut pas SSR le contenu propriétaire de Superhote — c'est
// pourquoi la page /reserver-un-logement/ garde en plus une liste des gîtes en
// texte réel, rendue côté serveur, au-dessus de ce widget.
export default function SuperhoteWidget({
  src,
  id,
  title,
}: {
  src: string;
  id: string;
  title: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {!loaded && (
        <div
          className="absolute inset-x-0 top-0 flex h-[420px] flex-col items-center justify-center gap-3 rounded-md border border-line bg-paper text-body-sm text-ink-500"
          aria-hidden="true"
        >
          <Loader2 className="animate-spin text-bocage-700" size={28} />
          <span>Chargement des disponibilités…</span>
        </div>
      )}
      <iframe
        src={src}
        id={id}
        title={title}
        loading="lazy"
        width="100%"
        height={1500}
        onLoad={() => setLoaded(true)}
        className={`w-full rounded-md transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
