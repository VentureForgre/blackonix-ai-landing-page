import {
  siAlfred,
  siClaude,
  siCursor,
  siJetbrains,
  siLangchain,
  siLogseq,
  siObsidian,
  siOllama,
  siRaycast
} from "simple-icons";

import { Card } from "../ui/card";
import { MaterialSymbol } from "../ui/material-symbol";
import type { LandingPageContent } from "../../lib/types";

type CompatibilitySectionProps = {
  compatibility: LandingPageContent["compatibility"];
};

const TOOL_ROW_SIZE = 7;

const simpleIcons = {
  alfred: siAlfred,
  claude: siClaude,
  cursor: siCursor,
  jetbrains: siJetbrains,
  langchain: siLangchain,
  logseq: siLogseq,
  obsidian: siObsidian,
  ollama: siOllama,
  raycast: siRaycast
} as const;

type FallbackIcon = {
  accent: string;
  label?: string;
  symbol?: string;
};

const fallbackIcons = {
  "anythingllm": {
    accent: "#2ec4b6",
    label: "A"
  },
  autogpt: {
    accent: "#10b981",
    label: "AG"
  },
  flowise: {
    accent: "#38bdf8",
    label: "F"
  },
  "flow-launcher": {
    accent: "#06b6d4",
    label: "FL"
  },
  jan: {
    accent: "#f97316",
    label: "J"
  },
  librechat: {
    accent: "#6366f1",
    label: "LC"
  },
  llamaindex: {
    accent: "#ef4444",
    label: "LI"
  },
  "open-webui": {
    accent: "#f59e0b",
    label: "OW"
  },
  sillytavern: {
    accent: "#a3ff12",
    symbol: "theater_comedy"
  },
  typingmind: {
    accent: "#7c3aed",
    label: "T"
  },
  vscode: {
    accent: "#007acc",
    label: "VS"
  },
  zenflow: {
    accent: "#d946ef",
    label: "Z"
  }
} satisfies Record<string, FallbackIcon>;

function chunkTools(tools: CompatibilitySectionProps["compatibility"]["tools"]) {
  return Array.from({ length: Math.ceil(tools.length / TOOL_ROW_SIZE) }, (_, rowIndex) =>
    tools.slice(rowIndex * TOOL_ROW_SIZE, rowIndex * TOOL_ROW_SIZE + TOOL_ROW_SIZE)
  );
}

function CompatibilityToolIcon({
  icon,
  label
}: CompatibilitySectionProps["compatibility"]["tools"][number]) {
  const simpleIcon = simpleIcons[icon as keyof typeof simpleIcons];

  if (simpleIcon) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="currentColor"
        style={{ color: `#${simpleIcon.hex}` }}
      >
        <path d={simpleIcon.path} />
      </svg>
    );
  }

  const fallback = fallbackIcons[icon as keyof typeof fallbackIcons];

  if (fallback && "symbol" in fallback && fallback.symbol) {
    return <MaterialSymbol icon={fallback.symbol} className="text-3xl" />;
  }

  const fallbackLabel = fallback && "label" in fallback ? fallback.label : undefined;

  return (
    <span
      aria-hidden="true"
      className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-white"
      style={{ color: fallback?.accent ?? "#ffffff" }}
    >
      {fallbackLabel ?? label.slice(0, 2)}
    </span>
  );
}

export function CompatibilitySection({
  compatibility
}: CompatibilitySectionProps) {
  const toolRows = chunkTools(compatibility.tools);

  return (
    <section
      id={compatibility.id}
      aria-labelledby="compatibility-heading"
      className="relative overflow-hidden px-6 py-28 scroll-mt-32 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-10">
            <div>
              <p className="font-label mb-6 text-xs font-bold uppercase tracking-[0.4em] text-primary">
                {compatibility.eyebrow}
              </p>
              <h2
                id="compatibility-heading"
                className="whitespace-pre-line text-balance text-4xl font-black leading-[0.9] tracking-hero text-on-surface sm:text-5xl md:text-6xl"
              >
                {compatibility.title}
              </h2>
            </div>

            <p className="max-w-xl text-balance text-lg font-light leading-8 text-on-surface-variant md:text-xl">
              {compatibility.description}
            </p>

            <div className="grid grid-cols-1 gap-6 pt-2 sm:max-w-sm">
              <div className="space-y-4">
                <h3 className="border-b border-primary/20 pb-2 font-label text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  5 Pillars of Privacy
                </h3>
                {compatibility.privacyPillars.map((pillar) => (
                  <div key={pillar.label} className="flex items-center gap-3">
                    <MaterialSymbol icon={pillar.icon} className="text-sm text-primary" />
                    <p className="text-sm font-bold text-on-surface">{pillar.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="relative overflow-hidden rounded-[1.25rem] border-white/5 bg-surface-container-high/50 p-6 backdrop-blur-sm md:p-10">
            <div className="space-y-5 opacity-70">
              {toolRows.map((row, rowIndex) => (
                <div
                  key={`tool-row-${rowIndex}`}
                  className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-7 lg:gap-5"
                >
                  {row.map((tool) => (
                    <div
                      key={tool.label}
                      className="flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.035] px-3 py-4 text-center transition hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.05] hover:opacity-100"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                        <CompatibilityToolIcon {...tool} />
                      </div>
                      <span className="text-[0.55rem] font-bold uppercase leading-tight tracking-[0.2em] text-on-surface">
                        {tool.label}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container-high/80 to-transparent" />
          </Card>
        </div>
      </div>
    </section>
  );
}
