import Link from "next/link";

import { AuthShell } from "../../components/auth/auth-shell";

export default function SignPage() {
  return (
    <AuthShell
      eyebrow="The Luminescent Architect"
      title="Initialize Access"
      fields={[
        {
          label: "Full Name",
          placeholder: "John Doe",
          type: "text"
        },
        {
          label: "Secure Email",
          placeholder: "architect@blackonix.ai",
          type: "email"
        },
        {
          label: "Access Key",
          placeholder: "••••••••••••",
          type: "password"
        }
      ]}
      submitLabel="Create Account"
      alternatePrompt="Already have an account?"
      alternateHref="/login"
      alternateLabel="Log In"
      legalCopy={
        <>
          By initializing, you agree to the{" "}
          <Link href="/" className="text-primary transition hover:text-white">
            Privacy Protocol
          </Link>{" "}
          and{" "}
          <Link href="/" className="text-primary transition hover:text-white">
            Terms of Service
          </Link>
          .
        </>
      }
    />
  );
}
