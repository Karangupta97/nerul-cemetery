import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch | 24/7 Support Available',
  description: 'Contact Nerul Cemetery for burial services, plot information, or memorial arrangements. 6, Baliram Hira Joshi Marg, Sector 2, Nerul, Navi Mumbai 400706. Phone: +91 81049 52729. Email: info@nerulcemetery.com. Open Mon-Sat: 8AM-6PM.',
  keywords: [
    'contact Nerul Cemetery',
    'cemetery contact Navi Mumbai',
    'burial services contact',
    'cemetery phone number Nerul',
    'cemetery address Sector 2 Nerul',
    'emergency burial services',
    'burial plot inquiry',
    'cemetery directions Navi Mumbai',
    'funeral services contact',
    'memorial arrangements contact'
  ],
  openGraph: {
    title: 'Contact Nerul Cemetery - 24/7 Support | +91 81049 52729',
    description: 'Get in touch with Nerul Cemetery for compassionate burial services. 6, Baliram Hira Joshi Marg, Sector 2, Nerul, Navi Mumbai. Call +91 81049 52729 or email info@nerulcemetery.com',
    url: 'https://nerulcemetery.com/contact',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Nerul Cemetery - Navi Mumbai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Nerul Cemetery | +91 81049 52729',
    description: 'Compassionate burial services. Sector 2, Nerul, Navi Mumbai. 24/7 support available.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/contact',
  },
};
