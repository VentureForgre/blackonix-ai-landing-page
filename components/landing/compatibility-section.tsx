import { Card } from "../ui/card";
import type { LandingPageContent } from "../../lib/types";

type CompatibilitySectionProps = {
  compatibility: LandingPageContent["compatibility"];
};

export function CompatibilitySection({
  compatibility
}: CompatibilitySectionProps) {
  return (
    <section
      id={compatibility.id}
      aria-labelledby="compatibility-heading"
      className="relative overflow-hidden px-6 py-28 scroll-mt-32 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-10">
            <div>
              <p className="font-label mb-6 text-xs font-bold uppercase tracking-[0.4em] text-primary">
                {compatibility.eyebrow}
              </p>
              <h2
                id="compatibility-heading"
                className="whitespace-pre-line text-balance text-4xl font-black leading-[0.9] tracking-hero text-on-surface sm:text-5xl md:text-6xl"
              >
                {compatibility.title}
              </h2>
            </div>

            <p className="max-w-xl text-balance text-lg font-light leading-8 text-on-surface-variant md:text-xl">
              {compatibility.description}
            </p>

            <div className="grid grid-cols-1 gap-6 pt-2 sm:max-w-sm">
              <div className="space-y-4">
                <h3 className="border-b border-primary/20 pb-2 font-label text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  5 Pillars of Privacy
                </h3>
                {compatibility.privacyPillars.map((pillar) => (
                  <p key={pillar} className="text-sm font-bold text-on-surface">
                    {pillar}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <Card className="relative overflow-hidden rounded-[1.25rem] border-white/5 bg-surface-container-high/50 p-6 backdrop-blur-sm md:p-10">
            <div className="grid grid-cols-4 gap-4 opacity-60 sm:grid-cols-5 sm:gap-6">
              {compatibility.tools.slice(0, 20).map((tool) => (
                <div
                  key={tool}
                  className="flex aspect-square items-center justify-center grayscale transition hover:grayscale-0 hover:opacity-100"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-white/10 p-1 text-center text-[8px] font-bold leading-tight text-on-surface">
                    {tool}
                  </div>
                </div>
              ))}
            </div>

            {compatibility.tools[20] ? (
              <div className="mt-8 flex justify-center opacity-40">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-white/10 p-1 text-center text-[8px] font-bold leading-tight text-on-surface">
                  {compatibility.tools[20]}
                </div>
              </div>
            ) : null}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container-high/80 to-transparent" />
          </Card>
        </div>
      </div>
    </section>
  );
}
