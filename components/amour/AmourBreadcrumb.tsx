import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { name: string; path: string };

// Variante sombre de components/Breadcrumb.tsx pour la rubrique "Séjour en
// amoureux" — même structure, couleurs adaptées au fond nuit/prune. Le
// BreadcrumbList JSON-LD correspondant est géré séparément par chaque
// lib/jsonld/amour-*.ts (buildGraph), pas ici.
export default function AmourBreadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d'ariane" className="caption">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-paper/90">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="text-paper/60 underline-offset-2 hover:text-or-300 hover:underline">
                    {item.name}
                  </Link>
                  <ChevronRight aria-hidden="true" size={14} className="text-paper/30" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
