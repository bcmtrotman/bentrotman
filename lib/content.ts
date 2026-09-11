import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { sections, type Section } from "./sections";

export type Length = "short" | "note" | "essay";
export type Status = "draft" | "published";

export type Page = {
  page: string;          // "130/007"
  sectionNumber: number; // 130
  seq: string;           // "007"
  sectionSlug: string;
  title: string;
  date: string;          // ISO yyyy-mm-dd
  updated?: string;
  length: Length;
  summary: string;
  tags: string[];
  status: Status;
  body: string;
  words: number;
  file: string;
};

export type StaticPage = {
  title: string;
  date: string;
  updated?: string;
  body: string;
};

const ROOT = path.join(process.cwd(), "content");

const showDrafts =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_DRAFTS === "1";

function sectionDir(s: Section) {
  return path.join(ROOT, `${s.number}-${s.slug}`);
}

function toISO(v: unknown): string {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v ?? "");
}

function readPageFile(s: Section, file: string): Page | null {
  if (!/^\d{3}-.*\.(md|mdx)$/.test(file)) return null;
  const full = path.join(sectionDir(s), file);
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  const seq = file.slice(0, 3);
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    page: String(data.page ?? `${s.number}/${seq}`),
    sectionNumber: s.number,
    seq,
    sectionSlug: s.slug,
    title: String(data.title ?? "Untitled"),
    date: toISO(data.date),
    updated: data.updated ? toISO(data.updated) : undefined,
    length: (data.length as Length) ?? "note",
    summary: String(data.summary ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    status: (data.status as Status) ?? "draft",
    body: content,
    words,
    file: path.relative(process.cwd(), full),
  };
}

let cache: Page[] | null = null;

/** Every page across every section, visible ones only, newest first. */
export function loadAllPages(): Page[] {
  if (cache) return cache;
  const out: Page[] = [];
  for (const s of sections) {
    const dir = sectionDir(s);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      const p = readPageFile(s, file);
      if (p && (p.status === "published" || showDrafts)) out.push(p);
    }
  }
  out.sort((a, b) => (a.date === b.date ? b.page.localeCompare(a.page) : b.date.localeCompare(a.date)));
  cache = out;
  return out;
}

export function loadSection(sectionNumber: number): Page[] {
  return loadAllPages().filter((p) => p.sectionNumber === sectionNumber);
}

export function loadPage(sectionNumber: number, seq: string): Page | undefined {
  return loadAllPages().find((p) => p.sectionNumber === sectionNumber && p.seq === seq);
}

/** Prev and next within a section, by number. */
export function prevNext(page: Page): { prev?: Page; next?: Page } {
  const list = loadSection(page.sectionNumber).slice().sort((a, b) => a.seq.localeCompare(b.seq));
  const i = list.findIndex((p) => p.page === page.page);
  return { prev: i > 0 ? list[i - 1] : undefined, next: i >= 0 && i < list.length - 1 ? list[i + 1] : undefined };
}

export function pageCount(sectionNumber?: number): number {
  return sectionNumber ? loadSection(sectionNumber).length : loadAllPages().length;
}

/** Most recent date across everything, including the static pages. */
export function lastUpdated(): string {
  const dates = loadAllPages().flatMap((p) => [p.date, p.updated ?? ""]).filter(Boolean);
  for (const name of ["110-about", "180-now", "199-contact"]) {
    const sp = loadStaticPage(name);
    if (sp) dates.push(sp.updated ?? sp.date);
  }
  return dates.sort().at(-1) ?? new Date().toISOString().slice(0, 10);
}

export function loadStaticPage(name: string): StaticPage | null {
  const full = path.join(ROOT, "pages", `${name}.md`);
  if (!fs.existsSync(full)) return null;
  const { data, content } = matter(fs.readFileSync(full, "utf8"));
  return {
    title: String(data.title ?? name),
    date: toISO(data.date),
    updated: data.updated ? toISO(data.updated) : undefined,
    body: content,
  };
}
