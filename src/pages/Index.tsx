import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { QuoteSection } from "@/components/QuoteSection";
import { LegacySection } from "@/components/LegacySection";
import hopeLight from "@/assets/hope-light.jpg";
import journeyTogether from "@/assets/journey-together.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      
      <StorySection
        subtitle="CHAPTER ONE"
        title="THE BEGINNING"
        content="Every great story begins in darkness. When shadows seemed overwhelming and the path forward invisible, one soul chose to light a candle rather than curse the darkness. What started as a small flicker of hope grew into a beacon that guided thousands out of their own struggles. Through vulnerability and authenticity, a movement was born—not through proclamations, but through quiet, steadfast presence."
        image={hopeLight}
      />

      <QuoteSection
        quote="In the depth of winter, I finally learned that within me there lay an invincible summer."
        author="Albert Camus"
      />

      <StorySection
        subtitle="CHAPTER TWO"
        title="THE JOURNEY"
        content="The road was never easy. Each step forward required courage most could only dream of. But through perseverance, authenticity, and an unwavering belief in the goodness of humanity, mountains were moved. Not through force, but through the gentle, persistent power of compassion and understanding. Every setback became a lesson, every challenge an opportunity to demonstrate that true strength lies not in never falling, but in rising every time we do."
        image={journeyTogether}
        reverse
      />

      <LegacySection />

      <section className="py-32 px-4 text-center border-t border-border/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="inline-block px-6 py-2 border border-primary/30 rounded-sm">
            <span className="text-xs tracking-widest text-primary/70">FOREVER</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
            THE LIGHT<br />LIVES ON
          </h2>
          
          <div className="w-20 h-px bg-primary/50 mx-auto" />
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Though storms may rage and darkness may fall, the light that was kindled continues to burn bright. 
            In every heart touched, every dream inspired, every life transformed—the legacy endures. 
            This is not an ending, but an eternal beginning.
          </p>
          
          <div className="pt-12 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-primary/30" />
              <span className="text-sm tracking-widest text-primary">★</span>
              <div className="w-16 h-px bg-primary/30" />
            </div>
            <p className="text-lg font-light text-primary/80 italic tracking-wide">
              Forever remembered · Forever cherished · Forever inspiring
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/30 text-center">
        <p className="text-xs tracking-widest text-muted-foreground/60">
          A TRIBUTE CREATED WITH LOVE AND GRATITUDE
        </p>
      </footer>
    </main>
  );
};

export default Index;
