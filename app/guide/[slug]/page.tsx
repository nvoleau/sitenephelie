import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import JsonLd from "@/components/JsonLd";
import MdxContent from "@/components/MdxContent";
import { getGuideSlugs, getGuideSource } from "@/lib/mdx";
import { cinescenieJsonLd } from "@/lib/jsonld/jsonld-cinescenie";
import { giteClimatiseJsonLd } from "@/lib/jsonld/gite-climatise";
import { buildPageMetadata } from "@/lib/seo";

// JSON-LD par article — chaque entrée est spécifique à un article précis
// (headline, FAQ et @id lui appartiennent) : ne pas la rendre sur un autre
// slug. Un nouvel article de guide demande son propre fichier lib/jsonld/
// et sa propre entrée ici.
const guideJsonLdBySlug: Record<string, Record<string, unknown>> = {
  "cinescenie-horaires-ou-dormir": cinescenieJsonLd,
  "gite-climatise-puy-du-fou": giteClimatiseJsonLd,
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!getGuideSlugs().includes(slug)) return {};

  const { frontmatter } = getGuideSource(slug);
  return buildPageMetadata({
    title: frontmatter.title,
    description: frontmatter.description,
    path: `/guide/${slug}/`,
    image: frontmatter.ogImage,
  });
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getGuideSlugs().includes(slug)) notFound();

  const { frontmatter, content } = getGuideSource(slug);
  const articleJsonLd = guideJsonLdBySlug[slug];

  return (
    <div className="container-page py-16">
      {/* Quand un JSON-LD dédié existe pour cet article, il inclut déjà sa
          propre BreadcrumbList (voir lib/jsonld/jsonld-cinescenie.ts) — ne
          pas en rendre une seconde ici, sinon deux BreadcrumbList
          concurrentes sur la même page. */}
      {articleJsonLd ? (
        <JsonLd data={articleJsonLd} />
      ) : (
        <BreadcrumbJsonLd
          items={[
            { name: "Accueil", path: "/" },
            { name: "Guide", path: "/guide/" },
            { name: frontmatter.title, path: `/guide/${slug}/` },
          ]}
        />
      )}
      <Breadcrumb
        items={[
          { name: "Accueil", path: "/" },
          { name: "Guide", path: "/guide/" },
          { name: frontmatter.title, path: `/guide/${slug}/` },
        ]}
      />

      <article className="mt-6">
        <MdxContent source={content} />
      </article>
    </div>
  );
}
