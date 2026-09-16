import type { ReactNode } from "react";

const tones = {
  info: "bg-info-100 text-info-600",
  quiet: "bg-paper-100 text-ink-700",
} as const;

export default function Notice({
  tone = "info",
  className,
  children,
}: {
  tone?: keyof typeof tones;
  className?: string;
  children: ReactNode;
}) {
  return <div className={`rounded-md px-5 py-4 text-body-sm ${tones[tone]} ${className ?? ""}`}>{children}</div>;
}
