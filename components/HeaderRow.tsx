import Link from "next/link";
import { site } from "@/lib/sections";

/** The Ceefax header row: P100  BENTROTMAN 100  Sun 27 Apr 13:13/00. Date in white, time in yellow, frozen. */
export default function HeaderRow({ number }: { number: number | string }) {
  const n = String(number);
  const clock = site.frozenClock;
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
      <span>
        {clock.day} {clock.date}{" "}
        <span className="text-yellow">
          {clock.time}
          <span className="hidden lg:inline">/{clock.seconds}</span>
        </span>
      </span>
    </div>
  );
}
