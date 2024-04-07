import Image from "next/image";
import React from "react";

interface ThirdSectionData {
  title: string;
  subgroups: Subgroup[];
}

interface Subgroup {
  title: string;
  subtitle: string;
  id: number;
}

const ThirdSection: React.FC<{ content: ThirdSectionData }> = ({ content }) => {
  return (
    <div className="relative flex flex-col justify-center min-h-min px-8 md:px-20 py-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        {content.title}
      </h2>
      <div className="relative flex flex-col md:flex-row justify-around mt-10 min-h-min gap-5">
        {content.subgroups.map((subgroup) => (
          <div key={subgroup.id} className="p-10 rounded-lg flex flex-col justify-center items-center bg-gray-900 text-center">
            <Image src="/assets/analysis.svg" style={{ fill: "white" }} height={50} width={50} alt="hello" />
            <div className="mt-5 text-xl">{subgroup.title}</div>
            <div className="mt-5"><p>{subgroup.subtitle}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;