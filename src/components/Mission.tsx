"use client";

import { Spotlight } from "./ui/Spotlight";


function Mission() {
  return (
    
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative  mx-auto py-10 md:py-0">
      <Spotlight
        fill="white"
        className="-top-40 left-0 md:left-60 md:-top-20 z-1"
      />
      <div className="p-4 relative w-full text-center z-10">
        <h1 className=" mt-20 md:mt-0 text-3xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Our Mission
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          At Unicago, we're driven by a simple yet powerful mission: to create
          technology that feels natural and improves lives. Our products are
          designed to reconnect us with ourselves, bring us closer together, and
          foster trust and joy in every interaction. We believe that everyone
          deserves technology that makes life better.
        </p>
      </div>
    </div>

  );
}

export default Mission;
