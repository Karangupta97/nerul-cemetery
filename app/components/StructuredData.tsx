export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Cemetery",
        "@id": "https://nerulcemetery.com/#cemetery",
        "name": "Nerul Cemetery",
        "alternateName": "Nerul Christian Cemetery",
        "description": "A peaceful cemetery providing dignified burial services with compassion and respect for all faiths in Navi Mumbai.",
        "url": "https://nerulcemetery.com",
        "telephone": "+91-81049-52729",
        "email": "info@nerulcemetery.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "6, Baliram Hira Joshi Marg, Sector 2",
          "addressLocality": "Nerul",
          "addressRegion": "Navi Mumbai, Maharashtra",
          "postalCode": "400706",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.045899",
          "longitude": "73.019477"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "00:00",
            "closes": "00:00",
            "description": "Closed"
          }
        ],
        "priceRange": "$$",
        "areaServed": {
          "@type": "City",
          "name": "Navi Mumbai"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://nerulcemetery.com/#business",
        "name": "Nerul Cemetery",
        "image": "https://nerulcemetery.com/og-image.jpg",
        "priceRange": "$$",
        "url": "https://nerulcemetery.com",
        "telephone": "+91-81049-52729",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "6, Baliram Hira Joshi Marg, Sector 2",
          "addressLocality": "Nerul",
          "addressRegion": "Navi Mumbai, Maharashtra",
          "postalCode": "400706",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "19.045899",
          "longitude": "73.019477"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "18:00"
          }
        ],
        "hasMap": "https://maps.google.com/?q=19.045899,73.019477"
      },
      {
        "@type": "WebSite",
        "@id": "https://nerulcemetery.com/#website",
        "url": "https://nerulcemetery.com",
        "name": "Nerul Cemetery",
        "description": "Dignified burial services in Navi Mumbai",
        "publisher": {
          "@id": "https://nerulcemetery.com/#cemetery"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "Organization",
        "@id": "https://nerulcemetery.com/#organization",
        "name": "Nerul Cemetery",
        "url": "https://nerulcemetery.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nerulcemetery.com/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-81049-52729",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi", "Marathi"]
        },
        "sameAs": [
          "https://www.facebook.com/nerulcemetery",
          "https://www.instagram.com/nerulcemetery"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
