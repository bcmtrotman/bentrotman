import type { Metadata } from "next";
import HeaderRow from "@/components/HeaderRow";
import Block from "@/components/Block";
import Nav from "@/components/Nav";
import IndexFilter, { type IndexEntry } from "@/components/IndexFilter";
import { loadAllPages } from "@/lib/content";
import { sections, site } from "@/lib/sections";

export const metadata: Metadata = {
  title: "190  INDEX",
  description: "Every page on bentrotman.com, filterable by section and length.",
  alternates: { canonical: `${site.url}/190` },
};

export default function Index() {
  const entries: IndexEntry[] = loadAllPages().map((p) => ({
    page: p.page,
    sectionNumber: p.sectionNumber,
    seq: p.seq,
    title: p.title,
    date: p.date,
    length: p.length,
    summary: p.summary,
  }));
  return (
    <main className="flex flex-col gap-6">
      <HeaderRow number={190} />
      <Nav />
      <Block colour="blue" as="h1">190 INDEX</Block>
      {entries.length === 0 ? (
        <p className="chrome">Index empty. 0 pages in service. This is temporary.</p>
      ) : (
        <IndexFilter entries={entries} sections={sections.map((s) => ({ number: s.number, name: s.name }))} />
      )}
    </main>
  );
}
