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
      className="group relative overflow-hidden rounded-xl glass cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-glow-blue border border-primary/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="aspect-video relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-1"
        />
        
        {/* Enhanced Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-all duration-500 ${
          isHovered ? "opacity-100" : "opacity-80"
        }`}>
          {/* Play Button with Enhanced Effects */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-20 h-20 rounded-full bg-primary/30 backdrop-blur-md border-2 border-primary flex items-center justify-center transition-all duration-500 ${
              isHovered ? "scale-125 shadow-glow-blue bg-primary/40" : "scale-100"
            }`}>
              <Play className={`w-10 h-10 text-primary fill-primary ml-1 transition-all duration-300 ${
                isHovered ? "scale-110" : "scale-100"
              }`} />
            </div>
          </div>

          {/* Enhanced Info */}
          <div className={`absolute bottom-0 left-0 right-0 p-6 space-y-2 transition-all duration-500 ${
            isHovered ? "translate-y-0" : "translate-y-2"
          }`}>
            <h3 className="font-bebas text-2xl tracking-[0.15em] text-foreground drop-shadow-lg">
              {title}
            </h3>
            {artist && (
              <p className="text-base text-primary font-semibold tracking-wide">{artist}</p>
            )}
            <div className="flex gap-4 text-sm text-muted-foreground/90">
              {role && <span className="uppercase tracking-wider">{role}</span>}
              {year && <span>{year}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
