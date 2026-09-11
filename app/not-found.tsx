import Link from "next/link";
import HeaderRow from "@/components/HeaderRow";
import Block from "@/components/Block";

export default function NotFound() {
  return (
    <main className="flex flex-col gap-6">
      <HeaderRow number={404} />
      <Block colour="red" as="h1">404</Block>
      <p className="chrome">This page is not in service.</p>
      <p className="chrome flex flex-wrap gap-x-6 gap-y-1">
        <span className="text-dim">Try:</span>
        <Link href="/">100 HOME</Link>
        <Link href="/190">190 INDEX</Link>
        <Link href="/110">110 ABOUT</Link>
      </p>
    </main>
  );
}
