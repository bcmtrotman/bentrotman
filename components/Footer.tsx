import Link from "next/link";
import { site } from "@/lib/sections";

/** Blue strapline bar, then the four Fastext buttons, then the small print. Every page. */
export default function Footer() {
  return (
    <footer className="mt-12 flex flex-col gap-2">
      <p className="chrome chrome-mixed bg-blue px-3 py-1 text-center text-yellow">{site.strapline}</p>
      <nav aria-label="Fastext" className="chrome chrome-mixed flex justify-between gap-2 px-1">
        <Link href="/" className="text-red">Home</Link>
        <Link href="/190" className="text-green">Index</Link>
        <Link href="/110" className="text-yellow">About</Link>
        <Link href="/199" className="text-cyan">Contact</Link>
      </nav>
      <p className="chrome-xs chrome-mixed mt-4 text-dim">{site.footerLine}</p>
    </footer>
  );
}
