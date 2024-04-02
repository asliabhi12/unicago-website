import React from "react";
import Image from "next/image";

const FourthSection = () => {
  return (
    <div className="relative flex flex-row justify-around  min-h-min bg-gray-900 px-20 py-20">
      <div className="">
        <Image
          src="/assets/insights.webp"
          alt="blog thumbnail"
          height="500"
          width="400"
          className="rounded-lg "
        />
      </div>
      <div className="w-1/2 ">
        <h2 className="  text-3xl text-left md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Customized Market Insights for Your Business
        </h2>
        <p className="py-2">
        At Unicago, we understand that every business is unique. That's why we offer customized market insights tailored to your specific needs and goals. Our team of experts will analyze market trends, consumer behavior, and competitor strategies to provide you with actionable recommendations that will help your startup grow exponentially.
        </p>
        <div className="flex flex-col md:flex-row py-2 space-y-4 md:space-y-0 space-x-0 md:space-x-4">
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
