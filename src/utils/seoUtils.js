export const generateMetaTags = (data) => {
  const baseUrl = 'https://roofmaster.ng';
  
  return {
    title: data.title || 'RoofMaster Nigeria | Premium Roofing Solutions',
    description: data.description || 'Professional roofing services across Nigeria',
    canonical: `${baseUrl}${data.path || ''}`,
    ogImage: data.ogImage || `${baseUrl}/og-default.jpg`,
    ogType: data.ogType || 'website',
    keywords: data.keywords || 'roofing Nigeria, roof repair, industrial roofing, residential roofing Lagos',
  };
};

export const generateBreadcrumbSchema = (items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
};

export const generateFAQSchema = (faqs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
};