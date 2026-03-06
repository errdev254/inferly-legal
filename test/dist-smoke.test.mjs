import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("privacy and terms are built", () => {
  assert.ok(fs.existsSync("dist/privacy.html"));
  assert.ok(fs.existsSync("dist/terms.html"));
});
