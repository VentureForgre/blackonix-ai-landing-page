import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { getPaymentTier } from "../../../lib/payment-tiers";
import { getBaseUrl } from "../../../lib/site-url";
import { getStripe } from "../../../lib/stripe";

export const runtime = "nodejs";

type CheckoutRequestBody = {
  tierId?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CheckoutRequestBody;
    if (!body.tierId) {
      return NextResponse.json({ error: "Missing tierId." }, { status: 400 });
    }

    const tier = getPaymentTier(body.tierId);
    const requestHeaders = await headers();
    const baseUrl = getBaseUrl(requestHeaders);
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: tier.mode,
      billing_address_collection: "auto",
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout/cancel?tier=${tier.id}`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: tier.unitAmount,
            product_data: {
              name: tier.name,
              description: tier.productDescription
            },
            ...(tier.mode === "subscription"
              ? {
                  recurring: {
                    interval: "month" as const
                  }
                }
              : {})
          }
        }
      ],
      customer_creation: tier.mode === "payment" ? "always" : undefined,
      metadata: {
        tierId: tier.id,
        tierName: tier.name,
        billingLabel: tier.billingLabel
      },
      subscription_data:
        tier.mode === "subscription"
          ? {
              metadata: {
                tierId: tier.id,
                tierName: tier.name
              }
            }
          : undefined
    });

    if (!session.url) {
      return NextResponse.json({ error: "Stripe did not return a checkout URL." }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create checkout session.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
