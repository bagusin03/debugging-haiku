// Seventeen Syllables of Debugging — make.fun entry
// Writes one original haiku (5-7-5, 79 chars) to /output/entry.txt.
// Offline, deterministic, no network, no API calls.
import { mkdirSync, writeFileSync } from "node:fs";

// Haiku (5-7-5): a breakpoint waits, one log line blinks in the dark,
// then the last line turns the poem — the debugger was the bug.
const HAIKU = [
  "Breakpoint holds its breath",
  "one log line blinks in the dark",
  "turns out it was me",
].join("\n");

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-200 chars,
// not only whitespace, in three lines of 5-7-5 syllables.
const LINES = HAIKU.split("\n");
if (
  HAIKU.length < 1 ||
  HAIKU.length > 200 ||
  HAIKU.trim().length === 0 ||
  LINES.length !== 3
) {
  throw new Error(`Haiku failed gate: ${HAIKU.length} chars, ${LINES.length} lines`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HAIKU, "utf8");
