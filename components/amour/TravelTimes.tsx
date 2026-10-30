import { amourTravelOrigins } from "@/lib/data/amour-travel";

export default function TravelTimes({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2 className="h2 text-paper">Depuis chez vous</h2>
      <p className="body-sm mt-2 text-paper/70">
        Temps de trajet estimés jusqu&rsquo;aux Epesses, par la route.
      </p>
      <ul className="mt-4 divide-y divide-paper/10">
        {amourTravelOrigins.map((origin) => (
          <li key={origin.city} className="flex items-center justify-between gap-4 py-3 text-body-sm text-paper/85">
            <span>{origin.city}</span>
            <span className="text-right text-paper/60">
              {origin.duration} <span className="text-paper/40">· {origin.distanceKm}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="caption mt-3 text-paper/50">Estimations routières, à titre indicatif.</p>
    </div>
  );
}
