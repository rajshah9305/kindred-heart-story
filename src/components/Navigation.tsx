import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-primary/40 rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-primary/20" />
            </div>
            <span className="text-sm tracking-widest text-primary font-bold">TRIBUTE</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("story")}
              className="text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              STORY
            </button>
            <button
              onClick={() => scrollToSection("legacy")}
              className="text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              LEGACY
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              TOP
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
