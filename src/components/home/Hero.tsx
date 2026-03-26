'use client';
import {FC, Fragment, memo, ReactNode} from 'react';
import ArrowIcon from '@icons/ArrowIcon';
import Link from 'next/link';
import {heroElements} from '@components/data/hero';
import {Trans, useTranslation} from 'react-i18next';

const HeaderComponent: FC<{children?: ReactNode}> = ({children}) => (
  <span className="relative">
    <span className="relative z-10 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      {children}
    </span>
  </span>
);

const Hero = () => {
  const {t} = useTranslation();
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="mt-18 flex flex-col md:mt-0 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-8 text-center">
          <div className="inline-block rounded-full border border-gray-200 bg-white/80 px-4 py-2 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {t('UI/UX Dizajn & Web Development')}
            </span>
          </div>

          <h1 className="mx-auto max-w-4xl text-3xl sm:text-3xl lg:text-7xl dark:text-white">
            <Trans
              i18nKey="Transformišem ideje u <0>digitalna iskustva</0>"
              components={[<HeaderComponent key={'gradient'} />]}
            />
          </h1>

          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            {t(
              'Treba ti logo koji ostavlja utisak, sajt koji prodaje ili aplikacija koja radi — bez\nobzira na projekat, tu sam da ga pretvorim u nešto što funkcioniše i izgleda odlično.',
            )}
          </p>

          <div className="flex cursor-pointer flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Link
              href="/public#contact"
              className="group flex items-center gap-2 rounded-full border bg-linear-to-r from-blue-600 to-purple-600 px-8 py-4 text-white hover:bg-gray-800 dark:border-white">
              {t('Kontaktiraj Me')}
              <ArrowIcon
                height={30}
                width={30}
                className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href={'tel:+381653580793'}
              className="group flex items-center gap-2 rounded-full border bg-linear-to-r from-purple-600 to-blue-600 px-8 py-4 text-white hover:bg-gray-800 dark:border-white">
              {t('Pozovi Me')}
              <ArrowIcon
                height={30}
                width={30}
                className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm text-gray-600 dark:text-gray-400">
            {heroElements.map((element, index) => (
              <Fragment key={'hero-elements-' + index}>
                <div className="text-center">
                  <div className="mb-1 text-3xl dark:text-white">{element.value}</div>
                  <div>{t(element.description)}</div>
                </div>
                {element?.pipe ? (
                  <div className="hidden h-12 w-px bg-gray-300 sm:block dark:bg-gray-600" />
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
        <img
          src={'/cv.jpg'}
          alt="Hero Image"
          className="invisible h-auto w-1/4 rounded-2xl shadow-lg md:visible"
        />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gray-400 p-2 dark:border-gray-500">
          <div className="h-3 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
