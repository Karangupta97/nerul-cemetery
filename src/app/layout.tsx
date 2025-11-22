import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nerul Cemetery - Dignified Burial Services in Navi Mumbai",
    template: "%s | Nerul Cemetery"
  },
  description: "Nerul Cemetery provides compassionate and dignified burial services in Sector 2, Nerul, Navi Mumbai. Peaceful grounds and memorial services for all faiths. Contact: +91 81049 52729",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  keywords: [
    "Nerul Cemetery",
    "cemetery Navi Mumbai",
    "burial services Nerul",
    "funeral services Navi Mumbai",
    "cemetery Sector 2 Nerul",
    "burial ground Navi Mumbai",
    "memorial services",
    "dignified burial",
    "Christian cemetery Nerul",
    "peaceful resting place"
  ],
  authors: [{ name: "Nerul Cemetery" }],
  creator: "Nerul Cemetery",
  publisher: "Nerul Cemetery",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nerul.cemetery.medicares.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Nerul Cemetery - Dignified Burial Services in Navi Mumbai",
    description: "Compassionate burial services in Sector 2, Nerul, Navi Mumbai. Peaceful grounds, memorial services for all faiths.",
    url: 'https://nerul.cemetery.medicares.in',
    siteName: 'Nerul Cemetery',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://nerul.cemetery.medicares.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'Nerul Cemetery - Peaceful Resting Place in Navi Mumbai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nerul Cemetery - Dignified Burial Services in Navi Mumbai',
    description: 'Compassionate burial services in Sector 2, Nerul, Navi Mumbai.and memorial services.',
    images: ['https://nerul.cemetery.medicares.in/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://nerul.cemetery.medicares.in" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nerul, Navi Mumbai" />
        <meta name="geo.position" content="19.045899;73.019477" />
        <meta name="ICBM" content="19.045899, 73.019477" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-slate-50`}
      >
        <StructuredData />
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
