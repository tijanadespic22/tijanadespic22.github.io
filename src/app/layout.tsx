import {ReactNode} from 'react';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import type {Metadata} from 'next';

const BASE_URL = 'https://tijanadespic.hok.rs';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Tijana Despić — UI/UX Dizajn & Web Development',
    template: '%s | Tijana Despić',
  },
  description:
    'Freelance UI/UX dizajnerka i web developer sa 7+ godina iskustva. Izrada logoa, web sajtova i aplikacija za brendove i startape. Srbija.',
  keywords: [
    'UI UX dizajn',
    'web development',
    'logo dizajn',
    'web sajt izrada',
    'freelance dizajner Srbija',
    'Next.js developer',
    'React developer',
    'Figma',
    'branding',
    'Tijana Despić',
  ],
  authors: [{name: 'Tijana Despić', url: BASE_URL}],
  creator: 'Tijana Despić',
  robots: {
    index: true,
    follow: true,
    googleBot: {index: true, follow: true},
  },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: BASE_URL,
    siteName: 'Tijana Despić',
    title: 'Tijana Despić — UI/UX Dizajn & Web Development',
    description:
      'Freelance UI/UX dizajnerka i web developer sa 7+ godina iskustva. Izrada logoa, web sajtova i aplikacija za brendove i startape.',
    images: [{url: '/og-image.jpg', width: 1200, height: 630, alt: 'Tijana Despić'}],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tijana Despić — UI/UX Dizajn & Web Development',
    description:
      'Freelance UI/UX dizajnerka i web developer sa 7+ godina iskustva. Izrada logoa, web sajtova i aplikacija.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html lang="sr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}`,
          }}
        />
        <meta name="google-site-verification" content="6d1TK1vS1Lnn5F_swvTnJSqBV4KZSNpPOY8uWWnCfNA" />
        {/* JSON-LD strukturirani podaci */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Tijana Despić',
              url: BASE_URL,
              image: `${BASE_URL}/cv.jpg`,
              jobTitle: 'UI/UX Designer & Web Developer',
              description:
                'Freelance UI/UX dizajnerka i web developer sa 7+ godina iskustva. Specijalizovana za logo dizajn, web sajtove i aplikacije.',
              sameAs: [
                'https://www.linkedin.com/in/tijana-despic',
                'https://www.instagram.com/tijana_despic',
              ],
              email: 'tijanadespic24@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'RS',
              },
              knowsAbout: ['UI/UX Design', 'Web Development', 'Logo Design', 'React', 'Next.js', 'Figma'],
              offers: {
                '@type': 'Offer',
                description: 'Freelance UI/UX dizajn i web development usluge',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
