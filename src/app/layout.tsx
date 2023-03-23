import type { ReactNode } from "react";
import { Playfair_Display } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

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
        url: "https://arthouse.is/images/video-cover.png",
        width: 1200,
        height: 630,
        alt: "Arthouse",
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
        <Script defer data-domain="arthouse.is" src="/js/script.js"></Script>
      </head>
      <body>
        <main
          className={`w-screen h-screen z-10 relative flex flex-col items-center justify-center ${playfairDisplay.variable}`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
