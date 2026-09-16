import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FacebookIcon from "@/components/icons/FacebookIcon";
import MdxContent from "@/components/MdxContent";
import { getMdxSource } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";
import { addressLine, siteConfig } from "@/lib/site-config";

const { frontmatter, content } = getMdxSource("contact");

export const metadata: Metadata = buildPageMetadata({
  title: frontmatter.title,
  description: frontmatter.metaDescription,
  path: "/contact/",
});

const contactRows = [
  { icon: MapPin, label: addressLine },
  { icon: Phone, label: siteConfig.phone, href: `tel:${siteConfig.phoneHref}` },
  { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: FacebookIcon, label: "Les Gîtes Néphélie sur Facebook", href: siteConfig.facebookHref },
];

export default function ContactPage() {
  return (
    <div className="container-page py-16">
      <p className="eyebrow">Contact</p>
      <h1 className="display mt-2">{frontmatter.h1}</h1>
      <MdxContent source={content} variant="lead" />

      <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <ContactForm />

        <aside className="rounded-md border border-line p-6 lg:mt-2">
          <h2 className="h3">{siteConfig.name}</h2>
          <ul className="mt-4 divide-y divide-line-soft">
            {contactRows.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3 py-3 text-body-sm text-ink-700">
                <Icon aria-hidden size={16} className="shrink-0 text-bocage-700" />
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="hover:text-bocage-700">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
