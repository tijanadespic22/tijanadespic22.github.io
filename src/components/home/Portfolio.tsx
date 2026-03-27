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
      id={"projects"}
      className={"bg-gray-50 py-24 dark:bg-gray-800"}>
      <div className={"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        <div className={"mb-16 text-center"}>
          <h2 className={"mb-4 text-4xl sm:text-5xl dark:text-white"}>{t('Izdvojeni Projekti')}</h2>
          <p className={"mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400"}>
            {t('Detaljne studije slučaja koje prikazuju proces, rešenja i rezultate')}
          </p>
        </div>

        <div className={"flex gap-6 overflow-x-scroll pb-2 [scrollbar-width:auto] lg:block lg:space-y-12 lg:overflow-visible lg:pb-0 lg:[scrollbar-width:initial] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 dark:[&::-webkit-scrollbar-track]:bg-gray-700"}>
          {caseStudies.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                'flex w-[75vw] max-w-[75vw] shrink-0 flex-col rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900',
                'lg:flex-row-reverse',
                {
                  'lg:flex-row': index % 2 === 0,
                },
                'items-center gap-8 lg:w-auto lg:max-w-none lg:shrink lg:gap-12 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:dark:bg-transparent',
              )}>
              {/* Image */}
              <div className={"w-full flex-1"}>
                <Link
                  href={project?.url ?? '/projects'}
                  target={project?.url ? '_blank' : '_self'}
                  className={"group relative block aspect-4/3 cursor-pointer overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-700"}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className={"h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"}
                  />
                  <div className={"absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"}>
                    <div className={"flex items-center gap-2 text-white"}>
                      {t('Detaljnije')}{' '}
                      <ArrowIcon
                        className={"rotate-90 transition-transform duration-200 group-hover:translate-x-1"}
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Content */}
              <div className={"flex-1 space-y-4"}>
                <div className={"inline-block rounded-full border border-gray-200 bg-white px-3 py-1 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"}>
                  {t(project.category)}
                </div>
                <h3 className={"text-3xl dark:text-white"}>{t(project.title)}</h3>
                <p className={"leading-relaxed wrap-break-word whitespace-normal text-gray-600 dark:text-gray-400"}>
                  {t(project.description)}
                </p>
                <div className={"flex flex-wrap gap-2 pt-2"}>
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className={"rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300"}>
                      {t(tech)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dugme ka svim projektima */}
        <div className={"mt-16 text-center"}>
          <Link
            href={"/projects"}
            className={"group inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 font-medium text-gray-700 transition-colors hover:border-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-400"}>
            {t('Svi projekti')}
            <ArrowIcon
              className={"rotate-90 transition-transform duration-200 group-hover:translate-x-1"}
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
