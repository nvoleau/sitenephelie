import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ReviewsSection from "@/components/ReviewsSection";
import GiteCard from "@/components/GiteCard";
import MdxContent from "@/components/MdxContent";
import { gites } from "@/lib/data/gites";
import { services } from "@/lib/data/services";
import { usp } from "@/lib/data/usp";
import { galleryPhotos } from "@/lib/data/site-images";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const { frontmatter, content } = getMdxSource("accueil");

export const metadata: Metadata = buildPageMetadata({
  title: frontmatter.title,
  description: frontmatter.metaDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Hero — reprend le texte exact de l'ancien accueil. Le bouton "Commander"
          d'origine est retiré pour cette version (boutique hors périmètre, voir
          CLAUDE.md) afin de ne créer aucun lien mort. Photo réelle récupérée sur
          l'ancien site (og:image de l'accueil) le 09/09/2026. */}
      <section className="relative overflow-hidden py-24 text-white sm:py-32">
        <Image
          src={galleryPhotos[0].src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/70" />
        <div className="container-page relative">
          <p className="eyebrow text-terracotta-200">Bienvenue</p>
          <h1 className="h1 mt-2 text-white">{frontmatter.h1}</h1>
          <p className="mt-4 max-w-2xl text-lg text-forest-50">
            Gîtes 4 – 6 – 8 personnes à 2 minutes du Puy du Fou.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/reserver-un-logement/" className="btn-secondary">
              Réserver
            </Link>
            <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline border-white text-white hover:bg-forest-600">
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="py-16">
        <div className="container-page text-center">
          <h2 className="h2">4 gîtes de 2 à 8 personnes</h2>
          <p className="mt-2 text-vendee-600">
            Livraison des commandes directement dans les gîtes.
          </p>
        </div>
        <div className="container-page mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {gites.map((gite) => (
            <GiteCard key={gite.slug} gite={gite} />
          ))}
        </div>

        <div className="container-page mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {galleryPhotos.slice(3).map((photo) => (
            <div key={photo.src} className="relative aspect-square overflow-hidden rounded-lg bg-vendee-100">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="h-full w-full object-cover"
                sizes="(min-width: 640px) 25vw, 50vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-vendee-50 py-16">
        <div className="container-page">
          <p className="eyebrow">Le meilleur de la Vendée</p>
          <h2 className="h2 mt-2">Nos services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-forest-700">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-vendee-700">{service.text}</p>
              </div>
            ))}
          </div>
          <Link href="/services/" className="btn-outline mt-8 inline-flex">
            En savoir plus
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usp.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-lg font-semibold text-forest-700">{item.title}</h3>
              <p className="mt-2 text-sm text-vendee-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-forest-800 py-16 text-white">
        <div className="container-page">
          <p className="eyebrow text-terracotta-200">La Vendée</p>
          <h2 className="h2 mt-2 text-white">Notre territoire à découvrir</h2>
          <div className="mt-4 max-w-2xl text-forest-50 [&_p]:text-forest-50">
            <MdxContent source={content} />
          </div>
          <Link href="/decouvrir-la-region/" className="btn-secondary mt-8 inline-flex">
            Découvrir la région
          </Link>
        </div>
      </section>

      {/* Section de clôture : l'ancien bloc "Contactez-nous" (adresse/tél/email)
          était redondant avec le footer qui affiche déjà ces 3 informations
          juste en dessous, et la page se terminait sans appel à l'action —
          voir /impeccable critique du 15/09/2026 (P1). Remplacé par une
          relance claire vers la réservation, avec téléphone et WhatsApp pour
          qui préfère un contact direct avant de réserver. Pas d'eyebrow ici :
          un seul bloc de titre par page peut s'en passer pour casser la
          répétition du motif eyebrow+titre présente ailleurs sur la page. */}
      <section className="py-20">
        <div className="container-page text-center">
          <h2 className="h1">Prêt pour votre séjour au Puy du Fou ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-vendee-700">
            Réservez votre gîte dès maintenant, ou contactez-nous directement pour toute question sur votre séjour.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/reserver-un-logement/" className="btn-primary">
              Réserver un logement
            </Link>
            <a href={`tel:${siteConfig.phoneHref}`} className="btn-outline">
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
