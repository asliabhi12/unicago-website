import React from "react";
import Image from "next/image";

interface Props {
  content: {
    title: string;
    description: string;
  };
}

const FifthSection: React.FC<Props> = ({ content })  => {
  return (
    <div className="relative flex flex-row justify-around  min-h-min px-20 py-20">
      <div className="w-1/2 ">
        <h2 className="  text-3xl text-left md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          {content.title}
        </h2>
        <p className="py-2">
          {content.description}
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
