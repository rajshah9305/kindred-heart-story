import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop",
    alt: "Mountain landscape at sunrise",
    caption: "Where dreams take flight"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&auto=format&fit=crop",
    alt: "Sunlight through forest trees",
    caption: "Finding light in darkness"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop",
    alt: "Valley with morning mist",
    caption: "The path less traveled"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&auto=format&fit=crop",
    alt: "Forest path in autumn",
    caption: "Every step forward matters"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&auto=format&fit=crop",
    alt: "Waterfall in nature",
    caption: "Strength in serenity"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&auto=format&fit=crop",
    alt: "Orange flowers in field",
    caption: "Beauty in simplicity"
  }
];

export const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <section id="gallery" className="py-32 px-4 bg-card/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 border border-primary/30 rounded-sm mb-8">
            <span className="text-xs tracking-widest text-primary/70">MEMORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            CAPTURED MOMENTS
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of precious moments that tell the story of a remarkable journey.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm border border-border/30 
                         cursor-pointer transition-all duration-500 hover:border-primary/50"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 
                           transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full 
                              group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary text-sm tracking-wider">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent 
            className="max-w-5xl w-full bg-background/95 backdrop-blur-sm border-border/50 p-0"
            onKeyDown={handleKeyDown}
          >
            <VisuallyHidden>
              <DialogTitle>Image Gallery Lightbox</DialogTitle>
            </VisuallyHidden>
            
            {selectedImage !== null && (
              <div className="relative">
                {/* Close button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-50 p-2 bg-background/80 border border-border/50 
                             rounded-sm text-primary hover:bg-card transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Navigation buttons */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-background/80 
                             border border-border/50 rounded-sm text-primary hover:bg-card transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-background/80 
                             border border-border/50 rounded-sm text-primary hover:bg-card transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image */}
                <div className="p-8 pt-16">
                  <img
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    className="w-full h-auto max-h-[70vh] object-contain mx-auto rounded-sm"
                  />
                  <div className="text-center mt-6 pb-4">
                    <p className="text-primary tracking-wider mb-2">
                      {galleryImages[selectedImage].caption}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {selectedImage + 1} / {galleryImages.length}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
