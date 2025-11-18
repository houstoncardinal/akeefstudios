import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Play, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-4 md:pt-20 md:pb-16 contain-layout">
      {/* Optimized Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-background/98"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
      </div>

      {/* Optimized Ambient Effects - Reduced for Performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary-glow/20 rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="space-y-6 md:space-y-8 animate-fade-in">
          {/* Main Title - Optimized */}
          <div className="relative inline-block mb-6 md:mb-8">
            <h1 className="font-bebas text-5xl sm:text-7xl md:text-[11rem] lg:text-[15rem] tracking-[0.15em] neon-text-optimized leading-none transform-gpu will-change-transform transition-transform duration-500 hover:scale-[1.02]">
              AKEEF STUDIOS
            </h1>
            <div className="absolute inset-0 blur-[40px] opacity-50 bg-gradient-to-r from-primary via-primary-glow to-primary animate-pulse-slow pointer-events-none"></div>
          </div>
          
          {/* Subtitle - Optimized */}
          <div className="relative inline-block">
            <p className="text-xl md:text-3xl lg:text-4xl text-primary font-bold tracking-[0.35em] uppercase luxury-underline-optimized transition-all duration-300">
              FILM DIRECTOR & EDITOR
            </p>
          </div>
          
          {/* Tagline - Optimized */}
          <h2 className="font-bebas text-2xl sm:text-4xl md:text-6xl lg:text-7xl tracking-[0.15em] text-foreground mt-6 md:mt-8 transform-gpu transition-transform duration-500">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              VISUALS THAT MOVE CULTURE
            </span>
          </h2>
          
          {/* Description - Optimized */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed pt-4 md:pt-6 font-light px-4 transition-colors duration-300">
            Crafting <span className="text-primary font-semibold">cinematic music videos</span> and <span className="text-primary font-semibold">visual storytelling</span> across Baltimore, Dallas, Vegas, and DC
          </p>

          {/* Optimized CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-10 md:pt-12 max-w-full px-4">
            <Link to="/portfolio" className="group w-full sm:w-auto">
              <Button variant="neon" size="lg" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 font-bebas tracking-[0.15em] sm:tracking-[0.25em] transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] hover:-translate-y-1">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300 fill-current" />
                WATCH PORTFOLIO
              </Button>
            </Link>
            <Link to="/contact" className="group w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 font-bebas tracking-[0.15em] sm:tracking-[0.25em] transform-gpu transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                BOOK A SHOOT
              </Button>
            </Link>
          </div>
          
          {/* Optimized Social Links */}
          <div className="flex gap-6 md:gap-8 justify-center pt-10 md:pt-12">
            <a 
              href="https://instagram.com/akeefstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-all duration-300 transform hover:scale-125 rounded-full p-3 md:p-4 glass border-2 border-primary/20 hover:border-primary/60"
              aria-label="Follow on Instagram"
            >
              <Instagram className="h-7 w-7 md:h-9 md:w-9" />
            </a>
            <a 
              href="https://youtube.com/@akeefstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-all duration-300 transform hover:scale-125 rounded-full p-3 md:p-4 glass border-2 border-primary/20 hover:border-primary/60"
              aria-label="Subscribe on YouTube"
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
