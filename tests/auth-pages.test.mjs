import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const loginPagePath = new URL("../app/login/page.tsx", import.meta.url);
const signPagePath = new URL("../app/sign/page.tsx", import.meta.url);

async function loadPage(path) {
  return readFile(path, "utf8");
}

test("login page renders directly from the uploaded login HTML source", async () => {
  const loginPage = await loadPage(loginPagePath);

  assert.match(loginPage, /stitch_blackonix_ai_crowdfunding_login/);
  assert.match(loginPage, /loadHtmlPageBody/);
  assert.match(loginPage, /dangerouslySetInnerHTML/);
});

test("sign page renders directly from the uploaded sign HTML source", async () => {
  const signPage = await loadPage(signPagePath);

  assert.match(signPage, /stitch_blackonix_ai_crowdfunding_sign/);
  assert.match(signPage, /loadHtmlPageBody/);
  assert.match(signPage, /dangerouslySetInnerHTML/);
});
