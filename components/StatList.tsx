type Stat = { value: string; label: string };

export default function StatList({
  stats,
  layout = "band",
}: {
  stats: readonly Stat[];
  layout?: "band" | "rows";
}) {
  if (layout === "rows") {
    return (
      <dl className="mt-8 divide-y divide-line-soft border-t border-line-soft">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-baseline justify-between gap-4 py-4">
            <dt className="eyebrow">{stat.label}</dt>
            <dd className="big-number">{stat.value}</dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <dl className="grid grid-cols-2 gap-y-8 border-y border-line-soft py-8 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center sm:text-left">
          <dd className="big-number">{stat.value}</dd>
          <dt className="eyebrow mt-3">{stat.label}</dt>
        </div>
      ))}
    </dl>
  );
}
