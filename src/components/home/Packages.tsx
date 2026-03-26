'use client';
import {memo} from 'react';
import Link from 'next/link';
import {cn} from '@utils/CN';
import {packages} from '@components/data/packages';
import Icon from '@icons/Icon';
import ArrowIcon from '@icons/ArrowIcon';
import {useTranslation} from 'react-i18next';

const Packages = () => {
  const {t} = useTranslation();
  return (
    <section
      id="packages"
      className="bg-white py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl sm:text-5xl dark:text-white">{t('Paketi & Cene')}</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            {t(
              'Transparentne cene bez skrivenih troškova — izaberi paket koji odgovara tvom projektu',
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <Link
              href={{
                hash: 'contact',
                query: {package: pkg.title},
              }}
              key={index}
              className={cn(
                'relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:z-10 hover:scale-[1.2] hover:shadow-xl',
                'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800',
                {
                  'border-transparent bg-linear-to-b from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30':
                    pkg.highlighted,
                },
              )}>
              {pkg.priceNote ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-linear-to-r from-yellow-400 to-orange-400 px-4 py-1 text-xs font-semibold text-black shadow">
                    ⭐ {t(pkg.priceNote)}
                  </span>
                </div>
              ) : null}

              {pkg.iconName ? (
                <div
                  className={cn('mb-4 flex h-12 w-12 items-center justify-center rounded-xl', {
                    'bg-white/25': pkg.highlighted,
                    'bg-gray-100 dark:bg-gray-700': !pkg.highlighted,
                  })}>
                  <Icon
                    name={pkg.iconName}
                    width={24}
                    height={24}
                    className={cn({
                      'fill-white': pkg.highlighted,
                      'fill-gray-600 dark:fill-gray-400': !pkg.highlighted,
                    })}
                  />
                </div>
              ) : null}

              <h3
                className={cn('mb-1 text-xl font-semibold', {
                  'text-white': pkg.highlighted,
                  'text-gray-900 dark:text-white': !pkg.highlighted,
                })}>
                {pkg.title}
              </h3>
              <p
                className={cn('mb-5 text-sm', {
                  'text-white/80': pkg.highlighted,
                  'text-gray-500 dark:text-gray-400': !pkg.highlighted,
                })}>
                {t(pkg.subtitle)}
              </p>

              <div className="mb-6">
                <span
                  className={cn('text-3xl font-bold', {
                    'text-white': pkg.highlighted,
                    'text-gray-900 dark:text-white': !pkg.highlighted,
                  })}>
                  {t(pkg.price)}
                </span>
              </div>

              <div
                className={cn('mb-6 h-px w-full', {
                  'bg-white/20': pkg.highlighted,
                  'bg-gray-200 dark:bg-gray-600': !pkg.highlighted,
                })}
              />

              <ul className="mb-8 flex-1 space-y-3">
                {pkg.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2">
                    <span
                      className={cn(
                        'mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px]',
                        {
                          'bg-white/25 text-white': pkg.highlighted,
                          'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400':
                            !pkg.highlighted,
                        },
                      )}>
                      ✓
                    </span>
                    <span
                      className={cn('text-sm', {
                        'text-white/90': pkg.highlighted,
                        'text-gray-600 dark:text-gray-400': !pkg.highlighted,
                      })}>
                      {t(f)}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={cn(
                  'group mt-auto flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200',
                  'bg-white text-blue-600 hover:bg-blue-50',
                  {
                    'bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100':
                      !pkg.highlighted,
                  },
                )}>
                {t(pkg.cta)}
                <ArrowIcon
                  width={16}
                  height={16}
                  className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Packages);
