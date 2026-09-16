import Link from "next/link";
import type { Metadata } from "next";
import { Users, Phone, WashingMachine } from "lucide-react";
import MdxContent from "@/components/MdxContent";
import Notice from "@/components/Notice";
import SuperhoteWidget from "@/components/SuperhoteWidget";
import { gites } from "@/lib/data/gites";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { superhoteConfig } from "@/lib/superhote";

const { frontmatter, content } = getMdxSource("reserver");

export const metadata: Metadata = buildPageMetadata({
  title: frontmatter.title,
  description: frontmatter.metaDescription,
  path: "/reserver-un-logement/",
});

const whatToKnow = [
  { icon: Users, text: `De ${Math.min(...gites.map((g) => g.capacity))} à ${Math.max(...gites.map((g) => g.capacity))} personnes selon le gîte` },
  { icon: WashingMachine, text: "Linge de lit & serviettes en option" },
  { icon: Phone, text: siteConfig.phone },
];

export default function ReserverPage() {
  return (
    <div className="container-page py-16">
      <p className="eyebrow">Réserver un logement</p>
      <h1 className="display mt-2">{frontmatter.h1}</h1>
      <MdxContent source={content} variant="lead" />

      {/* Contenu réel, rendu côté serveur — reste indexable même si le
          widget Superhote ci-dessous (iframe cross-origin) ne l'est pas
          pour Google. Volontairement compact : la recherche de dispos est
          la partie utile de cette page, pas une redite des fiches gîtes. */}
      <p className="mt-6 max-w-2xl text-body-sm text-ink-700">
        Nos 4 gîtes — Néphélie {gites.map((g) => g.name).join(", ")} — accueillent de{" "}
        {Math.min(...gites.map((g) => g.capacity))} à {Math.max(...gites.map((g) => g.capacity))} personnes,{" "}
        {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}.
      </p>

      <section className="mt-8">
        <h2 className="h2">Vérifier les disponibilités</h2>
        <p className="lead mt-2 max-w-2xl">
          Choisissez vos dates de séjour pour voir les gîtes disponibles et réserver directement en ligne.
        </p>
        <Notice tone="info" className="mt-6 max-w-2xl">
          Vous nous trouvez aussi sur Booking.com, mais réserver ici, en direct, ne prélève aucune commission de plateforme.
        </Notice>
        <div className="mt-6">
          <SuperhoteWidget
            id="booking-search-engine-rentals"
            src={superhoteConfig.rentalsSearchUrl}
            title="Recherche de disponibilités — Les Gîtes Néphélie"
          />
        </div>
        <Notice tone="quiet" className="mt-6">
          Une préférence pour réserver par téléphone ? Appelez le{" "}
          <a href={`tel:${siteConfig.phoneHref}`} className="font-medium text-bocage-700 hover:underline">
            {siteConfig.phone}
          </a>
          .
        </Notice>
      </section>

      <div className="mt-16 flex flex-col gap-12 border-t border-line-soft pt-10 lg:flex-row lg:items-start">
        <div className="flex-1">
          <h2 className="h2">Réserver un gîte</h2>
          <div className="mt-6">
            <SuperhoteWidget
              id="booking-engine-rentals"
              src={superhoteConfig.rentalsListUrl}
              title="Liste des gîtes et réservation — Les Gîtes Néphélie"
            />
          </div>
        </div>

        <aside className="w-full space-y-6 lg:max-w-[400px]">
          <div className="rounded-md border border-line p-6">
            <h2 className="h3">Ce qu&rsquo;il faut savoir</h2>
            <ul className="mt-4 divide-y divide-line-soft">
              {whatToKnow.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 py-3 text-body-sm text-ink-700">
                  <Icon aria-hidden="true" size={16} className="shrink-0 text-bocage-700" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-md border border-line p-6">
            <h2 className="h3">Les quatre gîtes</h2>
            <ul className="mt-4 divide-y divide-line-soft">
              {gites.map((gite) => (
                <li key={gite.slug}>
                  <Link
                    href={`/nos-gites/${gite.slug}/`}
                    className="flex items-center justify-between gap-3 py-3 text-body-sm text-ink-700 hover:text-bocage-700"
                  >
                    <span>{gite.name} — jusqu&rsquo;à {gite.capacity} pers.</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
