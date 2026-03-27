'use client';

import {memo} from 'react';
import Link from 'next/link';
import ArrowIcon from '@icons/ArrowIcon';
import {caseStudies} from '@components/data/portfolio';
import Image from 'next/image';
import {useTranslation} from 'react-i18next';

const Projects = () => {
  const {t} = useTranslation();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-1 text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          <ArrowIcon
            width={14}
            height={14}
            className="-rotate-90 transition-transform duration-200 group-hover:-translate-x-1"
          />
          {t('Nazad na početnu')}
        </Link>
        <h1 className="mb-4 text-5xl sm:text-6xl dark:text-white">{t('Projekti')}</h1>
        <p className="max-w-2xl text-xl text-gray-600 dark:text-gray-400">
          {t(
            'Izbor radova koji mogu javno da podelim — od brendiranja i UI/UX dizajna do izrade web aplikacija.',
          )}
        </p>
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {caseStudies.map((project, index) => (
          <Link
            key={project.id}
            href={project?.url ?? '/projects'}
            target={project?.url ? '_blank' : '_self'}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
            <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
              <Image
                src={project.thumbnail}
                alt={`${project.title} — ${project.category}`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index === 0}
              />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col gap-2 p-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                  {t(project.category)}
                </span>
              </div>
              <h2 className="text-lg leading-snug font-semibold dark:text-white">
                {t(project.title)}
              </h2>
              <p className="line-clamp-2 flex-1 text-sm text-gray-500 dark:text-gray-400">
                {t(project.description)}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.slice(0, 3).map(tech => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-xs text-blue-600 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-400">
                    {t(tech)}
                  </span>
                ))}
                {project.technologies.length > 3 ? (
                  <span className="rounded-full bg-gray-50 px-2 py-0.5 text-xs text-gray-400 dark:bg-gray-700">
                    +{project.technologies.length - 3}
                  </span>
                ) : null}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <span className="shrink-0 text-2xl">🔒</span>
        <div>
          <p className="mb-1 font-semibold text-gray-800 dark:text-white">
            {t('Deo portfolija ostaje povjerljiv')}
          </p>
          <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {t(
              'Zbog ugovornih obaveza i zaštite poslovnih informacija klijenata, određeni projekti nisu\njavno dostupni. Ukoliko vas zanima detaljniji uvid u moj rad, slobodno me kontaktirajte\n — dodatne primere mogu podeliti direktno i diskretno.',
            )}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <p className="mb-6 text-gray-500 dark:text-gray-400">{t('Imaš projekat na umu?')}</p>
        <Link
          href="/#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-8 py-4 font-medium text-white transition hover:opacity-90">
          {t('Kontaktiraj Me')}
          <ArrowIcon
            width={18}
            height={18}
            className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default memo(Projects);
