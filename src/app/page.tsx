import Services from "@/components/Services"
import { AuroraBackground } from "@/components/ui/aurora-background"
import ServicesCards from '@/components/ServicesCards'
import Testimonials from '@/components/Testimonials'
import ServiceParalax from "@/components/ServicesParalax"
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0/0.96] antialiased bg-grid-white/[0.02]" >
    
    <AuroraBackground>
    <Services/>
    </AuroraBackground>
    
    <h2 className=" mt-20 md:mt-5 lg:ml-[190px] ml-10 text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Sevices</h2>
    <ServicesCards/>
    <ServiceParalax/>
    <Testimonials/>
    <Footer/>
    
    </main>
 
  );
}
