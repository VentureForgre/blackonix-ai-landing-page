import type { LandingPageContent } from "./types";

export const landingPageContent = {
  brand: "BLACKONIX AI",
  nav: [
    {
      label: "The Mission",
      href: "#mission",
      active: true
    },
    {
      label: "Models",
      href: "#compatibility"
    },
    {
      label: "Privacy",
      href: "#privacy"
    },
    {
      label: "Pricing",
      href: "#founding-offer"
    }
  ],
  hero: {
    id: "mission",
    badge: "Founding Phase Live",
    title: "A New Standard in",
    highlightedTitle: "Flat-Fee AI.",
    description:
      "Sustainable hosting for elite open-source models. Access Qwen 2.5 and DeepSeek V3 for a predictable monthly fee. No metered billing. No surprises.",
    ctas: [
      {
        label: "Fuel the Infrastructure",
        href: "#crowdfunding",
        variant: "primary"
      },
      {
        label: "View Infrastructure",
        href: "#infrastructure",
        variant: "secondary"
      }
    ],
    disclosureLabel: "Balanced Performance for All",
    disclosureBody:
      "To ensure consistent low-latency for every backer, we maintain transparent concurrency limits per tier. No hidden throttling - just fair access to high-compute clusters.",
    previewCards: [
      {
        label: "Managed Capacity",
        title: "Dedicated GPU Clusters",
        image: {
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsXxt7ejJnD6qermOGrUYDFpBCYLIjZ19LWcWV7FMdojeZ4LlB1Et0vHmtFeSoZSL6WZDG7uiUytp2ZqGIjJDajNKvNiG4vNIXq07TwVQp4ldsNlYorb1GVSbw0g0NR1yZm9XWqccRPziNyWhp2LklwRBp4ChhRg37epnsYFbFa2fiMngjPEuN0oR4sbfvLriztRmFs21d3PG-fTV9K8Ci80LhQqruk_2bvdgxunTBCIk7wHWiot_2NZUqzkCwKwUpUTcIj1dgY1s",
          alt: "Futuristic server room",
          kind: "remote"
        }
      },
      {
        icon: "terminal",
        title: "API Native",
        description:
          "Standard OpenAI-compatible endpoints for immediate integration into your production stack."
      }
    ]
  },
  campaign: {
    id: "crowdfunding",
    eyebrow: "Phase 1: Capital Formation",
    title: "Fueling the Infrastructure Phase",
    description:
      "We are running a Kickstarter-style campaign to purchase dedicated H100 clusters and finalize our primary facility. Secure elite speeds at founder rates by backing the build.",
    raised: "$13,000",
    target: "$50,000 USD",
    progressPercent: 26,
    progressLabel: "26% Complete",
    progressDetail: "Hardware Lock-in imminent",
    note:
      "All backer perks active for a limited time during pre-operation phase. 200 tokens/sec guaranteed for all tiers.",
    tiers: [
      {
        name: "Base Backer",
        price: "$23",
        ctaLabel: "Back Tier",
        bullets: [
          {
            icon: "timer",
            label: "1 Week Unlimited"
          },
          {
            icon: "bolt",
            label: "200 Tokens/Second"
          },
          {
            icon: "shield",
            label: "Privacy Guard"
          }
        ]
      },
      {
        name: "Qwen Advocate",
        price: "$30",
        ctaLabel: "Back Tier",
        bullets: [
          {
            icon: "calendar_month",
            label: "1 Month Unlimited"
          },
          {
            icon: "memory",
            label: "Qwen 3.5:122B"
          },
          {
            icon: "bolt",
            label: "200 Tokens/Second"
          }
        ]
      },
      {
        name: "Elite Backer",
        price: "$45",
        badge: "High Value",
        featured: true,
        ctaLabel: "Back Tier",
        bullets: [
          {
            icon: "event_available",
            label: "3 Months FREE Usage"
          },
          {
            icon: "memory",
            label: "Qwen 3.5:122B"
          },
          {
            icon: "bolt",
            label: "200 Tokens/Second"
          }
        ]
      },
      {
        name: "Model Sovereign",
        price: "$100",
        ctaLabel: "Back Tier",
        bullets: [
          {
            icon: "all_inclusive",
            label: "3 Months Unlimited"
          },
          {
            icon: "list",
            label: "Any Model in Stack"
          },
          {
            icon: "bolt",
            label: "200 Tokens/Second"
          }
        ]
      }
    ]
  },
  subscriptions: {
    id: "founding-offer",
    eyebrow: "Phase 2: Operational Scale",
    title: "Standard Subscriptions",
    description:
      "These operational plans activate automatically once the $50k funding goal is reached and the 14-day hardware setup is complete.",
    founderPerks: [
      {
        icon: "workspace_premium",
        title: "Legacy Status",
        description:
          "Lifetime lowest rate guarantee. Your monthly subscription price will never increase, even as infrastructure costs rise."
      },
      {
        icon: "bolt",
        title: "Priority Concurrency",
        description:
          "Higher simultaneous request limits than future standard tiers, ensuring your production workflows always have head-room."
      },
      {
        icon: "science",
        title: "Beta Access",
        description:
          "First to test next-gen models (like DeepSeek V4) before they are released to the general tier."
      },
      {
        icon: "how_to_vote",
        title: "Governance Rights",
        description:
          "Exclusive access to the Founder Discord role and direct voting rights on the next model to be deployed."
      }
    ],
    tiers: [
      {
        badge: "Core Operational",
        name: "Core Access",
        price: "$23",
        cadence: "/mo",
        ctaLabel: "Pre-Subscribe",
        bullets: [
          {
            icon: "check",
            label: "Any 100B Parameter Model"
          },
          {
            icon: "check",
            label: "DeepSeek V3 API Access"
          },
          {
            icon: "check",
            label: "5 Concurrent Requests"
          },
          {
            icon: "star",
            label: "All Founding 10K Perks"
          }
        ]
      },
      {
        badge: "Production Scaling",
        name: "High Concurrency",
        price: "$45",
        cadence: "/mo",
        featured: true,
        ctaLabel: "Pre-Subscribe",
        bullets: [
          {
            icon: "check",
            label: "Any 100B Parameter Model",
            highlight: true
          },
          {
            icon: "check",
            label: "20 Concurrent Requests"
          },
          {
            icon: "check",
            label: "High-Priority Response Queue"
          },
          {
            icon: "star",
            label: "All Founding 10K Perks"
          }
        ]
      }
    ],
    enterpriseNote:
      "Custom enterprise pricing available for more models, 400B+ parameter sizes, and even faster token speeds. Contact our infra team for bespoke clusters."
  },
  consolidation: {
    eyebrow: "Financial Consolidation",
    title: "The Only Subscription\nYou Need.",
    description:
      "Replace 100s of random AI subscriptions and your ChatGPT bill. One flat fee for everything. We are building the unified backend for the open-source era, compatible with Open WebUI, and various modern frontends so you can own your interface while we handle the compute.",
    pills: [
      {
        icon: "money_off",
        label: "No Metered Billing"
      },
      {
        icon: "hub",
        label: "Unified Backend"
      }
    ]
  },
  compatibility: {
    id: "compatibility",
    eyebrow: "Dev-First Integration",
    title: "Universal Compatibility\n& Privacy.",
    description:
      "Fully compatible with Chat Completions, Codex, and OpenAI-style APIs. Built to integrate with Claude Code, Zenflow, and your entire dev stack.",
    privacyPillars: [
      "1. Zero-Data Retention",
      "2. Hardware-Isolated Sessions",
      "3. No Training Logs",
      "4. Private GPU Clusters",
      "5. Sovereign Infrastructure"
    ],
    tools: [
      "Claude Code",
      "Zenflow",
      "Cursor",
      "VS Code",
      "JetBrains",
      "Obsidian",
      "Logseq",
      "Raycast",
      "Alfred",
      "Flow Launcher",
      "TypingMind",
      "SillyTavern",
      "LibreChat",
      "Open WebUI",
      "AnythingLLM",
      "Jan",
      "Ollama",
      "LangChain",
      "Flowise",
      "LlamaIndex",
      "AutoGPT"
    ]
  },
  proposition: {
    id: "infrastructure",
    eyebrow: "The Logic",
    title: "Predictable\nInfrastructure",
    description:
      "Public cloud providers tax your innovation with per-token billing. We are building a community-funded cluster dedicated to elite, flat-fee open-source hosting.",
    stats: [
      {
        value: "$0",
        label: "Variable Surcharge"
      },
      {
        value: "100%",
        label: "Open Source Stack"
      }
    ],
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9qFh8AETuAoiOdHZSZlDNVxXdjmct-xTs2EBoW8vuJvDLqx7kHmgWecPA9n20wmS7tP2XwrVHTYGN_4tOfmxPG-nKTXSPXIGmhwnMRFWcJeFWDXuqmn8tPE4AFPbCebWdjKArZSntWCQwqekijMIRQd84TLeuv86HoKupbu3UzNzGSsDazANXhLObrHR8u0LjmuCP5oUNbJseiUgz0A_R3RYzneuNCHogV6hU-hHqlvpqKHp0pn0UJkUCZzl-5YOBSCUF8ZNrpvw",
      alt: "Abstract 3D digital art",
      kind: "remote"
    }
  },
  privacy: {
    id: "privacy",
    title: "Your Data is Not\nthe Product.",
    description:
      "BLACKONIX operates on private infrastructure where data persistence is physically disabled. We do not use your inputs to improve models.",
    highlight: {
      icon: "verified_user",
      title: "Zero-Data Retention",
      description:
        "We don't log. We don't train. Your prompts remain in volatile memory and vanish upon completion."
    },
    bullets: [
      {
        icon: "check_circle",
        title: "No Training Logs",
        description:
          "We never ingest user interaction data for model refinement."
      },
      {
        icon: "lock",
        title: "Hardware-Isolated Sessions",
        description:
          "Each request is handled in a transient environment that is wiped immediately."
      }
    ],
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9u8I8Zt8BbMHoT4A_xyyEIy6oMF5ybA3KFQrPWxG16qeSSN6SNRUSKaFnWFH9WTlpkfmn_mn-RfxjPfHpuxehjM5m_ipOC2UT-dHnQdVDQLiCLJXrwLay2OrzzDEL11ktzSM8NPwBh9BnPTfqlLa50WYSVBleRgbYEKC5DaUEopsjUcCLGyDlhP7De_uZV8WAyjHJLJDRvgtiQJtMh4pjTW6e7E4kPgR0u3PWkpAmKZ_BzSHoCavIqtfwkDgjkUzSRQ18bLC2LcY",
      alt: "Secure computer chip macro",
      kind: "remote"
    }
  },
  founderSeat: {
    id: "founder-seat",
    eyebrow: "Launch Roadmap",
    title: "Current Capacity",
    securedSeats: "4,281",
    securedSeatsLabel: "Founding Backers Secured",
    limitLabel: "Founding Limit: 10,000 Seats",
    remainingLabel: "Remaining: 5,719 Seats",
    progressPercent: 42,
    cta: {
      label: "Secure My Founder Seat",
      href: "#crowdfunding",
      variant: "primary"
    }
  },
  footer: {
    links: [
      {
        label: "Mission",
        href: "#mission"
      },
      {
        label: "Models",
        href: "#compatibility"
      },
      {
        label: "Privacy",
        href: "#privacy"
      },
      {
        label: "Funding",
        href: "#crowdfunding"
      },
      {
        label: "Terms",
        href: "#footer"
      }
    ],
    copyright: "Copyright 2024 BLACKONIX AI. Open & Sustainable."
  },
  media: {
    sourceScreenshot: {
      src: "/blackonix/source-screen.png",
      alt: "Reference screenshot from the source bundle for pixel comparison",
      kind: "local"
    }
  }
} satisfies LandingPageContent;
