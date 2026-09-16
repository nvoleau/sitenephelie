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
    <section aria-labelledby="avis-heading" className="bg-paper-100 py-16">
      <div className="container-page">
        <p className="eyebrow">Avis clients</p>
        <h2 id="avis-heading" className="h2 mt-2">
          {siteConfig.reviews.label} — basé sur {siteConfig.reviews.count} avis {siteConfig.reviews.source}
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviewsWithText.map((review) => (
            <figure key={`${review.author}-${review.date}`} className="rounded-md border border-line bg-white p-6">
              <blockquote className="text-body-sm text-ink-700">&ldquo;{review.text}&rdquo;</blockquote>
              <figcaption className="mt-4 text-body-sm font-medium text-bocage-700">
                {review.author} <span className="font-normal text-ink-500">— {review.date}</span>
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
