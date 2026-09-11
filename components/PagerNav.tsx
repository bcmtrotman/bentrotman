import Link from "next/link";
import type { Page } from "@/lib/content";
import type { Section } from "@/lib/sections";

export default function PagerNav({ prev, next, section }: { prev?: Page; next?: Page; section: Section }) {
  return (
    <nav aria-label="Pages in this section" className="chrome flex flex-col gap-2">
      {prev && (
        <Link href={`/${prev.sectionNumber}/${prev.seq}`}>
          Prev {prev.page}
          <span className="text-yellow ml-3">{prev.title}</span>
        </Link>
      )}
      {next && (
        <Link href={`/${next.sectionNumber}/${next.seq}`}>
          Next {next.page}
          <span className="text-yellow ml-3">{next.title}</span>
        </Link>
      )}
      <Link href={`/${section.number}`}>
        Back to {section.number} {section.name}
      </Link>
    </nav>
  );
}
