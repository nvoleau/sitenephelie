/**
 * JSON-LD de /sejour-en-amoureux/
 *
 * Les questions/réponses de `amourAccueilFaqItems` sont la source unique pour
 * la fois le FAQPage ci-dessous et le FaqBlock rendu sur la page — garantit
 * que le texte visible et le texte structuré restent toujours identiques
 * (même règle que le Guide, voir CLAUDE.md).
 */

import type { FaqItem } from "@/components/amour/FaqBlock";
import { boudoirGite } from "@/lib/data/amour-boudoir";
import { SITE_URL, buildGraph } from "./business";

const PAGE_URL = `${SITE_URL}/sejour-en-amoureux/`;

export const amourAccueilFaqItems: FaqItem[] = [
  {
    question: "Le séjour en amoureux est-il possible toute l'année ?",
    answer:
      "Non : il est réservé aux périodes hors saison du Puy du Fou, pour préserver le calme recherché pour une escapade à deux. Les dates disponibles sont précisées au moment de la réservation.",
  },
  {
    question: "Faut-il réserver tout un gîte pour deux personnes ?",
    answer: "Oui : le gîte est entièrement privatisé pour votre séjour, quelle que soit sa capacité d'accueil habituelle.",
  },
  {
    question: "Qu'est-ce que l'option Le Boudoir ?",
    answer: `Une chambre du ${boudoirGite.name} aménagée en espace cosy et intime (éclairage d'ambiance, linge satiné, mobilier dédié), proposée en option à 250 € par séjour, quelle que soit sa durée. Disponible uniquement sur ce gîte. Le détail complet est présenté sur la page Le Boudoir.`,
  },
  {
    question: "Comment réserver un séjour en amoureux ?",
    answer: `La réservation se fait en deux temps : réservez d'abord vos nuits sur notre moteur en ligne (sur le ${boudoirGite.name} si vous souhaitez l'option Le Boudoir). Vous recevrez ensuite un e-mail avec un lien vers une page où sélectionner l'option. Si vous êtes perdu·e dans ces étapes, appelez-nous directement sur WhatsApp.`,
  },
];

const faq = {
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: amourAccueilFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumb = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Séjour en amoureux" },
  ],
} as const;

export const amourAccueilJsonLd = buildGraph(faq, breadcrumb);
