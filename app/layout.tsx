import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "BLACKONIX AI | Sustainable Flat-Fee Open-Source Hosting",
  description:
    "BLACKONIX AI is a flat-fee, privacy-forward hosting platform for elite open-source models with predictable pricing and dedicated infrastructure.",
  applicationName: "BLACKONIX AI",
  metadataBase: new URL("https://blackonix.ai"),
  keywords: [
    "BLACKONIX AI",
    "flat-fee AI",
    "open-source AI hosting",
    "private AI inference",
    "dedicated GPU clusters",
    "crowdfunding"
  ],
  authors: [{ name: "BLACKONIX AI" }],
  creator: "BLACKONIX AI",
  publisher: "BLACKONIX AI",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "BLACKONIX AI | Sustainable Flat-Fee Open-Source Hosting",
    description:
      "Predictable access to elite open-source AI models on dedicated infrastructure.",
    siteName: "BLACKONIX AI",
    type: "website",
    url: "https://blackonix.ai",
    images: [
      {
        url: "/blackonix/source-screen.png",
        width: 1536,
        height: 819,
        alt: "BLACKONIX AI landing page preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BLACKONIX AI | Sustainable Flat-Fee Open-Source Hosting",
    description:
      "Predictable access to elite open-source AI models on dedicated infrastructure.",
    images: ["/blackonix/source-screen.png"]
  }
};

export const viewport: Viewport = {
  themeColor: "#0e0e0e"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} bg-background font-sans text-foreground antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
