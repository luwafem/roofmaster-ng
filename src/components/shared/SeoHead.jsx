import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoConfig, generateSchemaOrg } from '../../data/seoConfig';

const SeoHead = ({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  ogType = 'website',
  schemaType,
  schemaData,
  keywords = 'roofing Nigeria, roof installation, roof repair Lagos, industrial roofing, residential roofing Nigeria'
}) => {
  const location = useLocation();
  const pageUrl = canonical || `${seoConfig.siteUrl}${location.pathname}`;
  const pageTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
  const pageDescription = description || seoConfig.defaultDescription;
  const pageImage = ogImage || `${seoConfig.siteUrl}/og-default.jpg`;
  
  const schema = schemaType ? generateSchemaOrg(schemaType, schemaData) : generateSchemaOrg();

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical */}
      <link rel="canonical" href={pageUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content="en_NG" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="author" content="RoofMaster Nigeria Ltd" />
      <meta name="copyright" content={`Copyright © ${new Date().getFullYear()} RoofMaster Nigeria Ltd`} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content={seoConfig.region} />
      <meta name="geo.placename" content={seoConfig.locality} />
      <meta name="geo.position" content={`${seoConfig.geo.latitude};${seoConfig.geo.longitude}`} />
      <meta name="ICBM" content={`${seoConfig.geo.latitude}, ${seoConfig.geo.longitude}`} />
      
      {/* Business Hours */}
      <meta property="business:hours:day" content="Monday" />
      <meta property="business:hours:start" content="08:00" />
      <meta property="business:hours:end" content="18:00" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      
      {/* Additional Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "RoofMaster Nigeria Ltd",
          "image": "https://roofmaster.ng/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Construction Avenue",
            "addressLocality": "Ikeja",
            "addressRegion": "Lagos",
            "postalCode": "100001",
            "addressCountry": "NG"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": seoConfig.geo.latitude,
            "longitude": seoConfig.geo.longitude
          },
          "url": seoConfig.siteUrl,
          "telephone": "+2348012345678",
          "priceRange": "₦₦₦",
          "openingHours": seoConfig.openingHours,
          "sameAs": Object.values(seoConfig.socialProfiles)
        })}
      </script>
    </Helmet>
  );
};

export default SeoHead;