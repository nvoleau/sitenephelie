import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";
import { addressLine, siteConfig } from "@/lib/site-config";

const { frontmatter, content } = getMdxSource("contact");

export const metadata: Metadata = buildPageMetadata({
  title: frontmatter.title,
  description: frontmatter.metaDescription,
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <div className="container-page py-16">
      <h1 className="h1">{frontmatter.h1}</h1>
      <p className="mt-4 max-w-xl text-lg text-vendee-700">{content.trim()}</p>

      <div className="mt-4 flex flex-wrap gap-4">
        <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline">
          Discuter sur WhatsApp
        </a>
      </div>

      <ContactForm />

      <address className="mt-12 space-y-1 border-t border-vendee-100 pt-8 text-sm not-italic text-vendee-600">
        <p>{addressLine}</p>
        <p>{siteConfig.phone}</p>
        <p>{siteConfig.email}</p>
      </address>
    </div>
  );
}
