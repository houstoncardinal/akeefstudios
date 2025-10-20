# How to Import Your Instagram Videos

Since Instagram doesn't allow direct automated scraping, here are the best ways to add your content to the portfolio:

## Option 1: Manual Portfolio Update (Recommended & Easiest)

1. **Go to your Instagram**: https://www.instagram.com/akeefstudios
2. **For each video post you want to feature:**
   - Click on the post
   - Copy the URL from your browser (e.g., `https://www.instagram.com/p/ABC123/`)
   - Save the video thumbnail by right-clicking and saving the image
   - Upload thumbnails to `src/assets/` folder

3. **Update the portfolio data** in `src/data/portfolio.ts`:
   ```typescript
   {
     id: 1,
     thumbnail: "/path/to/thumbnail.jpg",
     title: "YOUR VIDEO TITLE",
     artist: "Artist Name",
     year: "2024",
     role: "Director & Editor",
     instagramUrl: "https://www.instagram.com/p/YOUR_POST_ID/",
     city: "Baltimore"
   }
   ```

## Option 2: Instagram Embeds

You can embed Instagram posts directly on the website:

1. Get the Instagram post URL
2. Use the `InstagramEmbed` component:
   ```tsx
   <InstagramEmbed url="https://www.instagram.com/p/YOUR_POST_ID/" />
   ```

## Option 3: YouTube Integration (Best for Video Playback)

If your videos are also on YouTube:

1. **YouTube API Integration** (requires API key):
   - Get a YouTube API key from Google Cloud Console
   - Use the YouTube Data API to fetch videos from your channel
   - Display them in an embedded player

2. **Manual YouTube Links**:
   - Add YouTube URLs to the portfolio data
   - Videos will open in YouTube player when clicked

## Option 4: Instagram Basic Display API (Advanced)

For automated updates, you would need:

1. Create a Facebook Developer account
2. Set up an Instagram Basic Display API app
3. Get an access token
4. Connect to Lovable Cloud to store the token securely
5. Create an API endpoint to fetch your posts

**Note**: This requires app review by Instagram and is more complex.

## Current Status

✅ Your social media links are now correctly pointing to @akeefstudios
✅ Portfolio structure is ready to receive your content
✅ Instagram embed component is available

## Next Steps

**To add your actual videos:**
1. Choose Option 1 (Manual) for quickest results
2. Update `src/data/portfolio.ts` with your video information
3. Upload thumbnail images to the `src/assets/` folder
4. The portfolio page will automatically display your content

**Need help?** Just let me know which videos you want to feature and I can help structure the data!
