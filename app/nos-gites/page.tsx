import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import AmenityList from "@/components/AmenityList";
import MdxContent from "@/components/MdxContent";
import { gites, servicesInclusTousLesGites } from "@/lib/data/gites";
import { giteCardImage } from "@/lib/data/site-images";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";

const { frontmatter, content } = getMdxSource("nos-gites");

export const metadata: Metadata = buildPageMetadata({
  title: frontmatter.title,
  description: frontmatter.metaDescription,
  path: "/nos-gites/",
});

export default function NosGitesPage() {
  return (
    <div className="container-page py-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Nos gîtes", path: "/nos-gites/" },
        ]}
      />
      <p className="eyebrow">Nos gîtes</p>
      <h1 className="display mt-2">{frontmatter.h1}</h1>
      <MdxContent source={content} variant="lead" />

      <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-x-5 gap-y-12">
        {gites.map((gite) => {
          const image = giteCardImage[gite.slug];
          return (
            <div key={gite.slug}>
              <div className="relative aspect-video w-full overflow-hidden rounded-md bg-paper-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h2 className="h2">{gite.name}</h2>
              </div>
              <p className="mt-1 text-body-sm text-ink-500">
                Jusqu&rsquo;à {gite.capacity} personnes — {gite.idealFor}
              </p>
              <AmenityList items={gite.characteristics} className="mt-4" />
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href={`/nos-gites/${gite.slug}/`} className="btn-primary">
                  Voir le gîte
                </Link>
                <Link href="/reserver-un-logement/" className="btn-ghost">
                  Voir les disponibilités
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <section className="mt-20 max-w-2xl border-t border-line-soft pt-12">
        <h2 className="h2">Services inclus dans tous les gîtes</h2>
        <AmenityList items={servicesInclusTousLesGites} className="mt-6" />
      </section>
    </div>
  );
}
