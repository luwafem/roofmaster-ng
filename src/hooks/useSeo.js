import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSeo = (pageData = {}) => {
  const location = useLocation();

  useEffect(() => {
    // Update canonical URL
    const link = document.querySelector("link[rel='canonical']");
    if (link) {
      link.href = window.location.href;
    }

    // Update meta tags dynamically if needed
    if (pageData.title) {
      document.title = `${pageData.title} | RoofMaster Nigeria`;
    }

    // Log page view for analytics
    console.log(`Page View: ${location.pathname}`);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location, pageData]);

  return null;
};