import { AuroraBackground } from "@/components/ui/aurora-background";
import { Hero } from "@/components/ui/animated-hero";
import { Features } from "@/components/Features";
import { BrandsSection } from "@/components/brandCarasoul";
import { Cards } from "@/components/cardSection";
import { AIStoriesGallery } from "@/components/StoryGallery";

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

        {/* Stories Component - ADD THIS ID */}
      <section id="ai-stories-section">
        <AIStoriesGallery />
      </section>

      {/* BrandsSection Component - ADD THIS ID */}
      <section id="brands-section">
        <BrandsSection />
      </section>
    </AuroraBackground>
  );
};

export default Index;

