import Link from "next/link";
import { site } from "@/lib/sections";

/**
 * The front-page masthead, after the BBC CEEFAX one: three white boxes taking a third of the
 * width, then a blue banner taking two thirds, with yellow lettering stretched to fill it.
 * The BEN letters get a text-stroke to fake a bold weight, since Bedstead only ships one weight.
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
      <span className="flex w-1/3 gap-1" aria-hidden="true">
        {boxes.split("").map((ch, i) => (
          <span
            key={i}
            className="flex flex-1 items-center justify-center bg-fg text-bg text-[2.8em] leading-none"
            style={{ WebkitTextStroke: "0.05em var(--color-bg)" }}
          >
            {ch}
          </span>
        ))}
      </span>
      <span className="flex w-2/3 items-center bg-blue px-3 py-1 lg:px-5" aria-hidden="true">
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
