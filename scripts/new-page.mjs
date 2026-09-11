#!/usr/bin/env node
// npm run new
// Creates a page file in the right section folder with the next number and full front matter.
import { readdirSync, writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { createInterface } from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const sections = JSON.parse(readFileSync("content/sections.json", "utf8"));

// Small line reader that works for both a terminal and piped input.
const lines = [];
const waiters = [];
const rlRaw = createInterface({ input, terminal: input.isTTY });
rlRaw.on("line", (l) => { if (waiters.length) waiters.shift()(l); else lines.push(l); });
rlRaw.on("close", () => { while (waiters.length) waiters.shift()(""); });
const rl = {
  question: (q) =>
    new Promise((res) => {
      output.write(q);
      if (lines.length) res(lines.shift());
      else waiters.push(res);
    }),
  close: () => rlRaw.close(),
};

const list = Object.entries(sections);
console.log("");
list.forEach(([, s], i) => console.log(`${i + 1}  ${s.number}  ${s.name}`));
const pick = Number(await rl.question("\nSection: "));
const [slug, section] = list[pick - 1] ?? [];
if (!section) { console.error("No such section."); process.exit(1); }

const title = (await rl.question("Title: ")).trim();
if (!title) { console.error("A title is required."); process.exit(1); }
const lengthIn = (await rl.question("Length [short/note/essay] (note): ")).trim() || "note";
rl.close();

if (!["short", "note", "essay"].includes(lengthIn)) { console.error("Length must be short, note or essay."); process.exit(1); }

const dir = `content/${section.number}-${slug}`;
mkdirSync(dir, { recursive: true });
const used = readdirSync(dir).map((f) => parseInt(f.slice(0, 3), 10)).filter(Number.isInteger);
const next = String((used.length ? Math.max(...used) : 0) + 1).padStart(3, "0");
const fileSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
const path = `${dir}/${next}-${fileSlug}.md`;
const today = new Date().toISOString().slice(0, 10);

writeFileSync(path, `---
title: "${title.replace(/"/g, '\\"')}"
date: ${today}
section: ${slug}
length: ${lengthIn}
summary: ""
tags: []
status: draft
featured: false
page: "${section.number}/${next}"
---

`);
console.log(`\nCreated ${path}\nPage ${section.number}/${next}. Go and find out.\n`);
