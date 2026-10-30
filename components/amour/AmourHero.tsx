import Image from "next/image";
import TrackedCta from "@/components/TrackedCta";
import type { AmourImage } from "@/lib/data/amour-images";

type HeroCta = { href: string; label: string; eventName: string; external?: boolean };

export default function AmourHero({
  eyebrow,
  title,
  lead,
  image,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image?: AmourImage;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
}) {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow text-or-300">{eyebrow}</p>
          <h1 className="h1 mt-3 text-paper">{title}</h1>
          <p className="lead mt-5 max-w-xl text-paper/80">{lead}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <TrackedCta
              href={primaryCta.href}
              eventName={primaryCta.eventName}
              external={primaryCta.external}
              className="btn bg-or-500 text-nuit-900 hover:bg-or-300"
            >
              {primaryCta.label}
            </TrackedCta>
            {secondaryCta && (
              <TrackedCta
                href={secondaryCta.href}
                eventName={secondaryCta.eventName}
                external={secondaryCta.external}
                className="btn border border-or-500/50 text-paper hover:bg-paper/10"
              >
                {secondaryCta.label}
              </TrackedCta>
            )}
          </div>
        </div>
        {image && (
          <div className="relative overflow-hidden rounded-lg border border-or-500/20">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
