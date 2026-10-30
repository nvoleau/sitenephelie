import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import AmourBreadcrumb from "@/components/amour/AmourBreadcrumb";
import AmourHero from "@/components/amour/AmourHero";
import MdxContent from "@/components/MdxContent";
import FeatureList from "@/components/amour/FeatureList";
import TravelTimes from "@/components/amour/TravelTimes";
import CtaBand from "@/components/amour/CtaBand";
import { amourEscapadeJsonLd } from "@/lib/jsonld/amour-escapade";
import { boudoirGite } from "@/lib/data/amour-boudoir";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";
import { amourImages } from "@/lib/data/amour-images";

const { frontmatter, content } = getMdxSource("amour/escapade");

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: frontmatter.title,
    description: frontmatter.metaDescription,
    path: "/sejour-en-amoureux/escapade-pres-de-nantes-angers/",
    image: amourImages.escapade.src,
  }),
  twitter: {
    card: "summary_large_image",
    title: frontmatter.title,
    description: frontmatter.metaDescription,
    images: [amourImages.escapade.src],
  },
};

// Page d'atterrissage publicitaire (compatibilité Ads) — pas de détail du
// mobilier du Boudoir ici, uniquement un lien vers /le-boudoir/.
const highlights = [
  "Un gîte entièrement privatisé pour vous deux",
  "À moins d'une heure et demie de route, selon votre ville de départ",
  `Une option Le Boudoir sur demande (${boudoirGite.name} uniquement), à découvrir en détail`,
];

export default function EscapadePage() {
  return (
    <div>
      <JsonLd data={amourEscapadeJsonLd} />

      <div className="container-page pt-8">
        <AmourBreadcrumb
          items={[
            { name: "Accueil", path: "/" },
            { name: "Séjour en amoureux", path: "/sejour-en-amoureux/" },
            { name: "Escapade depuis Nantes et Angers", path: "/sejour-en-amoureux/escapade-pres-de-nantes-angers/" },
          ]}
        />
      </div>

      <AmourHero
        eyebrow="Escapade à deux · Depuis Nantes, Angers, Cholet, La Roche-sur-Yon"
        title={frontmatter.h1}
        lead="Le bon compromis entre dépaysement et trajet court : un gîte privatisé en Vendée, à moins d'une heure et demie de route."
        image={amourImages.escapade}
        primaryCta={{
          href: "/reserver-un-logement/",
          label: "Réserver votre escapade",
          eventName: "amour_reserver_click_escapade_hero",
        }}
        secondaryCta={{
          href: "/sejour-en-amoureux/le-boudoir/",
          label: "Découvrir Le Boudoir",
          eventName: "amour_boudoir_link_click_escapade",
        }}
      />

      <div className="container-page pb-16">
        <MdxContent source={content} variant="dark" />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="h2 text-paper">Ce qui vous attend</h2>
            <FeatureList items={highlights} className="mt-4" />
          </div>
          <TravelTimes />
        </div>
      </div>

      <CtaBand
        title="Prêts pour votre escapade ?"
        text="Réservez votre gîte privatisé, ou posez-nous vos questions sur WhatsApp avant de partir."
        reserveEventName="amour_reserver_click_escapade_band"
        whatsappEventName="amour_whatsapp_click_escapade"
      />
    </div>
  );
}
