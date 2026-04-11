import { AuthShell } from "../../components/auth/auth-shell";

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Access Gateway"
      title="Sign in to deploy"
      description="Authenticate to launch a hosted model endpoint and continue into the BLACKONIX deployment flow."
      fields={[
        {
          label: "Email Address",
          placeholder: "name@domain.com",
          type: "email"
        },
        {
          label: "Password",
          placeholder: "••••••••••••",
          type: "password"
        }
      ]}
      auxiliaryHref="/"
      auxiliaryLabel="Forgot Password"
      submitLabel="Sign In"
      alternatePrompt="Don't have an account?"
      alternateHref="/sign"
      alternateLabel="Sign Up"
    />
  );
}
