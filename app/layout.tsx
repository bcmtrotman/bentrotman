import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/sections";
import Footer from "@/components/Footer";
import "./globals.css";

const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

const plexSans = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.serviceName}  100  ${site.masthead}`,
    template: `%s  ${site.serviceName}`,
  },
  description: site.strapline,
  openGraph: {
    siteName: site.serviceName,
    type: "website",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${plexMono.variable} ${plexSans.variable}`}>
      <body className="min-h-screen bg-bg text-fg">
        <div className="mx-auto w-full max-w-[960px] px-4 py-4 lg:px-8 lg:py-6">
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
