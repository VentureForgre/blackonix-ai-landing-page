import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { MaterialSymbol } from "../ui/material-symbol";
import type { LandingPageContent } from "../../lib/types";

type SubscriptionsSectionProps = {
  subscriptions: LandingPageContent["subscriptions"];
};

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function SubscriptionsSection({
  subscriptions
}: SubscriptionsSectionProps) {
  return (
    <section
      id={subscriptions.id}
      aria-labelledby="subscriptions-heading"
      className="relative overflow-hidden px-6 py-28 scroll-mt-32 md:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[160px]"
      />

      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-16 max-w-4xl space-y-4 text-center md:mb-20">
          <p className="font-label text-xs font-bold uppercase tracking-[0.5em] text-primary">
            {subscriptions.eyebrow}
          </p>
          <h2
            id="subscriptions-heading"
            className="text-balance text-4xl font-black tracking-hero text-on-surface sm:text-5xl md:text-7xl"
          >
            {subscriptions.title}
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-base font-light leading-7 text-on-surface-variant md:text-lg md:leading-8">
            {subscriptions.description}
          </p>
        </header>

        <div className="mb-16 grid grid-cols-1 gap-4 md:mb-20 md:grid-cols-4">
          {subscriptions.founderPerks.map((perk) => (
            <Card
              key={perk.title}
              className="border-white/10 bg-surface-container p-8"
            >
              <MaterialSymbol icon={perk.icon} className="mb-4 text-primary" />
              <h3 className="text-lg font-bold text-on-surface">{perk.title}</h3>
              <p className="mt-2 text-xs font-light leading-6 text-on-surface-variant">
                {perk.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {subscriptions.tiers.map((tier) => (
            <Card
              key={tier.name}
              className={classNames(
                "relative flex h-full flex-col rounded-xl p-8 md:p-12",
                tier.featured
                  ? "border-2 border-primary/50 shadow-[0_0_40px_rgba(163,255,18,0.1)]"
                  : "border-2 border-white/5 hover:border-primary/20"
              )}
            >
              <div
                className={classNames(
                  "absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.25em]",
                  tier.featured
                    ? "kinetic-gradient font-label font-bold text-on-primary"
                    : "border border-white/10 bg-surface-container-highest font-label text-primary"
                )}
              >
                {tier.badge}
              </div>

              <div className="mb-10 text-center">
                <h3 className="text-2xl font-bold text-on-surface">{tier.name}</h3>
                <div className="mt-2 flex items-center justify-center gap-1">
                  <span className="text-4xl font-black text-on-surface">
                    {tier.price}
                  </span>
                  <span className="text-sm text-on-surface-variant">{tier.cadence}</span>
                </div>
              </div>

              <ul className="mb-12 flex-1 space-y-4 text-sm text-on-surface-variant">
                {tier.bullets.map((bullet) => (
                  <li
                    key={bullet.label}
                    className={classNames(
                      "flex items-center gap-3",
                      bullet.highlight && "font-bold text-on-surface"
                    )}
                  >
                    <MaterialSymbol icon={bullet.icon} className="text-lg text-primary" />
                    <span>{bullet.label}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.featured ? "primary" : "secondary"}
                className={classNames(
                  "mt-auto w-full py-4 text-xs",
                  tier.featured
                    ? ""
                    : "bg-white text-black hover:bg-neutral-200 hover:text-black"
                )}
              >
                {tier.ctaLabel}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-xl border-t border-white/5 pt-8 text-center">
          <p className="font-label text-[11px] uppercase tracking-[0.2em] text-on-surface-variant">
            {subscriptions.enterpriseNote}
          </p>
        </div>
      </div>
    </section>
  );
}
