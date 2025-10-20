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
      className="group relative overflow-hidden rounded-3xl glass cursor-pointer transition-all duration-[800ms] hover:scale-[1.08] hover:shadow-[0_0_80px_hsl(var(--primary)/0.8),0_0_120px_hsl(var(--primary)/0.4)] border-2 border-primary/20 hover:border-primary/90 card-3d transform-gpu"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="aspect-video relative overflow-hidden cinematic-zoom">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-all duration-[1400ms] group-hover:scale-125 group-hover:rotate-3 brightness-90 group-hover:brightness-120 transform-gpu"
        />
        
        {/* Revolutionary Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent transition-all duration-[800ms] ${
          isHovered ? "opacity-100" : "opacity-90"
        }`}>
          {/* Revolutionary Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`relative w-28 h-28 rounded-full bg-primary/30 backdrop-blur-2xl border-4 border-primary flex items-center justify-center transition-all duration-[800ms] transform-gpu ${
              isHovered ? "scale-150 shadow-[0_0_60px_hsl(var(--primary)),0_0_100px_hsl(var(--primary)/0.6)] bg-primary/50 rotate-[360deg]" : "scale-100 rotate-0"
            }`}>
              <Play className={`w-14 h-14 text-primary fill-primary ml-1 transition-all duration-700 transform-gpu ${
                isHovered ? "scale-125 rotate-12" : "scale-100"
              }`} />
              <div className={`absolute inset-0 rounded-full border-2 border-primary/60 transition-all duration-700 ${
                isHovered ? "animate-ping" : ""
              }`}></div>
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl pulse-glow"></div>
            </div>
          </div>

          {/* Revolutionary Info */}
          <div className={`absolute bottom-0 left-0 right-0 p-8 space-y-4 transition-all duration-[800ms] transform-gpu ${
            isHovered ? "translate-y-0 backdrop-blur-2xl bg-black/60" : "translate-y-2 backdrop-blur-md bg-black/30"
          }`}>
            <h3 className="font-bebas text-4xl tracking-[0.2em] text-foreground drop-shadow-[0_4px_16px_rgba(0,0,0,1)] drip transition-all duration-500 hover:text-primary hover:tracking-[0.25em]">
              {title}
            </h3>
            {artist && (
              <p className="text-xl text-primary font-bold tracking-wide drop-shadow-[0_2px_10px_rgba(200,0,0,0.8)] luxury-underline">{artist}</p>
            )}
            <div className="flex gap-6 text-sm text-muted-foreground/90 font-medium">
              {role && <span className="uppercase tracking-[0.15em] border-l-3 border-primary pl-4 transition-all duration-300 hover:border-primary-glow hover:pl-5">{role}</span>}
              {year && <span className="text-primary/90 font-semibold">{year}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
