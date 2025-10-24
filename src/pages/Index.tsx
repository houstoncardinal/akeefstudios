import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import InstagramEmbed from "@/components/InstagramEmbed";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Play } from "lucide-react";
import { portfolioVideos } from "@/data/portfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Latest Instagram Content Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6 glass px-6 py-3 rounded-full border border-primary/30 hover:border-primary/50 hover:scale-105 transition-all duration-500">
              <Instagram className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm text-primary tracking-[0.3em] uppercase font-medium">Live From Instagram</span>
            </div>
            <h2 className="font-bebas text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] neon-text mb-4 drip">
              LATEST DROPS
            </h2>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Fresh content straight from <span className="text-primary font-semibold">@akeefstudios</span> — 27.5K followers watching daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto animate-fade-in mb-12">
            {portfolioVideos.slice(0, 8).map((video, index) => (
              <div 
                key={video.id}
                className="group relative overflow-hidden rounded-2xl glass border border-primary/20 hover:border-primary/60 transition-all duration-700 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transform-gpu"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {video.instagramUrl && <InstagramEmbed url={video.instagramUrl} />}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <a 
              href="https://instagram.com/akeefstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button variant="neon" size="lg" className="text-lg px-10 py-6 font-bebas tracking-[0.2em]">
                <Instagram className="mr-3 h-6 w-6 group-hover:rotate-12 transition-all duration-500" />
                FOLLOW @AKEEFSTUDIOS
              </Button>
            </a>
            <Link to="/portfolio" className="group">
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 font-bebas tracking-[0.2em] border-primary/40 hover:border-primary hover:bg-primary/10">
                VIEW FULL PORTFOLIO
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3 glass p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-110 transform-gpu">
              <div className="font-bebas text-5xl md:text-6xl text-primary neon-text">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.2em]">Projects</div>
            </div>
            <div className="text-center space-y-3 glass p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-110 transform-gpu">
              <div className="font-bebas text-5xl md:text-6xl text-primary neon-text">4</div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.2em]">Cities</div>
            </div>
            <div className="text-center space-y-3 glass p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-110 transform-gpu">
              <div className="font-bebas text-5xl md:text-6xl text-primary neon-text">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.2em]">Available</div>
            </div>
            <div className="text-center space-y-3 glass p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-110 transform-gpu">
              <div className="font-bebas text-5xl md:text-6xl text-primary neon-text">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.2em]">Quality</div>
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

      {/* About Preview Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
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
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="glass px-6 py-3 rounded-full border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500 hover:scale-110 transform-gpu">
                <span className="font-bebas text-lg tracking-[0.2em] text-primary">Baltimore</span>
              </div>
              <div className="glass px-6 py-3 rounded-full border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500 hover:scale-110 transform-gpu">
                <span className="font-bebas text-lg tracking-[0.2em] text-primary">Dallas</span>
              </div>
              <div className="glass px-6 py-3 rounded-full border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500 hover:scale-110 transform-gpu">
                <span className="font-bebas text-lg tracking-[0.2em] text-primary">Vegas</span>
              </div>
              <div className="glass px-6 py-3 rounded-full border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500 hover:scale-110 transform-gpu">
                <span className="font-bebas text-lg tracking-[0.2em] text-primary">DC</span>
              </div>
            </div>
            <Link to="/about" className="inline-block">
              <Button variant="neon" size="lg" className="mt-8 text-lg px-10 py-6 font-bebas tracking-[0.2em]">
                DISCOVER THE STORY
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
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
