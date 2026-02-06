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
      {/* Gradient blur background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/98 to-background/90 backdrop-blur-xl border-t border-primary/20"></div>
      
      {/* Safe area padding for notched phones */}
      <div className="relative px-2 pt-2 pb-safe">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const active = isActive(item.path);
            const Icon = item.icon;
            
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`relative flex flex-col items-center justify-center py-2 px-3 rounded-2xl transition-all duration-300 min-w-[60px] ${
                  item.highlight
                    ? "scale-110 -translate-y-2"
                    : ""
                }`}
              >
                {/* Highlight button (Book) */}
                {item.highlight ? (
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.6)] border-2 border-primary-foreground/20">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-[10px] font-bold text-primary mt-1 tracking-wider uppercase">
                      {item.label}
                    </span>
                  </div>
                ) : (
                  <>
                    {/* Active indicator */}
                    {active && (
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary))]"></div>
                    )}
                    
                    <div
                      className={`p-2 rounded-xl transition-all duration-300 ${
                        active
                          ? "bg-primary/20 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <Icon className={`w-5 h-5 transition-transform duration-300 ${active ? "scale-110" : ""}`} />
                    </div>
                    <span
                      className={`text-[10px] font-medium mt-1 tracking-wide transition-colors ${
                        active ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                  </>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileToolbar;
