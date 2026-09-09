import type { Metadata } from "next";
import MdxContent from "@/components/MdxContent";
import SuperhoteWidget from "@/components/SuperhoteWidget";
import { gites } from "@/lib/data/gites";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";
import { addressLine } from "@/lib/site-config";
import { superhoteConfig } from "@/lib/superhote";

const { frontmatter, content } = getMdxSource("reserver");

export const metadata: Metadata = buildPageMetadata({
  title: frontmatter.title,
  description: frontmatter.metaDescription,
  path: "/reserver-un-logement/",
});

export default function ReserverPage() {
  return (
    <div className="container-page py-16">
      <h1 className="h1">{frontmatter.h1}</h1>
      <MdxContent source={content} />

      {/* Contenu réel, rendu côté serveur — reste indexable même si le widget
          Superhote ci-dessous (iframe cross-origin) ne l'est pas pour Google. */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {gites.map((gite) => (
          <div key={gite.slug} className="rounded-lg border border-vendee-100 p-6">
            <h2 className="font-display text-xl font-semibold text-forest-700">
              Néphélie {gite.name} — Logement entier
            </h2>
            <p className="mt-1 text-sm text-vendee-600">{addressLine}</p>
            <p className="mt-2 text-sm text-vendee-700">
              Jusqu&rsquo;à {gite.capacity} personnes — climatisation, proximité Puy du Fou, barbecue, calme.
            </p>
          </div>
        ))}
      </div>

      <section className="mt-16 border-t border-vendee-100 pt-10">
        <h2 className="h2">Vérifier les disponibilités</h2>
        <p className="mt-2 max-w-2xl text-vendee-600">
          Choisissez vos dates de séjour pour voir les gîtes disponibles et réserver directement en ligne.
        </p>
        <div className="mt-6">
          <SuperhoteWidget
            id="booking-search-engine-rentals"
            src={superhoteConfig.rentalsSearchUrl}
            title="Recherche de disponibilités — Les Gîtes Néphélie"
          />
        </div>
      </section>

      <section className="mt-16 border-t border-vendee-100 pt-10">
        <h2 className="h2">Réserver un gîte</h2>
        <div className="mt-6">
          <SuperhoteWidget
            id="booking-engine-rentals"
            src={superhoteConfig.rentalsListUrl}
            title="Liste des gîtes et réservation — Les Gîtes Néphélie"
          />
        </div>
      </section>
    </div>
  );
}
