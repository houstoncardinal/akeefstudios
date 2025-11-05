# AKEEF STUDIOS - Deployment Checklist

## Pre-Launch Configuration

### 1. Update Portfolio Data (REQUIRED)
Navigate to `src/data/portfolio.ts` and update each video with:

- **YouTube URLs**: Replace `VIDEO_ID_X` with actual YouTube video IDs
  - Example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
  - You can get video IDs from the YouTube URL after `watch?v=`

- **Instagram URLs**: Replace `/VIDEO_POST_X/` with actual Instagram post IDs
  - Example: `https://www.instagram.com/p/DDwBxMHRla_/`
  - Get these from your Instagram posts

- **Thumbnails**: Update thumbnail URLs
  - YouTube auto-thumbnail format: `https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg`
  - Or upload custom thumbnails to `src/assets/` and import them

### 2. Verify Social Media Links
Check all these links are correct:
- YouTube Channel: `https://www.youtube.com/@akeefstudios`
- Instagram: `https://instagram.com/akeefstudios` (27.5K followers)
- Contact Email in footer and contact page

### 3. SEO Optimization (Already Implemented)
✅ Meta titles and descriptions
✅ Semantic HTML structure
✅ Alt text for images
✅ Proper heading hierarchy
✅ Mobile responsive design

### 4. Performance Checks
- Test all video links open correctly
- Verify all images load properly
- Check mobile navigation works smoothly
- Test contact form functionality
- Verify all CTAs link to correct destinations

### 5. Content Review
- Review all text for accuracy
- Verify stats (50+ projects, 27.5K followers, etc.)
- Check cities served: Baltimore, Dallas, Vegas, DC
- Confirm service descriptions are accurate

## Launch Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Test the production build locally**
   ```bash
   npm run preview
   ```

3. **Deploy** (Click the Publish button in Lovable)
   - Click "Update" to push frontend changes live

4. **Post-Deployment**
   - Test all pages on production
   - Test on mobile devices
   - Verify all social links work
   - Check video playback functionality

## Key Pages to Test
- ✅ Homepage (/)
- ✅ Portfolio (/portfolio)
- ✅ About (/about)
- ✅ Contact (/contact)

## Technical Features Implemented
- ✅ Clickable video cards with thumbnails
- ✅ Instagram feed integration
- ✅ YouTube channel integration
- ✅ Responsive navigation with mobile menu
- ✅ Smooth animations and transitions
- ✅ Glass morphism effects
- ✅ Neon text styling
- ✅ Hero section with proper padding
- ✅ Footer with all social links
- ✅ SEO optimization
- ✅ Performance optimizations

## Notes
- All videos open in new tabs
- Fallback image provided for missing thumbnails
- Instagram embeds load dynamically
- Mobile-first responsive design
- Accessible navigation and CTAs

---

**IMPORTANT**: Before going live, make sure to update the actual YouTube video IDs and Instagram post URLs in `src/data/portfolio.ts`!
