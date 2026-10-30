/**
 * JSON-LD de /sejour-en-amoureux/le-boudoir/
 *
 * Porte le nœud `Offer` de l'option Le Boudoir (250 €, priceSpecification
 * avec unitText "par séjour" pour exclure toute lecture "par nuit").
 * Les questions/réponses de `amourLeBoudoirFaqItems` sont la source unique
 * pour le FAQPage ci-dessous et le FaqBlock rendu sur la page.
 */

import type { FaqItem } from "@/components/amour/FaqBlock";
import { boudoirGite } from "@/lib/data/amour-boudoir";
import { BUSINESS_ID, SITE_URL, buildGraph } from "./business";

const PAGE_URL = `${SITE_URL}/sejour-en-amoureux/le-boudoir/`;

export const amourLeBoudoirFaqItems: FaqItem[] = [
  {
    question: "L'option est-elle disponible sur tous les gîtes ?",
    answer: `Non : Le Boudoir est installé uniquement dans le ${boudoirGite.name}. Pour en profiter, votre réservation doit porter sur ce gîte.`,
  },
  {
    question: "Le Boudoir est-il un spa ou un jacuzzi ?",
    answer:
      "Non. Le Boudoir est un aménagement de chambre (mobilier, éclairage, linge) : il n'y a ni spa, ni jacuzzi, ni espace bien-être annexe.",
  },
  {
    question: "Le tarif de 250 € est-il par nuit ?",
    answer: "Non, 250 € correspond à l'ensemble du séjour, quelle que soit sa durée — ce n'est pas un tarif par nuit.",
  },
  {
    question: "Qui a accès au mobilier installé dans la chambre ?",
    answer: "Uniquement vous : le gîte est entièrement privatisé pendant votre séjour, comme pour toute réservation.",
  },
  {
    question: "Combien de personnes peuvent profiter de l'option ?",
    answer: "L'option est réservée à deux adultes majeurs.",
  },
  {
    question: "Quand puis-je sélectionner l'option Le Boudoir ?",
    answer:
      "La réservation se fait en deux temps : vous réservez d'abord vos nuits sur le Gîte A, puis vous recevez un e-mail avec un lien vers une page où vous pouvez sélectionner l'option Le Boudoir. Si vous êtes perdu·e dans ces étapes, vous pouvez nous appeler directement sur WhatsApp.",
  },
];

const offer = {
  "@type": "Offer",
  "@id": `${PAGE_URL}#offer`,
  name: "Option Le Boudoir",
  description: `Aménagement d'une chambre du ${boudoirGite.name} en espace intime pour deux adultes : éclairage d'ambiance, linge satiné, mobilier dédié (sofa tantra, balançoire sur structure, banc), installation et ménage renforcé inclus. Disponible uniquement sur ce gîte.`,
  price: "250",
  priceCurrency: "EUR",
  priceSpecification: {
    "@type": "UnitPriceSpecification",
    price: "250",
    priceCurrency: "EUR",
    unitText: "par séjour",
  },
  availability: "https://schema.org/InStock",
  itemOffered: {
    "@type": "Service",
    name: "Aménagement Le Boudoir",
  },
  seller: { "@id": BUSINESS_ID },
} as const;

const faq = {
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: amourLeBoudoirFaqItems.map((item) => ({
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
    { "@type": "ListItem", position: 3, name: "Le Boudoir" },
  ],
} as const;

export const amourLeBoudoirJsonLd = buildGraph(offer, faq, breadcrumb);
