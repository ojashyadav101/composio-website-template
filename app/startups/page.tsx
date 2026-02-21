import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Composio - For Startups",
  description:
    "Ship integrations faster than your standup. We handle the pesky OAuth part, so you can ship features that matter.",
};

export default function StartupsPage() {
  const bodyHtml = fs.readFileSync(
    path.join(process.cwd(), "html", "framer-startups.html"),
    "utf-8"
  );

  return (
    <>
      <link rel="stylesheet" href="/framer-startups.css" />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}
