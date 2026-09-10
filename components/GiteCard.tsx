import Image from "next/image";
import Link from "next/link";
import type { Gite } from "@/lib/data/gites";
import { giteCardImage } from "@/lib/data/site-images";

export default function GiteCard({ gite }: { gite: Gite }) {
  const image = giteCardImage[gite.slug];

  return (
    <Link
      href={`/nos-gites/${gite.slug}/`}
      className="group block overflow-hidden rounded-lg border border-vendee-100 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-vendee-100">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
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
