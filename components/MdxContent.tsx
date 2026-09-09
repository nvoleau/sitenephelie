import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h2: (props: React.ComponentProps<"h2">) => <h2 className="h2 mt-10" {...props} />,
  p: (props: React.ComponentProps<"p">) => <p className="mt-4 leading-relaxed text-vendee-800" {...props} />,
  ul: (props: React.ComponentProps<"ul">) => <ul className="mt-4 list-disc space-y-2 pl-6 text-vendee-800" {...props} />,
  li: (props: React.ComponentProps<"li">) => <li {...props} />,
};

export default function MdxContent({ source }: { source: string }) {
  return (
    <div className="max-w-3xl">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
