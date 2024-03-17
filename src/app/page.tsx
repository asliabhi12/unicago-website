import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import UniHome from "@/components/UniHome";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0/0.96] antialiased bg-grid-white/[0.02]" >
    <UniHome/>
    {/* <HeroSection/>
    <FeaturedCourses/> */}
    
    </main>
  );
}
