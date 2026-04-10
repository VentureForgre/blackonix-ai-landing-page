import Link from "next/link";

import { getPaymentTier } from "../../../lib/payment-tiers";
import { getConfirmedPayerBySessionId, upsertConfirmedPayer } from "../../../lib/payer-store";
import { getStripe, isSuccessfulCheckoutSession } from "../../../lib/stripe";

export const dynamic = "force-dynamic";

type SuccessPageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

export default async function CheckoutSuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id: sessionId } = await searchParams;

  let title = "Checkout received";
  let body =
    "We received your checkout and are confirming payment details with Stripe.";
  let tierName: string | null = null;
  let email: string | null = null;

  if (sessionId) {
    try {
      const stripe = getStripe();
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      const payer = getConfirmedPayerBySessionId(sessionId);

      if (isSuccessfulCheckoutSession(session)) {
        const tierId = session.metadata?.tierId;
        tierName = tierId ? getPaymentTier(tierId).name : null;
        email = payer?.email ?? session.customer_details?.email ?? session.customer_email ?? null;

        if (!payer && tierId && email) {
          const tier = getPaymentTier(tierId);

          upsertConfirmedPayer({
            sessionId: session.id,
            email,
            tierId: tier.id,
            tierName: tier.name,
            paymentStatus: session.payment_status ?? session.status ?? "complete",
            customerId:
              typeof session.customer === "string" ? session.customer : session.customer?.id ?? null,
            createdAt: new Date().toISOString()
          });
        }

        title = "Payment confirmed";
        body = payer
          ? "Your payment has been verified and your email has been recorded as a confirmed payer."
          : "Your Stripe checkout completed successfully. The webhook may still be finalizing your payer record.";
      }
    } catch {
      body = "We could not verify this checkout session. If you were charged, check Stripe receipts and review the webhook logs.";
    }
  }

  return (
    <main className="min-h-screen bg-[#0e0e0e] px-6 py-32 text-white">
      <div className="mx-auto max-w-2xl rounded-[1.5rem] border border-white/10 bg-[#1a1919] p-8 shadow-[0_0_60px_rgba(0,0,0,0.35)]">
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-primary">
          Stripe checkout
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight">{title}</h1>
        <p className="mt-4 text-base font-light leading-7 text-[#adaaaa]">{body}</p>

        {tierName ? (
          <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              Package
            </p>
            <p className="mt-2 text-xl font-bold text-white">{tierName}</p>
            {email ? <p className="mt-2 text-sm text-[#adaaaa]">{email}</p> : null}
          </div>
        ) : null}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#crowdfunding"
            className="kinetic-gradient inline-flex min-h-11 items-center justify-center rounded px-6 py-4 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-[#3d6500]"
          >
            Back to Pricing
          </Link>
          <Link
            href="/#founding-offer"
            className="inline-flex min-h-11 items-center justify-center rounded border border-white/10 bg-[#262626] px-6 py-4 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-white"
          >
            View Subscriptions
          </Link>
        </div>
      </div>
    </main>
  );
}
