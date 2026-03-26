'use client';
import {Trans, useTranslation} from 'react-i18next';
import Link from 'next/link';
import ArrowIcon from '@icons/ArrowIcon';
import {heroElements} from '@components/data/hero';
import {Fragment} from 'react';

const AboutSection = () => {
  const {t} = useTranslation();

  return (
    <section className="mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-4/5 max-w-sm overflow-hidden rounded-3xl shadow-2xl lg:mx-0">
            <img
              src="/cv.jpg"
              alt="Tijana Despić"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -right-4 -bottom-4 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-lg lg:right-auto lg:-left-4 dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-0.5 text-xs text-gray-500 dark:text-gray-400">
              {t('Dostupna za projekte')}
            </p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-sm font-semibold dark:text-white">{t('Open for work ✦')}</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 space-y-6 lg:order-2">
          <div className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-2 dark:border-blue-800 dark:bg-blue-950/40">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {t('O meni')}
            </span>
          </div>

          <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl dark:text-white">
            <Trans
              i18nKey="Zdravo, ja sam <0>Tijana</0> 👋"
              components={[
                <span
                  key="name"
                  className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                />,
              ]}
            />
          </h1>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            <Trans
              i18nKey="Freelance UI/UX dizajnerka i web developer sa više od <0>7 godina iskustva</0>. Pomažem brendovima i startapima da izgledaju ozbilno i rade još bolje."
              components={[
                <span
                  key="bold"
                  className="font-semibold text-gray-900 dark:text-white"
                />,
              ]}
            />
          </p>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            <Trans
              i18nKey="Moj pristup je jednostavan — slušam šta trebaš, razumem tvoje korisnike i isporučujem dizajn koji ne samo da lepo izgleda, već i <0>stvarno radi</0>."
              components={[
                <span
                  key="bold"
                  className="font-semibold text-gray-900 dark:text-white"
                />,
              ]}
            />
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/about#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-7 py-3.5 font-medium text-white transition hover:opacity-90">
              {t('Kontaktiraj Me')}
              <ArrowIcon
                width={18}
                height={18}
                className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 font-medium text-gray-700 transition hover:border-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-400">
              {t('Pogledaj Radove')}
              <ArrowIcon
                width={18}
                height={18}
                className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm text-gray-600 dark:text-gray-400">
        {heroElements.map((element, index) => (
          <Fragment key={'hero-elements-' + index}>
            <div className="text-center">
              <p className="mb-1 text-3xl dark:text-white">{element.value}</p>
              <div>{t(element.description)}</div>
            </div>
            {element?.pipe ? (
              <div className="hidden h-12 w-px bg-gray-300 sm:block dark:bg-gray-600" />
            ) : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
