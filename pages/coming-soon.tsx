import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout bgClass="brand-bg">
        <h1 className="font-semibold text-3xl md:text-6xl text-center leading-tight">
          Arthouse is a <br /> digital product studio <br /> based in Vienna.
        </h1>
        <h2 className="font-medium text-xl  md:text-2xl text-center mt-8">
          This website is currently under construction.
        </h2>
      </Layout>
    </>
  );
};

export default Home;
