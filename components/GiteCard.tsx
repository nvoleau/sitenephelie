import Image from "next/image";
import Link from "next/link";
import { Users, BedDouble } from "lucide-react";
import type { Gite } from "@/lib/data/gites";
import { giteCardImage } from "@/lib/data/site-images";
import Badge from "@/components/Badge";

export default function GiteCard({ gite }: { gite: Gite }) {
  const image = giteCardImage[gite.slug];

  return (
    <Link href={`/nos-gites/${gite.slug}/`} className="group block">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-paper-200 transition-transform duration-220 ease-standard group-hover:-translate-y-0.5">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-full w-full object-cover transition-transform duration-700 ease-standard group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        {gite.slug === "gite-c" && (
          <div className="absolute left-3 top-3">
            <Badge>Le plus grand</Badge>
          </div>
        )}
      </div>
      <div className="pt-4">
        <h3 className="h3 group-hover:text-bocage-700">{gite.name}</h3>
        <p className="mt-1 flex items-center gap-3 text-body-sm text-ink-500">
          <span className="inline-flex items-center gap-1.5">
            <Users aria-hidden="true" size={15} />
            {gite.capacity} pers.
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BedDouble aria-hidden="true" size={15} />
            {gite.chambres} chambres
          </span>
        </p>
      </div>
    </Link>
  );
}
