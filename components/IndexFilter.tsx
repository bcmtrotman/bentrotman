"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type IndexEntry = {
  page: string;
  sectionNumber: number;
  seq: string;
  title: string;
  date: string;
  length: "short" | "note" | "essay";
  summary: string;
};

type SectionOpt = { number: number; name: string };

export default function IndexFilter({ entries, sections }: { entries: IndexEntry[]; sections: SectionOpt[] }) {
  const [section, setSection] = useState<number | 0>(0);
  const [length, setLength] = useState<IndexEntry["length"] | "all">("all");
  const [sort, setSort] = useState<"date" | "number">("date");

  const rows = useMemo(() => {
    let r = entries.filter((e) => (section ? e.sectionNumber === section : true));
    r = r.filter((e) => (length === "all" ? true : e.length === length));
    r = r.slice().sort((a, b) =>
      sort === "number" ? a.page.localeCompare(b.page) : b.date.localeCompare(a.date) || b.page.localeCompare(a.page)
    );
    return r;
  }, [entries, section, length, sort]);

  const btn = (active: boolean) =>
    `chrome px-2 py-1 ${active ? "bg-yellow text-bg" : "text-cyan hover:underline"}`;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-1" role="group" aria-label="Section">
          <button className={btn(section === 0)} onClick={() => setSection(0)}>All</button>
          {sections.map((s) => (
            <button key={s.number} className={btn(section === s.number)} onClick={() => setSection(s.number)}>
              {s.number} {s.name}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1" role="group" aria-label="Length">
          {(["all", "short", "note", "essay"] as const).map((l) => (
            <button key={l} className={btn(length === l)} onClick={() => setLength(l)}>{l}</button>
          ))}
        </div>
        <div className="flex flex-wrap gap-1" role="group" aria-label="Sort">
          <button className={btn(sort === "date")} onClick={() => setSort("date")}>Newest</button>
          <button className={btn(sort === "number")} onClick={() => setSort("number")}>By number</button>
        </div>
      </div>

      <p className="chrome text-yellow" aria-live="polite">
        {rows.length} {rows.length === 1 ? "page" : "pages"} listed
      </p>

      {rows.length === 0 ? (
        <p className="chrome text-dim">Nothing matches. Try fewer filters.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {rows.map((e) => (
            <li key={e.page} className="flex flex-col gap-1">
              <Link href={`/${e.sectionNumber}/${e.seq}`} className="flex flex-col lg:flex-row lg:items-baseline lg:gap-4">
                <span className="chrome text-fg lg:w-[9ch] lg:shrink-0">{e.page}</span>
                <span className="chrome text-yellow hover:text-fg">{e.title}</span>
              </Link>
              <p className="chrome-xs text-dim lg:pl-[calc(9ch+1rem)]">
                {e.length}  {e.date.slice(8, 10)} {["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][Number(e.date.slice(5, 7)) - 1]} {e.date.slice(0, 4)}
              </p>
              {e.summary && <p className="text-dim max-w-[66ch] lg:pl-[calc(9ch+1rem)]">{e.summary}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
