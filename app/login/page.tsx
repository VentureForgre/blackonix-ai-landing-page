import { loadHtmlPageBody } from "../../lib/html-page";

export default async function LoginPage() {
  const { bodyClassName, bodyMarkup } = await loadHtmlPageBody("stitch_blackonix_ai_crowdfunding_login");

  return <div className={bodyClassName} dangerouslySetInnerHTML={{ __html: bodyMarkup }} />;
}
