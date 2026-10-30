/**
 * JSON-LD de /sejour-en-amoureux/alternative-love-room-vendee/
 *
 * Les questions/réponses de `amourLoveRoomFaqItems` sont la source unique
 * pour le FAQPage ci-dessous et le FaqBlock rendu sur la page.
 */

import type { FaqItem } from "@/components/amour/FaqBlock";
import { SITE_URL, buildGraph } from "./business";

const PAGE_URL = `${SITE_URL}/sejour-en-amoureux/alternative-love-room-vendee/`;

export const amourLoveRoomFaqItems: FaqItem[] = [
  {
    question: "Proposez-vous une love room avec spa en Vendée ?",
    answer:
      "Non. Nous n'avons ni spa, ni jacuzzi, ni hammam. Nous proposons un gîte entièrement privatisé, avec en option Le Boudoir, une chambre aménagée pour deux.",
  },
  {
    question: "Quelle est la différence entre une love room et votre offre ?",
    answer:
      "Une love room est généralement un espace dédié avec des équipements bien-être (spa, jacuzzi). Notre offre est un gîte complet et privatisé, avec une chambre à thème en option — pas un espace bien-être.",
  },
  {
    question: "Le Boudoir remplace-t-il une love room ?",
    answer:
      "Il s'en inspire par l'ambiance, mais reste l'aménagement d'une chambre dans un gîte indépendant, sans équipement de spa.",
  },
  {
    question: "L'offre fonctionne-t-elle sans l'option Le Boudoir ?",
    answer:
      "Oui : le séjour en amoureux (gîte privatisé, calme, hors saison) est indépendant de l'option Le Boudoir, que vous pouvez ajouter ou non.",
  },
];

const faq = {
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: amourLoveRoomFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumb = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Séjour en amoureux", item: `${SITE_URL}/sejour-en-amoureux/` },
    { "@type": "ListItem", position: 3, name: "Alternative à une love room" },
  ],
} as const;

export const amourLoveRoomJsonLd = buildGraph(faq, breadcrumb);
