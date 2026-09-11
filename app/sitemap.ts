import type { MetadataRoute } from "next";
import { loadAllPages } from "@/lib/content";
import { sections, site } from "@/lib/sections";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const fixed = ["", "/110", "/180", "/190", "/199"].map((p) => ({ url: `${base}${p}` }));
  const secs = sections.map((s) => ({ url: `${base}/${s.number}` }));
  const pages = loadAllPages()
    .filter((p) => p.status === "published")
    .map((p) => ({ url: `${base}/${p.sectionNumber}/${p.seq}`, lastModified: p.updated ?? p.date }));
  return [...fixed, ...secs, ...pages];
}
