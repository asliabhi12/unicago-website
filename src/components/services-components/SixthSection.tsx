import React from "react";

const SixthSection = () => {
  return (
    <div className="relative flex flex-row flex-between px-[8rem] py-20 min-h-min bg-gray-900">
      <div className="md:min-w-[80%]">
        <h2 className="  text-3xl text-left md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Supercharge Your Startup's Growth
        </h2>
        <h3 className=" text-xl text-left md:text-xl font-bold bg-clip-text  text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
          Unlock the Potential of Your Startup with Unicago
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center py-2 space-y-4 space-x-0 ">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Learn more
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signup
          </button>
        </div>
    </div>
  );
};

export default SixthSection;
