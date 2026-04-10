import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sourcePath = new URL("../stitch_blackonix_ai_crowdfunding/code.html", import.meta.url);

async function loadHtml() {
  return readFile(sourcePath, "utf8");
}

test("campaign and subscription CTAs expose tier ids for payment wiring", async () => {
  const html = await loadHtml();

  const expectedTierIds = [
    "base-backer",
    "qwen-advocate",
    "elite-backer",
    "model-sovereign",
    "core-access",
    "high-concurrency"
  ];

  for (const tierId of expectedTierIds) {
    assert.match(
      html,
      new RegExp(`data-tier-id="${tierId}"`),
      `Expected stitched HTML to expose ${tierId} on an existing CTA`
    );
  }
});
