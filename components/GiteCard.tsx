import Link from "next/link";
import GitePlaceholderImage from "@/components/GitePlaceholderImage";
import type { Gite } from "@/lib/data/gites";

export default function GiteCard({ gite }: { gite: Gite }) {
  return (
    <Link
      href={`/nos-gites/${gite.slug}/`}
      className="group block overflow-hidden rounded-lg border border-vendee-100 bg-white transition-shadow hover:shadow-lg"
    >
      <GitePlaceholderImage label={gite.name} />
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-vendee-900 group-hover:text-forest-700">
          {gite.name} — jusqu&rsquo;à {gite.capacity} personnes
        </h3>
        <p className="mt-1 text-sm text-vendee-600">Idéal pour : {gite.idealFor}</p>
        <p className="mt-3 text-sm italic text-vendee-700">&laquo; {gite.quote} &raquo;</p>
        <span className="mt-4 inline-block text-sm font-semibold text-forest-700">
          Découvrir le {gite.name} →
        </span>
      </div>
    </Link>
  );
}
