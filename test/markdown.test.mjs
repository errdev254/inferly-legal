import test from "node:test";
import assert from "node:assert/strict";
import { renderMarkdown } from "../tools/markdown.mjs";

test("renders headings and lists", () => {
  const html = renderMarkdown("# Title\n\n- A\n- B\n");
  assert.match(html, /<h1[^>]*>Title<\/h1>/);
  assert.match(html, /<ul>/);
});
