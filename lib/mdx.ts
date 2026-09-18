import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");
const guideDir = path.join(contentDir, "guide");

export type MdxFrontmatter = {
  title: string;
  metaDescription: string;
  keyword: string;
  h1: string;
};

export function getMdxSource(slug: string): {
  content: string;
  frontmatter: MdxFrontmatter;
} {
  const fullPath = path.join(contentDir, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(raw);
  return { content, frontmatter: data as MdxFrontmatter };
}

// Frontmatter des articles /guide/ — distinct de MdxFrontmatter : pas de champ
// h1 ici, le titre H1 est écrit directement dans le corps du MDX.
export type GuideFrontmatter = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  season?: string;
  ogImage: string;
  keywords: string[];
};

export function getGuideSlugs(): string[] {
  return fs
    .readdirSync(guideDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getGuideSource(slug: string): {
  content: string;
  frontmatter: GuideFrontmatter;
} {
  const fullPath = path.join(guideDir, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(raw);
  return { content, frontmatter: data as GuideFrontmatter };
}
