import Image from "next/image";
import type { Metadata } from "next";
import GiteCard from "@/components/GiteCard";
import MdxContent from "@/components/MdxContent";
import { gites, servicesInclusTousLesGites } from "@/lib/data/gites";
import { nosGitesBanner } from "@/lib/data/site-images";
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
    <div>
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-vendee-100">
        <Image
          src={nosGitesBanner.src}
          alt={nosGitesBanner.alt}
          width={nosGitesBanner.width}
          height={nosGitesBanner.height}
          className="h-full w-full object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="container-page py-16">
        <h1 className="h1">{frontmatter.h1}</h1>
        <MdxContent source={content} />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {gites.map((gite) => (
            <GiteCard key={gite.slug} gite={gite} />
          ))}
        </div>

        <section className="mt-16 max-w-2xl">
          <h2 className="h2">Services inclus dans tous les gîtes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-vendee-800">
            {servicesInclusTousLesGites.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
