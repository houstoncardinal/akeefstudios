import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Play, Award, Users, TrendingUp, Zap, Camera, Film, Youtube } from "lucide-react";
import { portfolioVideos } from "@/data/portfolio";
import { OptimizedImage } from "@/components/OptimizedImage";
import { memo } from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Featured Music Videos Section with YouTube CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,hsl(var(--primary)/0.15),transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6 glass px-6 py-3 rounded-full border border-primary/30 hover:border-primary/50 hover:scale-105 transition-all duration-500">
              <Youtube className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm text-primary tracking-[0.3em] uppercase font-medium">Official Music Videos</span>
            </div>
            <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] neon-text mb-4 drip">
              FEATURED WORK
            </h2>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Official music videos for <span className="text-primary font-semibold">Real Boston Richey</span>, <span className="text-primary font-semibold">YoungBoy Never Broke Again</span> & more
            </p>
          </div>

          {/* Video Grid with Clickable Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portfolioVideos.map((video, index) => (
              <a
                key={video.id}
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_hsl(var(--primary)/0.3)] transform-gpu cursor-pointer"
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Thumbnail with Overlay */}
                <div className="aspect-video relative overflow-hidden bg-background">
                  <img 
                    src={video.thumbnail} 
                    alt={`${video.title} - ${video.artist} music video directed by Akeef Studios`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={index < 3 ? "high" : "auto"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center group-hover:scale-125 group-hover:bg-primary transition-all duration-500 shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
                      <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Watch Now Label */}
                  <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full border border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">Watch on YouTube</span>
                  </div>
                </div>

                {/* Video Info */}
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

          {/* YouTube Channel CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
            <a 
              href="https://www.youtube.com/@akeefstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button variant="neon" size="lg" className="text-lg px-12 py-7 font-bebas tracking-[0.2em]">
                <Youtube className="mr-3 h-6 w-6 group-hover:scale-110 transition-all duration-500" />
                SUBSCRIBE ON YOUTUBE
              </Button>
            </a>
            <Link to="/portfolio" className="group">
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 font-bebas tracking-[0.2em] border-primary/40 hover:border-primary hover:bg-primary/10">
                FULL PORTFOLIO
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Follow Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass p-16 rounded-3xl border border-primary/30 hover:border-primary/50 transition-all duration-700 max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6 glass px-6 py-3 rounded-full border border-primary/30">
              <Instagram className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm text-primary tracking-[0.3em] uppercase font-medium">27.5K Followers</span>
            </div>
            <h2 className="font-bebas text-5xl md:text-7xl tracking-[0.15em] neon-text mb-6 drip">
              DAILY CONTENT ON INSTAGRAM
            </h2>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed mb-10">
              Behind-the-scenes, exclusive clips, and fresh visuals from <span className="text-primary font-semibold">@akeefstudios</span>
            </p>
            <a 
              href="https://instagram.com/akeefstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <Button variant="neon" size="lg" className="text-lg px-12 py-7 font-bebas tracking-[0.2em]">
                <Instagram className="mr-3 h-6 w-6 group-hover:rotate-12 transition-all duration-500" />
                FOLLOW ON INSTAGRAM
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Stats & Trust Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Main Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <div className="group text-center space-y-4 glass p-8 rounded-2xl border border-primary/20 hover:border-primary/60 transition-all duration-700 hover:scale-110 transform-gpu animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 mb-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="font-bebas text-6xl md:text-7xl text-primary neon-text">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium">Projects Delivered</div>
            </div>
            
            <div className="group text-center space-y-4 glass p-8 rounded-2xl border border-primary/20 hover:border-primary/60 transition-all duration-700 hover:scale-110 transform-gpu animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 mb-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="font-bebas text-6xl md:text-7xl text-primary neon-text">27.5K</div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium">Instagram Followers</div>
            </div>
            
            <div className="group text-center space-y-4 glass p-8 rounded-2xl border border-primary/20 hover:border-primary/60 transition-all duration-700 hover:scale-110 transform-gpu animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 mb-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="font-bebas text-6xl md:text-7xl text-primary neon-text">4</div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium">Major Cities</div>
            </div>
            
            <div className="group text-center space-y-4 glass p-8 rounded-2xl border border-primary/20 hover:border-primary/60 transition-all duration-700 hover:scale-110 transform-gpu animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 mb-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="font-bebas text-6xl md:text-7xl text-primary neon-text">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium">Quality Assured</div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-5xl mx-auto animate-fade-in-up">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-sm text-primary/80 tracking-[0.3em] uppercase font-medium">Why AKEEF STUDIOS</span>
              </div>
              <h3 className="font-bebas text-4xl md:text-6xl tracking-[0.15em] neon-text mb-4">
                TRUSTED BY THE BEST
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-700 hover:scale-105 transform-gpu">
                <Camera className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bebas text-2xl tracking-wider mb-3 text-foreground">CINEMATIC QUALITY</h4>
                <p className="text-muted-foreground/80 leading-relaxed text-sm">
                  Professional-grade equipment and techniques that deliver broadcast-quality visuals every time
                </p>
              </div>

              <div className="glass p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-700 hover:scale-105 transform-gpu">
                <Film className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bebas text-2xl tracking-wider mb-3 text-foreground">RAPID TURNAROUND</h4>
                <p className="text-muted-foreground/80 leading-relaxed text-sm">
                  Fast, efficient post-production without compromising quality — your content ready when you need it
                </p>
              </div>

              <div className="glass p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-700 hover:scale-105 transform-gpu">
                <Instagram className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bebas text-2xl tracking-wider mb-3 text-foreground">SOCIAL OPTIMIZED</h4>
                <p className="text-muted-foreground/80 leading-relaxed text-sm">
                  Content crafted specifically for maximum engagement on Instagram, TikTok, and YouTube
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.08),transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-sm text-primary/80 tracking-[0.3em] uppercase font-medium">Services</span>
            </div>
            <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] neon-text mb-4 drip">
              WHAT WE DO
            </h2>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Full-service production from concept to final cut
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto animate-fade-in mb-12">
            <div className="group glass p-10 rounded-3xl border border-primary/20 hover:border-primary/60 transition-all duration-700 hover:scale-105 hover:shadow-[0_0_60px_hsl(var(--primary)/0.3)] transform-gpu">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bebas text-3xl tracking-[0.15em] mb-4 text-foreground">MUSIC VIDEOS</h3>
              <p className="text-muted-foreground/80 leading-relaxed">
                Cinematic storytelling that captures the essence of your music and amplifies your brand
              </p>
            </div>

            <div className="group glass p-10 rounded-3xl border border-primary/20 hover:border-primary/60 transition-all duration-700 hover:scale-105 hover:shadow-[0_0_60px_hsl(var(--primary)/0.3)] transform-gpu">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bebas text-3xl tracking-[0.15em] mb-4 text-foreground">COMMERCIAL</h3>
              <p className="text-muted-foreground/80 leading-relaxed">
                Brand content that cuts through the noise and drives engagement across all platforms
              </p>
            </div>

            <div className="group glass p-10 rounded-3xl border border-primary/20 hover:border-primary/60 transition-all duration-700 hover:scale-105 hover:shadow-[0_0_60px_hsl(var(--primary)/0.3)] transform-gpu">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bebas text-3xl tracking-[0.15em] mb-4 text-foreground">POST PRODUCTION</h3>
              <p className="text-muted-foreground/80 leading-relaxed">
                Expert editing, color grading, and VFX to bring your vision to its full potential
              </p>
            </div>
          </div>

          <div className="text-center animate-fade-in-up">
            <Link to="/contact" className="group inline-block">
              <Button variant="neon" size="lg" className="text-lg px-12 py-7 font-bebas tracking-[0.2em]">
                GET STARTED TODAY
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section - Enhanced */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] float-luxury"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="text-center space-y-8 animate-fade-in-up mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm text-primary/80 tracking-[0.3em] uppercase font-medium">The Vision</span>
              </div>
              <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] neon-text drip">
                CREATING CULTURE
              </h2>
              <p className="text-xl text-muted-foreground/90 leading-relaxed max-w-4xl mx-auto">
                From Baltimore to Las Vegas, AKEEF STUDIOS brings cinematic excellence to every frame. 
                Specializing in high-energy hip-hop music videos and visual storytelling that moves culture forward.
              </p>
            </div>

            {/* City Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in">
              <div className="group glass p-6 rounded-2xl border border-primary/20 hover:border-primary/60 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-700 hover:scale-110 transform-gpu text-center">
                <div className="font-bebas text-3xl tracking-[0.2em] text-primary mb-2 neon-text">BALTIMORE</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Home Base</div>
              </div>
              <div className="group glass p-6 rounded-2xl border border-primary/20 hover:border-primary/60 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-700 hover:scale-110 transform-gpu text-center">
                <div className="font-bebas text-3xl tracking-[0.2em] text-primary mb-2 neon-text">DALLAS</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Southern Hub</div>
              </div>
              <div className="group glass p-6 rounded-2xl border border-primary/20 hover:border-primary/60 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-700 hover:scale-110 transform-gpu text-center">
                <div className="font-bebas text-3xl tracking-[0.2em] text-primary mb-2 neon-text">VEGAS</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">West Coast</div>
              </div>
              <div className="group glass p-6 rounded-2xl border border-primary/20 hover:border-primary/60 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all duration-700 hover:scale-110 transform-gpu text-center">
                <div className="font-bebas text-3xl tracking-[0.2em] text-primary mb-2 neon-text">DC</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Capital Region</div>
              </div>
            </div>

            {/* Process Section */}
            <div className="glass p-10 rounded-3xl border border-primary/30 mb-12 animate-fade-in-up">
              <h3 className="font-bebas text-3xl md:text-5xl tracking-[0.15em] text-center mb-8 neon-text">
                THE CREATIVE PROCESS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bebas text-2xl text-primary">01</span>
                  </div>
                  <h4 className="font-bebas text-xl tracking-wider text-foreground">CONCEPT</h4>
                  <p className="text-sm text-muted-foreground/80">We develop the creative vision and storyboard your ideas into reality</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bebas text-2xl text-primary">02</span>
                  </div>
                  <h4 className="font-bebas text-xl tracking-wider text-foreground">PRODUCTION</h4>
                  <p className="text-sm text-muted-foreground/80">Professional filming with cinema-grade equipment and experienced crew</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4">
                    <span className="font-bebas text-2xl text-primary">03</span>
                  </div>
                  <h4 className="font-bebas text-xl tracking-wider text-foreground">POST</h4>
                  <p className="text-sm text-muted-foreground/80">Expert editing, color grading, and effects to deliver your final masterpiece</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-in-up">
              <Link to="/about" className="inline-block group">
                <Button variant="neon" size="lg" className="text-lg px-12 py-7 font-bebas tracking-[0.2em]">
                  DISCOVER THE STORY
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] float-luxury"></div>
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-primary-glow/15 rounded-full blur-[150px] float-luxury" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up glass p-12 md:p-16 rounded-3xl border border-primary/30 hover:border-primary/50 transition-all duration-700">
            <div className="inline-block mb-2">
              <span className="text-sm text-primary tracking-[0.3em] uppercase font-medium">Let's Work</span>
            </div>
            <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] neon-text drip">
              READY TO CREATE?
            </h2>
            <p className="text-xl text-muted-foreground/90 leading-relaxed max-w-2xl mx-auto">
              Transform your vision into cinematic reality. Book your session with AKEEF STUDIOS — trusted by artists across Baltimore, Dallas, Vegas & DC.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
              <div className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500">
                <div className="text-3xl font-bebas text-primary mb-2">27.5K+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Instagram Followers</div>
              </div>
              <div className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500">
                <div className="text-3xl font-bebas text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500">
                <div className="text-3xl font-bebas text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Cities Served</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
              <Link to="/contact" className="group">
                <Button variant="hero" size="lg" className="text-lg px-12 py-7 font-bebas tracking-[0.2em]">
                  BOOK YOUR SHOOT
                </Button>
              </Link>
              <Link to="/portfolio" className="group">
                <Button variant="neon" size="lg" className="text-lg px-12 py-7 font-bebas tracking-[0.2em]">
                  VIEW PORTFOLIO
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="pt-6 border-t border-primary/20">
              <p className="text-sm text-muted-foreground/70">
                📧 Bookings: <a href="mailto:Akeefstudios.info@gmail.com" className="text-primary hover:text-primary-glow transition-colors">Akeefstudios.info@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
