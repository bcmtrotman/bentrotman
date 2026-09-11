import Link from "next/link";

/** Plain text nav under the header on every non-home page. */
export default function Nav({
  current,
}: {
  current?: { number: number; name: string; href: string };
}) {
  return (
    <nav aria-label="Site" className="chrome flex flex-wrap gap-x-6 gap-y-1">
      <Link href="/">100 HOME</Link>
      <Link href="/180">180 NOW</Link>
      <Link href="/190">190 INDEX</Link>
      <Link href="/199">199 CONTACT</Link>
      {current && (
        <Link href={current.href} className="text-fg" aria-current="page">
          {current.number} {current.name}
        </Link>
      )}
    </nav>
  );
}
