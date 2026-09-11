import Link from "next/link";
import HeaderRow from "@/components/HeaderRow";
import Block from "@/components/Block";
import PageList from "@/components/PageList";
import StatusLine from "@/components/StatusLine";
import { loadAllPages, loadSection, lastUpdated } from "@/lib/content";
import { site, sectionList, sections } from "@/lib/sections";
import { longDate, shortDate } from "@/lib/dates";

export default function Home() {
  const all = loadAllPages();
  const [headline, ...rest] = all;
  const latest = rest.slice(0, 6);
  const count = all.length;

  return (
    <main className="flex flex-col gap-6">
      <HeaderRow number={100} />

      <div className="flex flex-col gap-2">
        <Block colour="cyan" as="h1">{site.masthead}</Block>
        <p className="max-w-[66ch]">{site.strapline}</p>
      </div>

      <hr className="border-rule" />

      {headline ? (
        <section aria-label="Headline" className="flex flex-col gap-2">
          <Link href={`/${headline.sectionNumber}/${headline.seq}`} className="group flex flex-col gap-2 text-fg lg:flex-row lg:items-baseline lg:justify-between">
            <h2 className="text-[26px] font-semibold leading-[1.15] group-hover:underline group-hover:underline-offset-4 lg:text-[34px] lg:max-w-[24ch]">
              {headline.title}
            </h2>
            <span className="chrome shrink-0">{headline.page}</span>
          </Link>
          {headline.summary && <p className="max-w-[66ch] text-dim">{headline.summary}</p>}
          <p className="chrome text-dim">
            {headline.length}  {shortDate(headline.date)}
          </p>
        </section>
      ) : (
        <section className="chrome flex flex-col gap-1">
          <p>No pages in service.</p>
          <p>First transmission expected {site.expectedTransmission}.</p>
          <p className="text-dim">
            <Link href="/110">110 ABOUT</Link> and <Link href="/180">180 NOW</Link> are live.
          </p>
        </section>
      )}

      <hr className="border-rule" />

      <div className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:gap-12">
        <section aria-labelledby="latest">
          <h2 id="latest" className="chrome mb-3">Latest</h2>
          {latest.length ? (
            <PageList pages={latest} />
          ) : (
            <p className="chrome text-dim">{headline ? "One page so far." : "Nothing yet."}</p>
          )}
        </section>

        <section aria-labelledby="sections">
          <h2 id="sections" className="chrome mb-3">Sections</h2>
          <ul className="chrome flex flex-col gap-2">
            {sectionList.map((s) => {
              const editorial = sections.find((x) => x.number === s.number);
              const n = editorial ? loadSection(s.number).length : 0;
              return (
                <li key={s.number} className="flex items-baseline gap-4">
                  <Link href={s.href}>
                    <span className="text-fg mr-4">{s.number}</span>
                    {s.name}
                  </Link>
                  {n > 0 && <span className="text-dim">{n}</span>}
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <hr className="border-rule" />

      <div className="flex flex-col gap-2">
        <Block colour="yellow">
          {count} {count === 1 ? "page" : "pages"} in service
        </Block>
        <StatusLine>Last updated {longDate(lastUpdated())}</StatusLine>
      </div>
    </main>
  );
}
