import Mission from "@/components/Mission";
import Services from "@/components/Services"
import { AuroraBackground } from "@/components/ui/aurora-background"
import HeroSection from "@/components/UniHome"
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0/0.96] antialiased bg-grid-white/[0.02]" >
    
    <AuroraBackground>
    <Services/>
    </AuroraBackground>
    
    {/* <FeaturedCourses/> */}
    </main>
 
  );
}
