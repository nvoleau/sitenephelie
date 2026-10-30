import type { Metadata } from "next";
import Link from "next/link";
import MdxContent from "@/components/MdxContent";
import AmenityList from "@/components/AmenityList";
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
      <h1 className="display">{frontmatter.h1}</h1>
      <MdxContent source={content} />

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-md border border-line p-6">
            <h2 className="h3">{service.title}</h2>
            <p className="mt-2 text-body-sm text-ink-700">{service.text}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 max-w-2xl border-t border-line-soft pt-10">
        <h2 className="h2">Inclus dans tous les gîtes</h2>
        <AmenityList items={servicesInclusTousLesGites} className="mt-4" />
      </section>

      {/* Audience différente (couples, hors saison) des services familiaux
          ci-dessus — bloc volontairement séparé et discret. */}
      <section className="mt-10 max-w-2xl rounded-md border border-line bg-paper-100 p-6">
        <h2 className="h3">Une envie d&rsquo;escapade à deux ?</h2>
        <p className="mt-2 text-body-sm text-ink-700">
          Hors saison du Puy du Fou, nous proposons aussi un séjour en amoureux : gîte entièrement privatisé, et une
          option pour prolonger l&rsquo;instant.
        </p>
        <Link href="/sejour-en-amoureux/" className="btn-ghost mt-4 inline-flex">
          Découvrir le séjour en amoureux
        </Link>
      </section>
    </div>
  );
}
