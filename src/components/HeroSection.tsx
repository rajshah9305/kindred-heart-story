import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-tribute.jpg";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/40 via-accent/20 to-background" />
      </div>
      
      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground drop-shadow-lg">
          A Light That Never Fades
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/95 drop-shadow-md leading-relaxed">
          A tribute to those who rise above darkness, inspire countless hearts, and remind us that hope is eternal
        </p>
        <div className="mt-12 inline-block">
          <div className="w-1 h-16 bg-primary mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};
