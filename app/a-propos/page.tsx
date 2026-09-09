import type { Metadata } from "next";
import MdxContent from "@/components/MdxContent";
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
    <div className="container-page py-16">
      <h1 className="h1">{frontmatter.h1}</h1>
      <MdxContent source={content} />
    </div>
  );
}
