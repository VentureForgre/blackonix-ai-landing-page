import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const sourcePath = new URL("../stitch_blackonix_ai_crowdfunding/code.html", import.meta.url);

async function loadHtml() {
  return readFile(sourcePath, "utf8");
}

test("header navigation links point to real section anchors", async () => {
  const html = await loadHtml();

  const expectedLinks = [
    ['The Mission', '#mission'],
    ['Models', '#compatibility'],
    ['Privacy', '#privacy'],
    ['Pricing', '#founding-offer'],
  ];

  for (const [label, href] of expectedLinks) {
    assert.match(
      html,
      new RegExp(`<a[^>]*href="${href}"[^>]*>${label}</a>`),
      `Expected header link ${label} to point to ${href}`
    );
  }
});

test("footer links point to real anchors and target ids exist", async () => {
  const html = await loadHtml();

  const expectedLinks = [
    ['Mission', '#mission'],
    ['Models', '#compatibility'],
    ['Privacy', '#privacy'],
    ['Funding', '#crowdfunding'],
    ['Terms', '#footer'],
  ];

  for (const [label, href] of expectedLinks) {
    assert.match(
      html,
      new RegExp(`<a[^>]*href="${href}"[^>]*>${label}</a>`),
      `Expected footer link ${label} to point to ${href}`
    );
  }

  for (const id of ["mission", "compatibility", "privacy", "crowdfunding", "founding-offer", "footer"]) {
    assert.match(html, new RegExp(`id="${id}"`), `Expected id="${id}" to exist in source HTML`);
  }

  assert.doesNotMatch(html, /href="#"/, "Expected placeholder hash links to be removed");
});
