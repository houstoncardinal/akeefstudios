// Portfolio data structure
// Update this file with your actual video information from Instagram/YouTube

export interface PortfolioVideo {
  id: number;
  thumbnail: string;
  title: string;
  artist?: string;
  year?: string;
  role?: string;
  videoUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
  city?: string;
}

// Instructions for updating:
// 1. Go to your Instagram: https://www.instagram.com/akeefstudios
// 2. For each video/post you want to feature:
//    - Copy the Instagram post URL (e.g., https://www.instagram.com/p/ABC123/)
//    - Copy the YouTube video URL if available
//    - Download or link to the thumbnail image
//    - Fill in the details below
//
// Example format:
// {
//   id: 1,
//   thumbnail: "/path/to/thumbnail.jpg" or import from assets,
//   title: "VIDEO TITLE",
//   artist: "Artist Name",
//   year: "2024",
//   role: "Director & Editor",
//   instagramUrl: "https://www.instagram.com/p/ABC123/",
//   youtubeUrl: "https://www.youtube.com/watch?v=xyz",
//   city: "Baltimore"
// }

export const portfolioVideos: PortfolioVideo[] = [
  {
    id: 1,
    thumbnail: "/path/to/your/thumbnail1.jpg",
    title: "LATEST DROP",
    artist: "Featured Artist",
    year: "2024",
    role: "Director & Editor",
    instagramUrl: "https://www.instagram.com/p/DDwBxMHRla_/",
    city: "Baltimore"
  },
  {
    id: 2,
    thumbnail: "/path/to/your/thumbnail2.jpg",
    title: "VISUALS",
    artist: "Featured Artist",
    year: "2024",
    role: "Director & Editor",
    instagramUrl: "https://www.instagram.com/p/DDrhbVmxLm5/",
    city: "Dallas"
  },
  {
    id: 3,
    thumbnail: "/path/to/your/thumbnail3.jpg",
    title: "NEW WAVE",
    artist: "Featured Artist",
    year: "2024",
    role: "Director & Editor",
    instagramUrl: "https://www.instagram.com/p/DDm_W8SREBr/",
    city: "Vegas"
  },
  {
    id: 4,
    thumbnail: "/path/to/your/thumbnail4.jpg",
    title: "CINEMATIC",
    artist: "Featured Artist",
    year: "2024",
    role: "Director & Editor",
    instagramUrl: "https://www.instagram.com/p/DDkY8uGR5q3/",
    city: "DC"
  },
  {
    id: 5,
    thumbnail: "/path/to/your/thumbnail5.jpg",
    title: "STUDIO SESSION",
    artist: "Featured Artist",
    year: "2024",
    role: "Director & Editor",
    instagramUrl: "https://www.instagram.com/p/DDhKxMHRla_/",
    city: "Baltimore"
  },
  {
    id: 6,
    thumbnail: "/path/to/your/thumbnail6.jpg",
    title: "BTS VIBES",
    artist: "Featured Artist",
    year: "2024",
    role: "Director & Editor",
    instagramUrl: "https://www.instagram.com/p/DDfhbVmxLm5/",
    city: "Vegas"
  },
  {
    id: 7,
    thumbnail: "/path/to/your/thumbnail7.jpg",
    title: "STREET DREAMS",
    artist: "Featured Artist",
    year: "2024",
    role: "Director & Editor",
    instagramUrl: "https://www.instagram.com/p/DDc_W8SREBr/",
    city: "Dallas"
  },
  {
    id: 8,
    thumbnail: "/path/to/your/thumbnail8.jpg",
    title: "NIGHT LIFE",
    artist: "Featured Artist",
    year: "2024",
    role: "Director & Editor",
    instagramUrl: "https://www.instagram.com/p/DDaY8uGR5q3/",
    city: "DC"
  }
];
