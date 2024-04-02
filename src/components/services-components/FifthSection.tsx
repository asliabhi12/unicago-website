import React from "react";
import Image from "next/image";

const FifthSection = () => {
  return (
    <div className="relative flex flex-row justify-around  min-h-min px-20 py-20">
      <div className="w-1/2 ">
        <h2 className="  text-3xl text-left md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Gain Insight into Your Competitors
        </h2>
        <p className="py-2">
          Our competitive analysis helps you understand the strengths and
          weaknesses of your competitors, enabling you to make informed business
          decisions.
        </p>
        <div className="relative flex flex-col md:flex-row justify-around mt-10 min-h-min gap-5   ">
          
        </div>
      </div>
      <div className="">
        <Image
          src="/assets/empower.jpg"
          alt="blog thumbnail"
          height="500"
          width="400"
          className="rounded-lg "
        />
      </div>
    </div>
  );
};

export default FifthSection;
