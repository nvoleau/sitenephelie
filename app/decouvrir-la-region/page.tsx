import type { Metadata } from "next";
import MdxContent from "@/components/MdxContent";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";

const { frontmatter, content } = getMdxSource("decouvrir-la-region");

export const metadata: Metadata = buildPageMetadata({
  title: frontmatter.title,
  description: frontmatter.metaDescription,
  path: "/decouvrir-la-region/",
});

export default function DecouvrirLaRegionPage() {
  return (
    <div className="container-page py-16">
      <h1 className="h1">{frontmatter.h1}</h1>
      <MdxContent source={content} />
    </div>
  );
}
