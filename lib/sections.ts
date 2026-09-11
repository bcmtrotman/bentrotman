import sectionsJson from "@/content/sections.json";
import siteJson from "@/content/site.json";

export type BlockColour = "cyan" | "yellow" | "green" | "red" | "blue";

export type Section = {
  slug: string;
  number: number;
  name: string;
  block: BlockColour;
  tagline: string;
};

export const site = siteJson;

// The header clock is frozen on purpose. 13:13 on Sunday 27 April 2014.
// It is not a bug. Do not "fix" it. The LAST UPDATED status line carries recency.
export const frozenClock = `${site.frozenClock.day} ${site.frozenClock.date}  ${site.frozenClock.time}/${site.frozenClock.seconds}`;
export const frozenClockShort = `${site.frozenClock.day} ${site.frozenClock.date} ${site.frozenClock.time}`;

export const sections: Section[] = Object.entries(sectionsJson)
  .map(([slug, s]) => ({ slug, ...(s as Omit<Section, "slug">) }))
  .sort((a, b) => a.number - b.number);

export function sectionBySlug(slug: string): Section | undefined {
  return sections.find((s) => s.slug === slug);
}

export function sectionByNumber(number: number | string): Section | undefined {
  const n = typeof number === "string" ? parseInt(number, 10) : number;
  return sections.find((s) => s.number === n);
}

/** Utility pages that are not editorial sections but still have numbers. */
export const utilityPages = [
  { number: 100, name: "HOME", href: "/", block: "cyan" as BlockColour },
  { number: 110, name: "ABOUT", href: "/110", block: "green" as BlockColour },
  { number: 180, name: "NOW", href: "/180", block: "yellow" as BlockColour },
  { number: 190, name: "INDEX", href: "/190", block: "blue" as BlockColour },
  { number: 199, name: "CONTACT", href: "/199", block: "red" as BlockColour },
];

/** Full ordered list for the SECTIONS block on HOME. */
export const sectionList = [
  utilityPages[1],
  ...sections.map((s) => ({ number: s.number, name: s.name, href: `/${s.number}`, block: s.block })),
  ...utilityPages.slice(2),
];
