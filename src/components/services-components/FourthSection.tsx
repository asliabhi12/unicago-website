import React from "react";
import Image from "next/image";

interface Props {
  content: {
    title: string;
    description: string;
  };
}

const FourthSection: React.FC<Props> = ({ content }) => {
  return (
    <div className="relative flex flex-col md:flex-row gap-10 justify-around md:text-left text-center items-center min-h-min bg-gray-900 md:px-8 px-8 py-20">
      <div className="">
        <Image
          src="/assets/insights.webp"
          alt="blog thumbnail"
          height="500"
          width="400"
          className="rounded-lg "
        />
      </div>
      <div className="md:w-1/2 ">
        <h2 className="  text-3xl  md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          {content.title}
        </h2>
        <p className="py-2">{content.description}</p>
        <div className="flex flex-col items-center md:flex-row py-2 space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Learn more
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
