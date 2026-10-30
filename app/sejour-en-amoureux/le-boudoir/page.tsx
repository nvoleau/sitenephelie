import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import AmourBreadcrumb from "@/components/amour/AmourBreadcrumb";
import AmourHero from "@/components/amour/AmourHero";
import AgeGate from "@/components/amour/AgeGate";
import MdxContent from "@/components/MdxContent";
import FeatureList from "@/components/amour/FeatureList";
import PriceBlock from "@/components/amour/PriceBlock";
import AvailabilityBlock from "@/components/amour/AvailabilityBlock";
import FaqBlock from "@/components/amour/FaqBlock";
import CtaBand from "@/components/amour/CtaBand";
import { boudoirConditions, boudoirIncluded, boudoirNotIncluded } from "@/lib/data/amour-boudoir";
import { amourLeBoudoirFaqItems, amourLeBoudoirJsonLd } from "@/lib/jsonld/amour-le-boudoir";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";
import { amourImages } from "@/lib/data/amour-images";

const { frontmatter, content } = getMdxSource("amour/le-boudoir");

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: frontmatter.title,
    description: frontmatter.metaDescription,
    path: "/sejour-en-amoureux/le-boudoir/",
    image: amourImages.boudoirDetail.src,
  }),
  twitter: {
    card: "summary_large_image",
    title: frontmatter.title,
    description: frontmatter.metaDescription,
    images: [amourImages.boudoirDetail.src],
  },
};

export default function LeBoudoirPage() {
  return (
    <div>
      <JsonLd data={amourLeBoudoirJsonLd} />

      {/* Vérification d'âge à l'entrée (overlay, localStorage) — le contenu
          ci-dessous reste toujours dans le DOM, donc indexable, voir
          components/amour/AgeGate.tsx. */}
      <AgeGate>
        <div className="container-page pt-8">
          <AmourBreadcrumb
            items={[
              { name: "Accueil", path: "/" },
              { name: "Séjour en amoureux", path: "/sejour-en-amoureux/" },
              { name: "Le Boudoir", path: "/sejour-en-amoureux/le-boudoir/" },
            ]}
          />
        </div>

        <AmourHero
          eyebrow="Option Le Boudoir"
          title={frontmatter.h1}
          lead="Une chambre transformée, le temps d'un séjour, pour prolonger l'instant à deux. Réservez vos nuits sur le Gîte A, puis sélectionnez l'option via le lien reçu par e-mail."
          image={amourImages.boudoirDetail}
          primaryCta={{
            href: "/reserver-un-logement/",
            label: "Réserver mes nuits sur le Gîte A",
            eventName: "amour_reserver_click_boudoir_hero",
          }}
        />

        <div className="container-page pb-16">
          <MdxContent source={content} variant="dark" />

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="h2 text-paper">Ce qui est inclus</h2>
              <FeatureList items={boudoirIncluded} tone="included" className="mt-4" />
            </div>
            <div>
              <h2 className="h2 text-paper">Ce qu&rsquo;il ne faut pas attendre</h2>
              <FeatureList items={boudoirNotIncluded} tone="excluded" className="mt-4" />
            </div>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <PriceBlock />
            <AvailabilityBlock />
          </div>

          <div className="mt-14 max-w-2xl">
            <h2 className="h2 text-paper">Règles d&rsquo;utilisation et responsabilité</h2>
            <FeatureList items={boudoirConditions} tone="included" className="mt-4" />
          </div>

          <FaqBlock items={amourLeBoudoirFaqItems} className="mt-16 max-w-2xl" />
        </div>

        <CtaBand
          title="Réservez Le Boudoir pour votre séjour"
          text="Réservez d'abord vos nuits sur le Gîte A : vous recevrez ensuite un e-mail avec un lien vers une page pour sélectionner l'option. Perdu·e dans ces étapes ? Appelez-nous directement sur WhatsApp."
          reserveLabel="Réserver mes nuits sur le Gîte A"
          reserveEventName="amour_reserver_click_boudoir_band"
          whatsappEventName="amour_whatsapp_click_boudoir"
        />
      </AgeGate>
    </div>
  );
}
