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
    thumbnail: "https://img.youtube.com/vi/IXJTaHySW8I/maxresdefault.jpg",
    title: "Real Boston Richey - Help Me",
    artist: "Real Boston Richey",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://www.youtube.com/watch?v=IXJTaHySW8I",
    instagramUrl: "https://www.instagram.com/p/C_123/",
    city: "Baltimore"
  },
  {
    id: 2,
    thumbnail: "https://img.youtube.com/vi/ITWRtFhoh40/maxresdefault.jpg",
    title: "Real Boston Richey - Get In There ft. GloRilla",
    artist: "Real Boston Richey ft. GloRilla",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://www.youtube.com/watch?v=ITWRtFhoh40",
    instagramUrl: "https://www.instagram.com/p/C_456/",
    city: "Dallas"
  },
  {
    id: 3,
    thumbnail: "https://img.youtube.com/vi/-rjFAQGkIqc/maxresdefault.jpg",
    title: "Real Boston Richey - One Hit Wonder",
    artist: "Real Boston Richey",
    year: "2025",
    role: "Director & Editor",
    youtubeUrl: "https://www.youtube.com/watch?v=-rjFAQGkIqc",
    instagramUrl: "https://www.instagram.com/p/C_789/",
    city: "Vegas"
  },
  {
    id: 4,
    thumbnail: "https://img.youtube.com/vi/UYp9gqmkAMo/maxresdefault.jpg",
    title: "YoungBoy Never Broke Again - I Forgive Them",
    artist: "YoungBoy Never Broke Again",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://www.youtube.com/watch?v=UYp9gqmkAMo",
    instagramUrl: "https://www.instagram.com/p/C_012/",
    city: "DC"
  },
  {
    id: 5,
    thumbnail: "https://img.youtube.com/vi/uk6VNPWWXqM/maxresdefault.jpg",
    title: "NBA YoungBoy x Birdman x Herm Tha Black Sheep",
    artist: "NBA YoungBoy, Birdman, Herm Tha Black Sheep",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://www.youtube.com/watch?v=uk6VNPWWXqM",
    instagramUrl: "https://www.instagram.com/p/C_345/",
    city: "Baltimore"
  },
  {
    id: 6,
    thumbnail: "https://img.youtube.com/vi/Eb8rXCzJMUc/maxresdefault.jpg",
    title: "YoungBoy Never Broke Again - NUSSIE FREESTYLE",
    artist: "YoungBoy Never Broke Again",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://www.youtube.com/watch?v=Eb8rXCzJMUc",
    instagramUrl: "https://www.instagram.com/p/C_678/",
    city: "Vegas"
  }
];
