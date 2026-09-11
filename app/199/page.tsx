import type { Metadata } from "next";
import HeaderRow from "@/components/HeaderRow";
import Block from "@/components/Block";
import Nav from "@/components/Nav";
import Prose from "@/components/Prose";
import ContactForm from "@/components/ContactForm";
import { loadStaticPage } from "@/lib/content";
import { site } from "@/lib/sections";

export const metadata: Metadata = {
  title: "199  CONTACT",
  description: "Arguments, corrections and coffee.",
  alternates: { canonical: `${site.url}/199` },
};

export default function Contact() {
  const p = loadStaticPage("199-contact");
  return (
    <main className="flex flex-col gap-6">
      <HeaderRow number={199} />
      <Nav />
      <Block colour="red" as="h1">199 CONTACT</Block>
      {p && <Prose source={p.body} />}
      <ContactForm commercialEmail={site.commercialEmail} />
      <noscript>
        <p className="chrome text-dim">
          The form needs JavaScript. Without it, email <a href={`mailto:${site.commercialEmail}`}>{site.commercialEmail}</a>.
        </p>
      </noscript>
    </main>
  );
}
