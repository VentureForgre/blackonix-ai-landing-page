import { Button } from "../ui/button";
import { ProgressBar } from "../ui/progress-bar";
import { MaterialSymbol } from "../ui/material-symbol";
import type { LandingPageContent } from "../../lib/types";

type CampaignSectionProps = {
  campaign: LandingPageContent["campaign"];
};

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function CampaignSection({ campaign }: CampaignSectionProps) {
  return (
    <section
      id={campaign.id}
      aria-labelledby="campaign-heading"
      className="relative scroll-mt-24 overflow-hidden px-6 py-28 md:py-40"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-primary/5" />

      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-16 max-w-4xl space-y-4 text-center md:mb-20">
          <p className="font-label text-xs font-bold uppercase tracking-[0.5em] text-primary">
            {campaign.eyebrow}
          </p>
          <h2
            id="campaign-heading"
            className="text-balance text-4xl font-black tracking-hero text-on-surface sm:text-5xl md:text-7xl"
          >
            {campaign.title}
          </h2>
          <p className="mx-auto max-w-3xl text-balance text-base font-light leading-7 text-on-surface-variant md:text-lg md:leading-8">
            {campaign.description}
          </p>
        </header>

        <div className="glass-panel mx-auto mb-20 max-w-4xl rounded-[1.5rem] p-8 md:mb-24 md:p-10">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-1">
              <span className="text-4xl font-black text-white md:text-[2.5rem]">
                {campaign.raised}
              </span>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                Raised toward {campaign.target} Target
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="text-2xl font-bold text-primary">
                {campaign.progressLabel}
              </span>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                {campaign.progressDetail}
              </p>
            </div>
          </div>

          <ProgressBar value={campaign.progressPercent} label={campaign.progressLabel} />

          <div className="mt-6 text-center">
            <p className="text-xs italic text-on-surface-variant">
              {campaign.note.replace(
                "200 tokens/sec guaranteed for all tiers.",
                ""
              ).trim()}{" "}
              <span className="font-bold text-primary">
                200 tokens/sec guaranteed for all tiers.
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {campaign.tiers.map((tier) => (
            <article
              key={tier.name}
              className={classNames(
                "relative flex h-full flex-col rounded-xl p-8 transition-colors",
                tier.featured
                  ? "bg-surface-container-high border-2 border-primary/40"
                  : "border border-white/5 bg-surface-container hover:border-primary/30"
              )}
            >
              {tier.badge ? (
                <div className="absolute -top-3 right-4 rounded-full kinetic-gradient px-3 py-1 text-[8px] font-black uppercase text-on-primary">
                  {tier.badge}
                </div>
              ) : null}

              <div className="mb-6">
                <h3 className="text-3xl font-black text-on-surface">{tier.price}</h3>
                <p className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  {tier.name}
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-4 text-xs text-on-surface-variant">
                {tier.bullets.map((bullet) => (
                  <li key={bullet.label} className="flex items-center gap-2">
                    <MaterialSymbol icon={bullet.icon} className="text-sm text-primary" />
                    <span>{bullet.label}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={classNames(
                  "mt-auto w-full py-3 text-[10px]",
                  tier.featured
                    ? "shadow-none"
                    : "bg-white/5 text-white hover:bg-primary hover:text-on-primary"
                )}
                variant={tier.featured ? "primary" : "secondary"}
              >
                {tier.ctaLabel}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
