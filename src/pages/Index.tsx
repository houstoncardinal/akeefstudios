import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VideoCard from "@/components/VideoCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import videoThumb1 from "@/assets/video-thumb-1.jpg";
import videoThumb2 from "@/assets/video-thumb-2.jpg";
import videoThumb3 from "@/assets/video-thumb-3.jpg";

const Index = () => {
  const featuredVideos = [
    {
      id: 1,
      thumbnail: videoThumb1,
      title: "URBAN NIGHTS",
      artist: "Featured Artist",
      year: "2024",
      role: "Director & Editor",
    },
    {
      id: 2,
      thumbnail: videoThumb2,
      title: "NEON DREAMS",
      artist: "Featured Artist",
      year: "2024",
      role: "Director & Editor",
    },
    {
      id: 3,
      thumbnail: videoThumb3,
      title: "STREET SYMPHONY",
      artist: "Featured Artist",
      year: "2024",
      role: "Director & Editor",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Featured Work Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-sm text-primary/80 tracking-[0.3em] uppercase font-medium">Showcase</span>
            </div>
            <h2 className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-[0.1em] neon-text mb-6">
              FEATURED WORK
            </h2>
            <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto">
              Latest cinematic creations pushing boundaries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/portfolio" className="group">
              <Button variant="neon" size="lg" className="text-lg px-8 py-6 shadow-glow-blue">
                View Full Portfolio
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-32 bg-card/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-sm text-primary/80 tracking-[0.3em] uppercase font-medium">The Vision</span>
            </div>
            <h2 className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-[0.1em] neon-text">
              CREATING CULTURE
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground/90 leading-relaxed max-w-4xl mx-auto">
              From Baltimore to Las Vegas, AKEEF STUDIOS brings cinematic excellence to every frame. 
              Specializing in high-energy hip-hop music videos and visual storytelling that moves culture forward.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="glass px-8 py-4 rounded-full border border-primary/20 hover:border-primary/40 hover:shadow-glow-blue transition-all duration-300">
                <span className="font-bebas text-xl tracking-[0.2em]">Baltimore</span>
              </div>
              <div className="glass px-8 py-4 rounded-full border border-primary/20 hover:border-primary/40 hover:shadow-glow-blue transition-all duration-300">
                <span className="font-bebas text-xl tracking-[0.2em]">Dallas</span>
              </div>
              <div className="glass px-8 py-4 rounded-full border border-primary/20 hover:border-primary/40 hover:shadow-glow-blue transition-all duration-300">
                <span className="font-bebas text-xl tracking-[0.2em]">Vegas</span>
              </div>
              <div className="glass px-8 py-4 rounded-full border border-primary/20 hover:border-primary/40 hover:shadow-glow-blue transition-all duration-300">
                <span className="font-bebas text-xl tracking-[0.2em]">DC</span>
              </div>
            </div>
            <Link to="/about" className="inline-block">
              <Button variant="purple" size="lg" className="mt-12 text-lg px-8 py-6 shadow-glow-purple">
                Learn More About The Vision
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-40"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-sm text-primary/80 tracking-[0.3em] uppercase font-medium">Let's Collaborate</span>
            </div>
            <h2 className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-[0.1em] neon-text">
              READY TO CREATE?
            </h2>
            <p className="text-2xl md:text-3xl text-foreground/90 leading-relaxed">
              Let's bring your vision to life with world-class cinematography and editing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link to="/contact" className="group">
                <Button variant="hero" size="lg" className="text-lg px-10 py-7 shadow-glow-cyan">
                  Book Your Shoot
                </Button>
              </Link>
              <Link to="/portfolio" className="group">
                <Button variant="neon" size="lg" className="text-lg px-10 py-7 shadow-glow-blue">
                  Explore Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
