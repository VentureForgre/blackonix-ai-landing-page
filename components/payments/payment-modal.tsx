"use client";

import { useEffect, useState } from "react";

import type { PaymentTier } from "../../lib/payment-tiers";

type PaymentModalProps = {
  tiers: PaymentTier[];
};

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function PaymentModal({ tiers }: PaymentModalProps) {
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectedTier = tiers.find((tier) => tier.id === selectedTierId) ?? null;

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }

      const trigger = target.closest<HTMLElement>("[data-tier-id]");
      if (!trigger) {
        return;
      }

      event.preventDefault();
      setErrorMessage(null);
      setSelectedTierId(trigger.dataset.tierId ?? null);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedTierId(null);
        setErrorMessage(null);
      }
    };

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  async function beginCheckout() {
    if (!selectedTier) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ tierId: selectedTier.id })
      });

      const payload = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !payload.url) {
        throw new Error(payload.error ?? "Unable to start checkout.");
      }

      window.location.assign(payload.url);
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage(error instanceof Error ? error.message : "Unable to start checkout.");
    }
  }

  if (!selectedTier) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close payment confirmation"
        onClick={() => {
          setSelectedTierId(null);
          setErrorMessage(null);
        }}
      />

      <div className="glass-panel relative z-[101] w-full max-w-lg rounded-[1.5rem] border border-white/10 p-8 text-left shadow-[0_0_60px_rgba(0,0,0,0.45)]">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-primary">
              Confirm package
            </p>
            <h2 id="payment-modal-title" className="mt-2 text-3xl font-black text-on-surface">
              {selectedTier.name}
            </h2>
            <p className="mt-2 text-sm font-light text-on-surface-variant">
              {selectedTier.priceLabel}
              {selectedTier.billingLabel.startsWith("/") ? selectedTier.billingLabel : ""}
            </p>
          </div>

          <button
            type="button"
            className="rounded border border-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant transition-colors hover:border-primary/40 hover:text-on-surface"
            onClick={() => {
              setSelectedTierId(null);
              setErrorMessage(null);
            }}
          >
            Close
          </button>
        </div>

        <p className="mb-6 text-sm leading-6 text-on-surface-variant">
          You&apos;re about to continue to secure Stripe checkout for this BLACKONIX AI package.
        </p>

        <ul className="mb-6 space-y-3 text-sm text-on-surface-variant">
          {selectedTier.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-lg text-primary">check</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {errorMessage ? (
          <p className="mb-4 rounded border border-[#ff7351]/30 bg-[#ff7351]/10 px-4 py-3 text-sm text-[#ffd2c8]">
            {errorMessage}
          </p>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className={classNames(
              "kinetic-gradient min-h-11 flex-1 rounded px-6 py-4 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-on-primary transition-opacity",
              isSubmitting && "cursor-wait opacity-70"
            )}
            onClick={beginCheckout}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Redirecting..." : "Continue to Payment"}
          </button>
          <button
            type="button"
            className="min-h-11 flex-1 rounded border border-white/10 bg-surface-container-highest px-6 py-4 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-on-surface transition-colors hover:bg-surface-bright"
            onClick={() => {
              setSelectedTierId(null);
              setErrorMessage(null);
            }}
            disabled={isSubmitting}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
