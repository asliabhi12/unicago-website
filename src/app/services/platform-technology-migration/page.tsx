import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import audienceBuildingData from "@/data/platform-technology-migration.json";

const ServicePage = () => {
  return <ServicePageTemplate data={audienceBuildingData} />;
};

export default ServicePage;