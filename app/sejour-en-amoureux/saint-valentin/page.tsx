import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import AmourBreadcrumb from "@/components/amour/AmourBreadcrumb";
import AmourHero from "@/components/amour/AmourHero";
import MdxContent from "@/components/MdxContent";
import FeatureList from "@/components/amour/FeatureList";
import PriceBlock from "@/components/amour/PriceBlock";
import AvailabilityBlock from "@/components/amour/AvailabilityBlock";
import CtaBand from "@/components/amour/CtaBand";
import { amourSaintValentinJsonLd } from "@/lib/jsonld/amour-saint-valentin";
import { boudoirGite } from "@/lib/data/amour-boudoir";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";
import { amourImages } from "@/lib/data/amour-images";

const { frontmatter, content } = getMdxSource("amour/saint-valentin");

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: frontmatter.title,
    description: frontmatter.metaDescription,
    path: "/sejour-en-amoureux/saint-valentin/",
    image: amourImages.saintValentin.src,
  }),
  twitter: {
    card: "summary_large_image",
    title: frontmatter.title,
    description: frontmatter.metaDescription,
    images: [amourImages.saintValentin.src],
  },
};

// Page d'atterrissage publicitaire (compatibilité Ads) — pas de détail du
// mobilier du Boudoir ici, uniquement un lien vers /le-boudoir/.
const highlights = [
  "Un gîte entièrement privatisé pour vous deux",
  "Disponible pour la soirée du 14 février ou tout un week-end",
  `Une option Le Boudoir sur demande (${boudoirGite.name} uniquement), à découvrir en détail`,
];

export default function SaintValentinPage() {
  return (
    <div>
      <JsonLd data={amourSaintValentinJsonLd} />

      <div className="container-page pt-8">
        <AmourBreadcrumb
          items={[
            { name: "Accueil", path: "/" },
            { name: "Séjour en amoureux", path: "/sejour-en-amoureux/" },
            { name: "Saint-Valentin", path: "/sejour-en-amoureux/saint-valentin/" },
          ]}
        />
      </div>

      <AmourHero
        eyebrow="Saint-Valentin · Vendée"
        title={frontmatter.h1}
        lead="Un gîte rien que pour vous deux, à 8 minutes du Puy du Fou, pour marquer l'occasion sans attendre la haute saison."
        image={amourImages.saintValentin}
        primaryCta={{
          href: "/reserver-un-logement/",
          label: "Réserver pour la Saint-Valentin",
          eventName: "amour_reserver_click_saintvalentin_hero",
        }}
        secondaryCta={{
          href: "/sejour-en-amoureux/le-boudoir/",
          label: "Découvrir Le Boudoir",
          eventName: "amour_boudoir_link_click_saintvalentin",
        }}
      />

      <div className="container-page pb-16">
        <MdxContent source={content} variant="dark" />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="h2 text-paper">Ce qui vous attend</h2>
            <FeatureList items={highlights} className="mt-4" />
          </div>
          <PriceBlock />
        </div>

        <AvailabilityBlock className="mt-14" />
      </div>

      <CtaBand
        title="Réservez votre Saint-Valentin"
        text="Les disponibilités se remplissent vite autour du 14 février — réservez votre gîte, ou écrivez-nous sur WhatsApp."
        reserveEventName="amour_reserver_click_saintvalentin_band"
        whatsappEventName="amour_whatsapp_click_saintvalentin"
      />
    </div>
  );
}
