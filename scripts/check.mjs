#!/usr/bin/env node
// npm run check. Also runs before every build.
// Fails on: duplicate numbers, page/folder/filename mismatch, bad status or length,
// published without summary, banned strings. Warns on: length band, future date.
import { readdirSync, readFileSync, existsSync } from "node:fs";
import matter from "gray-matter";

const sections = JSON.parse(readFileSync("content/sections.json", "utf8"));
const BANNED = [
  ["StoryVentures", "working name has not cleared trademark checks"],
  ["Retailnomics", "working name, never on the site"],
  ["\u2014", "em dash"],
];
const BANDS = { short: [50, 300], note: [300, 1000], essay: [1000, Infinity] };

const errors = [];
const warnings = [];
const seen = new Map();
const today = new Date().toISOString().slice(0, 10);

function scanBanned(text, where) {
  for (const [needle, why] of BANNED) {
    if (text.includes(needle)) errors.push(`${where}: contains "${needle === "\u2014" ? "—" : needle}" (${why})`);
  }
}

for (const [slug, s] of Object.entries(sections)) {
  const dir = `content/${s.number}-${slug}`;
  if (!existsSync(dir)) continue;
  for (const file of readdirSync(dir)) {
    if (!/\.(md|mdx)$/.test(file)) continue;
    const where = `${dir}/${file}`;
    const raw = readFileSync(where, "utf8");
    const { data, content } = matter(raw);
    const m = file.match(/^(\d{3})-/);
    if (!m) { errors.push(`${where}: filename must start with a three-digit sequence`); continue; }
    const expected = `${s.number}/${m[1]}`;
    if (String(data.page) !== expected) errors.push(`${where}: page is "${data.page}", expected "${expected}"`);
    if (data.section !== slug) errors.push(`${where}: section is "${data.section}", expected "${slug}"`);
    if (seen.has(expected)) errors.push(`${where}: duplicate page number ${expected} (also ${seen.get(expected)})`);
    seen.set(expected, where);
    if (!["draft", "published"].includes(data.status)) errors.push(`${where}: status must be draft or published`);
    if (!["short", "note", "essay"].includes(data.length)) errors.push(`${where}: length must be short, note or essay`);
    if (!data.title) errors.push(`${where}: title is required`);
    if (data.status === "published" && !String(data.summary ?? "").trim()) errors.push(`${where}: published pages need a summary`);
    scanBanned(raw, where);
    const words = content.split(/\s+/).filter(Boolean).length;
    const band = BANDS[data.length];
    if (band && (words < band[0] || words > band[1])) warnings.push(`${where}: ${words} words, outside the ${data.length} band (${band[0]} to ${band[1] === Infinity ? "+" : band[1]})`);
    const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? "");
    if (data.status === "published" && date > today) warnings.push(`${where}: published with a future date ${date}`);
  }
}

for (const file of existsSync("content/pages") ? readdirSync("content/pages") : []) {
  scanBanned(readFileSync(`content/pages/${file}`, "utf8"), `content/pages/${file}`);
}

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`FAIL  ${e}`);
console.log(`\n${seen.size} pages checked. ${errors.length} errors, ${warnings.length} warnings.`);
process.exit(errors.length ? 1 : 0);
