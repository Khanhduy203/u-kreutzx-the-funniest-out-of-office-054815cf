const fs = require("fs");
const path = require("path");

const LINE = "I'm out of office, hiding from my inbox like it's my ex at a wedding — it knows I'm here, I know it's here, nobody's talking.";

if (!LINE || LINE.trim().length === 0) {
  throw new Error("Entry line is empty.");
}
if (LINE !== LINE.trim()) {
  throw new Error("Entry line must not have leading or trailing whitespace.");
}
if (LINE.length > 140) {
  throw new Error("Entry line is " + LINE.length + " characters, over the 140-character limit.");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Entry line must be a single line with no newline characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : path.join(__dirname, "output");

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), LINE, "utf8");
