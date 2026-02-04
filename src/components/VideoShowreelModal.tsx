import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play, X, Volume2, VolumeX } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface VideoShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

const VideoShowreelModal = ({ isOpen, onClose, videoUrl }: VideoShowreelModalProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLIFrameElement>(null);

  // Default to a YouTube embed or custom video
  const defaultVideoId = "dQw4w9WgXcQ"; // Replace with actual showreel
  const embedUrl = videoUrl || `https://www.youtube.com/embed/${defaultVideoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${defaultVideoId}&controls=1&modestbranding=1&rel=0`;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[95vw] md:max-w-6xl w-full p-0 bg-black/95 border-primary/30 overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Video Showreel</DialogTitle>
        </VisuallyHidden>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-background/80 border border-primary/30 flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
          aria-label="Close video"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Mute Toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-4 left-4 z-50 w-12 h-12 rounded-full bg-background/80 border border-primary/30 flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>

        {/* Video Container */}
        <div className="relative w-full aspect-video bg-black">
          <div className="absolute inset-0 flex items-center justify-center">
            <iframe
              ref={videoRef}
              key={isMuted ? 'muted' : 'unmuted'}
              src={embedUrl}
              title="Akeef Studios Showreel"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/50 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-primary/50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-primary/50 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/50 pointer-events-none" />
        </div>

        {/* Bottom info bar */}
        <div className="p-6 bg-gradient-to-t from-black to-transparent">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bebas text-2xl tracking-wider text-foreground">AKEEF STUDIOS SHOWREEL</h3>
              <p className="text-muted-foreground text-sm">Visuals That Move Culture</p>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-primary/30">
              <Play className="w-4 h-4 text-primary" fill="currentColor" />
              <span className="text-xs text-primary uppercase tracking-wider">Now Playing</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoShowreelModal;
