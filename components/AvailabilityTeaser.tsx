import Link from "next/link";
import { Search } from "lucide-react";

// Barre visuelle sous le héros de l'accueil — reproduit l'aspect du moteur de
// recherche de la maquette sans dupliquer le vrai moteur (Superhote, sur
// /reserver-un-logement/). Purement statique : aucun input, aucun state
// client, le bouton "Rechercher" est un lien réel vers la page de réservation
// (décision validée avec Nicolas le 16/09/2026).
const segments = [
  { label: "Gîte", value: "Tous les gîtes" },
  { label: "Arrivée", value: "Choisir une date" },
  { label: "Départ", value: "Choisir une date" },
  { label: "Voyageurs", value: "2 voyageurs" },
];

export default function AvailabilityTeaser() {
  return (
    <Link
      href="/reserver-un-logement/"
      className="flex flex-col divide-y divide-line rounded-md border border-line bg-white shadow-raise transition hover:shadow-float sm:flex-row sm:divide-x sm:divide-y-0"
    >
      {segments.map((segment) => (
        <div key={segment.label} className="flex-1 px-5 py-3">
          <p className="eyebrow">{segment.label}</p>
          <p className="mt-1 text-body-sm text-ink-700">{segment.value}</p>
        </div>
      ))}
      <div className="flex items-center p-2">
        <span className="btn-primary h-full w-full sm:w-auto">
          <Search aria-hidden="true" size={16} />
          Rechercher
        </span>
      </div>
    </Link>
  );
}
