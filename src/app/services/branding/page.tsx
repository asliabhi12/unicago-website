import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import audienceBuildingData from "@/data/branding.json";

const ServicePage = () => {
  return <ServicePageTemplate data={audienceBuildingData} />;
};

export default ServicePage;