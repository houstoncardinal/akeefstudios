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
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    title: "Real Boston Richey - Help Me",
    artist: "Real Boston Richey",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_1",
    instagramUrl: "https://www.instagram.com/p/VIDEO_POST_1/",
    city: "Baltimore"
  },
  {
    id: 2,
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    title: "Real Boston Richey - Get In There ft. GloRilla",
    artist: "Real Boston Richey ft. GloRilla",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_2",
    instagramUrl: "https://www.instagram.com/p/VIDEO_POST_2/",
    city: "Dallas"
  },
  {
    id: 3,
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    title: "Real Boston Richey - One Hit Wonder",
    artist: "Real Boston Richey",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_3",
    instagramUrl: "https://www.instagram.com/p/VIDEO_POST_3/",
    city: "Vegas"
  },
  {
    id: 4,
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    title: "YoungBoy Never Broke Again - I Forgive Them",
    artist: "YoungBoy Never Broke Again",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_4",
    instagramUrl: "https://www.instagram.com/p/VIDEO_POST_4/",
    city: "DC"
  },
  {
    id: 5,
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    title: "NBA YoungBoy x Birdman x Herm Tha Black Sheep",
    artist: "NBA YoungBoy, Birdman, Herm Tha Black Sheep",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_5",
    instagramUrl: "https://www.instagram.com/p/VIDEO_POST_5/",
    city: "Baltimore"
  },
  {
    id: 6,
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    title: "YoungBoy Never Broke Again - NUSSIE FREESTYLE",
    artist: "YoungBoy Never Broke Again",
    year: "2024",
    role: "Director & Editor",
    youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_6",
    instagramUrl: "https://www.instagram.com/p/VIDEO_POST_6/",
    city: "Vegas"
  }
];
