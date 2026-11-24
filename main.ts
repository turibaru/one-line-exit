// The One-Line Exit — entrypoint.
// Reads entry.txt from the same directory at runtime (never hard-codes the
// line), validates it, and writes the exact bytes to
// $MAKEFUN_OUTPUT_DIR/entry.txt.
// GUARD: swapping entry.txt takes effect immediately — no line is embedded
// as a constant anywhere in this file, so a new entry.txt is picked up on
// the next run without touching this code.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const entryPath = join(here, "entry.txt");

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("error: MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

let text;
try {
  text = readFileSync(entryPath, "utf8");
} catch (err) {
  console.error(`error: cannot read entry.txt: ${err.message}`);
  process.exit(1);
}

if (text.length < 1 || text.length > 140) {
  console.error(`error: entry must be 1-140 characters, got ${text.length}`);
  process.exit(1);
}
if (text.trim().length === 0) {
  console.error("error: entry must not be only whitespace");
  process.exit(1);
}
if (text.includes("\n") || text.includes("\r")) {
  console.error("error: entry must be a single line");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
