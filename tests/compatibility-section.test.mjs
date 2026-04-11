import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import { landingPageContent } from "../lib/content.ts";

const compatibilitySectionPath = new URL(
  "../components/landing/compatibility-section.tsx",
  import.meta.url
);

async function loadCompatibilitySection() {
  return readFile(compatibilitySectionPath, "utf8");
}

test("compatibility tools define icon metadata and fit a 3-row grid", () => {
  const tools = landingPageContent.compatibility.tools;

  assert.equal(tools.length, 21, "Expected 21 compatibility tools so the grid can render 3 rows of 7");

  for (const tool of tools) {
    assert.equal(typeof tool, "object", "Expected each compatibility tool entry to be an object");
    assert.equal(typeof tool.label, "string", "Expected each compatibility tool to include a label");
    assert.equal(typeof tool.icon, "string", `Expected ${tool.label} to include an icon identifier`);
  }
});

test("compatibility section renders the tool grid as explicit rows", async () => {
  const source = await loadCompatibilitySection();

  assert.match(
    source,
    /toolRows/,
    "Expected the compatibility section to derive explicit tool rows instead of rendering a leftover final tile"
  );
});
