import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sourcePath = new URL("../stitch_blackonix_ai_crowdfunding/code.html", import.meta.url);
const loginPagePath = new URL("../app/login/page.tsx", import.meta.url);

async function loadHtml() {
  return readFile(sourcePath, "utf8");
}

async function loadLoginPage() {
  return readFile(loginPagePath, "utf8");
}

test("model cards show the updated six-model lineup without adding boxes", async () => {
  const html = await loadHtml();

  const expectedModels = [
    "Gemma 4 31B",
    "Kimi K2",
    "MiniMax M1",
    "Llama 3.3 70B",
    "Qwen2.5 72B",
    "DeepSeek R1 Distill Llama 70B"
  ];

  for (const modelName of expectedModels) {
    assert.match(
      html,
      new RegExp(`<h4 class="text-2xl font-bold tracking-tight">${modelName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</h4>`),
      `Expected stitched HTML to contain a model card for ${modelName}`
    );
  }

  const modelCardCount = (html.match(/<!-- Model \d -->/g) ?? []).length;
  assert.equal(modelCardCount, 6, "Expected the existing six model boxes to remain six");

  for (const oldModel of ["Qwen 2.5", "DeepSeek V3", "Llama 3.1", "Mixtral 8x22B", "Command R+", "Falcon 180B"]) {
    assert.doesNotMatch(
      html,
      new RegExp(`<h4 class="text-2xl font-bold tracking-tight">${oldModel.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</h4>`),
      `Expected legacy model card ${oldModel} to be removed from the stitched cards`
    );
  }
});

test("each model card deploy CTA links to the login page", async () => {
  const html = await loadHtml();
  const deployLinks = html.match(/<a[^>]*href="\/login"[^>]*>[\s\S]*?<span>Deploy Now<\/span>[\s\S]*?<\/a>/g) ?? [];

  assert.equal(deployLinks.length, 6, "Expected six Deploy Now links to point at /login");
});

test("login page route exists for model deployment redirects", async () => {
  const loginPage = await loadLoginPage();

  assert.match(loginPage, /export default function LoginPage/);
  assert.match(loginPage, /Sign in to deploy/i);
});
