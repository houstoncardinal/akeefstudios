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
    title: "Real Boston Richey - Help Me",
    artist: "Real Boston Richey",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://youtu.be/XXXXX",
    instagramUrl: "https://www.instagram.com/akeefstudios",
    city: "Baltimore"
  },
  {
    id: 2,
    thumbnail: "/path/to/your/thumbnail2.jpg",
    title: "Real Boston Richey - Get In There ft. GloRilla",
    artist: "Real Boston Richey ft. GloRilla",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://youtu.be/XXXXX",
    instagramUrl: "https://www.instagram.com/akeefstudios",
    city: "Dallas"
  },
  {
    id: 3,
    thumbnail: "/path/to/your/thumbnail3.jpg",
    title: "Real Boston Richey - One Hit Wonder",
    artist: "Real Boston Richey",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://youtu.be/XXXXX",
    instagramUrl: "https://www.instagram.com/akeefstudios",
    city: "Vegas"
  },
  {
    id: 4,
    thumbnail: "/path/to/your/thumbnail4.jpg",
    title: "YoungBoy Never Broke Again - I Forgive Them",
    artist: "YoungBoy Never Broke Again",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://youtu.be/XXXXX",
    instagramUrl: "https://www.instagram.com/akeefstudios",
    city: "DC"
  },
  {
    id: 5,
    thumbnail: "/path/to/your/thumbnail5.jpg",
    title: "NBA YoungBoy x Birdman x Herm Tha Black Sheep",
    artist: "NBA YoungBoy, Birdman, Herm Tha Black Sheep",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://youtu.be/XXXXX",
    instagramUrl: "https://www.instagram.com/akeefstudios",
    city: "Baltimore"
  },
  {
    id: 6,
    thumbnail: "/path/to/your/thumbnail6.jpg",
    title: "YoungBoy Never Broke Again - NUSSIE FREESTYLE",
    artist: "YoungBoy Never Broke Again",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://youtu.be/XXXXX",
    instagramUrl: "https://www.instagram.com/akeefstudios",
    city: "Vegas"
  }
];
