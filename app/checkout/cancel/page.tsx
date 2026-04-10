import Link from "next/link";

import { PAYMENT_TIERS } from "../../../lib/payment-tiers";

export const dynamic = "force-dynamic";

type CancelPageProps = {
  searchParams: Promise<{
    tier?: string;
  }>;
};

export default async function CheckoutCancelPage({ searchParams }: CancelPageProps) {
  const { tier } = await searchParams;
  const selectedTier = PAYMENT_TIERS.find((entry) => entry.id === tier) ?? null;
  const returnAnchor = selectedTier?.sectionId ?? "crowdfunding";

  return (
    <main className="min-h-screen bg-[#0e0e0e] px-6 py-32 text-white">
      <div className="mx-auto max-w-2xl rounded-[1.5rem] border border-white/10 bg-[#1a1919] p-8 shadow-[0_0_60px_rgba(0,0,0,0.35)]">
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-primary">
          Checkout canceled
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight">No payment was completed</h1>
        <p className="mt-4 text-base font-light leading-7 text-[#adaaaa]">
          You can return to the same pricing section and restart checkout whenever you&apos;re ready.
        </p>

        {selectedTier ? (
          <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              Selected package
            </p>
            <p className="mt-2 text-xl font-bold text-white">{selectedTier.name}</p>
          </div>
        ) : null}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/#${returnAnchor}`}
            className="kinetic-gradient inline-flex min-h-11 items-center justify-center rounded px-6 py-4 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-[#3d6500]"
          >
            Return to Pricing
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded border border-white/10 bg-[#262626] px-6 py-4 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
