import Script from 'next/script';

interface StructuredDataProps {
  locale?: string;
}

export default function StructuredData() {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Wplace Pixel Tool",
    "alternateName": ["Wplace Pixel Converter", "Wplace Art Generator"],
    "url": "https://wplace.website",
    "description": "Professional pixel art converter for Wplace canvas. Transform any image into Wplace-ready pixel art with advanced algorithms including Lanczos scaling and Floyd-Steinberg dithering.",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires HTML5 Canvas support",
    "softwareVersion": "2.0",
    "dateModified": "2025-01-12",
    "author": {
      "@type": "Organization",
      "name": "Wplace Pixel Tool Team"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Wplace Pixel Tool"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Lanczos resampling algorithm",
      "Floyd-Steinberg dithering",
      "Official Wplace palette support",
      "9 language support",
      "100% privacy protection",
      "Real-time preview",
      "Multiple export formats",
      "Responsive design"
    ],
    "screenshot": "https://wplace.website/og-image.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Wplace Pixel Tool",
    "url": "https://wplace.website",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wplace.website/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://github.com/wplace-pixel-tool",
      "https://twitter.com/wplace_tool",
      "https://discord.gg/wplace"
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wplace Pixel Tool",
    "url": "https://wplace.website",
    "logo": "https://wplace.website/logo.jpg",
    "description": "Creators of the leading pixel art conversion tool for Wplace canvas",
    "foundingDate": "2024",
    "knowsAbout": [
      "Pixel Art",
      "Image Processing",
      "Wplace Canvas",
      "Digital Art Tools",
      "Web Applications"
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Wplace Pixel Tool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wplace Pixel Tool is a professional pixel art converter designed specifically for Wplace canvas. It transforms any image into Wplace-ready pixel art using advanced algorithms like Lanczos resampling and Floyd-Steinberg dithering."
        }
      },
      {
        "@type": "Question", 
        "name": "Is Wplace Pixel Tool free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Wplace Pixel Tool is completely free to use. All image processing happens locally in your browser, ensuring 100% privacy protection without any server uploads."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Wplace Pixel Tool different from other pixel art tools?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Wplace Pixel Tool offers professional-grade algorithms, official Wplace palette support, 9-language internationalization, complete privacy protection, and real-time preview features specifically optimized for Wplace canvas creation."
        }
      },
      {
        "@type": "Question",
        "name": "Does Wplace Pixel Tool work on mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Wplace Pixel Tool is fully responsive and works perfectly on mobile devices, tablets, and desktop computers. It also supports PWA installation for app-like experience."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="structured-data-application"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(baseData) }}
      />
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
} 