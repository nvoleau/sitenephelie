"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { logo } from "@/lib/data/site-images";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/nos-gites/", label: "Nos gîtes" },
  { href: "/reserver-un-logement/", label: "Réserver" },
  { href: "/decouvrir-la-region/", label: "Découvrir la région" },
  { href: "/services/", label: "Services" },
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

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-page flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
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
        <div className="hidden items-center gap-5 sm:flex">
          <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-2 text-body-sm text-ink-700 hover:text-bocage-700">
            <Phone aria-hidden="true" size={16} className="text-ink-500" />
            {siteConfig.phone}
          </a>
          <Link href="/reserver-un-logement/" className="btn-primary">
            Réserver
          </Link>
        </div>
      </div>
      <nav aria-label="Navigation principale mobile" className="border-t border-line lg:hidden">
        <ul className="container-page flex flex-wrap gap-x-4 gap-y-2 py-3 text-body-sm text-ink-700">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors duration-120 ease-standard hover:text-bocage-700">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
