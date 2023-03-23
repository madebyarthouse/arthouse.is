"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { useEffect, useState } from "react";

const variants = [
  "creatives",
  "developers",
  "photo&shy;graphers",
  "designers",
  "content creators",
  "writers",
  "strategists",
  "artists",
  "internet junkies",
  "Arthouse",
] as const;

export default function ComingSoonPage() {
  const [current, setCurrent] = useState(0);
  const [entryDone, setEntryDone] = useState(false);

  useEffect(() => {
    if (current < variants.length - 1 && !entryDone) {
      setTimeout(() => {
        if (entryDone) return;

        setCurrent(current + 1);
      }, 1250 + (current === 0 ? 1250 : 0) - current * 100);
    }
  }, [current]);

  useEffect(() => {
    if (current === variants.length - 1) {
      setTimeout(() => {
        setEntryDone(true);
      }, 1000);
    }
  }, [current]);

  useEffect(() => {
    if (window.location.hash === "#entered") {
      setEntryDone(true);
      setCurrent(variants.length - 1);
    }
  }, []);

  return (
    <>
      <span className="transform-gpu mix-blend-color-burn bg-red-400/70 rounded-[100px] gate-open-top" />
      <span className="transform-gpu mix-blend-color-burn bg-green-400/70 rounded-[100px] gate-open-bottom" />
      <span className="transform-gpu mix-blend-color-burn bg-purple-400/70 rounded-[100px] gate-open-right" />
      <span className="transform-gpu mix-blend-color-burn bg-amber-400/70 rounded-[100px] gate-open-left" />
      <div
        className={clsx(
          "max-w-[95%] mx-auto relative z-20 px-5 py-10 md:px-10 lg:p-20 rounded-lg text-center text-gray-800/80 flex flex-col justify-center items-center",
          entryDone && "bg-white/80"
        )}
      >
        {entryDone && (
          <>
            {" "}
            <motion.span
              layout
              className="transform-gpu shadow-lg mix-blend-darken border-entry-top bg-green-200 shadow-green-200"
            />
            <motion.span
              layout
              className=" shadow-lg mix-blend-darken border-entry-bottom bg-red-200 shadow-red-200"
            />
            <motion.span
              layout
              className="transform-gpu shadow-lg mix-blend-darken border-entry-right bg-amber-200 shadow-amber-200"
            />
            <motion.span
              layout
              className="transform-gpu shadow-lg mix-blend-darken border-entry-left bg-purple-200 shadow-purple-200"
            />
          </>
        )}

        <motion.div
          transition={{
            delay: 1.2,
          }}
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          className="flex text-left flex-col items-center gap-1"
        >
          <motion.span
            layout
            className="font-semibold font-brand text-2xl md:text-4xl"
          >
            We are
          </motion.span>
          <motion.h1
            layout
            initial={{ opacity: entryDone ? 1 : 0, y: entryDone ? 0 : 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            key={current}
            style={{
              hyphens: "auto",
            }}
            className="font-semibold break-words font-brand text-6xl sm:text-7xl md:text-9xl text-center leading-tight tracking-wide"
            dangerouslySetInnerHTML={{
              __html: variants[entryDone ? variants.length - 1 : current],
            }}
          ></motion.h1>
        </motion.div>

        <AnimatePresence>
          {!entryDone && (
            <motion.a
              layout
              transition={{
                delay: 2,
              }}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 0,
                transition: {
                  duration: 0.1,
                },
              }}
              className="font-semibold active:scale-95 mt-2 fixed bottom-10 font-body text-gray-800/40 hover:text-gray-800/80 text-2xl"
              href="#entered"
              onClick={(e) => {
                e.preventDefault();
                setEntryDone(true);
                setCurrent(variants.length - 1);
              }}
            >
              Skip
            </motion.a>
          )}
        </AnimatePresence>

        {entryDone && (
          <motion.div
            layout
            className="mt-8"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.25,
              },
            }}
            exit={{
              opacity: 0,
              y: 50,
            }}
          >
            <hr className="my-5 w-1/2 mx-auto border-t middle-slide-out border-gray-800/80" />

            <h3 className="!leading-7 text-xl md:text-3xl text-center font-regular font-body">
              A boutique digital product studio <br /> based in Vienna, Austria.
            </h3>

            <hr className="my-5 w-1/2 mx-auto border-t middle-slide-out border-gray-800/80" />

            <a
              className="font-semibold active:scale-95 mt-2 relative focus-visible:outline-none text-2xl md:text-3xl inline-block group"
              href="mailto:christian.cito@arthouse.is?subject=Work with us"
            >
              <span>Work with us!</span>
              <span className="absolute left-0 bottom-0 scale-x-0 will-change-transform transform-gpu origin-center group-active:scale-x-100 group-focus-visible:scale-x-100 group-hover:scale-x-100 transition-all duration-300 ease-in-out border-b-2 border-gray-800/80 w-full" />
            </a>

            <ul className="flex gap-2 justify-center items-center mt-7">
              <li className="relative">
                <a
                  href="https://twitter.com/madebyarthouse"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="p-2 z-10 rounded-full active:scale-95 overflow-clip group border border-[#00acee] block"
                >
                  <TwitterIcon
                    size={20}
                    className="z-30 relative transition-colors group-hover:text-white group-active:text-white group-focus-visible:text-white text-[#00acee]"
                  />
                  <span className="absolute inset-0 z-20 transition-all rounded-full scale-0 group-focus-visible:scale-100 group-hover:scale-100 group-active:scale-90 bg-[#00acee]" />
                </a>
              </li>
              <li className="relative">
                <a
                  href="https://github.com/madebyarthouse"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="p-2 z-10 rounded-full active:scale-95 overflow-clip group border border-[#171515] block"
                >
                  <GithubIcon
                    size={20}
                    className="z-30 relative transition-colors group-hover:text-white group-active:text-white group-focus-visible:text-white text-[#171515]"
                  />
                  <span className="absolute inset-0 z-20 transition-all rounded-full scale-0 group-focus-visible:scale-100 group-hover:scale-100 group-active:scale-90 bg-[#171515]" />
                </a>
              </li>
              <li className="relative">
                <a
                  href="https://linkedin.com/company/madebyarthouse"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="p-2 z-10 rounded-full active:scale-95 overflow-clip group border border-[#0072b1] block"
                >
                  <LinkedinIcon
                    size={20}
                    className="z-30 relative transition-colors group-hover:text-white group-active:text-white group-focus-visible:text-white text-[#0072b1]"
                  />
                  <span className="absolute inset-0 z-20 transition-all rounded-full scale-0 group-focus-visible:scale-100 group-hover:scale-100 group-active:scale-90 bg-[#0072b1]" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
}
