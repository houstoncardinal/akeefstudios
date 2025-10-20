import { Play } from "lucide-react";
import { useState } from "react";

interface VideoCardProps {
  thumbnail: string;
  title: string;
  artist?: string;
  year?: string;
  role?: string;
  videoUrl?: string;
}

const VideoCard = ({ thumbnail, title, artist, year, role, videoUrl }: VideoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl glass cursor-pointer transition-all duration-700 hover:scale-[1.05] hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] border-2 border-primary/20 hover:border-primary/60 magnetic-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="aspect-video relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-130 group-hover:rotate-2 brightness-90 group-hover:brightness-110"
        />
        
        {/* Revolutionary Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-all duration-700 ${
          isHovered ? "opacity-100" : "opacity-85"
        }`}>
          {/* Revolutionary Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`relative w-24 h-24 rounded-full bg-primary/20 backdrop-blur-xl border-3 border-primary flex items-center justify-center transition-all duration-700 ${
              isHovered ? "scale-125 shadow-[0_0_40px_hsl(var(--primary))] bg-primary/40 rotate-90" : "scale-100 rotate-0"
            }`}>
              <Play className={`w-12 h-12 text-primary fill-primary ml-1 transition-all duration-500 ${
                isHovered ? "scale-125" : "scale-100"
              }`} />
              <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping"></div>
            </div>
          </div>

          {/* Revolutionary Info */}
          <div className={`absolute bottom-0 left-0 right-0 p-8 space-y-3 transition-all duration-700 ${
            isHovered ? "translate-y-0 backdrop-blur-xl bg-black/40" : "translate-y-1 backdrop-blur-md bg-black/20"
          }`}>
            <h3 className="font-bebas text-3xl tracking-[0.2em] text-foreground drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] drip">
              {title}
            </h3>
            {artist && (
              <p className="text-lg text-primary font-bold tracking-wide drop-shadow-lg">{artist}</p>
            )}
            <div className="flex gap-6 text-sm text-muted-foreground/90 font-medium">
              {role && <span className="uppercase tracking-[0.15em] border-l-2 border-primary pl-3">{role}</span>}
              {year && <span className="text-primary/80">{year}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
