import type { Metadata } from "next";
import HeaderRow from "@/components/HeaderRow";
import Block from "@/components/Block";
import Nav from "@/components/Nav";
import Prose from "@/components/Prose";
import StatusLine from "@/components/StatusLine";
import { loadStaticPage } from "@/lib/content";
import { site } from "@/lib/sections";
import { longDate } from "@/lib/dates";

export const metadata: Metadata = {
  title: "180  NOW",
  description: "What Ben is doing and thinking about right now.",
  alternates: { canonical: `${site.url}/180` },
};

export default function Now() {
  const p = loadStaticPage("180-now");
  return (
    <main className="flex flex-col gap-6">
      <HeaderRow number={180} />
      <Nav />
      <Block colour="yellow" as="h1">180 NOW</Block>
      {p && (
        <>
          <StatusLine>
            Updated {longDate(p.updated ?? p.date)}. <span className="text-dim normal-case">Rewritten roughly monthly. Old versions are not kept.</span>
          </StatusLine>
          <Prose source={p.body} />
        </>
      )}
    </main>
  );
}
