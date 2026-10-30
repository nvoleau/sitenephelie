import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import AmourBreadcrumb from "@/components/amour/AmourBreadcrumb";
import AmourHero from "@/components/amour/AmourHero";
import MdxContent from "@/components/MdxContent";
import FeatureList from "@/components/amour/FeatureList";
import PriceBlock from "@/components/amour/PriceBlock";
import FaqBlock from "@/components/amour/FaqBlock";
import CtaBand from "@/components/amour/CtaBand";
import { amourAccueilFaqItems, amourAccueilJsonLd } from "@/lib/jsonld/amour-accueil";
import { boudoirGite } from "@/lib/data/amour-boudoir";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";
import { amourImages } from "@/lib/data/amour-images";

const { frontmatter, content } = getMdxSource("amour/accueil");

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: frontmatter.title,
    description: frontmatter.metaDescription,
    path: "/sejour-en-amoureux/",
    image: amourImages.heroAccueil.src,
  }),
  twitter: {
    card: "summary_large_image",
    title: frontmatter.title,
    description: frontmatter.metaDescription,
    images: [amourImages.heroAccueil.src],
  },
};

// Page pilier : pas de détail du mobilier du Boudoir ici (compatibilité
// Google Ads / Meta Ads, voir CLAUDE.md du brief) — uniquement un lien vers
// /sejour-en-amoureux/le-boudoir/ pour qui veut en savoir plus.
const highlights = [
  "Un gîte entièrement privatisé pour vous deux",
  "Un cadre calme, hors saison du Puy du Fou",
  `Une option Le Boudoir sur demande (${boudoirGite.name} uniquement), à découvrir en détail`,
];

export default function SejourEnAmoureuxPage() {
  return (
    <div>
      <JsonLd data={amourAccueilJsonLd} />

      <div className="container-page pt-8">
        <AmourBreadcrumb
          items={[
            { name: "Accueil", path: "/" },
            { name: "Séjour en amoureux", path: "/sejour-en-amoureux/" },
          ]}
        />
      </div>

      <AmourHero
        eyebrow="Séjour en amoureux · Vendée"
        title={frontmatter.h1}
        lead="Une parenthèse à deux à 8 minutes du Puy du Fou, hors saison : gîte privatisé, calme retrouvé, et une option pour prolonger l'instant."
        image={amourImages.heroAccueil}
        primaryCta={{
          href: "/reserver-un-logement/",
          label: "Réserver un séjour en amoureux",
          eventName: "amour_reserver_click_accueil_hero",
        }}
        secondaryCta={{
          href: "/sejour-en-amoureux/le-boudoir/",
          label: "Découvrir Le Boudoir",
          eventName: "amour_boudoir_link_click_accueil",
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

        <FaqBlock items={amourAccueilFaqItems} className="mt-16 max-w-2xl" />
      </div>

      <CtaBand
        title="Envie d'une parenthèse à deux ?"
        text={`Réservez vos nuits sur notre moteur en ligne — sur le ${boudoirGite.name} si vous souhaitez l'option Le Boudoir, à sélectionner ensuite via le lien reçu par e-mail — ou écrivez-nous directement sur WhatsApp.`}
        reserveEventName="amour_reserver_click_accueil_band"
        whatsappEventName="amour_whatsapp_click_accueil"
      />
    </div>
  );
}
