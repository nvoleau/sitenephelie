import type { Metadata } from "next";
import { galleryPhotos } from "@/lib/data/site-images";
import { siteConfig } from "@/lib/site-config";

const defaultOgImage = galleryPhotos[0];

type PageSeoInput = {
  title: string;
  description: string;
  path: string; // ex: "/a-propos/"
  image?: string; // ex: "/images/guide/xxx.jpg" — remplace l'image OG par défaut de la galerie
};

// Chaque page indexable doit avoir un title + H1 localisés (Puy du Fou / Vendée /
// Les Epesses) — exigence non négociable de l'audit du 9 septembre 2026 (CLAUDE.md).
// Ce helper centralise title/description/canonical pour éviter les oublis.
export function buildPageMetadata({ title, description, path, image }: PageSeoInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
      images: image
        ? [{ url: image }]
        : [{ url: defaultOgImage.src, width: defaultOgImage.width, height: defaultOgImage.height }],
    },
  };
}
