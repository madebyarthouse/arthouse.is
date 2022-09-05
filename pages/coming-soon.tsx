import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arthouse</title>
        <meta
          name="description"
          content="A digital product studio based in Vienna."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="font-semibold text-3xl md:text-6xl text-center leading-tight">
          Arthouse is a <br /> digital product studio <br /> based in Vienna.
        </h1>
        <h2 className="font-medium text-xl  md:text-2xl text-center mt-8">
          This website is currently under construction.
        </h2>
      </main>
    </>
  );
};

export default Home;
