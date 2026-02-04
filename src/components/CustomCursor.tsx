import { useEffect, useState, useRef } from "react";

interface Point {
  x: number;
  y: number;
  opacity: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Point[]>([]);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports hover (not touch)
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Track hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        target.classList.contains('cursor-pointer');
      setIsHovering(isHoverable);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, []);

  // Animation loop for smooth cursor and trail
  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        // Smooth cursor follow
        setPosition(prev => ({
          x: prev.x + (mousePos.current.x - prev.x) * 0.15,
          y: prev.y + (mousePos.current.y - prev.y) * 0.15
        }));

        // Update trail
        setTrail(prevTrail => {
          const newTrail = [
            { x: mousePos.current.x, y: mousePos.current.y, opacity: 1 },
            ...prevTrail.slice(0, 12).map(point => ({
              ...point,
              opacity: point.opacity * 0.85
            }))
          ].filter(point => point.opacity > 0.05);
          return newTrail;
        });
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={index}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: point.x,
            top: point.y,
            width: `${8 + index * 0.5}px`,
            height: `${8 + index * 0.5}px`,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, hsl(var(--primary) / ${point.opacity * 0.6}) 0%, transparent 70%)`,
            boxShadow: `0 0 ${10 + index * 2}px hsl(var(--primary) / ${point.opacity * 0.4})`,
            opacity: point.opacity,
          }}
        />
      ))}

      {/* Outer glow ring */}
      <div
        className={`absolute rounded-full transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
          transform: 'translate(-50%, -50%)',
          border: '2px solid hsl(var(--primary) / 0.5)',
          boxShadow: `
            0 0 20px hsl(var(--primary) / 0.3),
            0 0 40px hsl(var(--primary) / 0.2),
            inset 0 0 20px hsl(var(--primary) / 0.1)
          `,
          background: isHovering 
            ? 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)'
            : 'transparent',
        }}
      />

      {/* Inner cursor dot */}
      <div
        className={`absolute rounded-full transition-all duration-200 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        style={{
          left: mousePos.current.x,
          top: mousePos.current.y,
          width: isHovering ? '8px' : '6px',
          height: isHovering ? '8px' : '6px',
          transform: 'translate(-50%, -50%)',
          background: 'hsl(var(--primary))',
          boxShadow: `
            0 0 10px hsl(var(--primary)),
            0 0 20px hsl(var(--primary) / 0.8),
            0 0 30px hsl(var(--primary) / 0.5)
          `,
        }}
      />
    </div>
  );
};

export default CustomCursor;
