import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Lucy vs Pipedream",
  description:
    "Build agents that do more. Lucy gives you SDKs to let your AI agents interact with apps like Gmail, Slack, Github, Linear, Notion, HubSpot, etc with a few lines of code.",
};

export default function LucyVsPipedreamPage() {
  const bodyHtml = fs.readFileSync(
    path.join(process.cwd(), "html", "framer-lucy-vs-pipedream.html"),
    "utf-8"
  );

  return (
    <>
      <link rel="stylesheet" href="/framer-lucy-vs-pipedream.css" />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}
