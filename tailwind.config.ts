import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0e0e0e",
        foreground: "#ffffff",
        primary: "#a3ff12",
        "primary-dim": "#8ee600",
        "primary-container": "#a3ff12",
        "primary-fixed": "#a3ff12",
        "primary-fixed-dim": "#8ee600",
        "on-primary": "#3d6500",
        "on-primary-container": "#375b00",
        "on-primary-fixed": "#2b4900",
        "on-primary-fixed-variant": "#3f6800",
        muted: "#adaaaa",
        surface: "#0e0e0e",
        "surface-dim": "#0e0e0e",
        "surface-container-lowest": "#000000",
        "surface-container-low": "#131313",
        "surface-container": "#1a1919",
        "surface-container-high": "#201f1f",
        "surface-container-highest": "#262626",
        "surface-raised": "#262626",
        "surface-bright": "#2c2c2c",
        "surface-variant": "#262626",
        "surface-tint": "#a3ff12",
        "on-surface": "#ffffff",
        "on-surface-variant": "#adaaaa",
        secondary: "#e5e2e1",
        "secondary-dim": "#d6d4d3",
        "secondary-container": "#474746",
        "secondary-fixed": "#e5e2e1",
        "secondary-fixed-dim": "#d6d4d3",
        "on-secondary": "#525151",
        "on-secondary-container": "#d2d0cf",
        "on-secondary-fixed": "#403f3f",
        "on-secondary-fixed-variant": "#5c5b5b",
        tertiary: "#f3ffca",
        "tertiary-dim": "#beee00",
        "tertiary-container": "#cafd00",
        "tertiary-fixed": "#cafd00",
        "tertiary-fixed-dim": "#beee00",
        "on-tertiary": "#516700",
        "on-tertiary-container": "#4a5e00",
        "on-tertiary-fixed": "#3a4a00",
        "on-tertiary-fixed-variant": "#526900",
        outline: "#777575",
        "outline-variant": "#494847",
        error: "#ff7351",
        "error-dim": "#d53d18",
        "error-container": "#b92902",
        "on-error": "#450900",
        "on-error-container": "#ffd2c8",
        "inverse-surface": "#fcf8f8",
        "inverse-primary": "#416a00",
        "inverse-on-surface": "#565554",
        "on-background": "#ffffff"
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem"
      },
      boxShadow: {
        glow: "0 0 50px rgba(163, 255, 18, 0.18)",
        ambient: "0 40px 80px rgba(163, 255, 18, 0.06)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.38)"
      },
      backgroundImage: {
        "kinetic-gradient":
          "linear-gradient(135deg, #a3ff12 0%, #8ee600 100%)",
        "obsidian-glow":
          "radial-gradient(circle at center, rgba(163, 255, 18, 0.08) 0%, transparent 70%)"
      },
      fontSize: {
        "display-lg": [
          "5rem",
          {
            lineHeight: "0.85",
            letterSpacing: "-0.04em",
            fontWeight: "800"
          }
        ],
        "display-md": [
          "3.5rem",
          {
            lineHeight: "0.9",
            letterSpacing: "-0.02em",
            fontWeight: "800"
          }
        ],
        "headline-xl": [
          "3rem",
          {
            lineHeight: "0.9",
            letterSpacing: "-0.02em",
            fontWeight: "800"
          }
        ],
        "body-md": [
          "0.875rem",
          {
            lineHeight: "1.6",
            fontWeight: "400"
          }
        ],
        "label-md": [
          "0.75rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.05em",
            fontWeight: "700"
          }
        ]
      },
      letterSpacing: {
        label: "0.05em",
        hero: "-0.04em",
        display: "-0.02em"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        headline: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        label: ["var(--font-space-grotesk)", "sans-serif"]
      },
      backdropBlur: {
        glass: "20px"
      }
    }
  }
};

export default config;
