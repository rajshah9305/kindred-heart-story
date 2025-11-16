import { useEffect, useRef, useState } from "react";

const impacts = [
  {
    number: "01",
    title: "TOUCHED HEARTS",
    description: "Countless lives forever changed by compassion and kindness"
  },
  {
    number: "02",
    title: "INSPIRED DREAMS",
    description: "Sparked hope in those who thought their light had gone out"
  },
  {
    number: "03",
    title: "BUILT COMMUNITY",
    description: "United people from all walks of life through shared purpose"
  },
  {
    number: "04",
    title: "CREATED LEGACY",
    description: "Left footprints that continue to guide others forward"
  }
];

export const LegacySection = () => {
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
      id="legacy"
      ref={ref}
      className="py-32 px-4 border-t border-border/30 bg-card/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-6 py-2 border border-primary/30 rounded-sm mb-8">
            <span className="text-xs tracking-widest text-primary/70">THE IMPACT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            THE ETERNAL LEGACY
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={impact.title}
              className={`group relative p-8 border border-border/30 rounded-sm transition-all duration-700 hover:border-primary/50 hover:bg-card/50 hover:shadow-soft ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                  {impact.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-4 tracking-wider">
                {impact.title}
              </h3>
              <div className="w-12 h-px bg-primary/30 group-hover:bg-primary/50 transition-colors mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
