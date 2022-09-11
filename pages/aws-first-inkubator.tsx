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

      <Layout bgClass="aws-bg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            type: "tween",
            ease: "easeOut",
          }}
          className="bg-neutral-200 w-full sm:max-w-lg md:max-w-3xl lg:max-w-5xl  py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-opacity-40 backdrop-blur-lg drop-shadow-lg gap-y-20 flex flex-col selection:bg-[#00377a] selection:text-white"
        >
          <h1 className="inline-flex flex-col md:flex-row gap-y-3 md:gap-x-10 items-center justify-center">
            <Link href="/">
              <a className="text-6xl font-bold font-brand ">Arthouse</a>
            </Link>
            <span className="text-2xl font-bold">x</span>
            <a
              href="https://www.aws.at/aws-first-inkubator/"
              className="bg-[#00377a] h-[120px] flex items-center justify-center px-7"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className=""
                priority
                src="/images/aws-logo.svg"
                height={70}
                width={302}
                alt="aws austria wirtschaftsservice"
              />
            </a>
          </h1>

          <section className="">
            <motion.div
              initial={{
                opacity: 0,
                filter: "brightness(1) blur(20px)",
                shadow: "0 0 0 0 rgba(0,0,0,0.5)",
              }}
              animate={{
                opacity: [1, 1],
                shadow: [
                  "2px 2px 2px 2px rgba(0,0,0,0.5)",
                  "2px 2px 2px 50px rgba(0,0,0,0.5)",
                ],
                filter: ["brightness(2) blur(10px)", "brightness(1) blur(0px)"],
              }}
              transition={{ duration: 0.5, delay: 1, times: [0, 0.3, 1] }}
              onClick={() => setShowCover(false)}
              className="relative aspect-video w-full cursor-pointer group"
            >
              <AnimatePresence>
                {showCover && (
                  <motion.div
                    exit={{
                      opacity: [1, 0],
                      filter: [
                        "brightness(1) blur(0px)",
                        "brightness(2) blur(10px)",
                      ],
                    }}
                    transition={{ duration: 0.5, times: [0, 0.1, 1] }}
                    className="absolute inset-0 z-20"
                  >
                    <Image
                      priority
                      src="/images/video-cover.png"
                      layout="fill"
                      alt="Play"
                      className=""
                    />
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.4 }}
                    >
                      <FaPlayCircle className="absolute  inset-0 m-auto text-[#00377a] drop-shadow-md backdrop-brightness-25  text-7xl group-hover:scale-110 transition-transform duration-300" />
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              <iframe
                src="https://player.vimeo.com/video/425080030?h=c1cb146ed6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                className="absolute inset z-10 w-full h-full"
                title="Small short test video"
              ></iframe>
            </motion.div>
            <Script src="https://player.vimeo.com/api/player.js"></Script>
          </section>
        </motion.div>
      </Layout>
    </>
  );
};

export default AwsFirstIncubator;
