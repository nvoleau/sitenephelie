import Image from "next/image";
import Link from "next/link";
import { logo } from "@/lib/data/site-images";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/nos-gites/", label: "Nos gîtes" },
  { href: "/reserver-un-logement/", label: "Réserver" },
  { href: "/decouvrir-la-region/", label: "Découvrir la région" },
  { href: "/services/", label: "Services" },
  { href: "/a-propos/", label: "À propos" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-vendee-100 bg-white">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo.src} alt="" width={44} height={44} className="h-11 w-11 rounded" priority />
          <span className="font-display text-xl font-semibold text-forest-700">{siteConfig.name}</span>
        </Link>
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-vendee-800">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-forest-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/reserver-un-logement/" className="btn-primary hidden sm:inline-flex">
          Réserver
        </Link>
      </div>
      <nav aria-label="Navigation principale mobile" className="border-t border-vendee-100 lg:hidden">
        <ul className="container-page flex flex-wrap gap-x-4 gap-y-2 py-3 text-sm font-medium text-vendee-800">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-forest-700">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
