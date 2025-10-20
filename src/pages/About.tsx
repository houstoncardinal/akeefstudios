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
      
      <main className="pt-24 pb-20">
        {/* Hero Section with Background */}
        <section className="relative min-h-[60vh] flex items-center justify-center mb-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutBg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">
            <h1 className="font-bebas text-6xl md:text-8xl tracking-wider neon-text mb-6">
              ABOUT
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium tracking-wide">
              Visionary Director & Editor
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 space-y-20">
          {/* Bio Section */}
          <section className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="glass p-8 rounded-lg">
              <h2 className="font-bebas text-3xl md:text-4xl tracking-wider text-primary mb-6">
                THE VISION
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  <strong className="text-foreground">Akeef Studios</strong> is a visionary film director and editor 
                  crafting cinematic music videos that merge authenticity, motion, and storytelling. 
                  Based in the United States, he travels nationwide bringing artists' visions to life 
                  through the lens of high-energy cinematography and precision editing.
                </p>
                <p>
                  Known for his work in the hip-hop scene, Akeef has become synonymous with bold visuals, 
                  cultural authenticity, and production excellence. Every frame tells a story. Every cut 
                  moves the culture forward.
                </p>
                <p>
                  From the streets of Baltimore to the bright lights of Las Vegas, Akeef Studios brings 
                  a cinematic edge to every project—whether it's a high-budget music video, a raw short 
                  film, or behind-the-scenes documentation of the creative process.
                </p>
              </div>
            </div>
          </section>

          {/* Stats/Highlights */}
          <section className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <div className="glass p-8 rounded-lg text-center group hover:shadow-glow-blue transition-all">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-bebas text-2xl tracking-wider mb-2">NATIONWIDE</h3>
              <p className="text-muted-foreground">Filming Across Major Cities</p>
            </div>
            
            <div className="glass p-8 rounded-lg text-center group hover:shadow-glow-purple transition-all">
              <Award className="h-12 w-12 mx-auto mb-4 text-secondary group-hover:scale-110 transition-transform" />
              <h3 className="font-bebas text-2xl tracking-wider mb-2">AWARD-WINNING</h3>
              <p className="text-muted-foreground">Recognized Visual Excellence</p>
            </div>
            
            <div className="glass p-8 rounded-lg text-center group hover:shadow-glow-cyan transition-all">
              <Users className="h-12 w-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="font-bebas text-2xl tracking-wider mb-2">#TheCreativeCartel</h3>
              <p className="text-muted-foreground">Creative Collective</p>
            </div>
          </section>

          {/* Cities */}
          <section className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-bebas text-3xl md:text-4xl tracking-wider text-center mb-8 neon-text">
              SHOOTING LOCATIONS
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {cities.map((city) => (
                <div
                  key={city}
                  className="px-6 py-3 glass rounded-full font-bebas text-lg tracking-wider hover:bg-primary/20 hover:shadow-glow-blue transition-all"
                >
                  {city}
                </div>
              ))}
            </div>
          </section>

          {/* Collaborations */}
          <section className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-bebas text-3xl md:text-4xl tracking-wider text-center mb-8 neon-text">
              COLLABORATIONS
            </h2>
            <div className="glass p-8 rounded-lg">
              <ul className="space-y-3">
                {collaborations.map((collab) => (
                  <li
                    key={collab}
                    className="flex items-center gap-3 text-foreground/90"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">{collab}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center animate-fade-in">
            <h2 className="font-bebas text-4xl md:text-5xl tracking-wider mb-6">
              LET'S CREATE SOMETHING LEGENDARY
            </h2>
            <Link to="/contact">
              <Button variant="hero" size="lg">
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
