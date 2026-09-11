import Link from "next/link";
import { site, frozenClock, frozenClockShort } from "@/lib/sections";

/** The Ceefax header row: P100  BENTROTMAN 100 Sun 27 Apr 13:13/00. Clock in yellow, frozen. */
export default function HeaderRow({ number }: { number: number | string }) {
  const n = String(number);
  return (
    <div className="chrome flex items-baseline justify-between gap-4 whitespace-nowrap">
      <div className="flex gap-4 lg:gap-8">
        <span>P{n}</span>
        <span>
          <Link href="/" className="text-fg">
            {site.serviceName}
          </Link>{" "}
          {n}
        </span>
      </div>
      <span className="text-yellow">
        <span className="lg:hidden">{frozenClockShort}</span>
        <span className="hidden lg:inline">{frozenClock}</span>
      </span>
    </div>
  );
}
