import { useEffect, useRef } from "react";
import { Instagram, Play, ExternalLink } from "lucide-react";

interface InstagramGridProps {
  posts: Array<{
    id: number;
    url: string;
    thumbnail?: string;
    title?: string;
  }>;
}

const InstagramGrid = ({ posts }: InstagramGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script once
    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <div 
      ref={gridRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
    >
      {posts.map((post, index) => (
        <div
          key={post.id}
          className="group relative overflow-hidden rounded-2xl glass border border-primary/20 hover:border-primary/60 transition-all duration-700 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transform-gpu animate-fade-in"
          style={{ 
            animationDelay: `${index * 100}ms`,
            minHeight: "400px"
          }}
        >
          {/* Instagram Embed */}
          <div className="relative w-full h-full">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={post.url}
              data-instgrm-version="14"
              style={{
                background: "transparent",
                border: "0",
                borderRadius: "12px",
                margin: "0",
                padding: "0",
                width: "100%",
              }}
            >
              <a 
                href={post.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center h-full min-h-[400px] gap-4 p-8 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Instagram className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">View on Instagram</p>
                  {post.title && (
                    <p className="text-xs text-muted-foreground/60">{post.title}</p>
                  )}
                </div>
                <ExternalLink className="w-4 h-4 text-primary/60" />
              </a>
            </blockquote>
          </div>

          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-2 text-primary">
                <Play className="w-5 h-5" />
                <span className="text-sm font-bebas tracking-wider">WATCH NOW</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstagramGrid;
