import { useState } from "react";
import { Play } from "lucide-react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="py-32 px-4 border-t border-border/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 border border-primary/30 rounded-sm mb-8">
            <span className="text-xs tracking-widest text-primary/70">MEMORIES IN MOTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            A TRIBUTE IN VIDEO
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Moments captured in time, forever preserved to inspire generations to come.
          </p>
        </div>

        <div className="relative aspect-video bg-card/30 border border-border/30 rounded-sm overflow-hidden group">
          {!isPlaying ? (
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full border-2 border-primary/50 flex items-center justify-center bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/10">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
                <span className="text-sm tracking-widest text-primary/70">PLAY TRIBUTE</span>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Tribute Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "THE EARLY DAYS", duration: "3:24" },
            { title: "MOMENTS OF JOY", duration: "5:12" },
            { title: "LASTING IMPACT", duration: "4:47" },
          ].map((video, index) => (
            <div
              key={index}
              className="bg-card/20 border border-border/30 p-6 rounded-sm cursor-pointer transition-all duration-300 hover:border-primary/30 hover:bg-card/30 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
                  <Play className="w-4 h-4 text-primary ml-0.5" />
                </div>
                <span className="text-xs text-muted-foreground">{video.duration}</span>
              </div>
              <h3 className="text-sm tracking-wider text-primary">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
