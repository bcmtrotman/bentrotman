import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeaderRow from "@/components/HeaderRow";
import Block from "@/components/Block";
import Nav from "@/components/Nav";
import Prose from "@/components/Prose";
import PagerNav from "@/components/PagerNav";
import { loadAllPages, loadPage, prevNext } from "@/lib/content";
import { sectionByNumber, site } from "@/lib/sections";
import { longDate } from "@/lib/dates";

export const dynamicParams = false;

export function generateStaticParams() {
  return loadAllPages().map((p) => ({ section: String(p.sectionNumber), seq: p.seq }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string; seq: string }> }): Promise<Metadata> {
  const { section, seq } = await params;
  const page = loadPage(parseInt(section, 10), seq);
  if (!page) return {};
  return {
    title: `${page.page}  ${page.title}`,
    description: page.summary || site.strapline,
    alternates: { canonical: `${site.url}/${page.sectionNumber}/${page.seq}` },
    openGraph: { title: page.title, description: page.summary || site.strapline, type: "article", publishedTime: page.date },
  };
}

export default async function PagePage({ params }: { params: Promise<{ section: string; seq: string }> }) {
  const { section, seq } = await params;
  const s = sectionByNumber(section);
  const page = s && loadPage(s.number, seq);
  if (!s || !page) notFound();
  const { prev, next } = prevNext(page);

  return (
    <main className="flex flex-col gap-6">
      <HeaderRow number={page.page} />
      <Nav current={{ number: s.number, name: s.name, href: `/${s.number}` }} />
      <Block colour={s.block}>
        {s.number} {s.name}
      </Block>

      <article className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h1 className="max-w-[26ch] text-[24px] font-semibold leading-[1.2] lg:text-[28px]">{page.title}</h1>
          <p className="chrome text-dim">
            {page.page}  {page.length}  {longDate(page.date)}
            {page.updated && `  Updated ${longDate(page.updated)}`}
            {page.status === "draft" && <span className="ml-3 text-red">Draft</span>}
          </p>
        </header>
        <Prose source={page.body} />
        {page.tags.length > 0 && <p className="chrome-xs text-dim">{page.tags.join("  ")}</p>}
      </article>

      <hr className="border-rule" />
      <PagerNav prev={prev} next={next} section={s} />
    </main>
  );
}
