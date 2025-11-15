import { useEffect, useRef, useState } from "react";

interface QuoteSectionProps {
  quote: string;
  author?: string;
}

export const QuoteSection = ({ quote, author }: QuoteSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ref}
      className="py-32 px-4 border-y border-border/30 bg-card/30"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="mb-8 flex justify-center gap-2">
            <div className="w-12 h-px bg-primary/50 mt-3" />
            <svg className="w-6 h-6 text-primary/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-light text-primary leading-relaxed mb-8">
            {quote}
          </blockquote>
          
          {author && (
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-primary/30" />
              <p className="text-sm tracking-widest text-muted-foreground uppercase">{author}</p>
              <div className="w-12 h-px bg-primary/30" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
