import { AuroraBackground } from "@/components/ui/aurora-background";
import { Hero } from "@/components/ui/animated-hero";
import { Navbar } from "@/components/Navbar";
import { Features } from "@/components/Features";
import { BrandsSection } from "@/components/brandCarasoul";
import { Cards } from "@/components/cardSection";

const Index = () => {
  return (
    <AuroraBackground>
      <Navbar />
      <Hero />
      <Features/>
      <Cards/>
      <BrandsSection/>
    </AuroraBackground>
  );
};

export default Index;
