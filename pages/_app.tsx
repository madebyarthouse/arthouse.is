import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Arthouse is coming soon</title>
        <meta
          name="description"
          content="A digital product studio based in Vienna."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        {/* Open Graph Meta tags */}
        <meta property="og:title" content="Arthouse" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arthouse.is" />
        <meta property="og:image" content="/images/video-cover.png" />
        <meta
          property="og:description"
          content="A digital product studio based in Vienna."
        />
        <meta property="og:site_name" content="Arthouse" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
