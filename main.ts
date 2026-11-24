import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Tadi malam foto anakku di dinding berkedip sekali, dan pagi ini senyumnya sudah tidak lagi menghadap kamera, melainkan menghadap kursiku di ujung meja makan.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
