import type { Metadata } from "next";
import HeaderRow from "@/components/HeaderRow";
import Block from "@/components/Block";
import Nav from "@/components/Nav";
import Prose from "@/components/Prose";
import { loadStaticPage } from "@/lib/content";
import { site } from "@/lib/sections";

export const metadata: Metadata = {
  title: "110  ABOUT",
  description: "Who Ben Trotman is, where the lens came from, and why the site looks like Ceefax.",
  alternates: { canonical: `${site.url}/110` },
};

export default function About() {
  const p = loadStaticPage("110-about");
  return (
    <main className="flex flex-col gap-6">
      <HeaderRow number={110} />
      <Nav />
      <Block colour="green" as="h1">110 ABOUT</Block>
      {p && <Prose source={p.body} />}
    </main>
  );
}
