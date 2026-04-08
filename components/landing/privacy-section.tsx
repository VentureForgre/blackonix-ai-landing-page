import Image from "next/image";

import { Card } from "../ui/card";
import { MaterialSymbol } from "../ui/material-symbol";
import type { LandingPageContent } from "../../lib/types";

type PrivacySectionProps = {
  privacy: LandingPageContent["privacy"];
};

export function PrivacySection({ privacy }: PrivacySectionProps) {
  return (
    <section
      id={privacy.id}
      aria-labelledby="privacy-heading"
      className="overflow-hidden bg-surface-container-low px-6 py-28 scroll-mt-32 md:py-40"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <Image
            src={privacy.image.src}
            alt={privacy.image.alt}
            width={720}
            height={880}
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="rounded-xl border border-white/10 opacity-70 shadow-2xl"
          />

          <Card
            glass
            className="mt-6 max-w-sm rounded-xl p-8 shadow-2xl lg:absolute lg:-bottom-10 lg:-right-10 lg:mt-0"
          >
            <MaterialSymbol
              icon={privacy.highlight.icon}
              className="mb-5 text-3xl text-primary"
            />
            <p className="font-label mb-3 text-[10px] uppercase tracking-[0.3em] text-primary">
              {privacy.highlight.title}
            </p>
            <p className="text-xs leading-6 text-on-surface-variant">
              {privacy.highlight.description}
            </p>
          </Card>
        </div>

        <div className="order-1 space-y-10 lg:order-2">
          <h2
            id="privacy-heading"
            className="whitespace-pre-line text-balance text-4xl font-extrabold leading-[0.9] tracking-hero text-on-surface sm:text-5xl md:text-6xl"
          >
            {privacy.title}
          </h2>
          <p className="max-w-xl text-balance text-lg font-light leading-8 text-on-surface-variant md:text-xl">
            {privacy.description}
          </p>

          <ul className="space-y-6">
            {privacy.bullets.map((bullet) => (
              <li key={bullet.title} className="flex items-start gap-5">
                <MaterialSymbol icon={bullet.icon} className="mt-1 text-primary" />
                <div>
                  <h3 className="text-lg font-bold text-on-surface">{bullet.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-on-surface-variant">
                    {bullet.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
