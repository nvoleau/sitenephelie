import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { getGiteBySlug, gites, servicesInclusTousLesGites } from "@/lib/data/gites";
import { buildPageMetadata } from "@/lib/seo";
import { addressLine } from "@/lib/site-config";
import { giteCardImage } from "@/lib/data/site-images";

export function generateStaticParams() {
  return gites.map((gite) => ({ slug: gite.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gite = getGiteBySlug(slug);
  if (!gite) return {};

  return buildPageMetadata({
    title: `${gite.name} — Gîte ${gite.capacity} personnes à 2 min du Puy du Fou`,
    description: `${gite.name}, gîte jusqu'à ${gite.capacity} personnes aux Epesses en Vendée, à 2 minutes du Puy du Fou. ${gite.quote}`,
    path: `/nos-gites/${gite.slug}/`,
  });
}

export default async function GitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const gite = getGiteBySlug(slug);
  if (!gite) notFound();

  const image = giteCardImage[gite.slug];

  return (
    <div className="container-page py-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Nos gîtes", path: "/nos-gites/" },
          { name: gite.name, path: `/nos-gites/${gite.slug}/` },
        ]}
      />
      <Link href="/nos-gites/" className="text-sm font-semibold text-forest-700 hover:underline">
        ← Tous nos gîtes
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-vendee-100">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>

        <div>
          <h1 className="h1">
            {gite.name} — jusqu&rsquo;à {gite.capacity} personnes
          </h1>
          <p className="mt-2 text-vendee-600">Idéal pour : {gite.idealFor}</p>
          <p className="mt-4 text-vendee-600">{addressLine}</p>

          <ul className="mt-6 list-disc space-y-2 pl-6 text-vendee-800">
            {gite.characteristics.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <p className="mt-6 text-lg italic text-forest-700">&laquo; {gite.quote} &raquo;</p>

          <Link href="/reserver-un-logement/" className="btn-primary mt-8 inline-flex">
            Réserver ce gîte
          </Link>
        </div>
      </div>

      <section className="mt-16 max-w-2xl border-t border-vendee-100 pt-10">
        <h2 className="h2">Services inclus</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-vendee-800">
          {servicesInclusTousLesGites.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
