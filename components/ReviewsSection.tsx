import JsonLd from "@/components/JsonLd";
import { reviewsWithText } from "@/lib/data/reviews";
import { siteConfig } from "@/lib/site-config";

// Rendu côté serveur (SSG) — corrige le point d'audit : sur l'ancien site ces
// avis étaient injectés en JS pur et donc invisibles pour Google.
export default function ReviewsSection() {
  const reviewsJsonLd = reviewsWithText.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    reviewBody: review.text,
    itemReviewed: { "@type": "LodgingBusiness", name: siteConfig.name },
    // Pas de reviewRating : aucune note chiffrée fiable disponible pour l'instant
    // (voir lib/data/reviews.ts) — on ne l'invente pas.
  }));

  return (
    <section aria-labelledby="avis-heading" className="bg-vendee-50 py-16">
      <div className="container-page">
        <p className="eyebrow">Avis clients</p>
        <h2 id="avis-heading" className="h2 mt-2">
          {siteConfig.reviews.label} — basé sur {siteConfig.reviews.count} avis {siteConfig.reviews.source}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviewsWithText.map((review) => (
            <figure key={`${review.author}-${review.date}`} className="rounded-lg bg-white p-6 shadow-sm">
              <blockquote className="text-sm text-vendee-800">“{review.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-forest-700">
                {review.author} <span className="font-normal text-vendee-500">— {review.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      {reviewsJsonLd.map((reviewData, i) => (
        <JsonLd key={i} data={reviewData} />
      ))}
    </section>
  );
}
