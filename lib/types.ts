export type ButtonVariant = "primary" | "secondary" | "ghost";

export type LinkItem = {
  label: string;
  href: string;
  active?: boolean;
};

export type CtaLink = LinkItem & {
  variant: ButtonVariant;
};

export type ImageAsset = {
  src: string;
  alt: string;
  kind: "local" | "remote";
};

export type IconListItem = {
  icon: string;
  label: string;
  highlight?: boolean;
};

export type StatItem = {
  value: string;
  label: string;
};

export type HighlightCard = {
  icon: string;
  title: string;
  description: string;
};

export type PreviewCard = {
  label?: string;
  icon?: string;
  title: string;
  description?: string;
  image?: ImageAsset;
};

export type CampaignTier = {
  name: string;
  price: string;
  featured?: boolean;
  badge?: string;
  ctaLabel: string;
  bullets: ReadonlyArray<IconListItem>;
};

export type SubscriptionTier = {
  badge: string;
  name: string;
  price: string;
  cadence: string;
  featured?: boolean;
  ctaLabel: string;
  bullets: ReadonlyArray<IconListItem>;
};

export type LandingPageContent = {
  brand: string;
  nav: ReadonlyArray<LinkItem>;
  hero: {
    id: string;
    badge: string;
    title: string;
    highlightedTitle: string;
    description: string;
    ctas: ReadonlyArray<CtaLink>;
    disclosureLabel: string;
    disclosureBody: string;
    previewCards: ReadonlyArray<PreviewCard>;
  };
  campaign: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    raised: string;
    target: string;
    progressPercent: number;
    progressLabel: string;
    progressDetail: string;
    note: string;
    tiers: ReadonlyArray<CampaignTier>;
  };
  subscriptions: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    founderPerks: ReadonlyArray<HighlightCard>;
    tiers: ReadonlyArray<SubscriptionTier>;
    enterpriseNote: string;
  };
  consolidation: {
    eyebrow: string;
    title: string;
    description: string;
    pills: ReadonlyArray<IconListItem>;
  };
  compatibility: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    privacyPillars: ReadonlyArray<string>;
    tools: ReadonlyArray<string>;
  };
  proposition: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    stats: ReadonlyArray<StatItem>;
    image: ImageAsset;
  };
  privacy: {
    id: string;
    title: string;
    description: string;
    highlight: HighlightCard;
    bullets: ReadonlyArray<HighlightCard>;
    image: ImageAsset;
  };
  founderSeat: {
    id: string;
    eyebrow: string;
    title: string;
    securedSeats: string;
    securedSeatsLabel: string;
    limitLabel: string;
    remainingLabel: string;
    progressPercent: number;
    cta: CtaLink;
  };
  footer: {
    links: ReadonlyArray<LinkItem>;
    copyright: string;
  };
  media: {
    sourceScreenshot: ImageAsset;
  };
};
