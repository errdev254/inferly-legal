import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const privacy = path.resolve(root, "PRIVACY_POLICY.md");
const terms = path.resolve(root, "TERMS.md");

if (!fs.existsSync(privacy) || !fs.existsSync(terms)) {
  throw new Error("Missing inferly legal Markdown sources.");
}

console.log("OK");
