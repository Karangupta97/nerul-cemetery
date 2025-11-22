import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notice Board - Latest Updates & Announcements',
  description: 'Stay informed with the latest notices, announcements, and important updates from Nerul Cemetery in Sector 2, Nerul, Navi Mumbai. Service schedules, maintenance updates, and community information.',
  keywords: [
    'Nerul Cemetery notices',
    'cemetery announcements Navi Mumbai',
    'burial notices Nerul',
    'cemetery updates Sector 2',
    'memorial announcements',
    'cemetery schedule',
    'service timings Nerul Cemetery',
    'important updates cemetery'
  ],
  openGraph: {
    title: 'Notice Board - Nerul Cemetery Latest Updates',
    description: 'Latest notices, announcements, and important updates from Nerul Cemetery, Sector 2, Nerul, Navi Mumbai.',
    url: 'https://nerulcemetery.com/notice',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nerul Cemetery Notice Board',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notice Board - Nerul Cemetery',
    description: 'Latest notices and announcements from Nerul Cemetery, Navi Mumbai.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/notice',
  },
};
