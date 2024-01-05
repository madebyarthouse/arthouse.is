import type { ReactNode } from "react";
import { Playfair_Display } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import clsx from "clsx";

const playfairDisplay = Playfair_Display({
  display: "swap",
  weight: ["400", "700"],
  variable: "--playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arthouse is coming soon",
  description: "A digital product studio based in Vienna.",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    url: "https://arthouse.is",
    title: "Arthouse",
    description: "A digital product studio based in Vienna.",
    images: [
      {
        url: "https://arthouse.is/og.png",
        width: 1200,
        height: 630,
        alt: "We are Arthouse, a boutique digital product studio based in Vienna, Austria.",
      },
    ],
    locale: "en_US",
    type: "website",
    emails: ["christian.cito@arthouse.is"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <Script defer data-domain="madebyarthouse.com" src="/js/script.js"></Script>
      </head>
      <body className={clsx(playfairDisplay.variable)}>
        <main
          className={`w-full h-full z-10 relative flex flex-col items-center justify-center`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
