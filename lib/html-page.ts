import { readFile } from "node:fs/promises";
import path from "node:path";

export function extractBodyMarkup(html: string): string {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch || !bodyMatch[1]) {
    throw new Error("Unable to extract <body> markup from HTML source");
  }

  return bodyMatch[1];
}

export function extractBodyClassName(html: string): string {
  const bodyClassMatch = html.match(/<body[^>]*class="([^"]*)"/i);
  return bodyClassMatch?.[1] ?? "";
}

export async function loadHtmlPageBody(sourceFolder: string) {
  const sourcePath = path.join(process.cwd(), sourceFolder, "code.html");
  const sourceHtml = await readFile(sourcePath, "utf8");

  return {
    bodyClassName: extractBodyClassName(sourceHtml),
    bodyMarkup: extractBodyMarkup(sourceHtml)
  };
}
