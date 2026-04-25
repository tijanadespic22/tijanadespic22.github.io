import {ReactNode} from 'react';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import I18nProvider from '@/components/I18nProvider';
import type {Metadata} from 'next';
import '@i18n/localeConfig';
import {BASE_URL} from '@constants/website';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Tijana Despić — UI/UX Dizajn & Web Development | Srbija',
    template: '%s | Tijana Despić',
  },
  description:
    'Freelance UI/UX dizajnerka i web developer sa 7+ godina iskustva. Izrada logoa, web sajtova i aplikacija za brendove i startape. Dostupna za projekte širom Srbije.',
  keywords: [
    'UI UX dizajner Srbija',
    'freelance dizajner Beograd',
    'web developer Srbija',
    'UI UX dizajn',
    'web development',
    'logo dizajn',
    'web sajt izrada',
    'izrada sajta Srbija',
    'izrada web aplikacije',
    'freelance dizajner Srbija',
    'Next.js developer Srbija',
    'React developer Srbija',
    'Figma dizajner',
    'branding Srbija',
    'UX dizajn',
    'mobilni dizajn',
    'Tijana Despić',
    'tijanadespic',
  ],
  authors: [{name: 'Tijana Despić', url: BASE_URL}],
  creator: 'Tijana Despić',
  publisher: 'Tijana Despić',
  robots: {
    index: true,
    follow: true,
    googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1},
  },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    alternateLocale: ['en_US'],
    url: BASE_URL,
    siteName: 'Tijana Despić',
    title: 'Tijana Despić — UI/UX Dizajn & Web Development | Srbija',
    description:
      'Freelance UI/UX dizajnerka i web developer sa 7+ godina iskustva. Izrada logoa, web sajtova i aplikacija za brendove i startape.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tijana Despić — UI/UX Dizajn & Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tijana Despić — UI/UX Dizajn & Web Development | Srbija',
    description:
      'Freelance UI/UX dizajnerka i web developer sa 7+ godina iskustva. Izrada logoa, web sajtova i aplikacija.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      sr: BASE_URL,
      en: BASE_URL,
      'x-default': BASE_URL,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html
      lang={'sr'}
      className={'scroll-smooth'}
      suppressHydrationWarning>
      <head>
        <meta
          name={'google-site-verification'}
          content={'6d1TK1vS1Lnn5F_swvTnJSqBV4KZSNpPOY8uWWnCfNA'}
        />
        <script
          type={'application/ld+json'}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': `${BASE_URL}/#website`,
                url: BASE_URL,
                name: 'Tijana Despić',
                description: 'Freelance UI/UX dizajnerka i web developer sa 7+ godina iskustva.',
                inLanguage: ['sr', 'en'],
                publisher: {
                  '@id': `${BASE_URL}/#person`,
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                '@id': `${BASE_URL}/#person`,
                name: 'Tijana Despić',
                url: BASE_URL,
                image: {
                  '@type': 'ImageObject',
                  url: `${BASE_URL}/cv.jpg`,
                  width: 800,
                  height: 800,
                },
                jobTitle: 'UI/UX Designer & Web Developer',
                description:
                  'Freelance UI/UX dizajnerka i web developer sa 7+ godina iskustva. Specijalizovana za logo dizajn, web sajtove i aplikacije.',
                sameAs: [
                  'https://www.linkedin.com/in/tijana-despic',
                  'https://www.instagram.com/tijanadespic.hok.rs',
                ],
                email: 'tijanadespic24@gmail.com',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'RS',
                },
                knowsAbout: [
                  'UI/UX Design',
                  'Web Development',
                  'Logo Design',
                  'React',
                  'Next.js',
                  'Figma',
                  'Branding',
                  'Mobile App Design',
                ],
                hasOccupation: {
                  '@type': 'Occupation',
                  name: 'UI/UX Designer & Web Developer',
                  occupationLocation: {
                    '@type': 'Country',
                    name: 'Serbia',
                  },
                  estimatedSalary: {
                    '@type': 'MonetaryAmountDistribution',
                    currency: 'EUR',
                    unitText: 'HOUR',
                  },
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                '@id': `${BASE_URL}/#service`,
                name: 'Tijana Despić — UI/UX Dizajn & Web Development',
                url: BASE_URL,
                image: `${BASE_URL}/cv.jpg`,
                logo: `${BASE_URL}/logo.svg`,
                description:
                  'Freelance UI/UX dizajn i web development usluge za brendove i startape. Logo dizajn, izrada web sajtova i mobilnih aplikacija.',
                email: 'tijanadespic24@gmail.com',
                areaServed: {
                  '@type': 'Country',
                  name: 'Serbia',
                },
                serviceType: ['UI/UX Dizajn', 'Web Development', 'Logo Dizajn', 'Branding'],
                priceRange: '$$',
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Usluge',
                  itemListElement: [
                    {
                      '@type': 'Offer',
                      itemOffered: {'@type': 'Service', name: 'UI/UX Dizajn'},
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {'@type': 'Service', name: 'Web Development'},
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {'@type': 'Service', name: 'Logo Dizajn'},
                    },
                  ],
                },
                sameAs: [
                  'https://www.linkedin.com/in/tijana-despic',
                  'https://www.instagram.com/tijanadespic.hok.rs',
                ],
              },
            ]),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={
          'flex min-h-full flex-col bg-black/10 transition-colors duration-300 dark:bg-black/90'
        }>
        <Navigation />
        <I18nProvider>
          {children}
        </I18nProvider>
        <Footer />
      </body>
    </html>
  );
}
