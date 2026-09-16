import Link from "next/link";
import { addressLine, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-bocage-900 text-bocage-100">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-h3 text-paper">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-body-sm text-bocage-100">{siteConfig.description}</p>
        </div>

        <div>
          <h2 className="eyebrow text-bocage-100/70">Contact</h2>
          <address className="mt-3 space-y-2 text-body-sm not-italic text-bocage-100">
            <p>{addressLine}</p>
            <p>
              <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-paper">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-paper">
                {siteConfig.email}
              </a>
            </p>
            <p>
              <a href={siteConfig.whatsappHref} className="hover:text-paper" target="_blank" rel="noopener noreferrer">
                Discuter sur WhatsApp
              </a>
            </p>
            <p>
              <a href={siteConfig.facebookHref} className="hover:text-paper" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="eyebrow text-bocage-100/70">Navigation</h2>
          <ul className="mt-3 space-y-2 text-body-sm text-bocage-100">
            <li><Link href="/nos-gites/" className="hover:text-paper">Nos gîtes</Link></li>
            <li><Link href="/reserver-un-logement/" className="hover:text-paper">Réserver</Link></li>
            <li><Link href="/decouvrir-la-region/" className="hover:text-paper">Découvrir la région</Link></li>
            <li><Link href="/a-propos/" className="hover:text-paper">À propos</Link></li>
            <li><Link href="/contact/" className="hover:text-paper">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bocage-700 py-6 text-center text-caption text-bocage-100/70">
        © {new Date().getFullYear()} {siteConfig.name} — {addressLine}
      </div>
    </footer>
  );
}
