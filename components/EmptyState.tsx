import Link from "next/link";
import { site } from "@/lib/sections";

/** Not-in-service message for sections with zero pages, plus the softer variant for one or two pages. */
export default function EmptyState({
  number,
  tagline,
  count,
}: {
  number: number;
  tagline: string;
  count: number;
}) {
  if (count >= 3) return null;
  if (count > 0) {
    return <p className="chrome text-dim">More pages expected.</p>;
  }
  return (
    <div className="flex flex-col gap-6">
      <div className="chrome">
        <p>Page {number} not yet in service.</p>
        <p>First transmission expected {site.expectedTransmission}.</p>
      </div>
      <p className="prose">{tagline}</p>
      <p className="chrome flex flex-wrap gap-x-6 gap-y-1">
        <span className="text-dim">While you wait:</span>
        <Link href="/110">110 ABOUT</Link>
        <Link href="/180">180 NOW</Link>
        <Link href="/">100 HOME</Link>
      </p>
    </div>
  );
}
