import type { Metadata } from 'next';
import { Baloo_2, Nunito, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { ScrollToTop } from '@/components/ScrollToTop';
import { site } from '@/config/site';

const baloo = Baloo_2({
  variable: '--font-baloo',
  subsets: ['latin'],
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: site.name,
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baloo.variable} ${nunito.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-sand-800">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="mt-8 border-t-2 border-dashed border-sand-300 px-4 sm:px-6 py-6 text-center text-xs text-sand-500">
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden>🌿</span>
            Pokémon names and data © Nintendo / Game Freak. Fan-made guide.
          </span>
        </footer>
        <ScrollToTop />
      </body>
    </html>
  );
}
