import TrackedCta from "@/components/TrackedCta";
import { siteConfig } from "@/lib/site-config";

export default function CtaBand({
  title,
  text,
  reserveLabel = "Réserver mes nuits",
  reserveEventName,
  whatsappEventName,
  className,
}: {
  title: string;
  text: string;
  reserveLabel?: string;
  reserveEventName: string;
  whatsappEventName: string;
  className?: string;
}) {
  return (
    <section className={`border-t border-or-500/20 bg-prune-800/60 py-14 ${className ?? ""}`}>
      <div className="container-page text-center">
        <h2 className="h2 text-paper">{title}</h2>
        <p className="lead mx-auto mt-3 max-w-xl text-paper/80">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <TrackedCta
            href="/reserver-un-logement/"
            eventName={reserveEventName}
            className="btn bg-or-500 text-nuit-900 hover:bg-or-300"
          >
            {reserveLabel}
          </TrackedCta>
          <TrackedCta
            href={siteConfig.whatsappHref}
            eventName={whatsappEventName}
            external
            className="btn border border-or-500/50 text-paper hover:bg-paper/10"
          >
            Discuter sur WhatsApp
          </TrackedCta>
        </div>
      </div>
    </section>
  );
}
