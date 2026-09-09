import Hero from '@components/home/Hero';
import Services from '@components/home/Services';
import Portfolio from '@components/home/Portfolio';
import Contact from '@/components/Contact';
import Packages from '@components/home/Packages';
import type {Metadata} from 'next';
import {memo} from 'react';
import Blogs from '@components/home/Blogs';
import {BASE_URL} from '@constants/website';
import Suggestion from '@components/home/Suggestion';

export const metadata: Metadata = {
  title: 'Tijana Despić — UI/UX Dizajn & Web Development | Srbija',
  description:
    'Freelance UI/UX dizajnerka i web developer sa 7+ godina iskustva. Izrada logoa, web sajtova i aplikacija za brendove i startape iz Srbije i inostranstva. Kontaktiraj me za besplatnu konsultaciju.',
  alternates: {canonical: BASE_URL},
  openGraph: {
    title: 'Tijana Despić — UI/UX Dizajn & Web Development | Srbija',
    description:
      'Freelance UI/UX dizajnerka i web developer sa 7+ godina iskustva. Izrada logoa, web sajtova i aplikacija za brendove i startape.',
    url: BASE_URL,
  },
};

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Suggestion />
      <Blogs />
      <Packages />
      <Contact />
    </>
  );
};

export default memo(Home);
