import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { name: string; path: string };

// Fil d'ariane visible — réutilise le même tableau que BreadcrumbJsonLd
// (rendu séparément, structure JSON-LD inchangée) pour ne jamais désynchroniser
// les deux.
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d'ariane" className="caption">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-ink-700">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="text-ink-500 underline-offset-2 hover:text-bocage-700 hover:underline">
                    {item.name}
                  </Link>
                  <ChevronRight aria-hidden="true" size={14} className="text-ink-300" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
