import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(160_35%_20%_/_0.3)_0%,_transparent_70%)]" />
      </div>
      
      <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-8">
          <div className="inline-block px-6 py-2 border border-primary/40 rounded-sm mb-8">
            <span className="text-sm tracking-widest text-primary/80">A TRIBUTE</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-primary leading-tight">
          A LIGHT THAT<br />NEVER FADES
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Honoring those who rise above darkness, inspire countless hearts,<br className="hidden md:block" />
          and remind us that hope is eternal
        </p>
        
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="w-px h-24 bg-primary/30 animate-pulse" />
          <span className="text-xs tracking-widest text-primary/60">SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
};
