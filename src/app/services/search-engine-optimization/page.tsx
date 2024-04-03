import React from "react";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import audienceBuildingData from "@/data/s-e-o.json";

const ServicePage = () => {
  return <ServicePageTemplate data={audienceBuildingData} />;
};

export default ServicePage;