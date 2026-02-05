import { Camera, Film, Palette, Zap, Award, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--primary)/0.06),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Two Column Layout */}
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-xs text-primary tracking-[0.3em] uppercase font-medium">
              <span className="w-8 h-px bg-primary"></span>
              Full-Service Production
            </span>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.05em] text-foreground leading-[1.1]">
              Everything You Need To{' '}
              <span className="text-primary">Stand Out</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed max-w-lg font-inter font-light">
              From concept to final cut, we handle every aspect of your visual production. 
              Cinematic quality meets rapid turnaround — your vision, amplified.
            </p>
            
            {/* Quick Stats Row */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="font-bebas text-3xl md:text-4xl text-primary">1000+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="font-bebas text-3xl md:text-4xl text-primary">27.5K</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Followers</div>
              </div>
              <div>
                <div className="font-bebas text-3xl md:text-4xl text-primary">4</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Cities</div>
              </div>
            </div>
          </div>

          {/* Right Column - Creative CTA Card */}
          <div className="relative">
            {/* Main CTA Card */}
            <div className="relative glass rounded-3xl border border-primary/20 p-8 md:p-10 overflow-hidden group hover:border-primary/40 transition-all duration-500">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                    <Play className="w-5 h-5 text-primary fill-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Featured Work</span>
                </div>
                
                <h3 className="font-bebas text-3xl md:text-4xl tracking-wide text-foreground">
                  Ready to Create Something{' '}
                  <span className="text-primary">Legendary?</span>
                </h3>
                
                <p className="text-muted-foreground/80 font-inter font-light leading-relaxed">
                  Join artists like Real Boston Richey and YoungBoy Never Broke Again who trust us with their visual identity.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link to="/portfolio">
                    <Button variant="neon" className="w-full sm:w-auto font-bebas tracking-wider text-base px-6 py-5 group/btn">
                      View Portfolio
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full sm:w-auto font-bebas tracking-wider text-base px-6 py-5 border-primary/30 hover:bg-primary/10 hover:border-primary/50">
                      Book a Shoot
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-r border-t border-primary/20 rounded-tr-3xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-l border-b border-primary/20 rounded-bl-2xl"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 md:top-6 md:-right-6 glass px-4 py-2 rounded-full border border-primary/30 animate-float">
              <span className="text-xs font-medium text-primary tracking-wider">100% Quality</span>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-20 md:mt-28 pt-12 border-t border-border/50">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, title: 'Rapid Delivery', desc: 'Fast turnaround without compromising quality' },
              { icon: Camera, title: '4K Cinema', desc: 'Professional cinema cameras and equipment' },
              { icon: Palette, title: 'Color Grade', desc: 'Signature cinematic color grading' },
              { icon: Award, title: 'Viral Ready', desc: 'Optimized for all social platforms' },
            ].map((feature, index) => (
              <div 
                key={index}
                className="group glass p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bebas text-lg tracking-wider text-foreground">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground/70 font-inter font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}