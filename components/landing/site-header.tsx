import { Button } from "../ui/button";
import type { LinkItem } from "../../lib/types";

type SiteHeaderProps = {
  brand: string;
  navItems: ReadonlyArray<LinkItem>;
};

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function SiteHeader({ brand, navItems }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 md:px-8">
        <a
          href="#mission"
          className="inline-flex min-h-11 items-center py-1 text-xl font-black tracking-[-0.06em] text-white"
        >
          {brand}
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={classNames(
                "inline-flex min-h-11 items-center font-label text-[10px] font-bold uppercase tracking-[0.18em] transition-colors",
                item.active
                  ? "border-b border-primary pb-1 text-primary"
                  : "text-neutral-400 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="#crowdfunding" className="px-6 py-2.5 text-xs">
            Back the Vision
          </Button>
        </div>

        <details className="group relative md:hidden">
          <summary
            aria-controls="mobile-navigation"
            className="inline-flex min-h-11 list-none items-center justify-center rounded border border-white/10 bg-surface-container-high px-4 py-2 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white marker:hidden"
          >
            Menu
          </summary>
          <div
            id="mobile-navigation"
            className="absolute right-0 top-[calc(100%+12px)] w-64 rounded-2xl border border-white/8 bg-surface-container-high p-4 shadow-panel"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={classNames(
                    "inline-flex min-h-11 items-center rounded-lg px-3 py-2 font-label text-[10px] font-bold uppercase tracking-[0.18em]",
                    item.active
                      ? "bg-primary/10 text-primary"
                      : "text-neutral-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label}
                </a>
              ))}
              <Button href="#crowdfunding" className="mt-2 w-full py-3 text-[10px]">
                Back the Vision
              </Button>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
