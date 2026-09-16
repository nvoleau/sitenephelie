import { MDXRemote } from "next-mdx-remote/rsc";
import { Check } from "lucide-react";

const bodyComponents = {
  h2: (props: React.ComponentProps<"h2">) => <h2 className="h2 mt-10" {...props} />,
  p: (props: React.ComponentProps<"p">) => <p className="mt-4 text-body leading-relaxed text-ink-700" {...props} />,
  ul: (props: React.ComponentProps<"ul">) => <ul className="mt-4 divide-y divide-line-soft" {...props} />,
  li: ({ children, ...props }: React.ComponentProps<"li">) => (
    <li className="flex items-start gap-3 py-3 text-body-sm text-ink-700" {...props}>
      <Check aria-hidden="true" size={15} className="mt-1 shrink-0 text-bocage-700" />
      <span>{children}</span>
    </li>
  ),
};

const leadComponents = {
  ...bodyComponents,
  p: (props: React.ComponentProps<"p">) => <p className="lead mt-4 max-w-xl" {...props} />,
};

export default function MdxContent({
  source,
  variant = "body",
}: {
  source: string;
  variant?: "lead" | "body";
}) {
  return (
    <div className="max-w-3xl">
      <MDXRemote source={source} components={variant === "lead" ? leadComponents : bodyComponents} />
    </div>
  );
}
