import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Play, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Revolutionary Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-background/95"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_50%)]"></div>
      </div>

      {/* Revolutionary Animated Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-primary/40 rounded-full blur-[180px] animate-float liquid-morph"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-primary-glow/30 rounded-full blur-[180px] animate-float liquid-morph" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/20 rounded-full blur-[220px] animate-pulse"></div>
        {/* Blood drip effects */}
        <div className="absolute top-0 left-1/4 w-1 h-20 bg-gradient-to-b from-primary to-transparent animate-blood-drip opacity-60"></div>
        <div className="absolute top-0 right-1/3 w-1 h-16 bg-gradient-to-b from-primary to-transparent animate-blood-drip opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-2/3 w-1 h-24 bg-gradient-to-b from-primary-glow to-transparent animate-blood-drip opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main Title with Revolutionary Effects */}
          <div className="relative inline-block mb-8">
            <h1 className="font-bebas text-7xl md:text-[11rem] lg:text-[15rem] tracking-[0.15em] neon-text leading-none drip glitch">
              AKEEF STUDIOS
            </h1>
            <div className="absolute inset-0 blur-[60px] opacity-60 bg-gradient-to-r from-primary via-primary-glow to-primary animate-glow-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-2xl"></div>
          </div>
          
          {/* Subtitle with Animation */}
          <div className="relative inline-block">
            <p className="text-2xl md:text-4xl text-primary font-bold tracking-[0.35em] uppercase animate-fade-in drip" style={{ animationDelay: '0.2s' }}>
              FILM DIRECTOR & EDITOR
            </p>
            <div className="absolute inset-0 blur-xl opacity-40 bg-primary"></div>
          </div>
          
          {/* Tagline with Revolutionary Style */}
          <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] text-foreground mt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="text-reveal bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_auto]">
              VISUALS THAT MOVE CULTURE
            </span>
          </h2>
          
          {/* Description with Artistic Spacing */}
          <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-4xl mx-auto leading-relaxed pt-4 animate-fade-in font-light" style={{ animationDelay: '0.6s' }}>
            Crafting <span className="text-primary font-semibold">cinematic music videos</span> and <span className="text-primary font-semibold">visual storytelling</span> across Baltimore, Dallas, Vegas, and DC
          </p>

          {/* Revolutionary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Link to="/portfolio" className="group magnetic-hover">
              <Button variant="neon" size="lg" className="w-full sm:w-auto text-lg px-12 py-7 font-bebas tracking-widest">
                <Play className="mr-3 h-7 w-7 group-hover:scale-125 transition-transform fill-current" />
                WATCH PORTFOLIO
              </Button>
            </Link>
            <Link to="/contact" className="group magnetic-hover">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg px-12 py-7 font-bebas tracking-widest">
                BOOK A SHOOT
              </Button>
            </Link>
          </div>
          
          {/* Revolutionary Social Links */}
          <div className="flex gap-10 justify-center pt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <a 
              href="https://instagram.com/akeefstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="magnetic-hover text-foreground/70 hover:text-primary transition-all duration-500 hover:scale-150 transform hover:shadow-[0_0_30px_hsl(var(--primary))] rounded-full p-3 glass border border-primary/20 hover:border-primary/60"
              aria-label="Follow on Instagram"
            >
              <Instagram className="h-11 w-11" />
            </a>
            <a 
              href="https://youtube.com/@akeefstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="magnetic-hover text-foreground/70 hover:text-primary transition-all duration-500 hover:scale-150 transform hover:shadow-[0_0_30px_hsl(var(--primary))] rounded-full p-3 glass border border-primary/20 hover:border-primary/60"
              aria-label="Subscribe on YouTube"
            >
              <Youtube className="h-11 w-11" />
            </a>
          </div>
        </div>
      </div>

      {/* Revolutionary Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-3 glass px-6 py-4 rounded-full border border-primary/30">
          <span className="text-xs text-primary font-bold tracking-[0.3em] uppercase">SCROLL</span>
          <ChevronDown className="h-9 w-9 text-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
