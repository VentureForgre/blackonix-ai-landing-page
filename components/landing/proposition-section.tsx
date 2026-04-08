import { Card } from "../ui/card";
import { MaterialSymbol } from "../ui/material-symbol";
import type { LandingPageContent } from "../../lib/types";

type PropositionSectionProps = {
  consolidation: LandingPageContent["consolidation"];
};

export function PropositionSection({
  consolidation
}: PropositionSectionProps) {
  return (
    <section
      id="consolidation"
      aria-labelledby="consolidation-heading"
      className="relative overflow-hidden bg-surface-container-lowest px-6 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <Card
          glass
          className="relative overflow-hidden rounded-[1.75rem] border-primary/20 p-10 shadow-[0_0_80px_rgba(163,255,18,0.05)] md:p-16 xl:p-24"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"
          />

          <div className="relative z-10 max-w-3xl">
            <p className="font-label mb-6 text-xs font-bold uppercase tracking-[0.4em] text-primary">
              {consolidation.eyebrow}
            </p>
            <h2
              id="consolidation-heading"
              className="whitespace-pre-line text-balance text-4xl font-black leading-[0.9] tracking-hero text-on-surface sm:text-5xl md:text-7xl"
            >
              {consolidation.title}
            </h2>
            <p className="mt-10 max-w-3xl text-balance text-lg font-light leading-8 text-on-surface-variant md:text-2xl md:leading-10">
              {consolidation.description}
            </p>

            <div className="mt-12 flex flex-wrap gap-4 md:gap-8">
              {consolidation.pills.map((pill) => (
                <div
                  key={pill.label}
                  className="flex items-start gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 sm:items-center md:px-6"
                >
                  <MaterialSymbol icon={pill.icon} className="text-primary" />
                  <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-on-surface md:text-sm">
                    {pill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
