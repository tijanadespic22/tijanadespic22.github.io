'use client';
import {memo} from 'react';
import Link from 'next/link';
import {cn} from '@/utils/CN';
import {packages} from '@/components/data/packages';
import Icon from '@/icons/Icon';
import ArrowIcon from '@/icons/ArrowIcon';

const Packages = () => {
  return (
    <section
      id="packages"
      className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 dark:text-white">Paketi & Cene</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transparentne cene bez skrivenih troškova — izaberi paket koji odgovara tvom projektu
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {packages.map((pkg, index) => (
            <Link
              href={{
                hash: 'contact',
                query: {package: pkg.title},
              }}
              key={index}
              className={cn(
                'relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.2] hover:z-10',
                pkg.highlighted
                  ? 'bg-linear-to-b from-blue-600 to-purple-600 border-transparent text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
              )}>
              {pkg.priceNote ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-linear-to-r from-yellow-400 to-orange-400 text-black text-xs font-semibold px-4 py-1 rounded-full shadow">
                    ⭐ {pkg.priceNote}
                  </span>
                </div>
              ) : null}

              {pkg.iconName ? (
                <div
                  className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center mb-4',
                    pkg.highlighted ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700',
                  )}>
                  <Icon
                    name={pkg.iconName}
                    width={24}
                    height={24}
                  />
                </div>
              ) : null}

              <h3
                className={cn(
                  'text-xl font-semibold mb-1',
                  pkg.highlighted ? 'text-white' : 'dark:text-white',
                )}>
                {pkg.title}
              </h3>
              <p
                className={cn(
                  'text-sm mb-5',
                  pkg.highlighted ? 'text-white/80' : 'text-gray-500 dark:text-gray-400',
                )}>
                {pkg.subtitle}
              </p>

              <div className="mb-6">
                <span
                  className={cn(
                    'text-3xl font-bold',
                    pkg.highlighted ? 'text-white' : 'dark:text-white',
                  )}>
                  {pkg.price}
                </span>
              </div>

              <div
                className={cn(
                  'w-full h-px mb-6',
                  pkg.highlighted ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700',
                )}
              />

              <ul className="flex-1 space-y-3 mb-8">
                {pkg.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2">
                    <span
                      className={cn(
                        'mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px]',
                        pkg.highlighted
                          ? 'bg-white/25 text-white'
                          : 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',
                      )}>
                      ✓
                    </span>
                    <span
                      className={cn(
                        'text-sm',
                        pkg.highlighted ? 'text-white/90' : 'text-gray-600 dark:text-gray-400',
                      )}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={cn(
                  'group mt-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200',
                  pkg.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-100',
                )}>
                {pkg.cta}
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
