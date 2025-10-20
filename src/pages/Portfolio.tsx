import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import videoThumb1 from "@/assets/video-thumb-1.jpg";
import videoThumb2 from "@/assets/video-thumb-2.jpg";
import videoThumb3 from "@/assets/video-thumb-3.jpg";

const Portfolio = () => {
  // Sample portfolio data - can be replaced with API data later
  const videos = [
    {
      id: 1,
      thumbnail: videoThumb1,
      title: "URBAN NIGHTS",
      artist: "Artist Name",
      year: "2024",
      role: "Director & Editor",
    },
    {
      id: 2,
      thumbnail: videoThumb2,
      title: "NEON DREAMS",
      artist: "Artist Name",
      year: "2024",
      role: "Director & Editor",
    },
    {
      id: 3,
      thumbnail: videoThumb3,
      title: "STREET SYMPHONY",
      artist: "Artist Name",
      year: "2024",
      role: "Director & Editor",
    },
    {
      id: 4,
      thumbnail: videoThumb1,
      title: "CITY LIGHTS",
      artist: "Artist Name",
      year: "2023",
      role: "Director",
    },
    {
      id: 5,
      thumbnail: videoThumb2,
      title: "MIDNIGHT VIBES",
      artist: "Artist Name",
      year: "2023",
      role: "Editor",
    },
    {
      id: 6,
      thumbnail: videoThumb3,
      title: "CULTURE SHIFT",
      artist: "Artist Name",
      year: "2023",
      role: "Director & Editor",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="font-bebas text-6xl md:text-8xl tracking-wider neon-text mb-4">
              PORTFOLIO
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of cinematic visuals that define culture and push creative boundaries
            </p>
          </div>

          {/* Filter/Search Section - Placeholder for future functionality */}
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 glass rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-all">
              All
            </button>
            <button className="px-6 py-2 glass rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-all">
              Music Videos
            </button>
            <button className="px-6 py-2 glass rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-all">
              Short Films
            </button>
            <button className="px-6 py-2 glass rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-all">
              Behind The Scenes
            </button>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="px-8 py-3 glass rounded-lg font-bebas text-lg tracking-wider hover:bg-primary/20 hover:text-primary hover:shadow-glow-blue transition-all">
              Load More
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
