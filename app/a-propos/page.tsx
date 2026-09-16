import Image from "next/image";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import MdxContent from "@/components/MdxContent";
import StatList from "@/components/StatList";
import { aProposPhoto, galleryPhotos, aProposBanner } from "@/lib/data/site-images";
import { statHighlights } from "@/lib/data/stats";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";

const { frontmatter, content } = getMdxSource("a-propos");
const vignette = galleryPhotos[2]; // gite-07.jpg

export const metadata: Metadata = buildPageMetadata({
  title: frontmatter.title,
  description: frontmatter.metaDescription,
  path: "/a-propos/",
});

export default function AProposPage() {
  return (
    <div className="container-page py-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "À propos", path: "/a-propos/" },
        ]}
      />
      <p className="eyebrow">À propos</p>
      <h1 className="display mt-2">{frontmatter.h1}</h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[repeat(auto-fit,minmax(340px,1fr))]">
        <div>
          <MdxContent source={content} />
          <StatList stats={statHighlights} layout="rows" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="relative col-span-2 aspect-[4/3] w-full overflow-hidden rounded-md bg-paper-200">
            <Image
              src={aProposBanner.src}
              alt={aProposBanner.alt}
              width={aProposBanner.width}
              height={aProposBanner.height}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 33vw, 100vw"
              priority
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-md bg-paper-200">
            <Image
              src={aProposPhoto.src}
              alt={aProposPhoto.alt}
              width={aProposPhoto.width}
              height={aProposPhoto.height}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 17vw, 50vw"
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-md bg-paper-200">
            <Image
              src={vignette.src}
              alt={vignette.alt}
              width={vignette.width}
              height={vignette.height}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 17vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
