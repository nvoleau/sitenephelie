"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackConversion } from "@/lib/analytics-events";

// CTA avec event de conversion GA au clic — le href reste un vrai lien SSR
// (crawlable, fonctionnel sans JS) ; le tracking est un ajout côté client,
// jamais une condition d'accès à la destination.
type TrackedCtaProps = {
  href: string;
  eventName: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
};

export default function TrackedCta({ href, eventName, className, children, external = false }: TrackedCtaProps) {
  function handleClick() {
    trackConversion(eventName);
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
