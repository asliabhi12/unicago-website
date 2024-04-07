import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import audienceBuildingData from "@/data/audience-building.json";

const MarketResearchPage = () => {
  return <ServicePageTemplate data={audienceBuildingData} />;
};

export default MarketResearchPage;