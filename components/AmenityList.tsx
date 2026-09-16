import { Check } from "lucide-react";

export default function AmenityList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={`divide-y divide-line-soft ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 py-3 text-body-sm text-ink-700">
          <Check aria-hidden="true" size={15} className="shrink-0 text-bocage-700" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
