import type { Metadata } from 'next';
import './globals.css';
import 'swiper/css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Nav from '@/components/Navs/Nav';
import Footer from '@/components/Sections/Footer';

export const metadata: Metadata = {
  title: 'Netflix',
  description: 'Netflix with Next Js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
