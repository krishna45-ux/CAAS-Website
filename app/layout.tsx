import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollObserver from './components/ScrollObserver';
import ReloadRedirect from './components/ReloadRedirect';

export const metadata: Metadata = {
  title: 'CAAS — Your Professional Cameraman On Demand',
  description: 'CAAS (Cameraman as a Service) connects businesses, creators and brands with professional cameramen on demand. Book world-class videographers and photographers in minutes. Starting at ₹3,500.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Fraunces:ital,opsz,wght@0,9..144,900;1,9..144,900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ScrollObserver />
        <ReloadRedirect />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
