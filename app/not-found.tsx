import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <h1 className="h1">Page introuvable</h1>
      <p className="mt-4 text-vendee-600">
        Cette page n&rsquo;existe pas ou plus. Retrouvez nos gîtes ou contactez-nous.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="/" className="btn-primary">Retour à l&rsquo;accueil</Link>
        <Link href="/nos-gites/" className="btn-outline">Voir nos gîtes</Link>
      </div>
    </div>
  );
}
