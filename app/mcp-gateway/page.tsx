import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Lucy - MCP Gateway",
  description:
    "Access over 500 apps via a single MCP server while managing and monitoring all their connections.",
};

export default function McpGatewayPage() {
  const bodyHtml = fs.readFileSync(
    path.join(process.cwd(), "html", "framer-mcp-gateway.html"),
    "utf-8"
  );

  return (
    <>
      <link rel="stylesheet" href="/framer-mcp-gateway.css" />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}
