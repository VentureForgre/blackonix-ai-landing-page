import { NextResponse } from "next/server";
import Stripe from "stripe";

import { requireEnv } from "../../../../lib/env";
import { getPaymentTier } from "../../../../lib/payment-tiers";
import { upsertConfirmedPayer } from "../../../../lib/payer-store";
import { getStripe, isSuccessfulCheckoutSession } from "../../../../lib/stripe";

export const runtime = "nodejs";

function getCheckoutSessionEmail(session: Stripe.Checkout.Session) {
  return session.customer_details?.email ?? session.customer_email ?? null;
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  if (!isSuccessfulCheckoutSession(session)) {
    return;
  }

  const tierId = session.metadata?.tierId;
  if (!tierId) {
    return;
  }

  const email = getCheckoutSessionEmail(session);
  if (!email) {
    return;
  }

  const tier = getPaymentTier(tierId);

  upsertConfirmedPayer({
    sessionId: session.id,
    email,
    tierId: tier.id,
    tierName: tier.name,
    paymentStatus: session.payment_status ?? session.status ?? "complete",
    customerId: typeof session.customer === "string" ? session.customer : session.customer?.id ?? null,
    createdAt: new Date().toISOString()
  });
}

export async function POST(request: Request) {
  const stripe = getStripe();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature." }, { status: 400 });
  }

  const payload = await request.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      signature,
      requireEnv("STRIPE_WEBHOOK_SECRET")
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Webhook signature verification failed.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (
    event.type === "checkout.session.completed" ||
    event.type === "checkout.session.async_payment_succeeded"
  ) {
    await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
  }

  return NextResponse.json({ received: true });
}
