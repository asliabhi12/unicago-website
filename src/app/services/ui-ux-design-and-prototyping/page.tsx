import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import audienceBuildingData from "@/data/ui-ux-prototyping.json";

const ServicePage = () => {
  return <ServicePageTemplate data={audienceBuildingData} />;
};

export default ServicePage;