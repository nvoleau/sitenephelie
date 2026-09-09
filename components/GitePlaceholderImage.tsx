// Aucune photo réelle des gîtes n'a été fournie pour l'instant (voir CLAUDE.md,
// "ne pas inventer de contenu" s'applique aussi aux visuels). Ce composant affiche
// un espace réservé sobre en attendant les vraies photos de Nicolas, plutôt que
// d'utiliser des images de stock qui donneraient une fausse idée du bien.
export default function GitePlaceholderImage({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={`Photo à venir — ${label}`}
      className="flex aspect-[4/3] w-full items-center justify-center rounded-lg bg-vendee-100 text-center"
    >
      <span className="px-4 text-sm font-medium text-vendee-500">
        Photo à venir — {label}
      </span>
    </div>
  );
}
