import { useEffect, useRef, useState } from "react";

const timelineEvents = [
  {
    year: "2010",
    title: "THE AWAKENING",
    description: "A spark of hope ignited in the darkness, marking the beginning of an extraordinary journey."
  },
  {
    year: "2013",
    title: "FIRST TRIUMPH",
    description: "Against all odds, the first major milestone was achieved, proving that perseverance conquers all."
  },
  {
    year: "2016",
    title: "BUILDING BRIDGES",
    description: "Connections were forged that would last a lifetime, creating a network of love and support."
  },
  {
    year: "2019",
    title: "THE LEGACY GROWS",
    description: "The impact began to ripple outward, touching countless lives and inspiring others to rise."
  },
  {
    year: "2022",
    title: "ETERNAL LIGHT",
    description: "A legacy cemented in the hearts of many, forever remembered for the light brought to this world."
  }
];

interface TimelineItemProps {
  event: typeof timelineEvents[0];
  index: number;
}

const TimelineItem = ({ event, index }: TimelineItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Content */}
      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
        <div 
          className="bg-card/30 border border-border/30 p-8 rounded-sm 
                     transition-all duration-500 hover:border-primary/50 hover:bg-card/50
                     group"
        >
          <span className="text-xs tracking-widest text-primary/70 block mb-2">
            {event.year}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 
                         group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      {/* Center dot */}
      <div 
        className={`relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background 
                    shadow-[0_0_20px_rgba(255,243,176,0.3)] hidden md:block transition-all duration-500 ${
          isVisible ? 'scale-100' : 'scale-0'
        }`}
        style={{ transitionDelay: `${index * 100 + 200}ms` }}
      />

      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
};

export const TimelineSection = () => {
  return (
    <section id="timeline" className="py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 border border-primary/30 rounded-sm mb-8">
            <span className="text-xs tracking-widest text-primary/70">THE JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            A LIFE WELL LIVED
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border/50 hidden md:block" />
          
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={event.year} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};