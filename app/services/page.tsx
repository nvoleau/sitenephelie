import type { Metadata } from "next";
import MdxContent from "@/components/MdxContent";
import { services } from "@/lib/data/services";
import { servicesInclusTousLesGites } from "@/lib/data/gites";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";

const { frontmatter, content } = getMdxSource("services");

export const metadata: Metadata = buildPageMetadata({
  title: frontmatter.title,
  description: frontmatter.metaDescription,
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <div className="container-page py-16">
      <h1 className="h1">{frontmatter.h1}</h1>
      <MdxContent source={content} />

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-lg border border-vendee-100 p-6">
            <h2 className="font-display text-lg font-semibold text-forest-700">{service.title}</h2>
            <p className="mt-2 text-sm text-vendee-700">{service.text}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 max-w-2xl border-t border-vendee-100 pt-10">
        <h2 className="h2">Inclus dans tous les gîtes</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-vendee-800">
          {servicesInclusTousLesGites.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
