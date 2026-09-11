#!/usr/bin/env node
// Prints the page number of the most recently modified content file, for commit messages.
import { readdirSync, statSync, readFileSync, existsSync } from "node:fs";
import matter from "gray-matter";

let best = null;
for (const dir of readdirSync("content")) {
  const full = `content/${dir}`;
  if (!statSync(full).isDirectory()) continue;
  for (const file of readdirSync(full)) {
    if (!/\.(md|mdx)$/.test(file)) continue;
    const p = `${full}/${file}`;
    const t = statSync(p).mtimeMs;
    if (!best || t > best.t) best = { t, p };
  }
}
if (!best || !existsSync(best.p)) { console.log("site"); process.exit(0); }
const { data } = matter(readFileSync(best.p, "utf8"));
console.log(data.page ? String(data.page) : best.p.replace(/^content\/pages\//, "").replace(/\.md$/, ""));
