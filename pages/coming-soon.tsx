import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout bgClass="brand-bg">
        <h1 className="font-brand text-7xl md:text-9xl text-center leading-tight">
          Arthouse
        </h1>
        <hr className="w-80 max-w-full border-gray-800 my-5" />
        <h3 className="text-xl md:text-4xl text-center leading-tight">
          A digital product studio <br /> based in Vienna.
        </h3>
      </Layout>
    </>
  );
};

export default Home;
