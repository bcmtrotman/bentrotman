import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/sections";
import Footer from "@/components/Footer";
import "./globals.css";

// Chrome: Bedstead, a public-domain recreation of the SAA5050 teletext character generator.
const bedstead = localFont({
  src: "./fonts/bedstead.woff2",
  variable: "--font-bedstead",
  display: "swap",
});

// Body: Ubuntu Mono. Same rounded monospace feel, built to be read at length.
const ubuntuMono = localFont({
  src: [
    { path: "./fonts/ubuntu-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ubuntu-mono-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/ubuntu-mono-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-ubuntu-mono",
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
    <html lang="en-GB" className={`${bedstead.variable} ${ubuntuMono.variable}`}>
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
