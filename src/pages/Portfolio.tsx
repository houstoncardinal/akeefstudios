import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram, TrendingUp, Award, Film, Play } from "lucide-react";
import { portfolioVideos } from "@/data/portfolio";
import { OptimizedImage } from "@/components/OptimizedImage";
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Works", icon: Film },
    { id: "music", label: "Music Videos", icon: Film },
    { id: "commercial", label: "Commercial", icon: TrendingUp },
    { id: "bts", label: "Behind The Scenes", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/10 rounded-full blur-[120px] float-luxury"></div>
          <div className="absolute top-1/2 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-primary-glow/10 rounded-full blur-[100px] float-luxury" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6 animate-fade-in-up">
            <div className="inline-block mb-2 md:mb-4">
              <span className="text-xs sm:text-sm text-primary/80 tracking-[0.3em] uppercase font-medium">Featured Work</span>
            </div>
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-[0.15em] neon-text mb-4 md:mb-6 drip">
              PORTFOLIO
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-3xl mx-auto px-4">
              A curated collection of cinematic visuals that define culture and push creative boundaries — from Baltimore to Vegas
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto pt-6 md:pt-8">
              <div className="glass p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105">
                <div className="font-bebas text-2xl sm:text-3xl md:text-4xl text-primary mb-1">50+</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Projects</div>
              </div>
              <div className="glass p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105">
                <div className="font-bebas text-2xl sm:text-3xl md:text-4xl text-primary mb-1">27.5K</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Followers</div>
              </div>
              <div className="glass p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105">
                <div className="font-bebas text-2xl sm:text-3xl md:text-4xl text-primary mb-1">4</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Filter Section */}
          <div className="mb-12 md:mb-16 animate-fade-in">
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`group px-4 sm:px-6 md:px-8 py-3 md:py-4 glass rounded-xl md:rounded-2xl text-xs sm:text-sm font-medium transition-all duration-500 flex items-center gap-2 md:gap-3 ${
                      activeFilter === category.id
                        ? "bg-primary/20 text-primary border-primary/60 scale-105 shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                        : "hover:bg-primary/10 hover:text-primary hover:border-primary/40 hover:scale-105"
                    }`}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-bebas tracking-wider text-sm sm:text-base">{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Work Section */}
          <div className="mb-20 animate-fade-in-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4 glass px-6 py-3 rounded-full border border-primary/30">
                <Film className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary tracking-[0.3em] uppercase font-medium">Featured Projects</span>
              </div>
              <h2 className="font-bebas text-4xl md:text-6xl tracking-[0.15em] neon-text mb-4">
                MUSIC VIDEOS
              </h2>
              <p className="text-muted-foreground/80 max-w-2xl mx-auto">
                Watch the latest work on <a href="https://youtube.com/@akeefstudios" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-glow transition-colors">YouTube</a>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {portfolioVideos.map((video) => (
                <a
                  key={video.id}
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_hsl(var(--primary)/0.3)] transform-gpu cursor-pointer"
                >
                  <div className="aspect-video relative overflow-hidden bg-background">
                    <OptimizedImage
                      src={video.thumbnail}
                      alt={`${video.title} - ${video.artist} music video directed by Akeef Studios`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading={video.id <= 3 ? "eager" : "lazy"}
                      priority={video.id <= 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center group-hover:scale-125 group-hover:bg-primary transition-all duration-500 shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
                        <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="font-bebas text-xl tracking-wider text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{video.artist}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-muted-foreground/70">{video.city} • {video.year}</span>
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">{video.role}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="https://instagram.com/akeefstudios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <Button variant="neon" size="lg" className="text-lg px-10 py-6 font-bebas tracking-[0.2em]">
                  <Instagram className="mr-3 h-6 w-6 group-hover:rotate-12 transition-all duration-500" />
                  FOLLOW ON INSTAGRAM
                </Button>
              </a>
            </div>
          </div>

          {/* Process Section */}
          <div className="glass p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl border border-primary/30 mb-12 md:mb-20 animate-fade-in-up">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-[0.15em] neon-text mb-3 md:mb-4">
                THE PROCESS
              </h3>
              <p className="text-muted-foreground/80 max-w-2xl mx-auto text-sm sm:text-base px-4">
                From concept to completion — every frame crafted with precision
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center space-y-3 md:space-y-4 group hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:rotate-12 transition-all duration-500">
                  <span className="font-bebas text-2xl md:text-3xl text-primary">01</span>
                </div>
                <h4 className="font-bebas text-xl md:text-2xl tracking-wider text-foreground">CONCEPT</h4>
                <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed px-2">Brainstorm and develop creative direction tailored to your vision</p>
              </div>

              <div className="text-center space-y-3 md:space-y-4 group hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:rotate-12 transition-all duration-500">
                  <span className="font-bebas text-2xl md:text-3xl text-primary">02</span>
                </div>
                <h4 className="font-bebas text-xl md:text-2xl tracking-wider text-foreground">PRE-PRODUCTION</h4>
                <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed px-2">Storyboarding, location scouting, and detailed planning</p>
              </div>

              <div className="text-center space-y-3 md:space-y-4 group hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:rotate-12 transition-all duration-500">
                  <span className="font-bebas text-2xl md:text-3xl text-primary">03</span>
                </div>
                <h4 className="font-bebas text-xl md:text-2xl tracking-wider text-foreground">PRODUCTION</h4>
                <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed px-2">Professional filming with cinema-grade equipment</p>
              </div>

              <div className="text-center space-y-3 md:space-y-4 group hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:rotate-12 transition-all duration-500">
                  <span className="font-bebas text-2xl md:text-3xl text-primary">04</span>
                </div>
                <h4 className="font-bebas text-xl md:text-2xl tracking-wider text-foreground">POST</h4>
                <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed px-2">Expert editing, color grading, and final delivery</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in-up px-4">
            <div className="glass p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl border border-primary/30 hover:border-primary/50 transition-all duration-700 max-w-3xl mx-auto">
              <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-[0.15em] neon-text mb-4 md:mb-6">
                READY TO CREATE?
              </h3>
              <p className="text-muted-foreground/90 mb-6 md:mb-8 text-base sm:text-lg leading-relaxed">
                Let's turn your vision into a cinematic masterpiece
              </p>
              <Link to="/contact" className="group inline-block">
                <Button variant="hero" size="lg" className="text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 font-bebas tracking-[0.2em]">
                  BOOK YOUR SHOOT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
