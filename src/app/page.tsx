import Hero from '@components/home/Hero';
import Services from '@components/home/Services';
import Portfolio from '@components/home/Portfolio';
import Contact from '@/components/Contact';
import Packages from '@components/home/Packages';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Tijana Despić — UI/UX Dizajn & Web Development | Srbija',
  description:
    'Freelance UI/UX dizajnerka i web developer sa 7+ godina iskustva. Izrada logoa, web sajtova i aplikacija za brendove i startape iz Srbije i inostranstva. Kontaktiraj me za besplatnu konsultaciju.',
  alternates: {canonical: 'https://tijanadespic.hok.rs'},
  openGraph: {
    title: 'Tijana Despić — UI/UX Dizajn & Web Development | Srbija',
    description:
      'Freelance UI/UX dizajnerka i web developer sa 7+ godina iskustva. Izrada logoa, web sajtova i aplikacija za brendove i startape.',
    url: 'https://tijanadespic.hok.rs',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Packages />
      <Contact />
    </>
  );
}
