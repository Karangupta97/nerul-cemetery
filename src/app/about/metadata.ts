import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Story & Mission',
  description: 'Learn about Nerul Cemetery\'s 50+ years of service providing dignified burial services in Sector 2, Nerul, Navi Mumbai. All faiths welcome. 15 acres of peaceful grounds. Compassionate 24/7 support.',
  keywords: [
    'about Nerul Cemetery',
    'cemetery history Navi Mumbai',
    'burial services story',
    'cemetery mission Sector 2 Nerul',
    'dignified burial Nerul',
    'memorial services Navi Mumbai',
    'all faith cemetery Nerul',
    'Christian cemetery history',
    'peaceful burial grounds',
    '50 years cemetery service'
  ],
  openGraph: {
    title: 'About Nerul Cemetery - 50+ Years of Compassionate Service',
    description: 'Discover our history serving 10,000+ families with dignified burial services across 15 acres of peaceful grounds in Navi Mumbai.',
    url: 'https://nerulcemetery.com/about',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nerul Cemetery - 50+ Years of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Nerul Cemetery - 50+ Years of Service',
    description: 'Discover our history serving 10,000+ families with dignified burial services in Navi Mumbai.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
};
