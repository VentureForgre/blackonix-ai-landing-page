import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0e] px-6 py-32 text-white">
      <div className="mx-auto max-w-2xl rounded-[1.5rem] border border-white/10 bg-[#1a1919] p-8 shadow-[0_0_60px_rgba(0,0,0,0.35)]">
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-primary">
          Access gateway
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight">Sign in to deploy</h1>
        <p className="mt-4 text-base font-light leading-7 text-[#adaaaa]">
          Authenticate to launch a hosted model endpoint and continue into the BLACKONIX deployment flow.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="kinetic-gradient inline-flex min-h-11 items-center justify-center rounded px-6 py-4 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-[#3d6500]"
          >
            Return Home
          </Link>
          <a
            href="mailto:founders@blackonix.ai"
            className="inline-flex min-h-11 items-center justify-center rounded border border-white/10 bg-[#262626] px-6 py-4 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-white"
          >
            Request Access
          </a>
        </div>
      </div>
    </main>
  );
}
