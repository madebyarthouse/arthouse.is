import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { FaPlayCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Layout from "../components/layout";

const AwsFirstIncubator = () => {
  const [showCover, setShowCover] = useState(true);
  return (
    <>
      <Head>
        <title>Arthouse x AWS First Inkubator</title>
      </Head>

      <Layout bgClass="aws-bg ">
        <div className="flex justify-center items-center">
          <Link href="/">
            <a className="text-[150px] font-bold font-brand text-white tracking-normal">
              Arthouse
            </a>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default AwsFirstIncubator;
