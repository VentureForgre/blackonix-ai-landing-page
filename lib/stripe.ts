import Stripe from "stripe";

import { requireEnv } from "./env";

declare global {
  var __blackonixStripe: Stripe | undefined;
}

export function getStripe() {
  if (!globalThis.__blackonixStripe) {
    globalThis.__blackonixStripe = new Stripe(requireEnv("STRIPE_SECRET_KEY"));
  }

  return globalThis.__blackonixStripe;
}

export function isSuccessfulCheckoutSession(session: Stripe.Checkout.Session) {
  if (session.status !== "complete") {
    return false;
  }

  if (session.mode === "subscription") {
    return Boolean(session.subscription);
  }

  return session.payment_status === "paid";
}
