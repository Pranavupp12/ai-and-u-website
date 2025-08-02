import { AuroraBackground } from "@/components/ui/aurora-background";
import { Hero } from "@/components/ui/animated-hero";
import { Features } from "@/components/Features";
import { BrandsSection } from "@/components/brandCarasoul";
import { Cards } from "@/components/cardSection";
import { ModelPerformanceMetrics } from "@/components/ModelMetrics";
import { AIUFooter } from "@/components/AiuFooter";


const Index = () => {
  return (
    <AuroraBackground>
      
      {/* Hero section - contains your AIChatInput */}
      <section>
        <Hero />
      </section>

      {/* Features Component - ADD THIS ID */}
      <section id="features-section">
        <Features />
      </section>

      {/* Cards Component - ADD THIS ID */}
      <section id="cards-section">
        <Cards />
      </section>

       {/* Cards Component - ADD THIS ID */}
      <section id="performance-section">
        <ModelPerformanceMetrics/>
      </section>

      {/* BrandsSection Component - ADD THIS ID */}
      <section id="brands-section">
        <BrandsSection />
      </section>

     <AIUFooter/>

    </AuroraBackground>
  );
};

export default Index;

