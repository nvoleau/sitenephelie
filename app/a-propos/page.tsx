import Image from "next/image";
import type { Metadata } from "next";
import MdxContent from "@/components/MdxContent";
import { aProposBanner, aProposPhoto } from "@/lib/data/site-images";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";

const { frontmatter, content } = getMdxSource("a-propos");

export const metadata: Metadata = buildPageMetadata({
  title: frontmatter.title,
  description: frontmatter.metaDescription,
  path: "/a-propos/",
});

export default function AProposPage() {
  return (
    <div>
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-vendee-100">
        <Image
          src={aProposBanner.src}
          alt={aProposBanner.alt}
          width={aProposBanner.width}
          height={aProposBanner.height}
          className="h-full w-full object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="container-page py-16">
        <h1 className="h1">{frontmatter.h1}</h1>
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <MdxContent source={content} />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-vendee-100 lg:mt-10">
            <Image
              src={aProposPhoto.src}
              alt={aProposPhoto.alt}
              width={aProposPhoto.width}
              height={aProposPhoto.height}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
