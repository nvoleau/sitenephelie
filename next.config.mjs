/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // L'ancien site (WordPress) utilise des URLs avec slash final partout
  // (/nos-gites/, /contact/...) — on conserve ce schéma pour ne pas casser le
  // référencement acquis (voir CLAUDE.md, "ne jamais changer les slugs").
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Doublon confirmé, non lié à la boutique — appliqué dès maintenant.
      { source: "/contact-2/", destination: "/contact/", permanent: true },

      // URLs de fiches produit générées par WooCommerce, imprimées sur des QR codes
      // physiques (voir Search Console : impressions réelles sur ces 2 URLs).
      // La boutique étant hors périmètre de cette version, on redirige vers l'accueil
      // plutôt que de laisser un 404 sur un support physique déjà distribué
      // (décision Nicolas du 16/09/2026).
      { source: "/shop/qrcode1759591590/", destination: "/", permanent: true },
      { source: "/shop/qrcode1760102017/", destination: "/", permanent: true },

      // TODO (phase boutique) — à activer quand /boutique/, /mon-compte/, /panier/ et /checkout/
      // existeront réellement, sinon on redirige vers des pages inexistantes :
      // { source: "/la-boutique", destination: "/boutique", permanent: true },
      // { source: "/shop", destination: "/boutique", permanent: true },
      // { source: "/commander", destination: "/boutique", permanent: true },
      // { source: "/my-account", destination: "/mon-compte", permanent: true },
      // { source: "/cart", destination: "/panier", permanent: true },
      // { source: "/checkout-2", destination: "/checkout", permanent: true },
    ];
  },
};

export default nextConfig;
