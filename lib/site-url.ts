import { getOptionalEnv } from "./env";

export function getBaseUrl(headers?: Headers): string {
  const configuredUrl = getOptionalEnv("NEXT_PUBLIC_SITE_URL");
  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "");
  }

  const forwardedHost = headers?.get("x-forwarded-host");
  const host = forwardedHost ?? headers?.get("host");

  if (host) {
    const protocol = headers?.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
    return `${protocol}://${host}`;
  }

  const vercelUrl = getOptionalEnv("VERCEL_URL");
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return "http://localhost:3000";
}
