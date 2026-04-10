import test from "node:test";
import assert from "node:assert/strict";

import { PAYMENT_TIERS, getPaymentTier } from "../lib/payment-tiers.ts";

test("defines the six checkout tiers with stable ids and Stripe modes", () => {
  const expected = [
    ["base-backer", "payment", 2300],
    ["qwen-advocate", "payment", 3000],
    ["elite-backer", "payment", 4500],
    ["model-sovereign", "payment", 10000],
    ["core-access", "subscription", 2300],
    ["high-concurrency", "subscription", 4500]
  ];

  assert.equal(PAYMENT_TIERS.length, expected.length);

  for (const [id, mode, unitAmount] of expected) {
    const tier = getPaymentTier(id);

    assert.equal(tier.id, id);
    assert.equal(tier.mode, mode);
    assert.equal(tier.unitAmount, unitAmount);
    assert.match(tier.name, /\S/);
    assert.ok(tier.features.length >= 3);
  }
});

test("rejects unknown checkout tier ids", () => {
  assert.throws(() => getPaymentTier("not-a-tier"), /Unknown payment tier/);
});
