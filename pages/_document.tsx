import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script defer data-domain="arthouse.is" src="/js/plausible.js"></Script>
      </body>
    </Html>
  );
}
