import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { QuoteSection } from "@/components/QuoteSection";
import { LegacySection } from "@/components/LegacySection";
import { VideoSection } from "@/components/VideoSection";
import { MemorialMessages } from "@/components/MemorialMessages";
import { Navigation } from "@/components/Navigation";
import hopeLight from "@/assets/hope-light.jpg";
import journeyTogether from "@/assets/journey-together.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      <StorySection
        subtitle="THE BEGINNING"
        title="WHERE IT ALL STARTED"
        content="In a world where darkness threatened to consume all light, one soul refused to surrender to despair. Through trials that would break the strongest spirits, they found a way to transform pain into purpose, fear into courage, and doubt into unwavering determination. This is not just a story of survival—it's a testament to the indomitable human spirit."
        image={hopeLight}
      />

      <QuoteSection
        quote="The darkest nights produce the brightest stars, and the deepest struggles forge the strongest souls."
        author="ANCIENT WISDOM"
      />

      <StorySection
        subtitle="THE JOURNEY"
        title="RISING FROM THE ASHES"
        content="Every step forward was a battle won. Every sunrise witnessed was a victory claimed. Through unwavering faith and relentless perseverance, they discovered that true strength isn't the absence of fear—it's the courage to move forward despite it. They learned that falling down wasn't failure; staying down was. And so they rose, again and again, becoming a beacon for others lost in their own darkness."
        image={journeyTogether}
        reverse
      />

      <LegacySection />

      <VideoSection />

      <MemorialMessages />

      <QuoteSection
        quote="We rise by lifting others, and in doing so, we discover that our purpose was never just about us—it was about becoming the light we needed when we were in darkness."
        author="THE LEGACY"
      />

      <section className="py-32 px-4 text-center border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 border border-primary/30 rounded-sm mb-8">
              <span className="text-xs tracking-widest text-primary/70">FOREVER REMEMBERED</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            THE LIGHT CONTINUES
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
            Though one flame may fade, the light it kindled in countless hearts burns eternal. 
            This tribute stands as a reminder that true impact transcends time, and inspiration knows no end.
          </p>
        </div>
      </section>

      <footer className="border-t border-border/30 py-12 px-4 bg-card/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground tracking-wider">
            A TRIBUTE TO THE UNBREAKABLE SPIRIT
          </p>
          <p className="text-xs text-muted-foreground/70 mt-4">
            © {new Date().getFullYear()} • Forever In Our Hearts
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
