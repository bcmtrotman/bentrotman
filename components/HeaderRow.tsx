import Link from "next/link";
import { site, frozenClock, frozenClockShort } from "@/lib/sections";

/** The Ceefax header row. P-number, service name, page number, frozen clock. */
export default function HeaderRow({ number }: { number: number | string }) {
  const n = String(number);
  return (
    <div className="chrome flex items-baseline justify-between gap-4 whitespace-nowrap">
      <div className="flex gap-4 lg:gap-6">
        <span>P{n}</span>
        <Link href="/" className="text-fg font-semibold">
          {site.serviceName}
        </Link>
        <span>{n}</span>
      </div>
      <span className="text-fg">
        <span className="lg:hidden">{frozenClockShort}</span>
        <span className="hidden lg:inline">{frozenClock}</span>
      </span>
    </div>
  );
}
