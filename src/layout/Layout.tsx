import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Haries Gallery - Art Collection',
  description: 'Explore extraordinary art collections and creative laboratories',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
    <body>
    <Header />
    <main className="main-content">
      {children}
    </main>
    </body>
    </html>
  );
}