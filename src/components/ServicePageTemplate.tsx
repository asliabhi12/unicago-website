import React from "react";
import HeroService from "@/components/services-components/HeroService";
import SecondarySection from "@/components/services-components/SecondarySection";
import ThirdSection from "@/components/services-components/ThirdSection";
import FourthSection from "@/components/services-components/FourthSection";
import FifthSection from "@/components/services-components/FifthSection";
import SixthSection from "@/components/services-components/SixthSection";
import Footer from "@/components/Footer";

interface ServicePageData {
  Hero: {
    title: string;
    description: string;
  };
  Second: {
    title: string;
    description: string;
  };
  third: {
    title: string;
    subgroups: {
      id: number;
      title: string;
      subtitle: string;
    }[];
  };
  fourth: {
    title: string;
    description: string;
  };
  fifth: {
    title: string;
    description: string;
  };
  sixth: {
    title: string;
    description: string;
  };
}

interface Props {
  data: ServicePageData;
}

const ServicePageTemplate: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  const { Hero, Second, third, fourth, fifth, sixth } = data;

  return (
    <main className="min-h-screen bg-black/[0/0.96] antialiased bg-grid-white/[0.02]">
      <HeroService content={Hero} />
      <SecondarySection content={Second} />
      <ThirdSection content={third} />
      <FourthSection content={fourth} />
      <FifthSection content={fifth} />
      <SixthSection content={sixth} />
      <Footer />
    </main>
  );
};

export default ServicePageTemplate;