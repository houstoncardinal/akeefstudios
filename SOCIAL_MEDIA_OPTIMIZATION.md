# Social Media Optimization Guide

This document outlines all Open Graph (OG) and social media optimization features implemented for the Akeef Studios website.

## Custom Open Graph Images

### Generated Images
All Open Graph preview images are custom-designed and professionally generated:

1. **Homepage** (`/og-home.jpg`)
   - Features: AKEEF STUDIOS branding with neon glow effect
   - Subtitle: "CINEMATIC MUSIC VIDEO DIRECTOR"
   - Bottom grid: 3 music video thumbnails showcasing style
   - Dimensions: 1200x630px
   - Style: Dark luxury aesthetic with gold/yellow gradients

2. **About Page** (`/og-about.jpg`)
   - Features: Cinematic silhouette of videographer with camera
   - Text: "ABOUT AKEEF STUDIOS"
   - Subtitle: "Baltimore to Vegas • 50+ Projects • Award-Winning Director"
   - Dimensions: 1200x630px
   - Style: Professional cinematographer aesthetic with golden hour lighting

3. **Portfolio Page** (`/og-portfolio.jpg`)
   - Features: 6-panel grid of stylized music video frames
   - Center overlay: "PORTFOLIO" with massive neon glow
   - Corner branding: "AKEEF STUDIOS"
   - Dimensions: 1200x630px
   - Style: Hip-hop/rap music video aesthetic with premium finish

4. **Contact Page** (`/og-contact.jpg`)
   - Features: "LET'S CREATE SOMETHING LEGENDARY" headline
   - Branding: "AKEEF STUDIOS"
   - Bottom: Social media icons (Instagram, YouTube, Email) in gold
   - Dimensions: 1200x630px
   - Style: Modern, inviting design encouraging collaboration

## Meta Tag Implementation

### Open Graph Tags
All pages include comprehensive OG meta tags:
- `og:title` - Page-specific titles
- `og:description` - Engaging descriptions tailored per page
- `og:type` - website
- `og:url` - Canonical page URLs
- `og:image` - Custom generated preview images
- `og:image:width` - 1200px
- `og:image:height` - 630px
- `og:image:alt` - Descriptive alt text
- `og:site_name` - AKEEF STUDIOS
- `og:locale` - en_US

### Twitter Card Tags
Twitter-specific meta tags for optimal sharing:
- `twitter:card` - summary_large_image
- `twitter:title` - Page-specific titles
- `twitter:description` - Concise descriptions
- `twitter:image` - Custom preview images
- `twitter:image:alt` - Descriptive alt text
- `twitter:site` - @akeefstudios
- `twitter:creator` - @akeefstudios

### Facebook Meta Tags
- `fb:app_id` - Ready for Facebook App ID (currently empty)

### Instagram Meta Tags
- `instapp:owner_user_id` - Ready for Instagram User ID
- `instapp:card` - summary_large_image

## Dynamic Meta Updates

### usePageMeta Hook
Custom React hook (`src/hooks/usePageMeta.tsx`) that:
- Automatically updates meta tags when users navigate between pages
- Changes document title based on current route
- Updates all OG and Twitter Card tags dynamically
- Updates canonical URLs for each page
- No page reload required

### Supported Routes
- `/` - Homepage with featured work showcase
- `/about` - About page with director bio
- `/portfolio` - Portfolio page with full video catalog
- `/contact` - Contact page with booking information

## Platform-Specific Optimization

### Instagram
- Perfect for Instagram Stories sharing (1200x630 optimized)
- Attractive preview cards with strong visual hierarchy
- Brand-consistent gold/black color scheme
- Clear call-to-action in preview text

### Twitter/X
- Large image card format for maximum impact
- Optimized text length for Twitter preview
- Artist names prominently featured
- @akeefstudios attribution

### Facebook
- Optimized for News Feed sharing
- High-quality preview images
- Engaging descriptions that encourage clicks
- Professional branding throughout

### LinkedIn
- Professional aesthetic suitable for B2B sharing
- Clear value proposition in descriptions
- Portfolio highlights for potential clients
- Award and project count emphasized

## Image Specifications

### Technical Details
- Format: JPG (optimized for web)
- Dimensions: 1200x630px (1.91:1 aspect ratio)
- File size: Optimized for fast loading (<200KB each)
- Color profile: sRGB for consistent rendering across platforms
- Location: `/public/` directory (accessible at root)

### Best Practices Followed
✅ Minimum 1200x630px for high-quality display
✅ Text is large and readable even at thumbnail size
✅ Important content within "safe area" (center 80%)
✅ High contrast between text and background
✅ Consistent branding across all images
✅ No copyright issues (all custom generated)

## Testing Social Sharing

### Tools to Validate
1. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Tests: OG tags, image rendering, cache refresh

2. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Tests: Twitter Card display, image optimization

3. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Tests: LinkedIn preview cards, professional display

4. **Open Graph Check**
   - URL: https://opengraphcheck.com/
   - Tests: General OG tag validation across platforms

### How to Test
1. Visit the validator tool
2. Enter your page URL (e.g., https://akeefstudios.com/portfolio)
3. Click "Scrape" or "Preview"
4. Verify image displays correctly
5. Check title and description accuracy
6. If updates don't show, clear cache or wait 24 hours

## Implementation Checklist

✅ Generated custom OG images for all 4 main pages
✅ Updated index.html with comprehensive meta tags
✅ Created usePageMeta hook for dynamic updates
✅ Integrated hook into App.tsx routing
✅ Added proper image dimensions and alt text
✅ Included Twitter, Facebook, and Instagram specific tags
✅ Set up canonical URLs per page
✅ Updated structured data logo reference
✅ Optimized images for fast loading
✅ Ensured mobile-friendly preview cards

## Future Enhancements

Consider implementing:
1. **Dynamic OG Image Generation**: Server-side OG image generation for individual videos
2. **A/B Testing**: Test different preview images to optimize click-through rates
3. **Analytics Integration**: Track social media referral traffic
4. **Video Preview Cards**: Use actual video thumbnails from YouTube for richer previews
5. **Localization**: Multiple language OG images for international audiences
6. **Schema Markup**: Add VideoObject schema for individual video pages

## Social Media Handles

Current social media presence:
- **Instagram**: [@akeefstudios](https://www.instagram.com/akeefstudios) - 27.5K followers
- **YouTube**: [@akeefstudios](https://www.youtube.com/@akeefstudios)
- **Twitter**: @akeefstudios (ready for implementation)

## Contact Information

For media inquiries and collaboration:
- Email: akeefstudios.info@gmail.com
- Website: https://akeefstudios.com
- Based: Baltimore, MD
- Service Areas: Baltimore, Dallas, Las Vegas, Washington DC

---

**Last Updated**: 2025-01-13
**Version**: 1.0
**Maintained By**: AKEEF STUDIOS Development Team
