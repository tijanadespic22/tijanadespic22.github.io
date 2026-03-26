import Hero from '@components/home/Hero';
import Services from '@components/home/Services';
import Portfolio from '@components/home/Portfolio';
import Contact from '@/components/Contact';
import Packages from '@components/home/Packages';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Tijana Despić — UI/UX Dizajn & Web Development',
  description:
    'Freelance UI/UX dizajnerka i web developer sa 7+ godina iskustva. Napravićemo šta god želiš — logo, sajt ili aplikacija.',
  alternates: {canonical: 'https://tijanadespic.hok.rs'},
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
