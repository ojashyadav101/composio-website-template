import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Composio vs Pipedream",
  description:
    "Build agents that do more. Composio gives you SDKs to let your AI agents interact with apps like Gmail, Slack, Github, Linear, Notion, HubSpot, etc with a few lines of code.",
};

export default function ComposioVsPipedreamPage() {
  const bodyHtml = fs.readFileSync(
    path.join(process.cwd(), "html", "framer-composio-vs-pipedream.html"),
    "utf-8"
  );

  return (
    <>
      <link rel="stylesheet" href="/framer-composio-vs-pipedream.css" />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}
