import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Lucy - Agent Auth",
  description:
    "We take care of app authentication for your agents, freeing you up to focus on building great AI products.",
};

export default function AgentAuthPage() {
  const bodyHtml = fs.readFileSync(
    path.join(process.cwd(), "html", "framer-agentauth.html"),
    "utf-8"
  );

  return (
    <>
      <link rel="stylesheet" href="/framer-agentauth.css" />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}
