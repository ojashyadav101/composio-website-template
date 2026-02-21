import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Composio - Simple Pricing for Real-World Scale",
  description:
    "Choose a plan that fits your team's needs with access to SDKs, APIs and production-ready integrations.",
};

export default function PricingPage() {
  const bodyHtml = fs.readFileSync(
    path.join(process.cwd(), "html", "framer-pricing.html"),
    "utf-8"
  );

  return (
    <>
      <link rel="stylesheet" href="/framer-pricing.css" />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}
