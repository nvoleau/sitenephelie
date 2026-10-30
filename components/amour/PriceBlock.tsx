import { boudoirGite, boudoirPrice } from "@/lib/data/amour-boudoir";

export default function PriceBlock({ className }: { className?: string }) {
  return (
    <div className={`rounded-lg border border-or-500/30 bg-paper/5 p-6 ${className ?? ""}`}>
      <p className="eyebrow text-or-300">Option Le Boudoir</p>
      <p className="price-lg mt-2 text-paper">
        {boudoirPrice.amount} {boudoirPrice.currency === "EUR" ? "€" : boudoirPrice.currency}
      </p>
      <p className="body-sm mt-1 text-paper/70">{boudoirPrice.unitLabel}</p>
      <p className="caption mt-3 text-paper/50">Disponible uniquement sur le {boudoirGite.name}.</p>
    </div>
  );
}
