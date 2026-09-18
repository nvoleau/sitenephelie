import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Check } from "lucide-react";

const bodyComponents = {
  h1: (props: React.ComponentProps<"h1">) => <h1 className="h1 mt-2" {...props} />,
  h2: (props: React.ComponentProps<"h2">) => <h2 className="h2 mt-10" {...props} />,
  h3: (props: React.ComponentProps<"h3">) => <h3 className="h3 mt-8" {...props} />,
  p: (props: React.ComponentProps<"p">) => <p className="mt-4 text-body leading-relaxed text-ink-700" {...props} />,
  ul: (props: React.ComponentProps<"ul">) => <ul className="mt-4 divide-y divide-line-soft" {...props} />,
  li: ({ children, ...props }: React.ComponentProps<"li">) => (
    <li className="flex items-start gap-3 py-3 text-body-sm text-ink-700" {...props}>
      <Check aria-hidden="true" size={15} className="mt-1 shrink-0 text-bocage-700" />
      <span>{children}</span>
    </li>
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-bocage-700 underline underline-offset-2 hover:text-bocage-600" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote className="mt-6 rounded-md bg-paper-100 px-5 py-4 text-body-sm text-ink-700" {...props} />
  ),
  hr: (props: React.ComponentProps<"hr">) => <hr className="mt-10 border-line-soft" {...props} />,
  table: (props: React.ComponentProps<"table">) => (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-body-sm" {...props} />
    </div>
  ),
  thead: (props: React.ComponentProps<"thead">) => (
    <thead className="border-b border-line text-left text-ink-900" {...props} />
  ),
  th: (props: React.ComponentProps<"th">) => <th className="px-3 py-2 font-medium" {...props} />,
  td: (props: React.ComponentProps<"td">) => (
    <td className="border-b border-line-soft px-3 py-2 text-ink-700" {...props} />
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
      <MDXRemote
        source={source}
        components={variant === "lead" ? leadComponents : bodyComponents}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
      />
    </div>
  );
}
