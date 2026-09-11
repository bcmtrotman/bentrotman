import Link from "next/link";
import { site } from "@/lib/sections";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-rule pt-4 chrome-xs flex flex-col gap-2 lg:flex-row lg:justify-between">
      <nav aria-label="Footer" className="flex gap-6">
        <Link href="/110">110 ABOUT</Link>
        <Link href="/190">190 INDEX</Link>
        <Link href="/199">199 CONTACT</Link>
      </nav>
      <p className="text-dim normal-case">{site.footerLine}</p>
    </footer>
  );
}
