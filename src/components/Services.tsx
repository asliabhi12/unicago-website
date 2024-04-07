"use client";

import { motion } from "framer-motion";
import React from "react";
import { MeteorsDemo } from "./MeteorDemo";

export default function AuroraBackgroundDemo() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      // className="relative flex md:flex-center flex-col md:justify-start xl:justify-center items-center"
      className="relative flex flex-col md:flex-row md:flex-center md:flex-wrap md:justify-center xl:justify-center items-center"
    >
      <div className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent text-center md:text-left bg-gradient-to-b from-neutral-50 to-neutral-400 w-1/2">
        Take your Start-up to The Next Level with{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-teal-50 to-blue-400">Unicago</span>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Market Ready Product in just 101 days
        </div>
      </div>
      <MeteorsDemo />
    </motion.div>
  );
}
