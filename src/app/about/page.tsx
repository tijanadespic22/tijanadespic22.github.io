import Tools from '@components/about/Tools';
import Contact from '@/components/Contact';
import type {Metadata} from 'next';
import AboutSection from '@components/about/AboutSection';
import {memo} from 'react';

export const metadata: Metadata = {
  title: 'O meni — Freelance UI/UX Dizajnerka i Web Developer | Srbija',
  description:
    'Upoznaj Tijanu Despić — freelance UI/UX dizajnerku i web developer sa 7+ godina iskustva. Specijalizovana za Figma dizajn, React i Next.js razvoj. Radim sa brendovima i startapima iz Srbije i inostranstva.',
  alternates: {canonical: 'https://tijanadespic.hok.rs/about'},
  openGraph: {
    title: 'O meni — Tijana Despić | UI/UX Dizajnerka i Web Developer',
    description:
      'Upoznaj Tijanu Despić — freelance UI/UX dizajnerku i web developer sa 7+ godina iskustva iz Srbije.',
    url: 'https://tijanadespic.hok.rs/about',
  },
};

const About = () => {
  return (
    <main className={"min-h-screen bg-white dark:bg-gray-900"}>
      <AboutSection />
      <Tools />
      <Contact />
    </main>
  );
};

export default memo(About);
