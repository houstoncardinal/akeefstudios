import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Instagram, Youtube, Clock, CheckCircle2, DollarSign, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    artist: "",
    city: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast.success("Thanks for reaching out — let's create something legendary.", {
      duration: 5000,
    });
    setFormData({
      name: "",
      email: "",
      artist: "",
      city: "",
      details: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] float-luxury"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-sm text-primary/80 tracking-[0.3em] uppercase font-medium">Let's Work Together</span>
            </div>
            <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl tracking-[0.15em] neon-text mb-6 drip">
              CONTACT
            </h1>
            <p className="text-xl text-muted-foreground/90 leading-relaxed max-w-3xl mx-auto">
              Ready to bring your vision to life? Book your session with AKEEF STUDIOS — where cinematic dreams become reality
            </p>
          </div>
        </div>
      </section>

      <main className="pb-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div className="glass p-10 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-700 animate-fade-in">
              <h2 className="font-bebas text-3xl tracking-[0.15em] mb-3 neon-text">
                BOOK A SHOOT
              </h2>
              <p className="text-muted-foreground/80 mb-8">Fill out the form below and I'll get back to you within 24-48 hours</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/90">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-border focus:border-primary hover:border-primary/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground/90">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-border focus:border-primary hover:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="artist" className="text-foreground/90">Artist/Project Name</Label>
                    <Input
                      id="artist"
                      name="artist"
                      value={formData.artist}
                      onChange={handleChange}
                      placeholder="Artist or project name"
                      className="bg-background/50 border-border focus:border-primary hover:border-primary/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-foreground/90">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Where are you located?"
                      className="bg-background/50 border-border focus:border-primary hover:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details" className="text-foreground/90">Project Details *</Label>
                  <Textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell me about your vision, budget, timeline, and any specific requirements..."
                    rows={6}
                    required
                    className="bg-background/50 border-border focus:border-primary hover:border-primary/50 transition-all resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full text-lg py-6 font-bebas tracking-[0.2em]">
                  SEND MESSAGE
                </Button>
              </form>
            </div>

            {/* Contact Info & Details */}
            <div className="space-y-6 animate-fade-in">
              {/* Contact Methods */}
              <div className="glass p-10 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-700">
                <h2 className="font-bebas text-3xl tracking-[0.15em] mb-6 neon-text">
                  GET IN TOUCH
                </h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-foreground">Email</h3>
                      <a
                        href="mailto:akeefstudios.info@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        akeefstudios.info@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-foreground">Instagram</h3>
                      <a
                        href="https://www.instagram.com/akeefstudios"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        @akeefstudios — 27.5K followers
                      </a>
                    </div>
                  </div>

                  {/* YouTube */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <Youtube className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 text-foreground">YouTube</h3>
                      <a
                        href="https://youtube.com/@akeefstudios"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        @akeefstudios
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="glass p-10 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-700">
                <h3 className="font-bebas text-2xl tracking-[0.15em] mb-6 text-foreground flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  WHAT TO EXPECT
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground mb-1">Quick Response</div>
                      <div className="text-sm text-muted-foreground/80">Response within 24-48 hours for all inquiries</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground mb-1">Free Consultation</div>
                      <div className="text-sm text-muted-foreground/80">Initial call to discuss your creative vision and goals</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground mb-1">Custom Quote</div>
                      <div className="text-sm text-muted-foreground/80">Tailored pricing based on your project scope and requirements</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground mb-1">Multi-City Service</div>
                      <div className="text-sm text-muted-foreground/80">Available in Baltimore, Dallas, Vegas, and DC</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="glass p-12 rounded-3xl border border-primary/30 animate-fade-in-up">
            <div className="text-center mb-10">
              <h3 className="font-bebas text-4xl md:text-5xl tracking-[0.15em] neon-text mb-4">
                SERVICE AREAS
              </h3>
              <p className="text-muted-foreground/80 max-w-2xl mx-auto">
                Professional video production across major cities
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-all duration-500">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div className="font-bebas text-2xl tracking-wider text-primary mb-1">BALTIMORE</div>
                <div className="text-xs text-muted-foreground uppercase">Home Base</div>
              </div>

              <div className="text-center group hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-all duration-500">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div className="font-bebas text-2xl tracking-wider text-primary mb-1">DALLAS</div>
                <div className="text-xs text-muted-foreground uppercase">Southern Hub</div>
              </div>

              <div className="text-center group hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-all duration-500">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div className="font-bebas text-2xl tracking-wider text-primary mb-1">VEGAS</div>
                <div className="text-xs text-muted-foreground uppercase">West Coast</div>
              </div>

              <div className="text-center group hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-all duration-500">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div className="font-bebas text-2xl tracking-wider text-primary mb-1">DC</div>
                <div className="text-xs text-muted-foreground uppercase">Capital Region</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
