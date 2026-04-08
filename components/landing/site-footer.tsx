import type { LandingPageContent } from "../../lib/types";

type SiteFooterProps = {
  brand: LandingPageContent["brand"];
  footer: LandingPageContent["footer"];
};

export function SiteFooter({ brand, footer }: SiteFooterProps) {
  return (
    <footer id="footer" className="w-full border-t border-white/5 bg-background py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 md:flex-row md:px-8">
        <div className="inline-flex min-h-11 items-center font-label text-lg font-bold tracking-[-0.04em] text-white">
          {brand}
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-4 md:gap-6">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-full px-3 font-label text-[10px] uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-primary focus-visible:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-center font-label text-[10px] uppercase tracking-[0.18em] text-neutral-600 md:text-right">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
