export type FaqItem = { question: string; answer: string };

// Les questions/réponses affichées ici doivent rester visibles et identiques
// au FAQPage JSON-LD correspondant (lib/jsonld/amour-*.ts) — sinon Google
// rejette le rich snippet FAQ (même règle que le Guide, voir CLAUDE.md).
export default function FaqBlock({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={className}>
      <h2 className="h2 text-paper">Questions fréquentes</h2>
      <dl className="mt-6 divide-y divide-paper/10">
        {items.map((item) => (
          <div key={item.question} className="py-5">
            <dt className="h3 text-paper">{item.question}</dt>
            <dd className="body-sm mt-2 text-paper/75">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
