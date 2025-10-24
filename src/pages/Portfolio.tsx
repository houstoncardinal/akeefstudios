import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InstagramGrid from "@/components/InstagramGrid";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram, TrendingUp, Award, Film } from "lucide-react";
import { portfolioVideos } from "@/data/portfolio";
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
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] float-luxury"></div>
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary-glow/10 rounded-full blur-[100px] float-luxury" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-sm text-primary/80 tracking-[0.3em] uppercase font-medium">Featured Work</span>
            </div>
            <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-[0.15em] neon-text mb-6 drip">
              PORTFOLIO
            </h1>
            <p className="text-xl text-muted-foreground/90 leading-relaxed max-w-3xl mx-auto">
              A curated collection of cinematic visuals that define culture and push creative boundaries — from Baltimore to Vegas
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
              <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105">
                <div className="font-bebas text-4xl text-primary mb-1">50+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Projects</div>
              </div>
              <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105">
                <div className="font-bebas text-4xl text-primary mb-1">27.5K</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Followers</div>
              </div>
              <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105">
                <div className="font-bebas text-4xl text-primary mb-1">4</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-6">
          {/* Filter Section */}
          <div className="mb-16 animate-fade-in">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`group px-8 py-4 glass rounded-2xl text-sm font-medium transition-all duration-500 flex items-center gap-3 ${
                      activeFilter === category.id
                        ? "bg-primary/20 text-primary border-primary/60 scale-105 shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                        : "hover:bg-primary/10 hover:text-primary hover:border-primary/40 hover:scale-105"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-bebas tracking-wider">{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Instagram Content */}
          <div className="mb-20 animate-fade-in-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4 glass px-6 py-3 rounded-full border border-primary/30">
                <Instagram className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary tracking-[0.3em] uppercase font-medium">Latest from Instagram</span>
              </div>
              <h2 className="font-bebas text-4xl md:text-6xl tracking-[0.15em] neon-text mb-4">
                RECENT WORK
              </h2>
              <p className="text-muted-foreground/80 max-w-2xl mx-auto">
                Follow <a href="https://instagram.com/akeefstudios" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-glow transition-colors">@akeefstudios</a> for daily drops
              </p>
            </div>

            <InstagramGrid 
              posts={portfolioVideos.map(video => ({
                id: video.id,
                url: video.instagramUrl || '',
                title: video.title
              }))}
            />

            <div className="text-center mt-12">
              <a 
                href="https://instagram.com/akeefstudios" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <Button variant="neon" size="lg" className="text-lg px-10 py-6 font-bebas tracking-[0.2em]">
                  <Instagram className="mr-3 h-6 w-6 group-hover:rotate-12 transition-all duration-500" />
                  FOLLOW FOR MORE
                </Button>
              </a>
            </div>
          </div>

          {/* Process Section */}
          <div className="glass p-12 rounded-3xl border border-primary/30 mb-20 animate-fade-in-up">
            <div className="text-center mb-12">
              <h3 className="font-bebas text-4xl md:text-5xl tracking-[0.15em] neon-text mb-4">
                THE PROCESS
              </h3>
              <p className="text-muted-foreground/80 max-w-2xl mx-auto">
                From concept to completion — every frame crafted with precision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-4 group hover:scale-105 transition-all duration-500">
                <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-all duration-500">
                  <span className="font-bebas text-3xl text-primary">01</span>
                </div>
                <h4 className="font-bebas text-2xl tracking-wider text-foreground">CONCEPT</h4>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">Brainstorm and develop creative direction tailored to your vision</p>
              </div>

              <div className="text-center space-y-4 group hover:scale-105 transition-all duration-500">
                <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-all duration-500">
                  <span className="font-bebas text-3xl text-primary">02</span>
                </div>
                <h4 className="font-bebas text-2xl tracking-wider text-foreground">PRE-PRODUCTION</h4>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">Storyboarding, location scouting, and detailed planning</p>
              </div>

              <div className="text-center space-y-4 group hover:scale-105 transition-all duration-500">
                <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-all duration-500">
                  <span className="font-bebas text-3xl text-primary">03</span>
                </div>
                <h4 className="font-bebas text-2xl tracking-wider text-foreground">PRODUCTION</h4>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">Professional filming with cinema-grade equipment</p>
              </div>

              <div className="text-center space-y-4 group hover:scale-105 transition-all duration-500">
                <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-all duration-500">
                  <span className="font-bebas text-3xl text-primary">04</span>
                </div>
                <h4 className="font-bebas text-2xl tracking-wider text-foreground">POST</h4>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">Expert editing, color grading, and final delivery</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center animate-fade-in-up">
            <div className="glass p-12 rounded-3xl border border-primary/30 hover:border-primary/50 transition-all duration-700 max-w-3xl mx-auto">
              <h3 className="font-bebas text-4xl md:text-5xl tracking-[0.15em] neon-text mb-6">
                READY TO CREATE?
              </h3>
              <p className="text-muted-foreground/90 mb-8 text-lg leading-relaxed">
                Let's turn your vision into a cinematic masterpiece
              </p>
              <Link to="/contact" className="group inline-block">
                <Button variant="hero" size="lg" className="text-lg px-12 py-7 font-bebas tracking-[0.2em]">
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
