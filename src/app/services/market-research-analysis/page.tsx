import React from "react";

import HeroService from "@/components/services-components/HeroService";
import SecondarySection from "@/components/services-components/SecondarySection";
import ThirdSection from "@/components/services-components/ThirdSection";
import FourthSection from "@/components/services-components/FourthSection";
import FifthSection from "@/components/services-components/FifthSection";
import SixthSection from "@/components/services-components/SixthSection";
import Footer from "@/components/Footer";

const MarketResearchPage = () => {
  return (
    <main className="min-h-screen bg-black/[0/0.96] antialiased bg-grid-white/[0.02]">
      <HeroService/>
      <SecondarySection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <Footer/>
    </main>
  );
};

export default MarketResearchPage;
