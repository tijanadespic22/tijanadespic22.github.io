'use client';
import {caseStudies} from '../data/portfolio';
import ArrowIcon from '@icons/ArrowIcon';
import {memo} from 'react';
import {cn} from '@utils/CN';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';

const Portfolio = () => {
  const {t} = useTranslation();
  return (
    <section
      id={'projects'}
      className={'bg-gray-50 py-24 dark:bg-gray-800'}>
      <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
        <div className={'mb-16 text-center'}>
          <h2 className={'mb-4 text-4xl sm:text-5xl dark:text-white'}>{t('Izdvojeni Projekti')}</h2>
          <p className={'mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400'}>
            {t('Detaljne studije slučaja koje prikazuju proces, rešenja i rezultate')}
          </p>
        </div>

        <div className={cn('flex gap-6', 'md:flex-row')}>
          {/*filter first 3 projects*/}
          {caseStudies.slice(0, 3).map(project => (
            <div
              key={project.id}
              className={cn(
                'flex shrink-0 flex-col rounded-2xl border border-gray-200 bg-white py-4 dark:border-gray-700 dark:bg-gray-900',
                'items-center gap-8 lg:w-auto lg:max-w-none lg:shrink lg:bg-transparent lg:dark:bg-transparent',
                'border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900',
              )}>
              {/* Image */}
              <div className={'flex-1'}>
                <Link
                  href={project?.url ?? '/projects'}
                  target={project?.url ? '_blank' : '_self'}
                  className={
                    'relative cursor-pointer overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-700'
                  }>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className={'h-full w-full object-cover transition-transform duration-500'}
                  />
                </Link>
              </div>

              {/* Content */}
              <div className={'flex-1 space-y-4 px-4'}>
                <p className={'text-purple-500'}>{t(project.category)}</p>
                <h3 className={'font-bold text-black dark:text-white'}>{t(project.title)}</h3>
                <p
                  className={
                    'text-sm leading-relaxed wrap-break-word whitespace-normal text-gray-600/60 dark:text-gray-400/60'
                  }>
                  {t(project.description)}
                </p>
                <div className={'flex items-end'}>
                  <div className={'flex items-center gap-2 text-black dark:text-white'}>
                    {t('Detaljnije')}{' '}
                    <ArrowIcon
                      className={
                        'rotate-90 transition-transform duration-200 group-hover:translate-x-1'
                      }
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dugme ka svim projektima */}
        <div className={'mt-16 text-center'}>
          <Link
            href={'/projects'}
            className={
              'group inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 font-medium text-gray-700 transition-colors hover:border-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-400'
            }>
            {t('Svi projekti')}
            <ArrowIcon
              className={'rotate-90 transition-transform duration-200 group-hover:translate-x-1'}
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(Portfolio);
