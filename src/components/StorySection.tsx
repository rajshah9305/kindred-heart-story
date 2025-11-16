import { useEffect, useRef, useState } from "react";

interface StorySectionProps {
  title: string;
  subtitle?: string;
  content: string;
  image?: string;
  reverse?: boolean;
}

export const StorySection = ({ title, subtitle, content, image, reverse = false }: StorySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="story"
      ref={ref}
      className="py-32 px-4 border-t border-border/30"
    >
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
        {image && (
          <div className={`${reverse ? 'md:col-start-2' : ''} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 border border-primary/20 rounded-sm transition-colors duration-300 group-hover:border-primary/40" />
              <img 
                src={image} 
                alt={title}
                className="relative rounded-sm w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        )}
        <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-30px]'}`}>
          {subtitle && (
            <div className="inline-block px-4 py-1 border border-primary/30 rounded-sm">
              <span className="text-xs tracking-widest text-primary/70">{subtitle}</span>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            {title}
          </h2>
          <div className="w-16 h-px bg-primary/50" />
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};
