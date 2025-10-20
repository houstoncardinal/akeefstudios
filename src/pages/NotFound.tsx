import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      
      <div className="text-center relative z-10 px-6 animate-fade-in-up">
        <h1 className="font-bebas text-9xl md:text-[12rem] tracking-wider neon-text mb-4">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-bebas tracking-wide text-foreground mb-4">
          PAGE NOT FOUND
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Looks like this scene didn't make the final cut. Let's get you back on set.
        </p>
        <Link to="/">
          <Button variant="hero" size="lg">
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
