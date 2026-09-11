import Link from "next/link";
import HeaderRow from "@/components/HeaderRow";
import Masthead from "@/components/Masthead";
import StatusLine from "@/components/StatusLine";
import { loadAllPages, loadFeatured, lastUpdated } from "@/lib/content";
import { site, sectionList, sectionByNumber } from "@/lib/sections";
import { longDate } from "@/lib/dates";

function titleCase(name: string) {
  return name.toLowerCase().replace(/(^|\s)\w/g, (c) => c.toUpperCase());
}

export default function Home() {
  const all = loadAllPages();
  const headline = all[0];
  const featured = loadFeatured().slice(0, 12);
  const count = all.length;
  const headlineSection = headline && sectionByNumber(headline.sectionNumber);

  return (
    <main className="flex flex-col gap-5">
      <HeaderRow number={100} />
      <Masthead />

      {headline ? (
        <section aria-label="Headline" className="chrome flex flex-col">
          <p className="chrome-mixed text-yellow">{headlineSection ? titleCase(headlineSection.name) : "Latest"}</p>
          <Link href={`/${headline.sectionNumber}/${headline.seq}`} className="flex flex-col gap-1 text-fg lg:flex-row lg:items-end lg:justify-between">
            <span className="hover:underline hover:underline-offset-4 lg:max-w-[34ch]">{headline.title}</span>
            <span className="text-yellow">{headline.page}</span>
          </Link>
        </section>
      ) : (
        <section aria-label="Headline" className="chrome flex flex-col">
          <p className="chrome-mixed text-yellow">Service</p>
          <p>No pages in service. First transmission expected {site.expectedTransmission}.</p>
        </section>
      )}

      <hr className="border-blue border-t-2" />

      <section aria-label="Sections">
        <ul className="chrome grid gap-x-8 gap-y-1 lg:grid-cols-2">
          {sectionList.map((s) => (
            <li key={s.number}>
              <Link href={s.href} className="flex justify-between gap-4 text-yellow hover:text-fg">
                <span>{s.name}</span>
                <span className="text-fg">{s.number}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="best" className="mt-4 min-h-[9rem]">
        {featured.length > 0 ? (
          <ul className="chrome grid gap-x-8 gap-y-1 lg:grid-cols-2">
            {featured.map((p) => (
              <li key={p.page}>
                <Link href={`/${p.sectionNumber}/${p.seq}`} className="flex justify-between gap-4 text-yellow hover:text-fg">
                  <span>{p.title}</span>
                  <span className="shrink-0 text-fg">{p.page}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="chrome flex flex-col">
            <h2 id="best" className="text-cyan">Best pages</h2>
            <p>Not yet in service.</p>
            <p>First selection expected {site.expectedTransmission}.</p>
            <p className="chrome-mixed text-dim">
              Until then, everything is at <Link href="/190">190 Index</Link>.
            </p>
          </div>
        )}
      </section>

      <StatusLine className="mt-2">
        {count} {count === 1 ? "page" : "pages"} in service. Last updated {longDate(lastUpdated())}.
      </StatusLine>
    </main>
  );
}
