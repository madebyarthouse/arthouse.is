"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";

const variants = [
  "developers",
  "designers",
  "writers",
  "photographers",
  "internet junkies",
  "Arthouse",
] as const;

export default function ComingSoonPage() {
  const [current, setCurrent] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useLayoutEffect(() => {
    if (current < variants.length - 1) {
      setTimeout(() => {
        setCurrent(current + 1);
      }, 2000);
    }
  }, [current]);

  useEffect(() => {
    if (current === variants.length - 1) {
      setTimeout(() => {
        setShowAll(true);
      }, 2000);
    }
  }, [current]);

  return (
    <>
      <span className="transform-gpu mix-blend-color-burn bg-red-400/70 rounded-[100px] gate-open-top" />
      <span className="transform-gpu mix-blend-color-burn bg-green-400/70 rounded-[100px] gate-open-bottom" />
      <span className="transform-gpu mix-blend-color-burn bg-purple-400/70 rounded-[100px] gate-open-right" />
      <span className="transform-gpu mix-blend-color-burn bg-amber-400/70 rounded-[100px] gate-open-left" />
      <div
        className={clsx(
          "max-w-[95%] mx-auto relative z-20 p-5 lg:p-20 rounded-lg text-center text-gray-800/80",
          showAll && "bg-white/80"
        )}
      >
        {showAll && (
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
            delay: 2.5,
          }}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="flex text-left flex-col items-center gap-1"
        >
          <span className="font-semibold font-brand text-4xl">We are</span>
          {/* <AnimatePresence mode="wait"> */}
          <motion.h1
            layout
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            key={current}
            className="font-semibold font-brand text-7xl md:text-9xl text-center leading-tight"
          >
            {variants[current]}
          </motion.h1>
          {/* </AnimatePresence> */}
        </motion.div>

        {showAll && (
          <motion.div
            className="mt-8"
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
              y: -25,
            }}
          >
            <hr className="my-5 w-1/2 mx-auto border-t middle-slide-out border-gray-800/80" />

            <h3 className="!leading-7 text-xl md:text-2xl text-center font-regular font-body">
              A botique digital product studio <br /> based in Vienna, Austria.
            </h3>

            <hr className="my-5 w-1/2 mx-auto border-t middle-slide-out border-gray-800/80" />

            <a
              className="font-semibold active:scale-95 relative text-3xl inline-block group"
              href="mailto:christian.cito@arthouse.is?subject=Work with us"
            >
              <span>Work with us!</span>
              <span className="absolute left-0 bottom-0 scale-x-0 will-change-transform transform-gpu origin-bottom-left group-hover:scale-x-100 transition-all duration-300 ease-in-out border-b-2 border-gray-800/80 w-full" />
            </a>
          </motion.div>
        )}
      </div>
    </>
  );
}
