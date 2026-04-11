import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const loginPagePath = new URL("../app/login/page.tsx", import.meta.url);
const signPagePath = new URL("../app/sign/page.tsx", import.meta.url);
const authShellPath = new URL("../components/auth/auth-shell.tsx", import.meta.url);

async function loadPage(path) {
  return readFile(path, "utf8");
}

test("login page includes the richer sign-in form and cross-links to sign up", async () => {
  const loginPage = await loadPage(loginPagePath);
  const authShell = await loadPage(authShellPath);

  assert.match(authShell, /BLACKONIX AI/);
  assert.match(authShell, /The Luminescent Architect/i);
  assert.match(loginPage, /Forgot Password/i);
  assert.match(loginPage, /Sign In/i);
  assert.match(loginPage, /alternateHref="\/sign"/);
});

test("sign page route exists and links back to login", async () => {
  const signPage = await loadPage(signPagePath);

  assert.match(signPage, /Initialize Access/i);
  assert.match(signPage, /Create Account/i);
  assert.match(signPage, /alternateHref="\/login"/);
  assert.match(signPage, /Privacy Protocol/i);
});
