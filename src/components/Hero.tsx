import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Play, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { InteractiveNebulaShader } from "@/components/ui/liquid-shader";

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
      {/* Interactive Nebula Shader Background */}
      <InteractiveNebulaShader 
        disableCenterDimming={true}
        className="opacity-90"
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/95 z-[1]"></div>
      
      {/* Subtle ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        <div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[150px] animate-pulse-slow"
          style={{ transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-glow/15 rounded-full blur-[150px] animate-pulse-slow"
          style={{ 
            animationDelay: '2s',
            transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="space-y-4 md:space-y-6 animate-fade-in">
          {/* Tagline Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-4"
            style={{ transform: `perspective(1000px) translateZ(20px)` }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-primary">Cinematic Visuals</span>
          </div>

          {/* Main Title - Cleaner Typography */}
          <div className="relative inline-block group">
            <h1 
              className="font-bebas text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem] tracking-[0.08em] leading-[0.85] text-foreground transition-all duration-500"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.2}deg) rotateY(${mousePosition.x * 0.2}deg)`,
                textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 0 60px hsl(var(--primary) / 0.15)'
              }}
            >
              AKEEF
              <br />
              <span className="text-primary" style={{ textShadow: '0 0 40px hsl(var(--primary) / 0.5), 0 0 80px hsl(var(--primary) / 0.3)' }}>
                STUDIOS
              </span>
            </h1>
          </div>
          
          {/* Subtitle - Refined */}
          <div 
            className="relative inline-block mt-2"
            style={{ transform: `perspective(1000px) translateZ(15px)` }}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-inter font-light tracking-[0.25em] uppercase">
              Film Director & Editor
            </p>
          </div>
          
          {/* Tagline - Clean & Bold */}
          <h2 
            className="font-bebas text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-[0.1em] text-foreground/90 mt-4 md:mt-6"
            style={{ transform: `perspective(1000px) translateZ(10px)` }}
          >
            Visuals That Move Culture
          </h2>
          
          {/* Description - Cleaner */}
          <p 
            className="text-sm sm:text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed pt-2 font-inter font-light"
            style={{ transform: `perspective(1000px) translateZ(5px)` }}
          >
            Crafting cinematic music videos and visual storytelling across 
            <span className="text-primary font-normal"> Baltimore</span>, 
            <span className="text-primary font-normal"> Dallas</span>, 
            <span className="text-primary font-normal"> Vegas</span>, and 
            <span className="text-primary font-normal"> DC</span>
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
