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
  // Add your actual videos here
  // You can copy entries from your Instagram profile
  
  // Example entries (replace with your real content):
  {
    id: 1,
    thumbnail: "/path/to/your/thumbnail1.jpg",
    title: "YOUR VIDEO TITLE",
    artist: "Artist Name",
    year: "2024",
    role: "Director & Editor",
    instagramUrl: "https://www.instagram.com/p/YOUR_POST_ID/",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    city: "Baltimore"
  },
  // Add more videos...
];
