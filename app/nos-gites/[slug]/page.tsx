import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Users } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import AmenityList from "@/components/AmenityList";
import Notice from "@/components/Notice";
import ShareButton from "@/components/ShareButton";
import { getGiteBySlug, gites, servicesInclusTousLesGites } from "@/lib/data/gites";
import { iconForCharacteristic } from "@/lib/characteristics-icons";
import { buildPageMetadata } from "@/lib/seo";
import { addressLine, siteConfig } from "@/lib/site-config";
import { galleryPhotos, giteCardImage } from "@/lib/data/site-images";

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
    title: `${gite.name} — Gîte ${gite.capacity} personnes à 8 min du Puy du Fou`,
    description: `${gite.name}, gîte jusqu'à ${gite.capacity} personnes aux Epesses en Vendée, à 8 minutes du Puy du Fou. ${gite.quote}`,
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

  const primaryImage = giteCardImage[gite.slug];
  const vignettes = galleryPhotos.filter((photo) => photo.src !== primaryImage.src).slice(0, 4);
  const pageUrl = `${siteConfig.url}/nos-gites/${gite.slug}/`;

  return (
    <div className="container-page py-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Nos gîtes", path: "/nos-gites/" },
          { name: gite.name, path: `/nos-gites/${gite.slug}/` },
        ]}
      />
      <Breadcrumb
        items={[
          { name: "Accueil", path: "/" },
          { name: "Nos gîtes", path: "/nos-gites/" },
          { name: gite.name, path: `/nos-gites/${gite.slug}/` },
        ]}
      />

      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="display">{gite.name}</h1>
          <p className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-body-sm text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" size={15} />
              {addressLine}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users aria-hidden="true" size={15} />
              Idéal pour {gite.idealFor.toLowerCase()}
            </span>
          </p>
        </div>
        <ShareButton title={`${gite.name} — Les Gîtes Néphélie`} url={pageUrl} />
      </div>

      {/* Mosaïque photo — la photo principale du gîte + des photos génériques
          de la même galerie partagée (voir lib/data/site-images.ts : ce ne
          sont pas des photos identifiées par gîte, alts inchangés). */}
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] auto-rows-[190px] gap-2">
        <div className="relative col-span-2 row-span-2 overflow-hidden rounded-md bg-paper-200">
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt}
            width={primaryImage.width}
            height={primaryImage.height}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
        {vignettes.map((photo) => (
          <div key={photo.src} className="relative overflow-hidden rounded-md bg-paper-200">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 17vw, 33vw"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-start">
        <div className="flex-1">
          <p className="font-display text-h3 italic text-ink-900">&laquo; {gite.quote} &raquo;</p>

          <h2 className="h2 mt-12">Caractéristiques</h2>
          <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-6">
            {gite.characteristics.map((c) => {
              const Icon = iconForCharacteristic(c);
              return (
                <div key={c} className="flex items-center gap-3 border-b border-line-soft py-3 text-body-sm text-ink-700">
                  <Icon aria-hidden="true" size={16} className="shrink-0 text-bocage-700" />
                  <span>{c}</span>
                </div>
              );
            })}
          </div>

          <h2 className="h2 mt-12">Services inclus</h2>
          <AmenityList items={servicesInclusTousLesGites} className="mt-4" />

          <h2 className="h2 mt-12">Disponibilités et tarifs</h2>
          <Notice tone="info" className="mt-4">
            Consultez les disponibilités et réservez directement en ligne sur la page Réserver.
          </Notice>
          <Link href="/reserver-un-logement/" className="btn-primary mt-6 inline-flex">
            Voir les disponibilités
          </Link>
        </div>

        <aside className="w-full rounded-md border border-line p-6 lg:sticky lg:top-[100px] lg:max-w-[400px]">
          <p className="eyebrow">Vérifier les disponibilités</p>
          <ul className="mt-4 divide-y divide-line-soft">
            <li className="flex items-center justify-between py-3 text-body-sm">
              <span className="text-ink-500">Capacité</span>
              <span className="text-ink-900">{gite.capacity} personnes</span>
            </li>
            <li className="flex items-center justify-between py-3 text-body-sm">
              <span className="text-ink-500">Chambres</span>
              <span className="text-ink-900">{gite.chambres}</span>
            </li>
            <li className="flex items-center justify-between py-3 text-body-sm">
              <span className="text-ink-500">Linge de lit & serviettes</span>
              <span className="text-ink-900">En option</span>
            </li>
          </ul>
          <Link href="/reserver-un-logement/" className="btn-accent mt-4 w-full">
            Réserver ce gîte
          </Link>
          <p className="caption mt-4 text-center">
            <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-bocage-700">
              {siteConfig.phone}
            </a>
          </p>
        </aside>
      </div>
    </div>
  );
}
