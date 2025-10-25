import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Play, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-4 md:pt-20 md:pb-16">
      {/* Background Image with Revolutionary Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] ease-out hover:scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-background/98"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.2),transparent_60%)] animate-pulse"></div>
      </div>

      {/* Revolutionary Animated Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/50 rounded-full blur-[200px] float-luxury liquid-morph"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-primary-glow/40 rounded-full blur-[200px] float-luxury liquid-morph" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/30 rounded-full blur-[250px] pulse-glow"></div>
        {/* Blood drip effects */}
        <div className="absolute top-0 left-1/4 w-2 h-24 bg-gradient-to-b from-primary via-primary/60 to-transparent animate-blood-drip opacity-70 blur-[1px]"></div>
        <div className="absolute top-0 right-1/3 w-2 h-20 bg-gradient-to-b from-primary via-primary/60 to-transparent animate-blood-drip opacity-60 blur-[1px]" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-0 left-2/3 w-2 h-28 bg-gradient-to-b from-primary-glow via-primary/60 to-transparent animate-blood-drip opacity-50 blur-[1px]" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-0 right-1/4 w-2 h-16 bg-gradient-to-b from-primary via-primary/60 to-transparent animate-blood-drip opacity-60 blur-[1px]" style={{ animationDelay: '0.8s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="space-y-8 stagger-children">
          {/* Main Title with Revolutionary Effects */}
          <div className="relative inline-block mb-8 perspective-[1000px]">
            <h1 className="font-bebas text-5xl sm:text-7xl md:text-[11rem] lg:text-[15rem] tracking-[0.15em] neon-text leading-none drip glitch transform-gpu transition-transform duration-700 hover:scale-105">
              AKEEF STUDIOS
            </h1>
            <div className="absolute inset-0 blur-[80px] opacity-70 bg-gradient-to-r from-primary via-primary-glow to-primary pulse-glow"></div>
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-transparent to-primary/30 blur-3xl animate-pulse"></div>
          </div>
          
          {/* Subtitle with Animation */}
          <div className="relative inline-block">
            <p className="text-2xl md:text-4xl text-primary font-bold tracking-[0.35em] uppercase drip luxury-underline transition-all duration-500 hover:tracking-[0.45em]">
              FILM DIRECTOR & EDITOR
            </p>
            <div className="absolute inset-0 blur-2xl opacity-50 bg-primary animate-pulse"></div>
          </div>
          
          {/* Tagline with Revolutionary Style */}
          <h2 className="font-bebas text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] text-foreground mt-8 transform-gpu transition-all duration-700 hover:scale-105">
            <span className="text-reveal bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_auto]">
              VISUALS THAT MOVE CULTURE
            </span>
          </h2>
          
          {/* Description with Artistic Spacing */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed pt-6 font-light transform-gpu transition-all duration-500 hover:text-muted-foreground px-4">
            Crafting <span className="text-primary font-semibold luxury-underline">cinematic music videos</span> and <span className="text-primary font-semibold luxury-underline">visual storytelling</span> across Baltimore, Dallas, Vegas, and DC
          </p>

          {/* Revolutionary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-16">
            <Link to="/portfolio" className="group">
              <Button variant="neon" size="lg" className="w-full sm:w-auto text-lg px-14 py-8 font-bebas tracking-[0.25em] transform-gpu transition-all duration-500 hover:scale-110 hover:shadow-[0_0_60px_hsl(var(--primary)/0.8)] hover:-translate-y-2">
                <Play className="mr-3 h-7 w-7 group-hover:scale-150 group-hover:rotate-90 transition-all duration-500 fill-current" />
                WATCH PORTFOLIO
              </Button>
            </Link>
            <Link to="/contact" className="group">
              <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg px-14 py-8 font-bebas tracking-[0.25em] transform-gpu transition-all duration-500 hover:scale-110 hover:-translate-y-2">
                BOOK A SHOOT
              </Button>
            </Link>
          </div>
          
          {/* Revolutionary Social Links */}
          <div className="flex gap-10 justify-center pt-16">
            <a 
              href="https://instagram.com/akeefstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-all duration-700 transform hover:scale-[1.6] hover:rotate-12 hover:shadow-[0_0_50px_hsl(var(--primary))] rounded-full p-4 glass border-2 border-primary/20 hover:border-primary/80 pulse-glow"
              aria-label="Follow on Instagram"
            >
              <Instagram className="h-11 w-11" />
            </a>
            <a 
              href="https://youtube.com/@akeefstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-all duration-700 transform hover:scale-[1.6] hover:-rotate-12 hover:shadow-[0_0_50px_hsl(var(--primary))] rounded-full p-4 glass border-2 border-primary/20 hover:border-primary/80 pulse-glow"
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
