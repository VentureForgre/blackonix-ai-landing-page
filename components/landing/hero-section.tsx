import Image from "next/image";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MaterialSymbol } from "../ui/material-symbol";
import type { LandingPageContent } from "../../lib/types";

type HeroSectionProps = {
  hero: LandingPageContent["hero"];
};

export function HeroSection({ hero }: HeroSectionProps) {
  const [imageCard, utilityCard] = hero.previewCards;

  return (
    <section
      id={hero.id}
      aria-labelledby="mission-heading"
      className="relative flex min-h-screen scroll-mt-32 flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-28 sm:pt-32"
    >
      <div aria-hidden="true" className="obsidian-glow absolute inset-0 -z-20" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-20 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/6 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 top-1/4 -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-primary/5 blur-[120px]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <div className="max-w-5xl space-y-10">
          <Badge pulseDot>{hero.badge}</Badge>

          <h1
            id="mission-heading"
            className="mt-8 text-balance text-5xl font-extrabold leading-[0.85] tracking-hero text-on-surface sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            {hero.title} <br />
            <span className="bg-kinetic-gradient bg-clip-text text-transparent">
              {hero.highlightedTitle}
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-balance text-base font-light leading-7 text-on-surface-variant md:text-xl md:leading-8">
            {hero.description}
          </p>

          <div className="flex flex-col items-center justify-center gap-6 pt-10 sm:flex-row">
            <Button
              href={hero.ctas[0]?.href}
              className="w-full px-12 py-5 text-base font-extrabold normal-case tracking-normal shadow-[0_0_50px_rgba(163,255,18,0.2)] hover:scale-105 active:scale-95 sm:min-w-[18rem] sm:w-auto md:text-lg"
            >
              {hero.ctas[0]?.label}
            </Button>
            <Button
              href={hero.ctas[1]?.href}
              variant="secondary"
              className="w-full border border-white/5 bg-surface-container-highest px-12 py-5 text-base font-bold normal-case tracking-normal shadow-none hover:bg-surface-bright sm:min-w-[18rem] sm:w-auto md:text-lg"
            >
              {hero.ctas[1]?.label}
            </Button>
          </div>
        </div>

        <div className="mt-16 max-w-lg">
          <div className="mb-2 flex items-center justify-center gap-2 text-neutral-500">
            <MaterialSymbol icon="balance" className="text-sm" />
            <p className="font-label text-[9px] uppercase tracking-[0.2em]">
              {hero.disclosureLabel}
            </p>
          </div>
          <p className="px-4 text-[11px] font-light leading-5 text-neutral-500">
            {hero.disclosureBody}
          </p>
        </div>

        <div className="mt-16 grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          {imageCard?.image ? (
            <article className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/5 bg-surface-container-low sm:aspect-[21/9] md:col-span-2">
              <Image
                src={imageCard.image.src}
                alt={imageCard.image.alt}
                fill
                priority
                sizes="(max-width: 767px) 100vw, 66vw"
                className="object-cover opacity-40 grayscale transition duration-1000 hover:grayscale-0"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
              />
              <div className="absolute bottom-0 left-0 p-8 text-left md:p-10">
                <p className="font-label mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                  {imageCard.label}
                </p>
                <h2 className="text-3xl font-bold tracking-display text-on-surface md:text-[2rem]">
                  {imageCard.title}
                </h2>
              </div>
            </article>
          ) : null}

          <article className="flex aspect-square min-h-[18rem] flex-col justify-end rounded-xl border border-white/5 bg-surface-container-high p-8 text-left md:p-10">
            <MaterialSymbol
              icon={utilityCard?.icon ?? "terminal"}
              className="mb-6 text-5xl text-primary"
            />
            <h2 className="text-2xl font-bold tracking-display text-on-surface md:text-[2rem]">
              {utilityCard?.title}
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-on-surface-variant">
              {utilityCard?.description}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
