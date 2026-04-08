import Image from "next/image";

import type { LandingPageContent } from "../../lib/types";

type InfrastructureSectionProps = {
  proposition: LandingPageContent["proposition"];
};

export function InfrastructureSection({
  proposition
}: InfrastructureSectionProps) {
  return (
    <section
      id={proposition.id}
      aria-labelledby="infrastructure-heading"
      className="overflow-hidden bg-surface-container-lowest px-6 py-28 scroll-mt-32 md:py-40"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 md:flex-row md:gap-24">
        <div className="flex-1 space-y-8">
          <p className="font-label text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
            {proposition.eyebrow}
          </p>
          <h2
            id="infrastructure-heading"
            className="whitespace-pre-line text-balance text-4xl font-bold leading-[0.9] tracking-hero text-on-surface sm:text-5xl md:text-7xl"
          >
            {proposition.title}
          </h2>
          <p className="max-w-xl text-balance text-lg font-light leading-8 text-on-surface-variant md:text-xl">
            {proposition.description}
          </p>

          <div className="grid max-w-md grid-cols-2 gap-8 pt-4 md:gap-12 md:pt-10">
            {proposition.stats.map((stat) => (
              <div key={stat.label}>
                <span className="text-4xl font-black text-on-surface">
                  {stat.value}
                </span>
                <p className="mt-3 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-2xl flex-1 self-stretch">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-primary/10 blur-[100px]" />
          <div className="h-full overflow-hidden rounded-2xl border border-white/5 bg-surface-container-high p-1 shadow-2xl">
            <Image
              src={proposition.image.src}
              alt={proposition.image.alt}
              width={640}
              height={640}
              sizes="(max-width: 767px) 100vw, 50vw"
              className="h-full w-full rounded-[14px] object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
