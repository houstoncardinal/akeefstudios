# How to Update Your Video Portfolio

## Quick Guide: Adding Your Real YouTube Videos

### Step 1: Open the Portfolio Data File
Open `src/data/portfolio.ts` in your code editor.

### Step 2: Get Your YouTube Video IDs

For each video you want to feature:

1. Go to your YouTube video
2. Look at the URL: `https://www.youtube.com/watch?v=ABC123XYZ`
3. Copy the part after `watch?v=` (that's your video ID: `ABC123XYZ`)

### Step 3: Update Each Video Entry

Replace the placeholder data with your actual video information:

```typescript
{
  id: 1,
  // The thumbnail will automatically load from YouTube
  thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg",
  
  // Your video title
  title: "Real Boston Richey - Help Me",
  
  // Artist name
  artist: "Real Boston Richey",
  
  // Year released
  year: "2024",
  
  // Your role
  role: "Director & Editor",
  
  // IMPORTANT: Replace YOUR_VIDEO_ID with the actual YouTube video ID
  youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  
  // Your Instagram post URL (optional)
  instagramUrl: "https://www.instagram.com/p/YOUR_POST_ID/",
  
  // City where it was filmed
  city: "Baltimore"
}
```

### Step 4: Example with Real Data

Here's a complete example:

```typescript
{
  id: 1,
  thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  title: "Real Boston Richey - Help Me (Official Music Video)",
  artist: "Real Boston Richey",
  year: "2024",
  role: "Director & Editor",
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  instagramUrl: "https://www.instagram.com/p/DDwBxMHRla_/",
  city: "Baltimore"
}
```

### Step 5: YouTube Thumbnail Formats

YouTube provides automatic thumbnails in different qualities:
- **Maximum quality**: `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`
- **High quality**: `https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg`
- **Medium quality**: `https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg`

We recommend using `maxresdefault.jpg` for best quality.

### Step 6: Custom Thumbnails (Optional)

If you want to use custom thumbnails instead:

1. Place your thumbnail image in `src/assets/`
2. Import it at the top of the file:
   ```typescript
   import video1Thumb from '@/assets/video-thumb-1.jpg';
   ```
3. Use it in your video entry:
   ```typescript
   thumbnail: video1Thumb,
   ```

### Step 7: Save and Test

1. Save the `portfolio.ts` file
2. The website will automatically update
3. Click on a video card to make sure it opens the correct YouTube video

## Getting Instagram Post URLs

1. Go to your Instagram post
2. Click the three dots (...) menu
3. Select "Copy Link"
4. The URL format will be: `https://www.instagram.com/p/POST_ID/`
5. Use this full URL in the `instagramUrl` field

## Tips

- **Order matters**: Videos are displayed in the order they appear in the array
- **Required fields**: `id`, `thumbnail`, `title`, and at least one URL (`youtubeUrl` or `instagramUrl`)
- **Fallback**: If a thumbnail fails to load, a default video production image will show
- **Links**: Videos will open in a new tab when clicked

## Need Help?

If you run into issues:
1. Make sure all URLs are properly formatted with `https://`
2. Check that video IDs don't have any extra characters
3. Test each YouTube URL in your browser first
4. Ensure all required commas and brackets are in place

---

**Pro Tip**: Update 3-6 videos at a time and test to make sure everything works before adding more!
