import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
  const cities = ["Baltimore", "Dallas", "Las Vegas", "Washington DC", "Philadelphia"];
  
  const collaborations = [
    "The Creative Cartel",
    "Major Record Labels",
    "Independent Artists",
    "Brand Productions",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 md:pt-24 pb-12 md:pb-20">
        {/* Hero Section with Background */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center mb-12 md:mb-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutBg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center animate-fade-in-up">
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider neon-text mb-4 md:mb-6">
              ABOUT
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary font-medium tracking-wide">
              Visionary Director & Editor
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 space-y-12 md:space-y-20">
          {/* Bio Section */}
          <section className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="glass p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-primary/20">
              <h2 className="font-bebas text-2xl sm:text-3xl md:text-4xl tracking-wider text-primary mb-4 md:mb-6">
                THE VISION
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed text-sm sm:text-base">
                <p>
                  <strong className="text-foreground">Akeef Studios</strong> is a visionary film director and editor 
                  crafting cinematic music videos that merge authenticity, motion, and storytelling. 
                  Based in the United States, traveling nationwide bringing artists' visions to life 
                  through high-energy cinematography and precision editing.
                </p>
                <p>
                  Known for work in the hip-hop scene, Akeef has become synonymous with bold visuals, 
                  cultural authenticity, and production excellence. Every frame tells a story. Every cut 
                  moves the culture forward.
                </p>
                <p>
                  From Baltimore to Las Vegas, Akeef Studios brings 
                  a cinematic edge to every project—whether it's a high-budget music video, a raw short 
                  film, or behind-the-scenes documentation of the creative process.
                </p>
              </div>
            </div>
          </section>

          {/* Stats/Highlights */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 animate-fade-in">
            <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl text-center group hover:border-primary/40 border border-primary/20 transition-all duration-500">
              <MapPin className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-bebas text-xl md:text-2xl tracking-wider mb-1 md:mb-2">NATIONWIDE</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Major Cities</p>
            </div>
            
            <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl text-center group hover:border-primary/40 border border-primary/20 transition-all duration-500">
              <Award className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-bebas text-xl md:text-2xl tracking-wider mb-1 md:mb-2">AWARD-WINNING</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Visual Excellence</p>
            </div>
            
            <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl text-center group hover:border-primary/40 border border-primary/20 transition-all duration-500">
              <Users className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-bebas text-xl md:text-2xl tracking-wider mb-1 md:mb-2">#TheCreativeCartel</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Creative Collective</p>
            </div>
          </section>

          {/* Cities */}
          <section className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-bebas text-2xl sm:text-3xl md:text-4xl tracking-wider text-center mb-6 md:mb-8 neon-text">
              SHOOTING LOCATIONS
            </h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {cities.map((city) => (
                <div
                  key={city}
                  className="px-4 sm:px-6 py-2 sm:py-3 glass rounded-full font-bebas text-base sm:text-lg tracking-wider hover:bg-primary/20 hover:border-primary/40 border border-primary/20 transition-all duration-500"
                >
                  {city}
                </div>
              ))}
            </div>
          </section>

          {/* Collaborations */}
          <section className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-bebas text-2xl sm:text-3xl md:text-4xl tracking-wider text-center mb-6 md:mb-8 neon-text">
              COLLABORATIONS
            </h2>
            <div className="glass p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-primary/20">
              <ul className="space-y-3 md:space-y-4">
                {collaborations.map((collab) => (
                  <li
                    key={collab}
                    className="flex items-center gap-3 text-foreground/90 text-sm sm:text-base"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="font-medium">{collab}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center animate-fade-in px-4">
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider mb-6 md:mb-8">
              LET'S CREATE SOMETHING LEGENDARY
            </h2>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7">
                Start Your Project
              </Button>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
