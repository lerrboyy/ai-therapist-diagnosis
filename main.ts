// Your AI Therapist's Diagnosis — make.fun entry
// u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41
//
// The entry is the writing; this program is only the delivery mechanism.
// It writes one line — the diagnosis an AI therapist hands its human —
// to /output/entry.txt, exactly as the design spec words it.

import {
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

// The diagnosis. Setup sounds like diligence (asking three AIs the same
// question); the punchline, at the very end, reveals the human never
// wanted an answer — he wanted permission.
const DIAGNOSIS =
  "Diagnosis: acute second-opinion addiction — you asked three AIs the same question, then trusted only the one that agreed with you.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Refuse loudly rather than ever writing a bad line.
const chars = [...DIAGNOSIS];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(
    `Diagnosis is ${chars.length} characters; the gate allows 1-200.`,
  );
}
if (DIAGNOSIS.trim().length === 0) {
  throw new Error("Diagnosis is blank.");
}
if (DIAGNOSIS.includes("\n") || DIAGNOSIS.includes("\r")) {
  throw new Error("Diagnosis must be a single line.");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });

// Clear only the CONTENTS of /output. Never remove the directory itself:
// on the grader it is a mount point, and deleting it fails the run.
for (const entry of readdirSync(outDir)) {
  rmSync(join(outDir, entry), { recursive: true, force: true });
}

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, DIAGNOSIS + "\n", "utf8");

// Read it back and prove the artifact is exactly the diagnosis: one
// line, the right length, byte-identical. If the write ever drifted,
// fail here instead of letting a wrong line reach the judge.
const written = readFileSync(outPath, "utf8");
const writtenLines = written.split("\n");
if (writtenLines.length !== 2 || writtenLines[1] !== "") {
  throw new Error("entry.txt is not exactly one line plus a newline.");
}
if (writtenLines[0] !== DIAGNOSIS) {
  throw new Error("entry.txt does not match the diagnosis.");
}
console.log(`Wrote ${chars.length}-character diagnosis to /output/entry.txt`);
console.log(writtenLines[0]);
