export type PaymentMode = "payment" | "subscription";

export type PaymentTier = {
  id: string;
  name: string;
  priceLabel: string;
  billingLabel: string;
  ctaLabel: string;
  mode: PaymentMode;
  unitAmount: number;
  sectionId: "crowdfunding" | "founding-offer";
  features: string[];
  productDescription: string;
};

export const PAYMENT_TIERS: PaymentTier[] = [
  {
    id: "base-backer",
    name: "Base Backer",
    priceLabel: "$23",
    billingLabel: "One-time backing tier",
    ctaLabel: "Back Tier",
    mode: "payment",
    unitAmount: 2300,
    sectionId: "crowdfunding",
    features: ["1 Week Unlimited", "200 Tokens/Second", "Privacy Guard"],
    productDescription: "Founding campaign access with one week of unlimited usage."
  },
  {
    id: "qwen-advocate",
    name: "Qwen Advocate",
    priceLabel: "$30",
    billingLabel: "One-time backing tier",
    ctaLabel: "Back Tier",
    mode: "payment",
    unitAmount: 3000,
    sectionId: "crowdfunding",
    features: ["1 Month Unlimited", "Qwen 3.5:122B", "200 Tokens/Second"],
    productDescription: "Founding campaign access with one month of unlimited Qwen usage."
  },
  {
    id: "elite-backer",
    name: "Elite Backer",
    priceLabel: "$45",
    billingLabel: "One-time backing tier",
    ctaLabel: "Back Tier",
    mode: "payment",
    unitAmount: 4500,
    sectionId: "crowdfunding",
    features: ["3 Months FREE Usage", "Qwen 3.5:122B", "200 Tokens/Second"],
    productDescription: "Featured founding campaign tier with three months of free usage."
  },
  {
    id: "model-sovereign",
    name: "Model Sovereign",
    priceLabel: "$100",
    billingLabel: "One-time backing tier",
    ctaLabel: "Back Tier",
    mode: "payment",
    unitAmount: 10000,
    sectionId: "crowdfunding",
    features: ["3 Months Unlimited", "Any Model in Stack", "200 Tokens/Second"],
    productDescription: "Founding campaign tier with broad model access and unlimited usage."
  },
  {
    id: "core-access",
    name: "Core Access",
    priceLabel: "$23",
    billingLabel: "/mo",
    ctaLabel: "Pre-Subscribe",
    mode: "subscription",
    unitAmount: 2300,
    sectionId: "founding-offer",
    features: [
      "Any 100B Parameter Model",
      "DeepSeek V3 API Access",
      "5 Concurrent Requests",
      "All Founding 10K Perks"
    ],
    productDescription: "Operational subscription for core access to BLACKONIX AI."
  },
  {
    id: "high-concurrency",
    name: "High Concurrency",
    priceLabel: "$45",
    billingLabel: "/mo",
    ctaLabel: "Pre-Subscribe",
    mode: "subscription",
    unitAmount: 4500,
    sectionId: "founding-offer",
    features: [
      "Any 100B Parameter Model",
      "20 Concurrent Requests",
      "High-Priority Response Queue",
      "All Founding 10K Perks"
    ],
    productDescription: "Operational subscription for higher concurrency and queue priority."
  }
];

const paymentTierMap = new Map(PAYMENT_TIERS.map((tier) => [tier.id, tier]));

export function getPaymentTier(id: string): PaymentTier {
  const tier = paymentTierMap.get(id);

  if (!tier) {
    throw new Error(`Unknown payment tier: ${id}`);
  }

  return tier;
}
