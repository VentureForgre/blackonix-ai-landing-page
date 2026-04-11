import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const landingPageHtmlPath = new URL("../stitch_blackonix_ai_crowdfunding/code.html", import.meta.url);
const loginPagePath = new URL("../app/login/page.tsx", import.meta.url);
const signPagePath = new URL("../app/sign/page.tsx", import.meta.url);
const loginHtmlPath = new URL("../stitch_blackonix_ai_crowdfunding_login/code.html", import.meta.url);
const signHtmlPath = new URL("../stitch_blackonix_ai_crowdfunding_sign/code.html", import.meta.url);

async function loadPage(path) {
  return readFile(path, "utf8");
}

test("landing page auth CTAs point to the Next auth routes", async () => {
  const landingHtml = await loadPage(landingPageHtmlPath);

  assert.match(
    landingHtml,
    /<a[^>]*href="\/login"[^>]*>\s*Login\s*<\/a>/,
    "Expected landing Login CTA to link to /login"
  );
  assert.match(
    landingHtml,
    /<a[^>]*href="\/sign"[^>]*>\s*Sign Up\s*<\/a>/,
    "Expected landing Sign Up CTA to link to /sign"
  );
});

test("login page renders directly from the uploaded login HTML source", async () => {
  const loginPage = await loadPage(loginPagePath);

  assert.match(loginPage, /stitch_blackonix_ai_crowdfunding_login/);
  assert.match(loginPage, /loadHtmlPageBody/);
  assert.match(loginPage, /dangerouslySetInnerHTML/);
});

test("login page sign-up prompt points to the sign-up route", async () => {
  const loginHtml = await loadPage(loginHtmlPath);

  assert.match(
    loginHtml,
    /<a[^>]*href="\/sign"[^>]*>\s*Sign Up\s*<\/a>/,
    "Expected login page Sign Up prompt to link to /sign"
  );
});

test("login page removes the luminescent architect tagline", async () => {
  const loginHtml = await loadPage(loginHtmlPath);

  assert.doesNotMatch(
    loginHtml,
    /The Luminescent Architect/,
    "Expected login page tagline to be removed"
  );
});

test("sign page renders directly from the uploaded sign HTML source", async () => {
  const signPage = await loadPage(signPagePath);

  assert.match(signPage, /stitch_blackonix_ai_crowdfunding_sign/);
  assert.match(signPage, /loadHtmlPageBody/);
  assert.match(signPage, /dangerouslySetInnerHTML/);
});

test("sign page login prompt points to the login route", async () => {
  const signHtml = await loadPage(signHtmlPath);

  assert.match(
    signHtml,
    /<a[^>]*href="\/login"[^>]*>\s*Log In\s*<\/a>/,
    "Expected sign page Log In prompt to link to /login"
  );
});

test("sign page uses the updated sign-up form copy", async () => {
  const signHtml = await loadPage(signHtmlPath);

  assert.doesNotMatch(
    signHtml,
    /The Luminescent Architect/,
    "Expected sign page tagline to be removed"
  );
  assert.match(signHtml, />Sign Up<\/h1>/, "Expected sign page heading to be Sign Up");
  assert.doesNotMatch(signHtml, /Full Name/, "Expected full name field to be removed");
  assert.match(signHtml, />Email<\/label>/, "Expected email label to be Email");
  assert.doesNotMatch(signHtml, /Secure Email/, "Expected secure email label to be removed");
  assert.match(signHtml, />Password<\/label>/, "Expected password label to be Password");
  assert.doesNotMatch(signHtml, /Access Key/, "Expected access key label to be removed");
  assert.match(
    signHtml,
    />Confirm Password<\/label>/,
    "Expected confirm password field to be present"
  );
});
