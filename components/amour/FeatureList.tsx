import { Check, X } from "lucide-react";

export default function FeatureList({
  items,
  tone = "included",
  className,
}: {
  items: string[];
  tone?: "included" | "excluded";
  className?: string;
}) {
  const Icon = tone === "included" ? Check : X;
  const iconColor = tone === "included" ? "text-or-300" : "text-paper/50";

  return (
    <ul className={`divide-y divide-paper/10 ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 py-3 text-body-sm text-paper/85">
          <Icon aria-hidden="true" size={16} className={`mt-0.5 shrink-0 ${iconColor}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
