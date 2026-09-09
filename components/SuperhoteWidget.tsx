// Widget tiers (iframe cross-origin) : son contenu n'est pas rendu côté serveur et
// reste invisible pour Google, comme les avis Booking sur l'ancien site (voir
// CLAUDE.md). On ne peut pas SSR le contenu propriétaire de Superhote — c'est
// pourquoi la page /reserver-un-logement/ garde en plus une liste des gîtes en
// texte réel, rendue côté serveur, au-dessus de ce widget.
export default function SuperhoteWidget({
  src,
  id,
  title,
}: {
  src: string;
  id: string;
  title: string;
}) {
  return (
    <iframe
      src={src}
      id={id}
      title={title}
      loading="lazy"
      width="100%"
      height={1500}
      className="w-full rounded-lg border border-vendee-100"
    />
  );
}
