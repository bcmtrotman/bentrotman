import Link from "next/link";
import type { Page } from "@/lib/content";

/** number  title  length. Dot leaders on desktop, stacked on mobile. */
export default function PageRow({ page, showSection = false }: { page: Page; showSection?: boolean }) {
  const href = `/${page.sectionNumber}/${page.seq}`;
  return (
    <li className="chrome">
      <Link href={href} className="group flex flex-col lg:flex-row lg:items-baseline">
        <span className="text-fg lg:w-[9ch] lg:shrink-0">{page.page}</span>
        <span className="text-yellow group-hover:text-fg lg:shrink-0 lg:max-w-[60%]">
          {page.title}
        </span>
        <span className="leader" aria-hidden="true" />
        <span className="text-dim lg:shrink-0">
          {page.length}
          {showSection && <span className="ml-3">{page.sectionNumber}</span>}
        </span>
      </Link>
    </li>
  );
}
