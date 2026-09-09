/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://gites-nephelie.fr",
  generateRobotsTxt: true,
  // Exclusion des URLs utilitaires (compte/panier/checkout) — non indexables,
  // même une fois construites en phase boutique (voir CLAUDE.md).
  exclude: ["/mon-compte", "/panier", "/checkout", "/mon-compte/*", "/panier/*", "/checkout/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/mon-compte", "/panier", "/checkout"],
      },
    ],
  },
};
