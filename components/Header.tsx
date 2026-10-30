"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { logo } from "@/lib/data/site-images";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/nos-gites/", label: "Nos gîtes" },
  { href: "/reserver-un-logement/", label: "Réserver" },
  { href: "/decouvrir-la-region/", label: "Découvrir la région" },
  { href: "/services/", label: "Services" },
  { href: "/sejour-en-amoureux/", label: "Séjour en amoureux" },
  { href: "/guide/", label: "Guide" },
  { href: "/a-propos/", label: "À propos" },
  { href: "/contact/", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  // La fiche gîte (/nos-gites/gite-a/) garde "Nos gîtes" actif dans la nav.
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-page flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <Image src={logo.src} alt="" width={44} height={44} className="h-9 w-9" priority />
          <span className="font-display text-h3 text-ink-900">{siteConfig.name}</span>
        </Link>
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-body-sm text-ink-700">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`pb-1 transition-colors duration-120 ease-standard hover:text-bocage-700 ${
                      active ? "border-b border-ink-900 text-ink-900" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap text-body-sm text-ink-700 hover:text-bocage-700"
          >
            <Phone aria-hidden="true" size={16} className="shrink-0 text-ink-500" />
            {siteConfig.phone}
          </a>
          <Link href="/reserver-un-logement/" className="shrink-0 btn-primary">
            Réserver
          </Link>
        </div>

        {/* Déclencheur du menu burger — téléphone et tablette (< lg), là où
            la nav complète et le bloc téléphone/Réserver ci-dessus sont
            masqués. */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex items-center justify-center p-2 text-ink-700 hover:text-bocage-700 lg:hidden"
        >
          {isMenuOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-menu" aria-label="Navigation principale mobile" className="border-t border-line lg:hidden">
          <ul className="container-page flex flex-col py-2 text-body-sm text-ink-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2.5 transition-colors duration-120 ease-standard hover:text-bocage-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="container-page flex flex-col gap-3 border-t border-line-soft py-4">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-body-sm text-ink-700 hover:text-bocage-700"
            >
              <Phone aria-hidden="true" size={16} className="shrink-0 text-ink-500" />
              {siteConfig.phone}
            </a>
            <Link href="/reserver-un-logement/" onClick={() => setIsMenuOpen(false)} className="btn-primary">
              Réserver
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
