import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - Peaceful Cemetery Grounds & Facilities',
  description: 'View photos of Nerul Cemetery\'s 15 acres of peaceful, landscaped grounds, well-maintained facilities, and serene environment in Sector 2, Nerul, Navi Mumbai. Beautiful memorial spaces for all faiths.',
  keywords: [
    'Nerul Cemetery photos',
    'cemetery gallery Navi Mumbai',
    'burial ground photos Nerul',
    'cemetery facilities Sector 2',
    'peaceful cemetery images',
    'landscaped cemetery grounds',
    'memorial garden photos',
    'serene burial environment',
    'cemetery architecture Navi Mumbai'
  ],
  openGraph: {
    title: 'Gallery - Nerul Cemetery Peaceful Grounds & Facilities',
    description: 'Explore 15 acres of peaceful, beautifully landscaped cemetery grounds in Sector 2, Nerul, Navi Mumbai. View our well-maintained facilities.',
    url: 'https://nerulcemetery.com/gallery',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nerul Cemetery Peaceful Grounds Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery - Nerul Cemetery Grounds',
    description: 'Explore 15 acres of peaceful, landscaped grounds in Navi Mumbai.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/gallery',
  },
};
