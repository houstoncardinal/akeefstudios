import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? "glass border-b-2 border-primary/40 backdrop-blur-3xl shadow-[0_10px_40px_rgb(0,0,0,0.9)] translate-y-0" : "bg-transparent translate-y-0"
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Revolutionary Logo */}
          <Link to="/" className="font-bebas text-4xl tracking-[0.25em] hover:text-primary transition-all duration-700 hover:scale-110 neon-text drip transform-gpu hover:-rotate-2 hover:shadow-[0_0_40px_hsl(var(--primary))]">
            AKEEF STUDIOS
          </Link>

          {/* Revolutionary Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-[0.25em] uppercase transition-all duration-700 hover:text-primary hover:tracking-[0.35em] relative group transform-gpu hover:scale-110 ${
                  location.pathname === link.path ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-700 ${
                  location.pathname === link.path ? 'w-full shadow-[0_0_15px_hsl(var(--primary))] blur-[1px]' : 'w-0 group-hover:w-full group-hover:shadow-[0_0_15px_hsl(var(--primary))]'
                }`}></span>
                {location.pathname === link.path && (
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full pulse-glow"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-medium tracking-wide transition-all hover:text-primary py-2 ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
