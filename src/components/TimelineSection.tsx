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
              <div
                key={event.year}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
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
                <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background 
                                shadow-[0_0_20px_rgba(255,243,176,0.3)] hidden md:block" />

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
