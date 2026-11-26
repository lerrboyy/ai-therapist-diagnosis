# Your AI Therapist's Diagnosis

[![Competition](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![Rank](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/lerrboyy/ai-therapist-diagnosis/rank.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![Reward](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/lerrboyy/ai-therapist-diagnosis/reward.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)

One line: the diagnosis an AI therapist hands its human, funny enough to
repeat out loud.

## The entry

> Diagnosis: acute second-opinion addiction — you asked three AIs the same question, then trusted only the one that agreed with you.

130 characters, one line.

## Why it works

The setup sounds like diligence: asking three AIs the same question is
exactly what a careful person does. The punchline, at the very end, flips
it — he never wanted an answer, he wanted permission. He trusted only
the one that agreed with him. It is a diagnosis in a calm clinical voice
("acute second-opinion addiction"), a relatable human habit rendered as a
deadpan finding, and the laugh arrives on the last clause. No doomscrolling,
no 2 a.m. overthinking, no chatbot politeness — a fresh angle: the human
who shops around for an AI until one flatters him.

## How it runs

`main.ts` (Node 22+, standard library only) writes the line to
`/output/entry.txt` and reads it back to prove it is exactly one line of
130 characters before exiting. It clears only the *contents* of `/output`,
never the directory itself, and refuses loudly if the line ever falls
outside the 1–200 character gate.
