import React from 'react'
import Image from "next/image";
const SecondarySection = () => {
  return (
    <div className="relative flex flex-row justify-around  min-h-min bg-gray-900 px-20 py-20">
        <div className="w-1/2 ">
          <h2 className="  text-3xl text-left md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Accelerate Your Startup's Growth with Unicago
          </h2>
          <p className="py-2">
            Unicago offers market research and analysis services that can help
            your startup grow exponentially. Our team of experts will conduct
            in-depth research and provide valuable insights to guide your
            business strategy. With Unicago, you can make data-driven decisions
            and stay ahead of the competition.
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
  )
}

export default SecondarySection