import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { QuoteSection } from "@/components/QuoteSection";
import { LegacySection } from "@/components/LegacySection";
import hopeLight from "@/assets/hope-light.jpg";
import journeyTogether from "@/assets/journey-together.jpg";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <StorySection
        title="The Beginning"
        content="Every great story begins in darkness. When shadows seemed overwhelming and the path forward invisible, one soul chose to light a candle rather than curse the darkness. What started as a small flicker of hope grew into a beacon that guided thousands out of their own struggles."
        image={hopeLight}
      />

      <QuoteSection
        quote="In the depth of winter, I finally learned that within me there lay an invincible summer."
        author="Albert Camus"
      />

      <StorySection
        title="The Journey"
        content="The road was never easy. Each step forward required courage most could only dream of. But through perseverance, authenticity, and an unwavering belief in the goodness of humanity, mountains were moved. Not through force, but through the gentle, persistent power of compassion and understanding."
        image={journeyTogether}
        reverse
      />

      <LegacySection />

      <section className="py-20 px-4 text-center bg-gradient-warm">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Light Lives On
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Though storms may rage and darkness may fall, the light that was kindled continues to burn bright. 
            In every heart touched, every dream inspired, every life transformed—the legacy endures. 
            This is not an ending, but an eternal beginning.
          </p>
          <div className="pt-8">
            <p className="text-2xl font-semibold text-primary italic">
              Forever remembered. Forever cherished. Forever inspiring.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-accent text-accent-foreground text-center">
        <p className="text-sm">
          A tribute created with love and gratitude
        </p>
      </footer>
    </main>
  );
};

export default Index;
