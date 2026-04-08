import { CampaignSection } from "../components/landing/campaign-section";
import { CompatibilitySection } from "../components/landing/compatibility-section";
import { FounderSeatSection } from "../components/landing/founder-seat-section";
import { HeroSection } from "../components/landing/hero-section";
import { InfrastructureSection } from "../components/landing/infrastructure-section";
import { PrivacySection } from "../components/landing/privacy-section";
import { PropositionSection } from "../components/landing/proposition-section";
import { SiteHeader } from "../components/landing/site-header";
import { SiteFooter } from "../components/landing/site-footer";
import { SubscriptionsSection } from "../components/landing/subscriptions-section";
import { landingPageContent } from "../lib/content";

export default function Home() {
  return (
    <>
      <SiteHeader brand={landingPageContent.brand} navItems={landingPageContent.nav} />
      <main
        id="main-content"
        className="min-h-screen overflow-x-clip"
        aria-label="BLACKONIX AI landing page"
      >
        <HeroSection hero={landingPageContent.hero} />
        <CampaignSection campaign={landingPageContent.campaign} />
        <SubscriptionsSection subscriptions={landingPageContent.subscriptions} />
        <PropositionSection consolidation={landingPageContent.consolidation} />
        <CompatibilitySection compatibility={landingPageContent.compatibility} />
        <InfrastructureSection proposition={landingPageContent.proposition} />
        <PrivacySection privacy={landingPageContent.privacy} />
        <FounderSeatSection founderSeat={landingPageContent.founderSeat} />
      </main>
      <SiteFooter
        brand={landingPageContent.brand}
        footer={landingPageContent.footer}
      />
    </>
  );
}
