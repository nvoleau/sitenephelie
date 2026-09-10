import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { galleryPhotos } from "@/lib/data/site-images";
import { siteConfig } from "@/lib/site-config";

// Polices auto-hébergées via next/font (traite le point d'audit "chargement des
// polices, ~160 ms" — pas de requête vers Google Fonts au runtime).
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
};

const lodgingBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneHref,
  email: siteConfig.email,
  image: `${siteConfig.url}${galleryPhotos[0].src}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    postalCode: siteConfig.address.postalCode,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <a href="#contenu-principal" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />
        <main id="contenu-principal" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={lodgingBusinessJsonLd} />
      </body>
    </html>
  );
}
