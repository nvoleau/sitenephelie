import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import ReviewsSection from "@/components/ReviewsSection";
import GiteCard from "@/components/GiteCard";
import MdxContent from "@/components/MdxContent";
import AvailabilityTeaser from "@/components/AvailabilityTeaser";
import StatList from "@/components/StatList";
import { gites } from "@/lib/data/gites";
import { services } from "@/lib/data/services";
import { usp } from "@/lib/data/usp";
import { galleryPhotos } from "@/lib/data/site-images";
import { statHighlights } from "@/lib/data/stats";
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
      {/* Héros — reprend le texte exact de l'ancien accueil. Photo réelle
          récupérée sur l'ancien site le 09/09/2026. */}
      <section className="relative flex min-h-[660px] items-end overflow-hidden">
        <Image
          src={galleryPhotos[0].src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hero-scrim" />
        <div className="container-page relative pb-14 text-paper">
          <p className="eyebrow text-paper/90">Les Epesses, Vendée · 8 minutes du Puy du Fou</p>
          <h1 className="mt-3 font-display text-hero">
            Quatre gîtes,
            <br />à deux pas du spectacle
          </h1>
          <p className="lead mt-4 max-w-[560px] text-paper-100">
            4 gîtes de 2 à 8 personnes aux Epesses, en Vendée. Chaque gîte a sa terrasse privative
            avec barbecue, son salon avec cuisine ouverte et son parking devant la porte.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/reserver-un-logement/" className="btn-accent">
              Réserver
            </Link>
            <Link href="/nos-gites/" className="btn-onDark">
              Voir les gîtes
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="mt-8">
            <AvailabilityTeaser />
          </div>
        </div>
      </section>

      <div className="container-page">
        <StatList stats={statHighlights} layout="band" />
      </div>

      <section className="py-16">
        <div className="container-page">
          <p className="eyebrow">Nos gîtes</p>
          <h2 className="display mt-2">4 gîtes de 2 à 8 personnes</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gites.map((gite) => (
              <GiteCard key={gite.slug} gite={gite} />
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="bg-paper-100 py-16">
        <div className="container-page">
          <p className="eyebrow">Le meilleur de la Vendée</p>
          <h2 className="h2 mt-2">Nos services</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-md border border-line bg-white p-6">
                <h3 className="h3">{service.title}</h3>
                <p className="mt-2 text-body-sm text-ink-700">{service.text}</p>
              </div>
            ))}
          </div>
          <Link href="/services/" className="btn-ghost mt-8 inline-flex">
            En savoir plus
          </Link>
        </div>
      </section>

      {/* Teaser vers la rubrique "Séjour en amoureux" — palette nuit/prune/or
          distincte du reste du site pour signaler la sous-identité dès le
          clic, avant même d'arriver sur /sejour-en-amoureux/. */}
      <section className="bg-nuit-900 py-16 text-paper">
        <div className="container-page">
          <p className="eyebrow text-or-300">Hors saison</p>
          <h2 className="h2 mt-2 text-paper">Un séjour en amoureux, rien que pour vous deux</h2>
          <p className="lead mt-4 max-w-xl text-paper/80">
            Hors saison du Puy du Fou, nous ouvrons aussi nos gîtes aux couples : un logement entièrement privatisé,
            et une option pour prolonger l&rsquo;instant.
          </p>
          <Link href="/sejour-en-amoureux/" className="btn mt-8 inline-flex bg-or-500 text-nuit-900 hover:bg-or-300">
            Découvrir le séjour en amoureux
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usp.map((item) => (
            <div key={item.title}>
              <h3 className="h3">{item.title}</h3>
              <p className="mt-2 text-body-sm text-ink-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bocage-900 py-16 text-paper">
        <div className="container-page">
          <p className="eyebrow text-bocage-100">La Vendée</p>
          <h2 className="h2 mt-2 text-paper">Notre territoire à découvrir</h2>
          <div className="mt-4 max-w-2xl [&_p]:text-bocage-100">
            <MdxContent source={content} />
          </div>
          <Link href="/decouvrir-la-region/" className="btn-onDark mt-8 inline-flex">
            Découvrir la région
          </Link>
        </div>
      </section>

      {/* Bande de clôture — CTA vers la réservation, adresse/téléphone en
          texte (pas un 3e bouton) pour rester fidèle à la maquette (2
          boutons max par écran). */}
      <section className="bg-bocage-700 py-20 text-paper">
        <div className="container-page text-center">
          <h2 className="display text-paper">Prêt pour votre séjour au Puy du Fou ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lead text-bocage-100">
            Réservez votre gîte dès maintenant, ou contactez-nous directement pour toute question sur votre séjour.
            <br />
            <a href={`tel:${siteConfig.phoneHref}`} className="mt-2 inline-block underline-offset-2 hover:underline">
              {siteConfig.phone}
            </a>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/reserver-un-logement/" className="btn-onDark">
              Réserver un logement
            </Link>
            <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-onDark">
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
