import type { Page } from "@/lib/content";
import PageRow from "./PageRow";

export default function PageList({ pages, showSection = false }: { pages: Page[]; showSection?: boolean }) {
  if (!pages.length) return null;
  return (
    <ul className="flex flex-col gap-3">
      {pages.map((p) => (
        <PageRow key={p.page} page={p} showSection={showSection} />
      ))}
    </ul>
  );
}
