import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageMetaData {
  title: string;
  description: string;
  ogImage: string;
  ogUrl: string;
}

const pageMetaData: Record<string, PageMetaData> = {
  "/": {
    title: "AKEEF STUDIOS — Film Director & Editor | Cinematic Music Videos",
    description: "Visuals That Move Culture. World-class cinematic music videos and visual storytelling. Featuring Real Boston Richey, YoungBoy Never Broke Again & more.",
    ogImage: "https://akeefstudios.com/og-home.jpg",
    ogUrl: "https://akeefstudios.com"
  },
  "/about": {
    title: "About AKEEF STUDIOS — Award-Winning Director | Baltimore to Vegas",
    description: "Baltimore to Vegas • 50+ Projects • Award-Winning Director. Crafting cinematic music videos that define culture and push creative boundaries.",
    ogImage: "https://akeefstudios.com/og-about.jpg",
    ogUrl: "https://akeefstudios.com/about"
  },
  "/portfolio": {
    title: "Portfolio — AKEEF STUDIOS | Music Video Director",
    description: "A curated collection of cinematic visuals for Real Boston Richey, YoungBoy Never Broke Again, and more. Hip-hop music videos that move culture.",
    ogImage: "https://akeefstudios.com/og-portfolio.jpg",
    ogUrl: "https://akeefstudios.com/portfolio"
  },
  "/contact": {
    title: "Contact AKEEF STUDIOS — Let's Create Something Legendary",
    description: "Ready to create groundbreaking music videos? Get in touch with AKEEF STUDIOS. Available nationwide for music video production and creative direction.",
    ogImage: "https://akeefstudios.com/og-contact.jpg",
    ogUrl: "https://akeefstudios.com/contact"
  }
};

export const usePageMeta = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMetaData[location.pathname] || pageMetaData["/"];

    // Update document title
    document.title = meta.title;

    // Update meta description
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", meta.description);
    }

    // Update Open Graph tags
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    const ogUrlMeta = document.querySelector('meta[property="og:url"]');

    if (ogTitleMeta) ogTitleMeta.setAttribute("content", meta.title);
    if (ogDescriptionMeta) ogDescriptionMeta.setAttribute("content", meta.description);
    if (ogImageMeta) ogImageMeta.setAttribute("content", meta.ogImage);
    if (ogUrlMeta) ogUrlMeta.setAttribute("content", meta.ogUrl);

    // Update Twitter Card tags
    const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
    const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');
    const twitterImageMeta = document.querySelector('meta[name="twitter:image"]');

    if (twitterTitleMeta) twitterTitleMeta.setAttribute("content", meta.title);
    if (twitterDescriptionMeta) twitterDescriptionMeta.setAttribute("content", meta.description);
    if (twitterImageMeta) twitterImageMeta.setAttribute("content", meta.ogImage);

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', meta.ogUrl);

  }, [location.pathname]);
};
