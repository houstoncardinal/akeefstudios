import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Play, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      </div>

      {/* Enhanced Animated particles/glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[150px] animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[200px] animate-pulse"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="space-y-6 animate-fade-in-up">
          {/* Main Title with Enhanced Glow */}
          <div className="relative inline-block">
            <h1 className="font-bebas text-8xl md:text-[12rem] lg:text-[14rem] tracking-wider neon-text animate-glow-pulse leading-none">
              AKEEF STUDIOS
            </h1>
            <div className="absolute inset-0 blur-3xl opacity-50 bg-gradient-to-r from-primary via-accent to-secondary animate-glow-pulse"></div>
          </div>
          
          {/* Subtitle with Animation */}
          <p className="text-2xl md:text-3xl text-primary font-medium tracking-[0.3em] uppercase animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Film Director & Editor
          </p>
          
          {/* Tagline with Enhanced Style */}
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl tracking-wider text-foreground mt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            VISUALS THAT MOVE CULTURE
          </h2>
          
          {/* Description with Better Spacing */}
          <p className="text-lg md:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed pt-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Crafting cinematic music videos and visual storytelling across Baltimore, Dallas, Vegas, and DC
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Link to="/portfolio" className="group">
              <Button variant="neon" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 shadow-glow-blue">
                <Play className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
                WATCH PORTFOLIO
              </Button>
            </Link>
            <Link to="/contact" className="group">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                Book a Shoot
              </Button>
            </Link>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex gap-8 justify-center pt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a 
              href="https://instagram.com/akeefstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-125 transform hover:shadow-glow-blue rounded-full p-2"
            >
              <Instagram className="h-10 w-10" />
            </a>
            <a 
              href="https://youtube.com/@akeefstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-125 transform hover:shadow-glow-cyan rounded-full p-2"
            >
              <Youtube className="h-10 w-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-primary/80 tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-8 w-8 text-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
