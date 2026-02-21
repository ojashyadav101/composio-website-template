import fs from "fs";
import path from "path";

// Server Component — reads the original Framer-exported body HTML from disk
// and injects it directly. This gives 1:1 visual and functional fidelity
// with the original lucy.com.
export default function Home() {
  const bodyHtml = fs.readFileSync(
    path.join(process.cwd(), "html", "framer-body.html"),
    "utf-8"
  );

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
