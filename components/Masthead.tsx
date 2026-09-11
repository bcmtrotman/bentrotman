import Link from "next/link";
import { site } from "@/lib/sections";

/**
 * The front-page masthead, after the BBC CEEFAX one: three white boxes, then a blue banner
 * with double-height yellow lettering. Home page only.
 */
export default function Masthead() {
  const [boxes, banner] = site.mastheadSplit;
  return (
    <Link
      href="/"
      aria-label={site.masthead}
      className="chrome-block flex items-stretch gap-1 no-underline hover:no-underline"
    >
      <span className="flex gap-1" aria-hidden="true">
        {boxes.split("").map((ch, i) => (
          <span
            key={i}
            className="flex w-[1.6em] items-center justify-center bg-fg text-bg text-[1.6em] leading-none lg:w-[1.7em]"
          >
            {ch}
          </span>
        ))}
      </span>
      <span className="flex flex-1 items-center bg-blue px-3 text-yellow text-[1.6em] leading-none lg:px-5" aria-hidden="true">
        {banner}
      </span>
    </Link>
  );
}
