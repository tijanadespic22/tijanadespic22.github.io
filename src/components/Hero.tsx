'use client';
import {Fragment, memo} from 'react';
import ArrowIcon from '@/icons/ArrowIcon';
import Link from 'next/link';
import {heroElements} from '@/components/data/hero';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between mt-16 md:mt-0">
        <div className="space-y-8 text-center">
          <div className="inline-block px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              UI/UX Dizajn & Web Development
            </span>
          </div>

          <h1 className="text-3xl sm:text-3xl lg:text-7xl max-w-4xl mx-auto dark:text-white">
            Transformišem ideje u{' '}
            <span className="relative">
              <span className="relative z-10 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                digitalna iskustva
              </span>
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specijalizovana za kreiranje modernih logoa, web sajtova i aplikacija koje kombinuju
            vrhunski dizajn sa besprekorno napisanim kodom.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center cursor-pointer gap-4 pt-4">
            <Link
              href="/#contact"
              className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:bg-gray-800 flex items-center border dark:border-white">
              Kontaktiraj Me
              <ArrowIcon
                height={30}
                width={30}
                className={'rotate-90'}
              />
            </Link>
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
        </div>
        <img
          src={'/cv.jpg'}
          alt="Hero Image"
          className="w-1/4 h-auto rounded-2xl shadow-lg md:visible invisible"
        />
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
