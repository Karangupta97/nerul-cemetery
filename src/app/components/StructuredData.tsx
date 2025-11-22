export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Cemetery",
        "@id": "https://nerulcemetery.com/#cemetery",
        "name": "Nerul Cemetery",
        "alternateName": ["Nerul Christian Cemetery", "Cemetery Sector 2 Nerul"],
        "description": "A peaceful 15-acre cemetery with 50+ years of service, providing dignified burial services with compassion and respect for all faiths in Sector 2, Nerul, Navi Mumbai.",
        "url": "https://nerulcemetery.com",
        "telephone": "+91-81049-52729",
        "email": "info@nerulcemetery.com",
        "foundingDate": "1970",
        "slogan": "A Place of Peace & Remembrance",
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
        "areaServed": [
          {
            "@type": "City",
            "name": "Navi Mumbai"
          },
          {
            "@type": "City",
            "name": "Nerul"
          },
          {
            "@type": "State",
            "name": "Maharashtra"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://nerulcemetery.com/#business",
        "name": "Nerul Cemetery",
        "image": [
          "https://nerulcemetery.com/og-image.jpg",
          "https://nerulcemetery.com/hero-cemetery.jpg"
        ],
        "priceRange": "$$",
        "url": "https://nerulcemetery.com",
        "telephone": "+91-81049-52729",
        "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI"],
        "currenciesAccepted": "INR",
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
      },
      {
        "@type": "FAQPage",
        "@id": "https://nerulcemetery.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the operating hours of Nerul Cemetery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nerul Cemetery is open Monday through Saturday from 8:00 AM to 6:00 PM. We are closed on Sundays. However, our support team is available for emergency burial services and inquiries."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Nerul Cemetery located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nerul Cemetery is located at 6, Baliram Hira Joshi Marg, Sector 2, Nerul, Navi Mumbai, Maharashtra 400706. You can reach us at +91 81049 52729 or email info@nerulcemetery.com"
            }
          },
          {
            "@type": "Question",
            "name": "Does Nerul Cemetery accept all faiths and religions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Nerul Cemetery welcomes all faiths and religious traditions. We provide respectful and dignified burial services for all communities, with dedicated spaces for reflection and memorial services that honor diverse cultural practices."
            }
          },
          {
            "@type": "Question",
            "name": "What services does Nerul Cemetery provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nerul Cemetery provides comprehensive burial services including plot selection, burial arrangements, memorial services, emergency support, and ongoing maintenance of our 15-acre grounds. Our compassionate team assists families with all aspects of burial planning and arrangements."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact Nerul Cemetery for burial arrangements?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can contact Nerul Cemetery by calling +91 81049 52729, emailing info@nerulcemetery.com, or visiting us at our office in Sector 2, Nerul, Navi Mumbai during operating hours (Monday-Saturday, 8 AM - 6 PM)."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://nerulcemetery.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nerulcemetery.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://nerulcemetery.com/about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Gallery",
            "item": "https://nerulcemetery.com/gallery"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Notice Board",
            "item": "https://nerulcemetery.com/notice"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Contact",
            "item": "https://nerulcemetery.com/contact"
          }
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
