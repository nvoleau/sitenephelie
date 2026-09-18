import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import MdxContent from "@/components/MdxContent";
import { getGuideSlugs, getGuideSource, getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";
import { galleryPhotos } from "@/lib/data/site-images";

const { frontmatter, content } = getMdxSource("guide");

export const metadata: Metadata = buildPageMetadata({
  title: frontmatter.title,
  description: frontmatter.metaDescription,
  path: "/guide/",
});

// Carte visuelle des articles — frontmatter.ogImage (ex. cinescenie-nuit.jpg)
// n'existe pas encore dans public/images/guide/ (Nicolas ne l'a pas fournie).
// En attendant, on fait tourner les photos de la galerie commune une par
// article (index % longueur), comme le fait déjà giteCardImage dans
// lib/data/site-images.ts pour varier visuellement les fiches gîtes sans
// photo dédiée — pas une photo inventée, un choix arbitraire temporaire.
function fallbackCardImage(index: number) {
  return galleryPhotos[index % galleryPhotos.length];
}

function getArticles() {
  return getGuideSlugs()
    .map((slug) => ({ slug, frontmatter: getGuideSource(slug).frontmatter }))
    .sort((a, b) => (a.frontmatter.publishedAt < b.frontmatter.publishedAt ? 1 : -1));
}

export default function GuidePage() {
  const articles = getArticles();

  return (
    <div className="container-page py-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Guide", path: "/guide/" },
        ]}
      />
      <p className="eyebrow">Guide du séjour</p>
      <h1 className="display mt-2">{frontmatter.h1}</h1>
      <MdxContent source={content} variant="lead" />

      <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-5 gap-y-12">
        {articles.map(({ slug, frontmatter }, index) => {
          const image = fallbackCardImage(index);
          return (
            <Link key={slug} href={`/guide/${slug}/`} className="group block">
              <div className="relative aspect-video w-full overflow-hidden rounded-md bg-paper-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-full w-full object-cover transition-transform duration-220 ease-standard group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <h2 className="h3 mt-5 text-ink-900 group-hover:text-bocage-700">{frontmatter.title}</h2>
              <p className="mt-2 text-body-sm text-ink-500">{frontmatter.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
