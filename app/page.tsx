import { readFile } from "node:fs/promises";
import path from "node:path";

function extractBodyMarkup(html: string): string {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch || !bodyMatch[1]) {
    throw new Error("Unable to extract <body> markup from stitch_blackonix_ai_crowdfunding/code.html");
  }
  return bodyMatch[1];
}

export default async function Home() {
  const sourcePath = path.join(process.cwd(), "stitch_blackonix_ai_crowdfunding", "code.html");
  const sourceHtml = await readFile(sourcePath, "utf8");
  const bodyMarkup = extractBodyMarkup(sourceHtml);

  return <div dangerouslySetInnerHTML={{ __html: bodyMarkup }} />;
}
