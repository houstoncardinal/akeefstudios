import { Camera, Film, Palette, Zap, Play, Award } from 'lucide-react'

export function FeaturesSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--primary)/0.08),transparent_50%)]"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="mx-auto grid gap-12 lg:gap-20 lg:grid-cols-2">
                    {/* Left Column - Text Content */}
                    <div className="lg:flex lg:flex-col lg:justify-center">
                        <span className="text-sm text-primary tracking-[0.3em] uppercase font-medium mb-4 block">
                            Full-Service Production
                        </span>
                        <h2 className="font-bebas text-4xl md:text-6xl lg:text-7xl tracking-[0.1em] text-foreground mb-6">
                            EVERYTHING YOU NEED TO <span className="text-primary neon-text">STAND OUT</span>
                        </h2>
                        <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-xl">
                            From concept to final cut, we handle every aspect of your visual production. 
                            Cinematic quality meets rapid turnaround — your vision, amplified.
                        </p>
                    </div>

                    {/* Right Column - Visual Grid */}
                    <div className="relative lg:py-12">
                        {/* Main showcase image */}
                        <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-[0_0_60px_hsl(var(--primary)/0.15)]">
                            <div className="aspect-[4/3] relative">
                                {/* Gradient overlay grid effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.2),transparent_70%)]"></div>
                                
                                {/* Floating icons */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="grid grid-cols-3 gap-4 p-8">
                                        <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]">
                                            <Camera className="w-8 h-8 text-primary" />
                                        </div>
                                        <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]">
                                            <Film className="w-8 h-8 text-primary" />
                                        </div>
                                        <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]">
                                            <Palette className="w-8 h-8 text-primary" />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Decorative elements */}
                                <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-primary/40 rounded-tl-3xl"></div>
                                <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-primary/40 rounded-br-3xl"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature Cards Grid */}
                <div className="mt-16 border-t border-primary/20 pt-16">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Feature 1 */}
                        <div className="group glass p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Zap className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bebas text-xl tracking-wider text-foreground">RAPID DELIVERY</h3>
                            </div>
                            <p className="text-sm text-muted-foreground/80 leading-relaxed">
                                Fast turnaround without compromising quality. Your content ready when you need it.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group glass p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Camera className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bebas text-xl tracking-wider text-foreground">4K CINEMA</h3>
                            </div>
                            <p className="text-sm text-muted-foreground/80 leading-relaxed">
                                Shot on professional cinema cameras with industry-standard lenses and lighting.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group glass p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Palette className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bebas text-xl tracking-wider text-foreground">COLOR GRADE</h3>
                            </div>
                            <p className="text-sm text-muted-foreground/80 leading-relaxed">
                                Professional color grading that gives your visuals that signature cinematic look.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="group glass p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Award className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bebas text-xl tracking-wider text-foreground">VIRAL READY</h3>
                            </div>
                            <p className="text-sm text-muted-foreground/80 leading-relaxed">
                                Optimized for maximum engagement on Instagram, TikTok, YouTube and all platforms.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Bar */}
                <div className="mt-16 glass rounded-2xl border border-primary/20 p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="group">
                            <div className="font-bebas text-4xl md:text-5xl text-primary neon-text mb-2 group-hover:scale-110 transition-transform">50+</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Projects Completed</div>
                        </div>
                        <div className="group">
                            <div className="font-bebas text-4xl md:text-5xl text-primary neon-text mb-2 group-hover:scale-110 transition-transform">4</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Cities Covered</div>
                        </div>
                        <div className="group">
                            <div className="font-bebas text-4xl md:text-5xl text-primary neon-text mb-2 group-hover:scale-110 transition-transform">27.5K</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Instagram Following</div>
                        </div>
                        <div className="group">
                            <div className="font-bebas text-4xl md:text-5xl text-primary neon-text mb-2 group-hover:scale-110 transition-transform">100%</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
