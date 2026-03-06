import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const distPrivacy = path.resolve(root, "dist", "privacy.html");
const distTerms = path.resolve(root, "dist", "terms.html");

function assertIncludes(filePath, text) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing dist file: ${filePath}`);
  }
  const content = fs.readFileSync(filePath, "utf8");
  if (!content.includes(text)) {
    throw new Error(`Expected "${text}" in ${path.basename(filePath)}`);
  }
}

assertIncludes(distPrivacy, "Inferly Privacy Policy");
assertIncludes(distPrivacy, "Last updated:");
assertIncludes(distTerms, "Inferly Terms of Service");
assertIncludes(distTerms, "Last updated:");

console.log("Dist verification passed.");
