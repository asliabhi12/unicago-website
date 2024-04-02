import React from "react";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col justify-center  min-h-min px-20 py-20">
      <h2 className="text-center  text-3xl  md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Discover Insights and Opportunities through Extensive Market Research
      </h2>
      <div className="relative flex flex-col md:flex-row justify-around mt-10 min-h-min gap-5   ">
        <div className="p-10 rounded-lg flex flex-col justify-center items-center bg-gray-900 text-center">
          <img src="/assets/analysis.svg" style={{height:"50px", width:"50px" ,fill:"white"}} alt="hello"  />
          <div className="mt-5 text-xl">Analyze Data to Drive Strategic Decision Making</div>
          <div className="mt-5"><p>Our research and analysis process involves collecting and analyzing data from various sources to provide valuable insights and recommendations.</p></div>
        </div>
        <div className="p-10 rounded-lg flex flex-col justify-center items-center bg-gray-900 text-center">
          <img src="/assets/analysis.svg" style={{height:"50px", width:"50px" ,fill:"white"}} alt="hello"  />
          <div className="mt-5 text-xl">Analyze Data to Drive Strategic Decision Making</div>
          <div className="mt-5"><p>Our research and analysis process involves collecting and analyzing data from various sources to provide valuable insights and recommendations.</p></div>
        </div>
        <div className="p-10 rounded-lg flex flex-col justify-center items-center bg-gray-900 text-center">
          <img src="/assets/analysis.svg" style={{height:"50px", width:"50px" ,fill:"white"}} alt="hello"  />
          <div className="mt-5 text-xl">Analyze Data to Drive Strategic Decision Making</div>
          <div className="mt-5"><p>Our research and analysis process involves collecting and analyzing data from various sources to provide valuable insights and recommendations.</p></div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
