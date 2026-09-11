import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeaderRow from "@/components/HeaderRow";
import Block from "@/components/Block";
import Nav from "@/components/Nav";
import PageList from "@/components/PageList";
import EmptyState from "@/components/EmptyState";
import StatusLine from "@/components/StatusLine";
import { loadSection } from "@/lib/content";
import { sections, sectionByNumber, site } from "@/lib/sections";
import { longDate } from "@/lib/dates";

export const dynamicParams = false;

export function generateStaticParams() {
  return sections.map((s) => ({ section: String(s.number) }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const s = sectionByNumber((await params).section);
  if (!s) return {};
  return {
    title: `${s.number}  ${s.name}`,
    description: s.tagline,
    alternates: { canonical: `${site.url}/${s.number}` },
  };
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const s = sectionByNumber((await params).section);
  if (!s) notFound();
  const pages = loadSection(s.number);
  const last = pages[0]?.date;

  return (
    <main className="flex flex-col gap-6">
      <HeaderRow number={s.number} />
      <Nav current={{ number: s.number, name: s.name, href: `/${s.number}` }} />
      <Block colour={s.block} as="h1">
        {s.number} {s.name}
      </Block>
      {pages.length > 0 && <p className="max-w-[66ch] text-dim">{s.tagline}</p>}
      <hr className="border-rule" />
      <PageList pages={pages} />
      <EmptyState number={s.number} tagline={s.tagline} count={pages.length} />
      {last && (
        <StatusLine className="mt-4">
          {pages.length} {pages.length === 1 ? "page" : "pages"} in service  Last updated {longDate(last)}
        </StatusLine>
      )}
    </main>
  );
}
