import fs from "node:fs";
import path from "node:path";
import { renderMarkdown } from "./markdown.mjs";

const root = path.resolve(process.cwd());
const inferlyRoot = path.resolve(root, "..", "inferly");
const templatesDir = path.resolve(root, "templates");

const privacySource = path.resolve(inferlyRoot, "PRIVACY_POLICY.md");
const termsSource = path.resolve(inferlyRoot, "TERMS.md");
const privacyTemplate = path.resolve(templatesDir, "privacy.template.html");
const termsTemplate = path.resolve(templatesDir, "terms.template.html");
const privacyOut = path.resolve(root, "privacy.html");
const termsOut = path.resolve(root, "terms.html");

function readFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing file: ${filePath}`);
  }
  return fs.readFileSync(filePath, "utf8");
}

function injectTemplate(templateContent, legalHtml) {
  return templateContent.replace("<!-- LEGAL_CONTENT -->", legalHtml);
}

const privacyMarkdown = readFile(privacySource);
const termsMarkdown = readFile(termsSource);
const privacyHtml = renderMarkdown(privacyMarkdown);
const termsHtml = renderMarkdown(termsMarkdown);

const privacyTemplateContent = readFile(privacyTemplate);
const termsTemplateContent = readFile(termsTemplate);

fs.writeFileSync(privacyOut, injectTemplate(privacyTemplateContent, privacyHtml), "utf8");
fs.writeFileSync(termsOut, injectTemplate(termsTemplateContent, termsHtml), "utf8");

console.log("Built legal pages: privacy.html, terms.html");
