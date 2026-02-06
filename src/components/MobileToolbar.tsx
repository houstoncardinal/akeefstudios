import { Link, useLocation } from "react-router-dom";
import { Home, Play, MessageCircle, Calendar, User } from "lucide-react";

const MobileToolbar = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Play, label: "Portfolio", path: "/portfolio" },
    { icon: Calendar, label: "Book", path: "/contact", highlight: true },
    { icon: MessageCircle, label: "Message", path: "/contact#message" },
    { icon: User, label: "About", path: "/about" },
  ];

  const isActive = (path: string) => {
    if (path.includes("#")) {
      return location.pathname === path.split("#")[0];
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Luxury crown molding top accent */}
      <div className="absolute -top-4 left-4 right-4 h-8 overflow-hidden">
        <svg viewBox="0 0 400 32" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="crownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Crown molding curve */}
          <path 
            d="M0,32 Q50,32 80,20 Q120,4 200,4 Q280,4 320,20 Q350,32 400,32 L400,32 L0,32 Z" 
            fill="url(#crownGradient)"
          />
          {/* Top edge accent line */}
          <path 
            d="M20,28 Q60,28 90,18 Q130,4 200,4 Q270,4 310,18 Q340,28 380,28" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="0.5" 
            strokeOpacity="0.4"
            filter="url(#glow)"
          />
        </svg>
      </div>

      {/* Main toolbar background with curved top */}
      <div className="relative">
        {/* Curved top edge */}
        <div className="absolute -top-3 left-0 right-0 h-6 overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background via-background to-transparent rounded-t-[2rem]"></div>
        </div>
        
        {/* Glass background */}
        <div className="relative bg-gradient-to-t from-background via-background/98 to-background/95 backdrop-blur-2xl border-t border-primary/20">
          {/* Inner luxury border accent */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          
          {/* Corner accents - left */}
          <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden">
            <div className="absolute top-2 left-2 w-6 h-6 border-l border-t border-primary/30 rounded-tl-xl"></div>
          </div>
          
          {/* Corner accents - right */}
          <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
            <div className="absolute top-2 right-2 w-6 h-6 border-r border-t border-primary/30 rounded-tr-xl"></div>
          </div>

          {/* Safe area padding */}
          <div className="px-3 pt-2 pb-safe">
            <div className="flex items-end justify-around">
              {navItems.map((item, index) => {
                const active = isActive(item.path);
                const Icon = item.icon;
                
                // Center highlight button
                if (item.highlight) {
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      className="relative flex flex-col items-center justify-center -mt-5"
                    >
                      {/* Embedded button container */}
                      <div className="relative">
                        {/* Outer glow ring */}
                        <div className="absolute -inset-1 bg-primary/20 rounded-full blur-md animate-pulse"></div>
                        
                        {/* Main button */}
                        <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary via-primary to-primary-glow flex items-center justify-center shadow-[0_4px_20px_hsl(var(--primary)/0.5),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.3)] border border-primary-foreground/10">
                          {/* Inner highlight */}
                          <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-60"></div>
                          <Icon className="w-5 h-5 text-primary-foreground relative z-10" />
                        </div>
                        
                        {/* Bottom accent */}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full blur-sm"></div>
                      </div>
                      
                      {/* Label - perfectly centered */}
                      <span className="text-[10px] font-bold text-primary mt-2 tracking-wider uppercase text-center w-full">
                        {item.label}
                      </span>
                    </Link>
                  );
                }
                
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="relative flex flex-col items-center justify-center py-2 min-w-[56px]"
                  >
                    {/* Active indicator dot */}
                    {active && (
                      <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_6px_hsl(var(--primary))]"></div>
                    )}
                    
                    <div
                      className={`p-2.5 rounded-xl transition-all duration-300 ${
                        active
                          ? "bg-primary/15 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Icon className={`w-5 h-5 transition-transform duration-300 ${active ? "scale-105" : ""}`} />
                    </div>
                    <span
                      className={`text-[9px] font-medium mt-1 tracking-wide transition-colors text-center ${
                        active ? "text-primary" : "text-muted-foreground/70"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Bottom decorative line */}
          <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        </div>
      </div>
    </nav>
  );
};

export default MobileToolbar;
