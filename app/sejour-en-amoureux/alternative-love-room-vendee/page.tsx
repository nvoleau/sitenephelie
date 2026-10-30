import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import AmourBreadcrumb from "@/components/amour/AmourBreadcrumb";
import AmourHero from "@/components/amour/AmourHero";
import MdxContent from "@/components/MdxContent";
import FeatureList from "@/components/amour/FeatureList";
import FaqBlock from "@/components/amour/FaqBlock";
import CtaBand from "@/components/amour/CtaBand";
import { loveRoomNotOffered, loveRoomOffered } from "@/lib/data/amour-love-room";
import { amourLoveRoomFaqItems, amourLoveRoomJsonLd } from "@/lib/jsonld/amour-love-room";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";
import { amourImages } from "@/lib/data/amour-images";

const { frontmatter, content } = getMdxSource("amour/love-room");

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: frontmatter.title,
    description: frontmatter.metaDescription,
    path: "/sejour-en-amoureux/alternative-love-room-vendee/",
    image: amourImages.loveRoom.src,
  }),
  twitter: {
    card: "summary_large_image",
    title: frontmatter.title,
    description: frontmatter.metaDescription,
    images: [amourImages.loveRoom.src],
  },
};

export default function LoveRoomPage() {
  return (
    <div>
      <JsonLd data={amourLoveRoomJsonLd} />

      <div className="container-page pt-8">
        <AmourBreadcrumb
          items={[
            { name: "Accueil", path: "/" },
            { name: "Séjour en amoureux", path: "/sejour-en-amoureux/" },
            { name: "Alternative à une love room", path: "/sejour-en-amoureux/alternative-love-room-vendee/" },
          ]}
        />
      </div>

      <AmourHero
        eyebrow="Love room en Vendée"
        title={frontmatter.h1}
        lead="Pas de spa, pas de jacuzzi : voici ce que nous proposons vraiment pour un séjour à deux près du Puy du Fou."
        image={amourImages.loveRoom}
        primaryCta={{
          href: "/reserver-un-logement/",
          label: "Réserver un séjour en amoureux",
          eventName: "amour_reserver_click_loveroom_hero",
        }}
        secondaryCta={{
          href: "/sejour-en-amoureux/le-boudoir/",
          label: "Découvrir Le Boudoir",
          eventName: "amour_boudoir_link_click_loveroom",
        }}
      />

      <div className="container-page pb-16">
        <MdxContent source={content} variant="dark" />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="h2 text-paper">Ce que nous proposons</h2>
            <FeatureList items={loveRoomOffered} tone="included" className="mt-4" />
          </div>
          <div>
            <h2 className="h2 text-paper">Ce que nous ne proposons pas</h2>
            <FeatureList items={loveRoomNotOffered} tone="excluded" className="mt-4" />
          </div>
        </div>

        <FaqBlock items={amourLoveRoomFaqItems} className="mt-16 max-w-2xl" />
      </div>

      <CtaBand
        title="Ce séjour correspond à ce que vous cherchez ?"
        text="Réservez votre gîte privatisé, avec ou sans l'option Le Boudoir, ou posez-nous vos questions sur WhatsApp."
        reserveEventName="amour_reserver_click_loveroom_band"
        whatsappEventName="amour_whatsapp_click_loveroom"
      />
    </div>
  );
}
