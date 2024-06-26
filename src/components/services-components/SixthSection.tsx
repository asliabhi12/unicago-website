import React from "react";

interface Props {
  content: {
    title: string;
    description: string;
  };
}

const SixthSection: React.FC<Props> = ({content}) => {
  return (
    <div className="relative flex flex-col md:flex-row gap-10 justify-around md:text-left text-center items-center min-h-min bg-gray-900 md:px-8 px-8 py-20">
      <div className="md:min-w-[80%]">
        <h2 className="  text-3xl  md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          {content.title}
        </h2>
        <h3 className=" text-xl md:text-xl font-bold bg-clip-text  text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
          {content.description}
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
