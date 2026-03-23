import Link from 'next/link';
import ArrowIcon from '@/icons/ArrowIcon';
import Tools from '@/components/Tools';
import Contact from '@/components/Contact';
import {heroElements} from '@/components/data/hero';
import {Fragment} from 'react';

const About = () => {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-4/5 max-w-sm mx-auto lg:mx-0 shadow-2xl">
              <img
                src="/cv.jpg"
                alt="Tijana Despić"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-3 shadow-lg">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                Dostupna za projekte
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-semibold dark:text-white">Open for work ✦</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-950/40 rounded-full border border-blue-200 dark:border-blue-800">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">O meni</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight dark:text-white">
              Zdravo, ja sam{' '}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tijana
              </span>{' '}
              👋
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Freelance UI/UX dizajnerka i web developer sa više od{' '}
              <span className="font-semibold text-gray-900 dark:text-white">7 godina iskustva</span>
              . Pomažem brendovima i startapima da izgledaju ozbiljno i rade još bolje.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Moj pristup je jednostavan — slušam šta trebaš, razumem tvoje korisnike i isporučujem
              dizajn koji ne samo da lepo izgleda, već i{' '}
              <span className="font-semibold text-gray-900 dark:text-white">stvarno radi</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/about#contact"
                className="group inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition">
                Kontaktiraj Me
                <ArrowIcon
                  width={18}
                  height={18}
                  className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-7 py-3.5 rounded-full font-medium hover:border-gray-500 dark:hover:border-gray-400 transition">
                Pogledaj Radove
                <ArrowIcon
                  width={18}
                  height={18}
                  className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
          {heroElements.map((element, index) => (
            <Fragment key={'hero-elements-' + index}>
              <div className="text-center">
                <div className="text-3xl mb-1 dark:text-white">{element.value}</div>
                <div>{element.description}</div>
              </div>
              {element?.pipe ? (
                <div className="hidden sm:block w-px h-12 bg-gray-300 dark:bg-gray-600" />
              ) : null}
            </Fragment>
          ))}
        </div>
      </section>

      <Tools />
      <Contact />
    </main>
  );
};

export default About;
