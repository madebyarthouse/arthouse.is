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

      <Layout bgClass="aws-bg flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            type: "tween",
            ease: "easeOut",
          }}
          className="w-full max-w-full sm:max-w-lg md:max-w-3xl lg:max-w-4xl flex flex-col selection:bg-[#00377a] selection:text-white bg-[#00377a] drop-shadow-lg"
        >
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
                filter: [
                  "brightness(1.2) blur(10px)",
                  "brightness(1) blur(0px)",
                ],
              }}
              transition={{ duration: 0.5, delay: 1, times: [0, 0.3, 1] }}
              onClick={() => setShowCover(false)}
              className="relative aspect-video w-full cursor-pointer group overflow-clip"
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
                    className="absolute inset-0 z-20 scale-105"
                  >
                    <Image
                      priority
                      src="/images/video-cover.png"
                      layout="fill"
                      alt="Play"
                      className="w-full max-w-full"
                    />
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.4 }}
                    >
                      <FaPlayCircle className="absolute  inset-0 m-auto text-neutral-100 drop-shadow-sm backdrop-brightness-25  text-5xl group-hover:scale-110 transition-transform duration-300" />
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              <iframe
                src="https://player.vimeo.com/video/748960816?h=17b0389e82&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset z-10 w-full h-full"
                title="Small short test video"
              ></iframe>
            </motion.div>
            <Script
              strategy="lazyOnload"
              src="https://player.vimeo.com/api/player.js"
            ></Script>
          </section>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-10">
          <a
            href="/videos/arthouse-aws-first-inkubator.mp4"
            // eslint-disable-next-line react/no-unknown-property
            download
            className="block bg-white text-[#00377a] font-bold text-center py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Download
          </a>

          <input
            type="text"
            name="direct_link"
            readOnly
            value="https://vimeo.com/748960816"
            className="block bg-white text-[#00377a] w-full sm:w-[30ch] max-w-full font-bold text-center py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </Layout>
    </>
  );
};

export default AwsFirstIncubator;
