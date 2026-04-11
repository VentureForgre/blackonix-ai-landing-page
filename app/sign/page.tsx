import { loadHtmlPageBody } from "../../lib/html-page";

export default async function SignPage() {
  const { bodyClassName, bodyMarkup } = await loadHtmlPageBody("stitch_blackonix_ai_crowdfunding_sign");

  return <div className={bodyClassName} dangerouslySetInnerHTML={{ __html: bodyMarkup }} />;
}
