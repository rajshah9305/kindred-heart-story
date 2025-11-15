import { useEffect, useRef, useState } from "react";
import { Heart, Star, Users, Sparkles } from "lucide-react";

const impacts = [
  {
    icon: Heart,
    title: "Touched Hearts",
    description: "Countless lives forever changed by compassion and kindness"
  },
  {
    icon: Star,
    title: "Inspired Dreams",
    description: "Sparked hope in those who thought their light had gone out"
  },
  {
    icon: Users,
    title: "Built Community",
    description: "United people from all walks of life through shared purpose"
  },
  {
    icon: Sparkles,
    title: "Created Legacy",
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
      ref={ref}
      className="py-20 px-4 bg-gradient-hero"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Eternal Impact
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={impact.title}
                className={`text-center p-6 rounded-xl bg-card shadow-soft transition-all duration-1000 hover:shadow-lg hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {impact.title}
                </h3>
                <p className="text-muted-foreground">
                  {impact.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
