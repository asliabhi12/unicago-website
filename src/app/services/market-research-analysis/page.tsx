import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import marketResearchData from "@/data/market-research-analysis.json";

const MarketResearchPage = () => {
  return <ServicePageTemplate data={marketResearchData} />;
};

export default MarketResearchPage;