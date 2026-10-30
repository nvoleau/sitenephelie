import { boudoirAvailabilityWindows } from "@/lib/data/amour-availability";

export default function AvailabilityBlock({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2 className="h2 text-paper">Disponible hors saison</h2>
      <p className="body-sm mt-2 text-paper/70">
        Le Boudoir est proposé uniquement hors saison du Puy du Fou, sur les périodes suivantes :
      </p>
      <ul className="mt-4 space-y-2">
        {boudoirAvailabilityWindows.map((window) => (
          <li
            key={window.start}
            className="rounded-md border border-or-500/20 bg-paper/5 px-4 py-3 text-body-sm text-paper/85"
          >
            {window.label}
          </li>
        ))}
      </ul>
      <p className="caption mt-3 text-paper/50">Dates à confirmer au moment de la réservation.</p>
    </div>
  );
}
