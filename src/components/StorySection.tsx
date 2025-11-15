import { useEffect, useRef, useState } from "react";

interface StorySectionProps {
  title: string;
  content: string;
  image?: string;
  reverse?: boolean;
}

export const StorySection = ({ title, content, image, reverse = false }: StorySectionProps) => {
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
      className={`py-20 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
        {image && (
          <div className={`${reverse ? 'md:col-start-2' : ''} ${isVisible ? 'animate-slide-in' : ''}`}>
            <img 
              src={image} 
              alt={title}
              className="rounded-2xl shadow-soft w-full h-[400px] object-cover"
            />
          </div>
        )}
        <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {title}
          </h2>
          <div className="w-20 h-1 bg-primary" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};
