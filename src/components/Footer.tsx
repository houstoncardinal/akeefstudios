import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="font-bebas text-2xl tracking-wider neon-text mb-2">
              AKEEF STUDIOS
            </h3>
            <p className="text-sm text-muted-foreground">
              © 2025 AKEEF STUDIOS — Directed with Vision
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/akeefstudios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-all hover:scale-110 hover:shadow-glow-blue"
              aria-label="Follow on Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com/@akeefstudios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-all hover:scale-110 hover:shadow-glow-blue"
              aria-label="Subscribe on YouTube"
            >
              <Youtube className="h-6 w-6" />
            </a>
          </div>

          {/* Email */}
          <div className="text-center md:text-right">
            <a
              href="mailto:akeefstudios.info@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              akeefstudios.info@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
