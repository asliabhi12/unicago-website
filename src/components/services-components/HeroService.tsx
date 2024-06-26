import React from 'react'

interface HeroServiceProps {
  content: {
    title: string;
    description: string;
  };
}

const HeroService: React.FC<HeroServiceProps> = ({ content })  => {
  return (
    <div className="relative flex flex-col px-20 py-20 min-h-min text-center items-center">
        <h2 className="  text-3xl  md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          {content.title}
        </h2>
        <h3 className=" text-xl  md:text-xl font-bold bg-clip-text max-w-[80%] text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
          {content.description}
        </h3>
      </div>
  )
}

export default HeroService