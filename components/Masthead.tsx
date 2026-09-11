import Link from "next/link";
import { site } from "@/lib/sections";

/**
 * The front-page masthead, after the BBC CEEFAX one: three white boxes, then a blue banner
 * with yellow lettering stretched to fill it, the way teletext double-width mosaic text did.
 * Home page only.
 */
export default function Masthead() {
  const [boxes, banner] = site.mastheadSplit;
  return (
    <Link
      href="/"
      aria-label={site.masthead}
      className="chrome-block flex items-stretch gap-1 hover:no-underline"
    >
      <span className="flex gap-1" aria-hidden="true">
        {boxes.split("").map((ch, i) => (
          <span
            key={i}
            className="flex w-[1.5em] items-center justify-center bg-fg text-bg text-[2em] leading-none"
          >
            {ch}
          </span>
        ))}
      </span>
      <span className="flex flex-1 items-center bg-blue px-3 py-1 lg:px-5" aria-hidden="true">
        {/* preserveAspectRatio="none" lets the word stretch to the banner width on any screen. */}
        <svg className="h-[2.2em] w-full" viewBox="0 0 700 100" preserveAspectRatio="none">
          <text
            x="0"
            y="84"
            fontFamily="var(--font-bedstead)"
            fontSize="100"
            fill="#ffff00"
            textLength="700"
            lengthAdjust="spacingAndGlyphs"
          >
            {banner}
          </text>
        </svg>
      </span>
    </Link>
  );
}
