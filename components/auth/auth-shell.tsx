import Link from "next/link";

type AuthField = {
  label: string;
  placeholder: string;
  type: "email" | "password" | "text";
};

type AuthShellProps = {
  eyebrow: string;
  title: string;
  description?: string;
  fields: AuthField[];
  submitLabel: string;
  alternatePrompt: string;
  alternateHref: string;
  alternateLabel: string;
  auxiliaryLabel?: string;
  auxiliaryHref?: string;
  legalCopy?: React.ReactNode;
};

function AuthInput({ field }: { field: AuthField }) {
  return (
    <div className="space-y-2">
      <label className="ml-1 block font-label text-[11px] font-medium uppercase tracking-[0.22em] text-on-surface-variant">
        {field.label}
      </label>
      <input
        type={field.type}
        placeholder={field.placeholder}
        className="w-full rounded-xl bg-surface-container-lowest px-4 py-4 text-sm text-on-surface outline-none ring-1 ring-white/5 transition duration-300 placeholder:text-neutral-600 focus:ring-primary/80"
      />
    </div>
  );
}

export function AuthShell({
  alternateHref,
  alternateLabel,
  alternatePrompt,
  auxiliaryHref,
  auxiliaryLabel,
  description,
  eyebrow,
  fields,
  legalCopy,
  submitLabel,
  title
}: AuthShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-on-surface">
      <div className="pointer-events-none absolute inset-0 obsidian-glow opacity-80" />
      <div className="pointer-events-none absolute left-[-12rem] top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-12rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8">
          <Link href="/" className="text-2xl font-black tracking-[-0.04em] text-white">
            BLACKONIX AI
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="font-label text-[10px] uppercase tracking-[0.2em] text-neutral-500 transition hover:text-white">
              Home
            </Link>
            <a
              href="mailto:founders@blackonix.ai"
              className="font-label text-[10px] uppercase tracking-[0.2em] text-neutral-500 transition hover:text-white"
            >
              Support
            </a>
          </nav>
        </header>

        <section className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-6 pb-12 pt-6 sm:px-8">
          <div className="grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="hidden flex-col justify-between rounded-[2rem] bg-white/[0.025] p-10 ring-1 ring-white/8 backdrop-blur-xl lg:flex">
              <div className="space-y-6">
                <p className="font-label text-[10px] uppercase tracking-[0.3em] text-primary">
                  The Luminescent Architect
                </p>
                <h1 className="max-w-md text-display-md font-black text-white">
                  Private model operations without consumption anxiety.
                </h1>
                <p className="max-w-xl text-body-md text-on-surface-variant">
                  BLACKONIX keeps premium open-source infrastructure predictable. Your auth flow should feel
                  like the same product surface as the launch page, not an afterthought.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-surface-container/70 p-5 ring-1 ring-white/6">
                  <p className="font-label text-[10px] uppercase tracking-[0.24em] text-primary">Dedicated access</p>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                    Persistently available model capacity with account-level routing and deployment continuity.
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-surface-container/70 p-5 ring-1 ring-white/6">
                  <p className="font-label text-[10px] uppercase tracking-[0.24em] text-primary">Operator-grade</p>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                    Secure entry points, privacy-first defaults, and a controlled handoff into the hosted model flow.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[rgba(26,25,25,0.78)] p-8 shadow-panel ring-1 ring-white/8 backdrop-blur-glass sm:p-10">
              <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="space-y-8">
                <div className="space-y-3 text-center sm:text-left">
                  <p className="font-label text-[10px] font-bold uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
                  <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{title}</h2>
                  {description ? <p className="max-w-xl text-body-md text-on-surface-variant">{description}</p> : null}
                </div>

                <form className="space-y-5">
                  {fields.map((field) => (
                    <AuthInput key={field.label} field={field} />
                  ))}

                  {auxiliaryLabel && auxiliaryHref ? (
                    <div className="flex justify-end">
                      <Link
                        href={auxiliaryHref}
                        className="font-label text-[10px] uppercase tracking-[0.2em] text-primary transition hover:text-white"
                      >
                        {auxiliaryLabel}
                      </Link>
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    className="kinetic-gradient flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-on-primary transition duration-200 hover:brightness-110 active:scale-[0.99]"
                  >
                    {submitLabel}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                </form>

                {legalCopy ? (
                  <div className="text-center text-xs leading-6 text-on-surface-variant sm:text-left">{legalCopy}</div>
                ) : null}

                <div className="border-t border-white/8 pt-6 text-center sm:text-left">
                  <p className="text-sm text-on-surface-variant">
                    {alternatePrompt}{" "}
                    <Link href={alternateHref} className="font-semibold text-white transition hover:text-primary">
                      {alternateLabel}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:px-8 sm:text-left">
          <p className="font-label text-[9px] uppercase tracking-[0.18em] text-neutral-600">
            © 2024 BLACKONIX AI. THE LUMINESCENT ARCHITECT.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/" className="font-label text-[9px] uppercase tracking-[0.18em] text-neutral-600 transition hover:text-white">
              Privacy
            </Link>
            <Link href="/" className="font-label text-[9px] uppercase tracking-[0.18em] text-neutral-600 transition hover:text-white">
              Terms
            </Link>
            <a
              href="mailto:founders@blackonix.ai"
              className="font-label text-[9px] uppercase tracking-[0.18em] text-neutral-600 transition hover:text-white"
            >
              Security
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
