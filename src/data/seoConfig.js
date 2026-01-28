export const seoConfig = {
  siteName: "Liatel Integrated Servies | Premium Roofing Solutions",
  defaultTitle: "Liatel Integrated Servies - Professional Roofing Services",
  defaultDescription: "Leading roofing company in Nigeria offering industrial, commercial, and residential roofing solutions with 15+ years expertise.",
  siteUrl: "https://Liatel.ng",
  twitterHandle: "@Liatel",
  companyType: "Construction Company",
  locality: "Lagos, Nigeria",
  region: "NG-LA",
  country: "Nigeria",
  postalCode: "100001",
  openingHours: "Mo-Fr 08:00-18:00",
  contactType: "customer service",
  geo: {
    latitude: "6.5244",
    longitude: "3.3792"
  },
  socialProfiles: {
    facebook: "https://facebook.com/Liatel",
    twitter: "https://twitter.com/Liatel",
    instagram: "https://instagram.com/Liatel",
    linkedin: "https://linkedin.com/company/Liatel"
  }
};

export const generateSchemaOrg = (pageType, data = {}) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Liatel Nigeria Ltd",
    "url": "https://Liatel.ng",
    "logo": "https://Liatel.ng/logo.png",
    "description": "Professional roofing services in Nigeria",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Construction Avenue",
      "addressLocality": "Ikeja",
      "addressRegion": "Lagos",
      "postalCode": "100001",
      "addressCountry": "NG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2348012345678",
      "contactType": "customer service",
      "availableLanguage": ["English", "Yoruba", "Igbo", "Hausa"]
    }
  };

  switch (pageType) {
    case 'service':
      return {
        ...baseSchema,
        "@type": "Service",
        "serviceType": data.title,
        "provider": baseSchema,
        "areaServed": "Nigeria",
        "description": data.description
      };
    case 'project':
      return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": data.title,
        "description": data.description,
        "creator": baseSchema
      };
    default:
      return baseSchema;
  }
};