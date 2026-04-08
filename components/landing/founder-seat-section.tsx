import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ProgressBar } from "../ui/progress-bar";
import type { LandingPageContent } from "../../lib/types";

type FounderSeatSectionProps = {
  founderSeat: LandingPageContent["founderSeat"];
};

export function FounderSeatSection({
  founderSeat
}: FounderSeatSectionProps) {
  return (
    <section
      id={founderSeat.id}
      aria-labelledby="founder-seat-heading"
      className="overflow-hidden px-6 py-28 scroll-mt-32 md:py-40"
    >
      <div className="mx-auto max-w-4xl">
        <Card className="relative overflow-hidden rounded-xl p-8 md:p-16">
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-[120px]"
          />

          <div className="relative z-10 space-y-12 md:space-y-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <p className="font-label text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                  {founderSeat.eyebrow}
                </p>
                <h2
                  id="founder-seat-heading"
                  className="text-4xl font-bold tracking-display text-on-surface"
                >
                  {founderSeat.title}
                </h2>
              </div>

              <div className="text-left md:text-right">
                <span className="text-5xl font-black text-on-surface md:text-6xl">
                  {founderSeat.securedSeats}
                </span>
                <p className="mt-3 font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                  {founderSeat.securedSeatsLabel}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <ProgressBar
                value={founderSeat.progressPercent}
                trackClassName="h-3 bg-surface-container-lowest p-0"
                className="h-3"
              />
              <div className="flex flex-col gap-3 font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant sm:flex-row sm:justify-between">
                <span>{founderSeat.limitLabel}</span>
                <span>{founderSeat.remainingLabel}</span>
              </div>
            </div>

            <div className="flex justify-center pt-2 md:pt-8">
              <Button
                href={founderSeat.cta.href}
                className="w-full px-8 py-5 text-sm shadow-xl sm:w-auto sm:px-14 sm:text-xl"
              >
                {founderSeat.cta.label}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
