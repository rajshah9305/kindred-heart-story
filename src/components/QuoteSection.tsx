import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

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
      className={`py-20 px-4 bg-gradient-warm transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Quote className="w-16 h-16 text-primary mx-auto mb-8" />
          <blockquote className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed italic mb-6">
            "{quote}"
          </blockquote>
          {author && (
            <p className="text-lg text-muted-foreground">— {author}</p>
          )}
        </div>
      </div>
    </section>
  );
};
