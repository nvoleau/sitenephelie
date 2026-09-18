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
    <div className="container-page py-10 md:py-12">
      <p className="eyebrow">Réserver un logement</p>
      <h1 className="display mt-2">{frontmatter.h1}</h1>
      <MdxContent source={content} variant="lead" />

      {/* Contenu réel, rendu côté serveur — reste indexable même si le
          widget Superhote ci-dessous (iframe cross-origin) ne l'est pas
          pour Google. Volontairement compact et placé juste au-dessus du
          widget : celui-ci doit rester visible sans avoir à scroller. */}
      <p className="mt-4 max-w-2xl text-body-sm text-ink-700">
        Nos 4 gîtes — Néphélie {gites.map((g) => g.name).join(", ")} — accueillent de{" "}
        {Math.min(...gites.map((g) => g.capacity))} à {Math.max(...gites.map((g) => g.capacity))} personnes,{" "}
        {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}.
      </p>

      <section className="mt-6">
        <h2 className="h2">Vérifier les disponibilités</h2>
        <div className="mt-4">
          <SuperhoteWidget
            id="booking-search-engine-rentals"
            src={superhoteConfig.rentalsSearchUrl}
            title="Recherche de disponibilités — Les Gîtes Néphélie"
          />
        </div>
        <Notice tone="info" className="mt-6 max-w-2xl">
          Vous nous trouvez aussi sur Booking.com, mais réserver ici, en direct, ne prélève aucune commission de plateforme. Une préférence pour réserver par téléphone ? Appelez le{" "}
          <a href={`tel:${siteConfig.phoneHref}`} className="font-medium text-bocage-700 hover:underline">
            {siteConfig.phone}
          </a>
          .
        </Notice>
      </section>

      <div className="mt-16 grid gap-6 border-t border-line-soft pt-10 sm:grid-cols-2">
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
      </div>
    </div>
  );
}
