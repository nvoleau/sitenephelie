import Link from "next/link";
import { addressLine, siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-forest-800 text-forest-50">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-sm text-forest-100">{siteConfig.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-forest-200">
            Contact
          </h2>
          <address className="mt-3 space-y-2 text-sm not-italic text-forest-100">
            <p>{addressLine}</p>
            <p>
              <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </p>
            <p>
              <a href={siteConfig.whatsappHref} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                Discuter sur WhatsApp
              </a>
            </p>
            <p>
              <a href={siteConfig.facebookHref} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-forest-200">
            Navigation
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-forest-100">
            <li><Link href="/nos-gites/" className="hover:text-white">Nos gîtes</Link></li>
            <li><Link href="/reserver-un-logement/" className="hover:text-white">Réserver</Link></li>
            <li><Link href="/decouvrir-la-region/" className="hover:text-white">Découvrir la région</Link></li>
            <li><Link href="/a-propos/" className="hover:text-white">À propos</Link></li>
            <li><Link href="/contact/" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-700 py-6 text-center text-xs text-forest-200">
        © {new Date().getFullYear()} {siteConfig.name} — {addressLine}
      </div>
    </footer>
  );
}
