import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

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
