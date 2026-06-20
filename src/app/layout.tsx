import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Autocomfort Accessories | Premium PPF & Ceramic Coating Dubai',
  description: 'Protect your car with Autocomfort Accessories—advanced paint protection film, exterior ceramic coating, and premium fabric & leather seats ceramic coating in Dubai. Superior gloss, scratch resistance, and long-lasting durability.',
  openGraph: {
    title: 'Autocomfort Accessories | Premium PPF & Ceramic Coating Dubai',
    description: 'Protect your car with Autocomfort Accessories—advanced paint protection film, exterior ceramic coating, and premium fabric & leather seats ceramic coating in Dubai. Superior gloss, scratch resistance, and long-lasting durability.',
    url: 'https://autocomfort.ae',
    siteName: 'Autocomfort Accessories',
    images: [
      {
        url: 'https://autocomfort.ae/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Autocomfort Accessories Premium PPF & Ceramic Coating Dubai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autocomfort Accessories | Premium PPF & Ceramic Coating Dubai',
    description: 'Protect your car with Autocomfort Accessories—advanced paint protection film, exterior ceramic coating, and premium fabric & leather seats ceramic coating in Dubai.',
    images: ['https://autocomfort.ae/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
