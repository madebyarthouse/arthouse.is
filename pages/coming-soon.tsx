import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout bgClass="">
        <div className="w-full h-1/2 mix-blend-color-burn bg-red-400/70 rounded-[100px] fixed top-0 left-0 gate-open-top" />
        <div className="w-full h-1/2 mix-blend-color-burn bg-green-400/70 rounded-[100px] fixed top-0 left-0 gate-open-bottom" />
        <div className="w-1/2 h-full mix-blend-color-burn bg-purple-400/70 rounded-[100px] fixed top-0 left-0 gate-open-right" />
        <div className="w-1/2 h-full mix-blend-color-burn bg-amber-400/70 rounded-[100px] fixed top-0 left-0 gate-open-left" />
        <div className="bg-white p-5 rounded-lg">
          <h1 className="font-brand text-7xl md:text-9xl text-center leading-tight">
            Arthouse
          </h1>
          <hr className="w-80 max-w-full border-gray-800 my-5" />
          <h3 className="text-xl md:text-4xl text-center leading-tight font-light">
            A digital product studio <br /> based in Vienna.
          </h3>
        </div>
      </Layout>
    </>
  );
};

export default Home;
