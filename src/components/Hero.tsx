import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Play, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-4 md:pt-20 md:pb-16">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.1)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-background/98"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
      </div>

      {/* Enhanced Ambient Effects with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] animate-float-slow"
          style={{ transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary-glow/20 rounded-full blur-[120px] animate-float-slow"
          style={{ 
            animationDelay: '2s',
            transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="space-y-6 md:space-y-8 animate-fade-in">
          {/* 3D Main Title */}
          <div className="relative inline-block mb-6 md:mb-8 group">
            <h1 
              className="font-bebas text-5xl sm:text-7xl md:text-[11rem] lg:text-[15rem] tracking-[0.15em] leading-none text-3d-hero transition-all duration-500"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.3}deg) translateZ(50px)`
              }}
            >
              AKEEF STUDIOS
            </h1>
            <div 
              className="absolute inset-0 blur-[60px] opacity-60 bg-gradient-to-r from-primary via-primary-glow to-primary animate-pulse-slow pointer-events-none"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.2}deg) rotateY(${mousePosition.x * 0.2}deg)`
              }}
            ></div>
          </div>
          
          {/* 3D Subtitle */}
          <div 
            className="relative inline-block"
            style={{
              transform: `perspective(1000px) translateZ(30px) rotateX(${mousePosition.y * 0.2}deg)`
            }}
          >
            <p className="text-xl md:text-3xl lg:text-4xl text-primary font-bold tracking-[0.35em] uppercase luxury-underline-optimized transition-all duration-300 text-3d-subtitle">
              FILM DIRECTOR & EDITOR
            </p>
          </div>
          
          {/* 3D Tagline */}
          <h2 
            className="font-bebas text-2xl sm:text-4xl md:text-6xl lg:text-7xl tracking-[0.15em] text-foreground mt-6 md:mt-8 transition-all duration-500"
            style={{
              transform: `perspective(1000px) translateZ(20px) rotateX(${mousePosition.y * 0.15}deg)`
            }}
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent text-shadow-glow">
              VISUALS THAT MOVE CULTURE
            </span>
          </h2>
          
          {/* Description */}
          <p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed pt-4 md:pt-6 font-light px-4 transition-all duration-300"
            style={{
              transform: `perspective(1000px) translateZ(10px)`
            }}
          >
            Crafting <span className="text-primary font-semibold text-shadow-subtle">cinematic music videos</span> and <span className="text-primary font-semibold text-shadow-subtle">visual storytelling</span> across Baltimore, Dallas, Vegas, and DC
          </p>

          {/* 3D CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-10 md:pt-12 max-w-full px-4"
            style={{
              transform: `perspective(1000px) translateZ(40px)`
            }}
          >
            <Link to="/portfolio" className="group w-full sm:w-auto">
              <Button 
                variant="neon" 
                size="lg" 
                className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 font-bebas tracking-[0.15em] sm:tracking-[0.25em] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_hsl(var(--primary)/0.8)] hover:-translate-y-2 active:scale-95"
                style={{
                  transform: 'translateZ(0)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 fill-current" />
                WATCH PORTFOLIO
              </Button>
            </Link>
            <Link to="/contact" className="group w-full sm:w-auto">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 font-bebas tracking-[0.15em] sm:tracking-[0.25em] transition-all duration-300 hover:scale-110 hover:-translate-y-2 active:scale-95"
                style={{
                  transform: 'translateZ(0)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}
              >
                BOOK A SHOOT
              </Button>
            </Link>
          </div>
          
          {/* 3D Social Links */}
          <div 
            className="flex gap-6 md:gap-8 justify-center pt-10 md:pt-12"
            style={{
              transform: `perspective(1000px) translateZ(30px)`
            }}
          >
            <a 
              href="https://instagram.com/akeefstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:rotate-6 rounded-full p-3 md:p-4 glass border-2 border-primary/20 hover:border-primary/80 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] active:scale-95"
              aria-label="Follow on Instagram"
              style={{
                boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
              }}
            >
              <Instagram className="h-7 w-7 md:h-9 md:w-9" />
            </a>
            <a 
              href="https://youtube.com/@akeefstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:-rotate-6 rounded-full p-3 md:p-4 glass border-2 border-primary/20 hover:border-primary/80 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] active:scale-95"
              aria-label="Subscribe on YouTube"
              style={{
                boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
              }}
            >
              <Youtube className="h-7 w-7 md:h-9 md:w-9" />
            </a>
          </div>
        </div>
      </div>

      {/* Optimized Scroll Indicator */}
      <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2 glass px-4 md:px-5 py-3 rounded-full border border-primary/30">
          <span className="text-xs text-primary font-bold tracking-[0.3em] uppercase">SCROLL</span>
          <ChevronDown className="h-6 w-6 md:h-7 md:w-7 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
