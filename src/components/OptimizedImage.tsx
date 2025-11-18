import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  aspectRatio = "video",
  loading = "lazy",
  priority = false,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    // Preload priority images
    if (priority && src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => setHasError(true);
    } else {
      setImageSrc(src);
    }
  }, [src, priority]);

  return (
    <div className={cn("relative overflow-hidden bg-muted", aspectRatio === "video" && "aspect-video", className)}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-muted/50" />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          loading={priority ? "eager" : loading}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          decoding="async"
        />
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <p className="text-xs text-muted-foreground">Failed to load image</p>
        </div>
      )}
    </div>
  );
};
